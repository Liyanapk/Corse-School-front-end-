'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SideBar from '@/constrains/Constrains';
import Link from 'next/link';




const SideBarPage =()=>{
  const [open, setOpen] = React.useState(true);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {SideBar.map((item) => (
            <Link href={item.path}>
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
        
      </List>
    </Box>
  );

  return (
    <div className="flex flex-wrap">
      <Drawer
        open={open}
        ModalProps={{ hideBackdrop: true }}
        sx={{
          '& .MuiDrawer-paper': {
            marginTop: '75px',
            width:'330px'
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default SideBarPage