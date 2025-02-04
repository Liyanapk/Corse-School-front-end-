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
import ModalBatch from "../nestedModalBatch/ModalBatch";
import AddBatch from "../addBatch/AddBatch";

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
  name: string;
  incharge:string;
}

const headCells = [
  { id: "name", numeric: true, disablePadding: false, label: "Name" },
  { id: "incharge", numeric: true, disablePadding: false, label: "In Charge" },
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
              "aria-label": "select all desserts",
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
  batches: {
    id: string;
    name: string;
    incharge:string;
  }[];
  setBatches: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
        incharge:string;
      }[]
    >
  >;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, selected, setSelected, batches, setBatches } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isModalOpen, setModalOpen] = useState(false);


  const handleOpenAdd = () => setModalOpen(true);
  const handleCloseAdd = () => setModalOpen(false);
  



  // Delete  batches
  const handleDelete = async () => {
    const token = Cookies.get("authToken");
    if (!token) return;

    try {
      const response = await AxiosInstance.delete("/api/v1/batch/delete", {
        headers: { Authorization: `Bearer ${token}` },
        data: { ids: selected },
      });

      const remainingBatches = batches.filter(
        (batch) => !selected.includes(batch.id)
      );

      setBatches(remainingBatches);
      setSelected([]);
      handleClose();
      console.log(response.data.message);

      setTimeout(() => {
        alert("Batches deleted successfully!");
      }, 300);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error deleting Batches:", error.message);
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
          Batch Management
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
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm sm:text-base py-3 px-4 whitespace-nowrap hover:opacity-90 shadow-md transition-all duration-300 mt-2 md:mt-0"
            type="button"
            onClick={handleOpenAdd}
            aria-label="Add a new batch"
          >
            <AddBatch open={isModalOpen} />
            + Add Batch
          </button>
        )}
      </div>
    </Toolbar>
  );
};

const Batch = () => {
  const [batches, setBatches] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  //get batch
  useEffect(() => {
    const fetchBatches = async () => {
      const token = Cookies.get("authToken");
      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const response = await AxiosInstance.get("/api/v1/batch", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const batchesArray = Array.isArray(response.data.data)
          ? response.data.data.map((batch: any) => ({
              id: batch._id,
              name: batch.name,
              incharge: `${batch.in_charge.first_name} ${batch.in_charge.last_name}`
            }))
          : [];
        setBatches(batchesArray);
      } catch (err) {
        setError(
          err instanceof AxiosError ? err.message : "An unknown error occurred"
        );
        setBatches([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBatches();
  }, []);

  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = batches.map((n) => n.id);
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

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - batches.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      Array.isArray(batches)
        ? batches.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : [],
    [page, rowsPerPage, batches]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box sx={{ width: "100%" }} className="p-10">
      <Paper sx={{ width: "100%", mb: 2 }} className="p-5">
        <EnhancedTableToolbar
          numSelected={selected.length}
          selected={selected}
          setSelected={setSelected}
          batches={batches}
          setBatches={setBatches}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={batches.length}
            />
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
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.incharge}</TableCell>
                    <TableCell align="center">
                        <ModalBatch  />
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
          count={batches.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default Batch;
