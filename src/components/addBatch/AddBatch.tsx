import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useEffect, useState } from "react";
import AxiosInstance from '../../utils/axiosInstance';
import Cookies from 'js-cookie';
import { AxiosError } from "axios";

interface Data {
  id: string;
  name: string;
}

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

export default function AddBatch() {
  const [open, setOpen] = React.useState(false);
  const [batchData, setBatchData] = React.useState({
    name: "",
    in_charge: "",
    type: "",
    status: "",
    duration: { from: "", to: "" },
  });
  const [teachers, setTeachers] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;

    if (name === "from" || name === "to") {
      setBatchData((prev) => ({
        ...prev,
        duration: { ...prev.duration, [name]: value },
      }));
    } else {
      setBatchData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Get teacher data
  useEffect(() => {
    const fetchTeachers = async () => {
      const token = Cookies.get("authToken");
      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const response = await AxiosInstance.get("/api/v1/teacher", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const teachersArray = Array.isArray(response.data.data)
          ? response.data.data.map((teacher: any) => ({
              id: teacher._id,
              name: `${teacher.first_name} ${teacher.last_name}`,
            }))
          : [];
        setTeachers(teachersArray);
      } catch (err) {
        setError(
          err instanceof AxiosError ? err.message : "An unknown error occurred"
        );
        setTeachers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const token = Cookies.get("authToken");

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    try {
      const response = await AxiosInstance.post("/api/v1/batch", batchData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setOpen(false);
        setBatchData({
          name: "",
          in_charge: "",
          type: "",
          status: "",
          duration: { from: "", to: "" },
        });
        // Optionally show success notification or message
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
        aria-label="Add a new batch"
        onClick={() => setOpen(true)}
      >
        + Add Batch
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a New Batch
          </Typography>
          <TextField
            fullWidth
            label="Batch Name"
            name="name"
            value={batchData.name}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>In-Charge</InputLabel>
            <Select
              name="in_charge"
              value={batchData.in_charge}
              onChange={handleChange}
            >
              {teachers.map((teacher) => (
                <MenuItem key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Type</InputLabel>
            <Select name="type" value={batchData.type} onChange={handleChange}>
              <MenuItem value="free">Free</MenuItem>
              <MenuItem value="paid">Paid</MenuItem>
              <MenuItem value="crash course">Crash Course</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select name="status" value={batchData.status} onChange={handleChange}>
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="inprogress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
          {/* From and To Date outside top of Box */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="From Date"
                type="date"
                name="from"
                value={batchData.duration.from}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="To Date"
                type="date"
                name="to"
                value={batchData.duration.to}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
            Submit
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => setOpen(false)} sx={{ mt: 1 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
