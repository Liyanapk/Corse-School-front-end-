"use client";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import AxiosInstance from "../../utils/axiosInstance";
import { AxiosError } from "axios";
import Cookies from "js-cookie";

type SubjectProps = {
  subject: string;
  open: boolean;
  handleClose: () => void;
};

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

interface Data {
  _id: string;
  id: string;
  name: string;
  incharge: string;
}

const headCells = [
  { id: "name", numeric: true, disablePadding: false, label: "Subject Name" },
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all subjects",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  selected: readonly string[];
  setSelected: React.Dispatch<React.SetStateAction<readonly string[]>>;
  subjectses: Data[];
  setSubjectses: React.Dispatch<React.SetStateAction<Data[]>>;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, selected, setSelected, subjectses, setSubjectses } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    const token = Cookies.get("authToken");
    if (!token) return;

    try {
      const response = await AxiosInstance.delete("/api/v1/subject/delete", {
        headers: { Authorization: `Bearer ${token}` },
        data: { ids: selected },
      });

      const remainingSubjects = subjectses.filter(
        (subject) => !selected.includes(subject.id)
      );

      setSubjectses(remainingSubjects);
      setSelected([]);
      handleClose();
      console.log(response.data.message);

      setTimeout(() => {
        alert("Subjects deleted successfully!");
      }, 300);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error deleting subjects:", error.message);
      }
      handleClose();
    }
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: { md: "space-between" },
        gap: { xs: 1, sm: 1, md: 0 },
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{
            flex: "1 1 auto",
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
          }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{
            flex: "1 1 auto",
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
            color: "#1976d2",
            fontWeight: "bold",
          }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Subject Management
        </Typography>
      )}
      <div className="flex flex-wrap justify-start md:justify-end w-full md:w-auto">
        {numSelected > 0 ? (
          <>
            <Tooltip title="Delete">
              <IconButton onClick={handleOpen}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{ ...style }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Do you want to delete?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="flex justify-between mt-4">
                    <button
                      className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </>
        ) : (
          <Link href="/add-subject">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
              Add Subject
            </button>
          </Link>
        )}
      </div>
    </Toolbar>
  );
};

const Subject = () => {
  const [subjects, setSubjects] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      const token = Cookies.get("authToken");
      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const response = await AxiosInstance.get("/api/v1/subject", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const subjectsArray = Array.isArray(response.data.data)
          ? response.data.data.map((subject: any) => ({
              id: subject._id,
              name: subject.name,
              incharge: `${subject.in_charge.first_name} ${subject.in_charge.last_name}`,
            }))
          : [];
        setSubjects(subjectsArray);
      } catch (err) {
        setError(
          err instanceof AxiosError ? err.message : "An unknown error occurred"
        );
        setSubjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSubjects();
  }, []);

  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = subjects.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          selected={selected}
          setSelected={setSelected}
          subjectses={subjects}
          setSubjectses={setSubjects}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead
              numSelected={selected.length}
              rowCount={subjects.length}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {subjects
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subject) => {
                  const isItemSelected = selected.indexOf(subject.id) !== -1;
                  const labelId = `enhanced-table-checkbox-${subject.id}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, subject.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={subject.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {subject.name}
                      </TableCell>
                      <TableCell align="right">{subject.incharge}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={subjects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default Subject;
