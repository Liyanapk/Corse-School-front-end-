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
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

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

  return (
    <div className="flex justify-center items-center p-4 gap-40 bg-[#f3f5f8] h-[80px] md:gap-[32em] xl:gap-[40em] xl:justify-center md:justify-center ">
      <div>
        <Image src="/images/logo/logo.png" alt="logo" width={152} height={49} />
      </div>

      <div className="hidden lg:flex">
        <ul className="flex gap-[1em]">
          <li className="relative flex items-center gap-1 text-[16px] group">
            <Link href="/" className="hover:text-[#3a5bc9]">
              Home
            </Link>
          </li>

          <li className="relative flex items-center gap-1 text-[16px] group">
            {/* Dropdown toggle */}
            <div className="flex items-center gap-1 cursor-pointer group-hover:text-[#3a5bc9]">
              <span>Courses</span>
              <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
            </div>

            <ul className="absolute left-0 top-[calc(100%+12px)] bg-white shadow-lg w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <li>
                <Link href="/sladingpages/allCourse" className="flex items-center p-2 gap-1 cursor-pointer hover:text-[#3a5bc9]">
                  <span className="block">All Course</span>
                </Link>
              </li>
              <li>
                <Link href="/otherCoursePage" className="block p-2 cursor-pointer hover:text-[#3a5bc9]" >
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/otherCoursePage" className="block p-2 cursor-pointer hover:text-[#3a5bc9]"
                 >
                  Popular
                </Link>
              </li>
              <li>
                <Link href="/otherCoursePage" className="block p-2 cursor-pointer hover:text-[#3a5bc9]"
                 >
                  Treanding
                </Link>
              </li>
              <li>
                <Link href="/otherCoursePage" className="block p-2 cursor-pointer hover:text-[#3a5bc9]"
                 >
                  Latest
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative flex items-center gap-1 text-[16px] group">
            <Link href="/sladingpages/contactUsPage" className="hover:text-[#3a5bc9]">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
       
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
 
  );
}
