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
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../utils/axiosInstance';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';


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
  id: string; 
  status: string;
  first_name: string;
  last_name: string;
  email: string;
}


const headCells = [
  { id: "first_name", numeric: true, disablePadding: false, label: "First Name" },
  { id: "last_name", numeric: true, disablePadding: false, label: "Last Name" },
  { id: "email", numeric: true, disablePadding: false, label: "Email" },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
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
              "aria-label": "select all Teacher",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.numeric ? "right" : "left"} padding={headCell.disablePadding ? "none" : "normal"}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 }, display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" }, alignItems: "flex-start", justifyContent: { md: "space-between" }, gap: { xs: 1, sm: 1, md: 0 } }}>
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 auto", fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 auto", fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" }, color: "#1976d2", fontWeight: "bold" }} variant="h6" id="tableTitle" component="div">
          Teacher Management
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
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={{ ...style }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Do you want to delete?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="flex justify-between mt-4">
                    <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded" onClick={handleModalClose}>
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">
                      Delete
                    </button>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </>
        ) : (
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm sm:text-base py-3 px-4 whitespace-nowrap hover:opacity-90 shadow-md transition-all duration-300 mt-2 md:mt-0" type="button" onClick={() => router.push("/admin/teacherAdd")}>
            + Add Teacher
          </button>
        )}
      </div>
    </Toolbar>
  );
}

const TeacherPage = () => {
  const [teachers, setTeachers] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

 
  useEffect(() => {
    const fetchTeachers = async () => {
      const token = Cookies.get('authToken');
      if (!token) {
        setError('No authentication token found');
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
              first_name: teacher.first_name,
              last_name: teacher.last_name,
              email: teacher.email,
              status: teacher.status, 
            }))
          : [];
        setTeachers(teachersArray);
      } catch (err) {
        setError(err instanceof AxiosError ? err.message : 'An unknown error occurred');
        setTeachers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);
  


  


  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = teachers.map((n) => n.id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - teachers.length) : 0;

  const visibleRows = React.useMemo(
    () => Array.isArray(teachers) ? teachers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : [],
    [page, rowsPerPage, teachers]
  );
  
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box sx={{ width: "100%" }} className="p-10">
      <Paper sx={{ width: "100%", mb: 2 }} className="p-5">
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
            <EnhancedTableHead numSelected={selected.length} onSelectAllClick={handleSelectAllClick} rowCount={teachers.length} />
            <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = selected.includes(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)} 
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id} 
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </TableCell>
                  <TableCell align="right">{row.first_name}</TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.status}</TableCell> 
                  <TableCell align="center">
                    <Link href={`/admin/teacherview/${row.id}`} passHref> 
                      <Tooltip title="View">
                        <IconButton aria-label="view" size="large">
                          <VisibilityIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={teachers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default TeacherPage;