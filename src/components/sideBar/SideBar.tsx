"use client";

import React, { useState } from "react";
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

interface SideBarProps {
  onToggle: (collapsed: boolean) => void;
}

const SideBarPage: React.FC<SideBarProps> = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sidebar dimensions
  const COLLAPSED_WIDTH = 50;
  const EXPANDED_WIDTH = 273;

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
    onToggle(!isCollapsed); // Notify parent about the toggle
  };

  const DrawerList = (
    <Box
      sx={{
        width: isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: isCollapsed ? 0 : "16px",
       
      }}
      role="presentation"
    >
      {/* Toggle Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: isCollapsed ? "center" : "flex-end",
          padding: "8px",
        }}
      >
        <IconButton
          onClick={handleToggle}
          aria-label="Toggle sidebar"
          sx={{
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Sidebar Links */}
      <List>
        {SideBar.map((item) => (
          <Link href={item.path} key={item.id} passHref>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isCollapsed ? "center" : "flex-start",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: isCollapsed ? 24 : 40,
                    color: "inherit",
                    transition: "min-width 0.3s ease-in-out",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {!isCollapsed && (
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: isCollapsed ? 0 : 1,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open
      variant="persistent"
      ModalProps={{ hideBackdrop: true }}
      sx={{
        "& .MuiDrawer-paper": {
          position: "fixed",
          top: "81px",
          width: isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
          transition: "width 0.3s ease-in-out",
          overflowX: "hidden",
          height: "calc(100% - 80px)",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
};

export default SideBarPage;
