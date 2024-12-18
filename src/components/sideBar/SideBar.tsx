"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "@/constrains/Constrains";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

const SideBarPage = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const DrawerList = (
    <Box
      sx={{
        width: isCollapsed ? 50 : 273,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft: isCollapsed ? 0 : "16px",
        height: "100%",
      }}
      role="presentation"
    >
      {/* Toggle Button Inside Drawer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: isCollapsed ? "center" : "flex-end",
          width: "100%",
        }}
      >
        <IconButton onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* List Items */}
      <List>
        {SideBar.map((item) => (
          <Link href={item.path} key={item.id}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: isCollapsed
                      ? "primary.light"
                      : "primary.main", // Example hover colors
                    color: "white", // Change text/icon color on hover
                    width: isCollapsed ? "40px" : "250px",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: isCollapsed ? 24 : 40, // Adjust icon spacing when collapsed
                    transition: "min-width 0.3s ease-in-out",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {!isCollapsed && <ListItemText primary={item.title} />}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex flex-wrap ">
      {/* Drawer */}
      <Drawer
        open
        variant="persistent"
        ModalProps={{ hideBackdrop: true }}
        sx={{
          "& .MuiDrawer-paper": {
            position: "fixed",
            top: "80px",
            width: isCollapsed ? "50px" : "273px",
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
            height: "calc(100% - 80px)",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideBarPage;
