
'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';




interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {

const [open, setOpen] = React.useState(true);



  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='flex flex-row gap-5 '>
     
   
     <Drawer
                open={open}
                ModalProps={{ hideBackdrop: true }}
                sx={{
                    '& .MuiDrawer-paper': {
                        marginTop: '90px', 
                        height: 'calc(100% - 64px)', 
                        boxSizing: 'border-box',
                    },
                }}
            >
        {DrawerList}
      </Drawer>
   
      {children}
    </div>
  );
}

 
export default Layout 