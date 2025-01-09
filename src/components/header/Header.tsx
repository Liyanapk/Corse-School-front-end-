'use client';

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
    // State to manage the hover state of "All Course" submenu
    const [isAllCourseOpen, setIsAllCourseOpen] = useState(false);

    return (
        <div className="flex justify-center items-center bg-[#f3f5f8] h-[80px] gap-[14em] xl:gap-[10em] md:gap-[6em]">
            <div>
                <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={152}
                    height={49}
                />
            </div>

            <div className="hidden lg:flex">
                <ul className="flex gap-[2em]">
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <a href="#" className="hover:text-[#3a5bc9]">Home</a>
                    </li>

                    {/* Courses menu */}
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <a href="#" className="hover:text-[#3a5bc9]">Courses</a>
                        <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
                        
                        {/* Dropdown for Courses */}
                        <ul className="absolute left-0 top-[calc(100%+8px)] bg-white shadow-lg w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {/* "All Course" with its submenu */}
                            <li 
                                className="relative flex items-center gap-1 group"
                                onMouseEnter={() => setIsAllCourseOpen(true)}  // Open on hover
                                onMouseLeave={() => setIsAllCourseOpen(false)}  // Close on hover leave
                            >
                                <a href="#" className="block p-2 hover:text-[#3a5bc9]">All Course</a>
                                {/* Rotate the arrow based on isAllCourseOpen state */}
                                <IoIosArrowDown
                                    className={`transition-transform duration-200 ${isAllCourseOpen ? 'rotate-180' : ''}`}
                                />
                                
                                {/* Submenu for All Course */}
                                {isAllCourseOpen && (
                                    <ul className="absolute left-[180px] top-[calc(100%+8px)] bg-white shadow-lg w-[200px] transition-opacity duration-300">
                                        <li><a href="#" className="block p-2 hover:text-[#3a5bc9]">Featured</a></li>
                                        <li><a href="#" className="block p-2 hover:text-[#3a5bc9]">Popular</a></li>
                                        <li><a href="#" className="block p-2 hover:text-[#3a5bc9]">Trending</a></li>
                                        <li><a href="#" className="block p-2 hover:text-[#3a5bc9]">Latest</a></li>
                                    </ul>
                                )}
                            </li>

                           
                            <li><a href="#" className="block p-2 hover:text-[#3a5bc9]">Featured</a></li>
                            <li><a href="#" className="block p-2 hover:text-[#3a5bc9]">Popular</a></li>
                        </ul>
                    </li>

                  
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <a href="#event" className="hover:text-[#3a5bc9]">Events</a>
                    </li>
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <a href="#feedback" className="hover:text-[#3a5bc9]">FeedBack</a>
                    </li>
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <a href="#contact us" className="hover:text-[#3a5bc9]">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-20 md:gap-[10px]">
                <button className="lg:block hidden w-[120px] h-[45px] bg-gradient-to-r from-[#3a5bc9] to-[#ca60ce] text-white text-[14px] font-bold rounded-[5px]">
                    Login
                </button>
                <div className="lg:hidden">
                    <AiOutlineMenu className="w-[40px] h-[20px] text-gray-500" />
                </div>
            </div>
        </div>
    );
}
