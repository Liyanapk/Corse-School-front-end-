import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const SideBar = [
  {
    id: "1",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin/dashboard",
  },

  { id: "3",
    title: "Admins",
    icon: <GroupIcon />,
    path: "/admin/admins" },
  {
    id: "4",
    title: "Teachers",
    icon: <PersonOutlineIcon />,
    path: "/admin/teacher",
  },
  {
    id: "5",
    title: "Students",
    icon: <PersonOutlineIcon />,
    path: "/admin/student",
  },
  {
    id: "6",
    title: "Batch",
    icon: <PersonOutlineIcon />,
    path: "/admin/batch",
  },
  {
    id: "7",
    title: "Subject",
    icon: <PersonOutlineIcon />,
    path: "/admin/subject",
  },
];

export default SideBar;
