import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const SideBar = [
  {
    id: "1",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin/dashboard",
  },
  {
    id: "2",
    title: "Profile",
    icon: <AccountBoxIcon />,
    path: "/admin/Profile",
  },
  { id: "3", title: "Admins", icon: <GroupIcon />, path: "/admin/admins" },
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
];

export default SideBar;
