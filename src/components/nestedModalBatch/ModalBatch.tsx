import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AxiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  p: 4,
  width: {
    xs: "90%",
    sm: "70%",
    md: "50%",
    lg: "40%",
  },
  maxWidth: "600px",
};

const fieldStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
  backgroundColor: "#f9f9f9",
  borderRadius: "6px",
  mb: 2,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
};

const buttonStyle = {
  mt: 3,
  width: "100%",
  borderRadius: "6px",
  textTransform: "none",
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#115293",
  },
};

interface ModalBatchProps {
  batchId: string;
}

export default function ModalBatch({ batchId }: ModalBatchProps) {
  const [open, setOpen] = React.useState(false);
  const [batchDetails, setBatchDetails] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const token = Cookies.get("authToken");

  const handleOpen = async () => {
    console.log("Batch ID:", batchId);
    setOpen(true);
    setLoading(true);
    setError(null);
    try {
      const response = await AxiosInstance.get(`/api/v1/batch/${batchId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBatchDetails(response.data.data);  // Make sure we are accessing 'data' from the response
    } catch (error) {
      console.log(error);
      setError("Failed to fetch batch details");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title="View">
        <IconButton aria-label="view" size="large" onClick={handleOpen}>
          <VisibilityIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Batch Details
          </Typography>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            batchDetails && (
              <>
                <Box sx={fieldStyle}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Name:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {batchDetails.name || "N/A"}
                  </Typography>
                </Box>
                <Box sx={fieldStyle}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    In-charge Teacher:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {batchDetails.in_charge ? `${batchDetails.in_charge.first_name} ${batchDetails.in_charge.last_name}` : "N/A"}
                  </Typography>
                </Box>
                <Box sx={fieldStyle}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Type:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {batchDetails.type || "N/A"}
                  </Typography>
                </Box>
                <Box sx={fieldStyle}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Status:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {batchDetails.status || "N/A"}
                  </Typography>
                </Box>
                {/* Optionally, if you want to display the duration */}
                <Box sx={fieldStyle}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Duration:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {batchDetails.duration ? `${new Date(batchDetails.duration.from).toLocaleDateString()} - ${new Date(batchDetails.duration.to).toLocaleDateString()}` : "N/A"}
                  </Typography>
                </Box>
              </>
            )
          )}
          <Button variant="contained" onClick={handleClose} sx={buttonStyle}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
