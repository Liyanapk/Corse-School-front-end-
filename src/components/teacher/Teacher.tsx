"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const TeacherPage = () => {
  const Data = [
    { id: "1", name: "Ramanan", subject: "Maths" },
    { id: "2", name: "Poopi", subject: "Physics" },
    { id: "3", name: "Maya", subject: "Biology" },
  ];

  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div className="flex flex-col w-full h-full box-border p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6">
        <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-800 text-center sm:text-left">
          Teacher Management
        </h1>
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm sm:text-base px-4 py-3 hover:opacity-90 shadow-md transition-all duration-300"
          type="button"
          onClick={() => router.push("/admin/teacherAdd")}
        >
          + Add Student
        </button>
      </div>

      <div className="w-full bg-white rounded-lg shadow-lg box-border p-6 sm:p-10">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead className="bg-blue-600 text-xs sm:text-sm md:text-base font-medium text-white uppercase">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Subject</th>
                <th className="px-6 py-3 text-center">View</th>
                <th className="px-6 py-3 text-center">Edit</th>
                <th className="px-6 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((teacher, index) => (
                <tr
                  key={index}
                  className="text-xs sm:text-sm md:text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-3 border-b">{teacher.name}</td>
                  <td className="px-6 py-3 border-b">{teacher.subject}</td>
                  <td className="px-6 py-3 border-b text-center">
                    <Link href={`/admin/teacherview/${teacher.id}`}>
                      <VisibilityIcon className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-transform duration-200 transform hover:scale-110" />
                    </Link>
                  </td>
                  <td className="px-6 py-3 border-b text-center">
                    <Link href={`/admin/teacherView/${teacher.id}`}>
                      <ModeEditOutlineIcon className="text-gray-600 hover:text-cyan-600 cursor-pointer transition-transform duration-200 transform hover:scale-110" />
                    </Link>
                  </td>
                  <td className="px-6 py-3 border-b text-center">
                    <DeleteIcon
                      className="text-gray-600 hover:text-red-600 cursor-pointer transition-transform duration-200 transform hover:scale-110"
                      onClick={handleOpen}
                    />
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Do you want to delete this Teacher!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <div className="flex flex-row justify-around items-center mt-10">
                            <button className="px-8 py-2 bg-fuchsia-900 rounded-lg text-white">
                              YES
                            </button>
                            <button className="px-8 py-2 bg-sky-800 rounded-lg text-white">
                              NO
                            </button>
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
