"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/navigation";

export default function Header() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
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
        {["All mail", "Trash", "Spam"].map((text, index) => (
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
  const router = useRouter();

  return (
    <div className="flex justify-center items-center p-4 bg-[#f3f5f8] h-[80px] gap-[10em] xl:gap-[10em] xl:justify-center md:justify-between ">
      <div>
        <Image src="/images/logo/logo.png" alt="logo" width={152} height={49} />
      </div>

      <div className="hidden lg:flex">
        <ul className="flex gap-[1em]">
          <li className="relative flex items-center gap-1 text-[16px] group">
            <a href="/" className="hover:text-[#3a5bc9]">
              Home
            </a>
          </li>

          <li className="relative flex items-center gap-1 text-[16px] group">
            <div className="flex items-center gap-1 cursor-pointer group-hover:text-[#3a5bc9]">
              <span>Courses</span>
              <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
            </div>

            <ul className="absolute left-0 top-[calc(100%+12px)] bg-white shadow-lg w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li>
                <div className="flex items-center p-2 gap-1 cursor-pointer hover:text-[#3a5bc9]">
                  <a
                    onClick={() => router.push("/sladingpages/allCourse")}
                    className="block"
                  >
                    All Course
                  </a>
                </div>
              </li>

              <li>
                <a href="#" className="block p-2 hover:text-[#3a5bc9]">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:text-[#3a5bc9]">
                  Popular
                </a>
              </li>
            </ul>
          </li>

          <li className="relative flex items-center gap-1 text-[16px] group">
            <a href="#FeedBack" className="hover:text-[#3a5bc9]">
              FeedBack
            </a>
          </li>
          <li className="relative flex items-center gap-1 text-[16px] group">
            <a
              onClick ={() => router.push("/sladingpages/contactUsPage")}
              className="hover:text-[#3a5bc9]"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-20 md:gap-[10px]">
        <button className="lg:block hidden w-[120px] h-[45px] bg-gradient-to-r from-[#3a5bc9] to-[#ca60ce] text-white text-[14px] font-bold rounded-[5px]">
          Register
        </button>
        <div className="lg:hidden">
          <div>
            <Button onClick={toggleDrawer(true)}>
              <AiOutlineMenu className="w-[40px] h-[20px] text-gray-500" />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}




// href="https://docs.google.com/forms/d/e/1FAIpQLSf-37-gTZnFX9f-aCJ_KBZv6k7lLEDpk1MtcIMizaLEjYHqOg/viewform?usp=header"
//               target="_blank"
//               rel="noopener noreferrer"