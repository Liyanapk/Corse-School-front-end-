'use client';

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
    const [isAllCourseOpen, setIsAllCourseOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null); 

    return (
        <div className="flex justify-center items-center p-4 bg-[#f3f5f8] h-[80px] gap-[10em] xl:gap-[10em] xl:justify-center md:justify-between " id="home">
            <div>
                <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={152}
                    height={49}
                />
            </div>

            <div className="hidden lg:flex">
                <ul className="flex gap-[1em]">
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <a href="#home" className="hover:text-[#3a5bc9]">Home</a>
                    </li>

                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <div className="flex items-center gap-1 cursor-pointer group-hover:text-[#3a5bc9]">
                            <span>Courses</span>
                            <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
                        </div>

                      
                        <ul className="absolute left-0 top-[calc(100%+12px)] bg-white shadow-lg w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <li
                            className="relative flex items-center gap-1 group"
                            onMouseEnter={() => {
                                const timeoutId = setTimeout(() => {
                                    setIsAllCourseOpen(true);
                                }, 1000);
                                setHoverTimeout(timeoutId);
                            }}
                            onMouseLeave={() => {
                                if (hoverTimeout) clearTimeout(hoverTimeout);
                                setIsAllCourseOpen(false);
                            }}
                        >
                            <div className="flex items-center p-2 gap-1 cursor-pointer hover:text-[#3a5bc9]">
                                <a href="#" className="block">All Course</a>
                                <IoIosArrowDown
                                    className={`transition-transform duration-200 ${isAllCourseOpen ? 'rotate-180' : ''}`}
                                />
                            </div>

                          
                            {isAllCourseOpen && (
                                <ul className="absolute left-[205px] top-4 bg-white  w-[200px] z-10">
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
