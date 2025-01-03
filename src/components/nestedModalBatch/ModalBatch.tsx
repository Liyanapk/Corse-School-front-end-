import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";

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

export default function ModalBatch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const batchDetails = {
    name: "Batch A",
    in_charge: "John Doe",
    type: "Full-time",
    status: "Active",
    duration: "6 months",
  };

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
          {Object.entries(batchDetails).map(([key, value]) => (
            <Box key={key} sx={fieldStyle}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {key.replace("_", " ").toUpperCase()}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                {value}
              </Typography>
            </Box>
          ))}
          <Button variant="contained" onClick={handleClose} sx={buttonStyle}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
