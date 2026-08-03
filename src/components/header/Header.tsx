'use client';

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
    const [isAllCourseOpen, setIsAllCourseOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState<"login" | "signup">("login");

    return (
        <header className="fixed left-0 top-0 z-[100] w-full flex justify-center items-center bg-[#f3f5f8] h-[80px] gap-[14em] xl:gap-[10em] md:gap-[6em] shadow-sm">
            <div>
                <Link href="/">
                    <Image
                        src="/images/logo/logo.png"
                        alt="logo"
                        width={152}
                        height={49}
                    />
                </Link>
            </div>

            <div className="hidden lg:flex">
                <ul className="flex gap-[2em]">
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <Link href="/" className="hover:text-[#3a5bc9]">Home</Link>
                    </li>

                    {/* <li className="relative flex items-center gap-1 text-[16px] group">
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
                                <Link href="/courses" className="block">All Course</Link>
                                <IoIosArrowDown
                                    className={`transition-transform duration-200 ${isAllCourseOpen ? 'rotate-180' : ''}`}
                                />
                            </div>

                            {isAllCourseOpen && (
                                <ul className="absolute left-[205px] top-4 bg-white  w-[200px] z-10">
                                    <li><Link href="/courses" className="block p-2 hover:text-[#3a5bc9]">Featured</Link></li>
                                    <li><Link href="/courses" className="block p-2 hover:text-[#3a5bc9]">Popular</Link></li>
                                    <li><Link href="/courses" className="block p-2 hover:text-[#3a5bc9]">Trending</Link></li>
                                    <li><Link href="/courses" className="block p-2 hover:text-[#3a5bc9]">Latest</Link></li>
                                </ul>
                            )}
                        </li>

                            <li><Link href="/courses" className="block p-2 hover:text-[#3a5bc9]">Featured</Link></li>
                            <li><Link href="/courses" className="block p-2 hover:text-[#3a5bc9]">Popular</Link></li>
                        </ul>
                    </li> */}

                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <Link href="#event" className="hover:text-[#3a5bc9]">Events</Link>
                    </li>
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <Link href="#feedback" className="hover:text-[#3a5bc9]">FeedBack</Link>
                    </li>
                    <li className="relative flex items-center gap-1 text-[16px] group">
                        <Link href="#contact" className="hover:text-[#3a5bc9]">Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-4 md:gap-[10px]">
                <button
                    type="button"
                    onClick={() => setIsAuthOpen(true)}
                    className="lg:flex hidden w-[110px] h-[44px] bg-gradient-to-r from-[#3a5bc9] to-[#ca60ce] text-white text-[14px] font-bold rounded-[5px] items-center justify-center leading-none"
                >
                    Login
                </button>
                <div className="lg:hidden">
                    <AiOutlineMenu className="w-[40px] h-[20px] text-gray-500" />
                </div>
            </div>

            {isAuthOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-800">
                                    {authMode === "login" ? "Welcome back" : "Create account"}
                                </h3>
                                <p className="text-sm text-slate-500">
                                    {authMode === "login" ? "Sign in to continue" : "Join Histudy today"}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsAuthOpen(false)}
                                className="text-xl text-slate-500 hover:text-slate-700"
                            >
                                ×
                            </button>
                        </div>

                        <div className="mb-5 flex rounded-full bg-slate-100 p-1">
                            <button
                                type="button"
                                onClick={() => setAuthMode("login")}
                                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${authMode === "login" ? "bg-[#3a5bc9] text-white" : "text-slate-600"}`}
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={() => setAuthMode("signup")}
                                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${authMode === "signup" ? "bg-[#3a5bc9] text-white" : "text-slate-600"}`}
                            >
                                Sign up
                            </button>
                        </div>

                        <form className="space-y-4">
                            {authMode === "signup" && (
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#3a5bc9]"
                                />
                            )}
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#3a5bc9]"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#3a5bc9]"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-gradient-to-r from-[#3a5bc9] to-[#ca60ce] px-4 py-3 text-sm font-semibold text-white"
                            >
                                {authMode === "login" ? "Login" : "Create account"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
}
