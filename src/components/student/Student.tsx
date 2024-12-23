'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next/navigation";
import Link from "next/link";
import VisibilityIcon from '@mui/icons-material/Visibility';


interface Data {
  id: number;
  Image: string;
  Firstname: string;
  Lastname: string;
  Email: string;
}

function createData(
  id: number,
  Image: string,
  Firstname: string,
  Lastname: string,
  Email: string,
): Data {
  return {
    id,
    Image: Image,
    Firstname: Firstname,
    Lastname: Lastname,
    Email: Email,
  };
}

const rows = [
  createData(1, 'Cupcake', 'uj', 'liya', 'k'),
  createData(2, 'Donut', 'uj', 'liya', 'k'),
  createData(3, 'Eclair', 'uj', 'liya', 'k'),
  createData(4, 'Frozen yoghurt', 'uj', 'liya', 'k'),
  createData(5, 'Gingerbread', 'uj', 'liya', 'k'),
  createData(6, 'Honeycomb', 'uj', 'liya', 'k'),
  createData(7, 'Ice cream sandwich', 'uj', 'liya', 'k'),
];

const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'Image',
    numeric: true,
    disablePadding: false,
    label: 'Image',
  },
  {
    id: 'Firstname',
    numeric: true,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'Lastname',
    numeric: true,
    disablePadding: false,
    label: 'Last Name',
  },
  {
    id: 'Email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
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
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
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
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  const router = useRouter();

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: 'inherit', // Purple color
        },
      ]}
    >
      {numSelected > 0 ? (
     <Typography
     sx={{
       flex: '1 1 100%',
       fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }, // Adjust font size based on screen size
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
         flex: '1 1 100%',
         fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }, // Adjust font size based on screen size
         color: '#1976d2',
         fontWeight: 'bold',
       }}
       variant="h6"
       id="tableTitle"
       component="div"
     >
       Student Management
     </Typography>
   )}
   
   {numSelected > 0 ? (
     <Tooltip title="Delete">
       <IconButton>
         <DeleteIcon />
       </IconButton>
     </Tooltip>
   ) : (
     <button
       className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm sm:text-base md:text-lg px-4 py-0 hover:opacity-90 shadow-md transition-all duration-300"
       type="button"
       onClick={() => router.push("/admin/studentAdd")}
       style={{
         marginLeft: '8px',
       }}
     >
       + Add Student
     </button>
   )}
   
    </Toolbar>
  );
}

const StudentPage = () => {
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
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

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }} className="p-10">
      <Paper sx={{ width: '100%', mb: 2 }} className="p-5">
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
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
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell  component="th" id={labelId} scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell  align="right">{row.Image}</TableCell>
                  <TableCell  align="right">{row.Firstname}</TableCell>
                  <TableCell  align="right">{row.Lastname}</TableCell>
                  <TableCell  align="right">{row.Email}</TableCell>
                  {/* Add Visibility Icon */}
                  <TableCell  align="center">
                    <Link href={`/admin/studentView/${row.id}`}>
                      <VisibilityIcon className="text-gray-600 hover:text-cyan-600 cursor-pointer transition-transform duration-200 transform hover:scale-110" />
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
  {emptyRows > 0 && (
    <TableRow style={{ height: 53 * emptyRows }}>
      <TableCell colSpan={6} />
    </TableRow>
  )}
</TableBody>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default StudentPage
