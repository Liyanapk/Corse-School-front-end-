import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AxiosInstance from '../../utils/axiosInstance';
import Cookies from 'js-cookie';
import { AxiosError } from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddSubject() {
  const [open, setOpen] = React.useState(false);
  const [subjectData, setSubjectData] = React.useState({ name: "" });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubjectData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const token = Cookies.get("authToken");

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    try {
      const response = await AxiosInstance.post("/api/v1/subject", subjectData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setSubjectData({ name: "" }); // Clear the form after successful submission

        setTimeout(() => {
          alert("Successfully added subject!");
          setOpen(false);
        }, 1000);
      }
    } catch (err) {
      setError(
        err instanceof AxiosError ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm sm:text-base py-3 px-4 whitespace-nowrap hover:opacity-90 shadow-md transition-all duration-300 mt-2 md:mt-0"
        type="button"
        aria-label="Add a new subject"
        onClick={() => setOpen(true)}
      >
        + Add Subject
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a New Subject
          </Typography>
          <TextField
            fullWidth
            label="Subject Name"
            name="name"
            value={subjectData.name}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setOpen(false)}
            sx={{ mt: 1 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
