'use client'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Image from 'next/image';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import CountUp from 'react-countup';

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Cards = [
    { icon: <AutoStoriesIcon />, end: '78', title: 'ACTIVE COURSES', color: '#e4e9fd', bgcolor: '#c3c7e3', iconColor: 'blue' },
    { icon: <PersonalVideoIcon />, end: '10', title: 'ACTIVE COURSES', color: '#f6ebfc', bgcolor: 'black' },
    { icon: <WorkspacePremiumIcon />, end: '7', title: 'COMPLETED COURSES', color: '#efdeef', bgcolor: 'black' },
    { icon: <PeopleAltIcon />, end: '160', title: 'TOTAL STUDENTS', color: '#faecf1', bgcolor: 'black' },
    { icon: <CardGiftcardIcon />, end: '20', title: 'TOTAL COURSES', color: '#fcf1ee', bgcolor: 'black' },
    { icon: <AttachMoneyIcon />, end: '25000', title: 'TOTAL EARNINGS', color: '#fff8f3', bgcolor: 'black' }
  ];

  return (
    <>
      <div className="flex flex-col w-full box-border items-center">
        {/* Header */}
        <div className="w-full shadow-md bg-white">
          <div className="flex h-20 px-4 md:px-2 items-center justify-between max-w-7xl mx-auto">
            <div>
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={152}
                height={49}
              />
            </div>

            {/* Avatar */}
            <React.Fragment>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </div>
        </div>

        {/* Dashboard */}
        <div className="px-2 py-4 w-full max-w-7xl mx-auto bg-white mt-6 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold mb-5 px-2 md:px-48 mt-4">Dashboard</h1>
          <hr className="border-t-1 border-gray-200 my-4 mx-2 md:mx-48" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 md:px-48 py-4">
            {Cards.map((card, index) => (
              <div
                className="flex flex-col items-center justify-center px-0 py-12 rounded-lg shadow-md gap-3"
                style={{ backgroundColor: card.color }}
                key={index}
              >
                <div
                  className="text-4xl mb-2 px-10 py-8 rounded-full"
                  style={{ backgroundColor: card.bgcolor, color: card.iconColor }}
                >
                  {card.icon}
                </div>
                <h2 className="text-3xl font-bold" style={{ color: card.iconColor }}>
                  <CountUp start={0} end={parseInt(card.end)} duration={2.75}></CountUp>
                </h2>
                <h1 className="text-xs text-gray-600" style={{ color: card.iconColor }}>
                  {card.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
