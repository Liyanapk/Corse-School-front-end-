import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';

const SideBar = [
    { id:"1", title:'Dashboard', icon:<DashboardIcon/>, path:'/admin/dashboard' },
    { id:"2", title:'Profile', icon:<AccountBoxIcon/>, path:'/admin/Profile' },
    { id:"3", title:'Admins', icon:<GroupIcon/>, path:'/admin/admins' }
]



export default SideBar