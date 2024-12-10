'use client';

import Image from "next/image"
import "./Header.css"
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header () {

    const [isOpen , setIsOpen] = useState(false)

    const toggleSideBar = ()=> {
        setIsOpen(!isOpen);

    }

    return(

        <div className="container-header">
            <div>
                <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={152}
                height={49}
                />
            </div>

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul className="header-content">
                    <li className="nav-item">
                        <a href="#">Home</a> <IoIosArrowDown />
                    </li>  
                    <li className="nav-item">
                        <a href="#">Courses</a> <IoIosArrowDown />
                    </li>
                    <li className="nav-item">
                        <a href="#">Courses</a><IoIosArrowDown />
                    </li>
                    <li className="nav-item">
                        <a href="#">Pages</a> <IoIosArrowDown />
                    </li>
                    <li className="nav-item">
                        <a href="#">Element</a> <IoIosArrowDown />
                    </li>
                    <li className="nav-item">
                        <a href="#">Blog</a> <IoIosArrowDown />
                    </li>
                   
                </ul>
            </div>
        
            <div>
                <button className="header-button">Join Now</button>
                <div className="display-icon-toggle">
                    <AiOutlineMenu className="display-icon" onClick={toggleSideBar} />
                    </div>

            </div>
            
        </div>
    )
}