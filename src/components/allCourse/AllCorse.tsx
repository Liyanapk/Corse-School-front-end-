'use client'
import Image from "next/image";
import { FiBook } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AllCourse(){

      const courses = [
        { 
        id: 1,
        title: "The Complete Histudy 2024: From Zero to Expert!",
        image: "/images/content/cards_images.webp",
        paragraph1: "Master Python by building 100 projects in 100 days...",
        paragraph2: "By Claudia Pruitt in Designing",
        actualPrice: "$70",
        pricing: "$40",
        rating: "/images/content/star.jpeg",
        lesson: "12 Lessons",
        person: "50 Students"
        },
        { 
        id: 2,
        title: "The Complete Histudy 2024: From Zero to Expert!",
        image: "/images/content/cards_images.webp",
        paragraph1: "Master Python by building 100 projects in 100 days...",
        paragraph2: "By Claudia Pruitt in Designing",
        actualPrice: "$70",
        pricing: "$40",
        rating: "/images/content/star.jpeg",
        lesson: "12 Lessons",
        person: "50 Students"
        },
        { 
        id: 3,
        title: "The Complete Histudy 2024: From Zero to Expert!",
        image: "/images/content/cards_images.webp",
        paragraph1: "Master Python by building 100 projects in 100 days...",
        paragraph2: "By Claudia Pruitt in Designing",
        actualPrice: "$70",
        pricing: "$40",
        rating: "/images/content/star.jpeg",
        lesson: "12 Lessons",
        person: "50 Students"
        },
        {
        id: 4,
        title: "The Complete Histudy 2024: From Zero to Expert!",
        image: "/images/content/cards_images.webp",
        paragraph1: "Master Python by building 100 projects in 100 days...",
        pararaph2: "By Claudia Pruitt in Designing",
        actualPrice: "$70",
        pricing: "$40",
        rating: "/images/content/star.jpeg",
        lesson: "12 Lessons",
        person: "50 Students"
        },
        {
        id: 5,
        title: "The Complete Histudy 2024: From Zero to Expert!",
        image: "/images/content/cards_images.webp",
        paragraph1: "Master Python by building 100 projects in 100 days...",
        paragraph2: "By Claudia Pruitt in Designing",
        actualPrice: "$70",
        pricing: "$40",
        rating: "/images/content/star.jpeg",
        lesson: "12 Lessons",
        person: "50 Students"
        },
        {
        id: 6,
        title: "The Complete Histudy 2024: From Zero to Expert!",
        image: "/images/content/cards_images.webp",
        paragraph1: "Master Python by building 100 projects in 100 days...",
        paragraph2: "By Claudia Pruitt in Designing",
        actualPrice: "$70",
        pricing: "$40",
        rating: "/images/content/star.jpeg",
        lesson: "12 Lessons",
        person: "50 Students"
        }, 
        {
        id: 7,
        title: "The Complete Histudy 2024: From Zero to Expert!",
        image: "/images/content/cards_images.webp",
        paragraph1: "Master Python by building 100 projects in 100 days...",
        paragraph2: "By Claudia Pruitt in Designing",
        actualPrice: "$70",
        pricing: "$40",
        rating: "/images/content/star.jpeg",
        lesson: "12 Lessons",
        person: "50 Students"
        },

    ]
    
    const [visibleRows, setVisibleRows] = useState(2); 
    const coursesPerRow = 3; 
    const visibleCourses = visibleRows * coursesPerRow;
  
    const handleShowMore = () => {
      setVisibleRows((prevRows) => prevRows + 2); // Increase the rows by 2 on each click
    };
    const router = useRouter()
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-sm text-gray-500">
            Home &gt; <span className="font-bold text-gray-800">All Courses</span>
          </p>
        </div>
        <header className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">All Courses</h1>
          <p className="text-lg text-gray-600 mt-2">
            Courses that help beginner designers become true unicorns.
          </p>
        </header>
  
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {courses.slice(0, visibleCourses).map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 relative group hover:scale-105 transform transition duration-300"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={231}
                height={324}
                className="rounded-md"
              />
              <div className="mt-4">
                <div className="flex flex-col justify-between">
                  <h4 className="text-xl font-bold">{course.title}</h4>
                  <div className="flex items-center gap-4 my-2">
                    <FiBook />
                    <span>{course.person}</span>
                    <MdOutlinePerson />
                    <span>{course.lesson}</span>
                  </div>
                  <p className="text-sm text-gray-700">{course.paragraph1}</p>
                  <p className="text-sm flex items-center text-gray-500">
                    <CiCircleMinus className="mr-2" />
                    {course.paragraph2}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-semibold text-blue-500">
                      <span className="mr-2">{course.pricing}</span>
                      <span className="line-through text-gray-400">
                        {course.actualPrice}
                      </span>
                    </p>
                    <p className="flex items-center text-blue-500 cursor-pointer"
                    onClick={() => router.push("/sladingpages/contentCard")}
                    >
                        Learn More <IoIosArrowRoundForward className="ml-2" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCourses < courses.length && (
          <div className="text-center p-6">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md  hover:bg-blue-600"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    );
  }
  