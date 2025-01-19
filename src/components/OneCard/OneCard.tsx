"use client";
import Header from "../header/Header";
import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import Image from "next/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";



interface Card {
  id: number;
  title: string;
  category: string;
  image: string;
  paragraph1: string;
  paragraph2: string;
  pricing: string;
  actualPrice: string;
  rating: string;
  lesson: string;
  person: string;
}
const cardData = [
  {
    id: 1,
    title: "Learn Web Development: Beginner to Advanced",
    category: "Web Development",
    image: "/images/content/cards_images.webp",
    paragraph1: "Build websites using HTML, CSS, JavaScript, and more...",
    paragraph2: "By John Doe In Programming",
    pricing: "$90",
    actualPrice: "$50",
    rating: "/images/content/star.jpeg",
    lesson: "20 Lessons",
    person: "80 Students",
  },
  {
    id: 2,
    title: "Mastering UI/UX Design Principles",
    category: "UI/UX Design",
    image: "/images/content/cards_images.webp",
    paragraph1: "Create stunning user interfaces and experiences...",
    paragraph2: "By Jane Smith In Designing",
    pricing: "$100",
    actualPrice: "$60",
    rating: "/images/content/star.jpeg",
    lesson: "15 Lessons",
    person: "60 Students",
  },
  {
    id: 3,
    title: "Mastering UI/UX Design Principles",
    category: "UI/UX Design",
    image: "/images/content/cards_images.webp",
    paragraph1: "Create stunning user interfaces and experiences...",
    paragraph2: "By Jane Smith In Designing",
    pricing: "$100",
    actualPrice: "$60",
    rating: "/images/content/star.jpeg",
    lesson: "15 Lessons",
    person: "60 Students",
  },
  {
    id: 4,
    title: "Advanced ReactJS Development",
    category: "ReactJS",
    image: "/images/content/cards_images.webp",
    paragraph1: "Dive deep into React Hooks, Context API, and Redux...",
    paragraph2: "By Emily Brown In Frontend Development",
    pricing: "$110",
    actualPrice: "$70",
    rating: "/images/content/star.jpeg",
    lesson: "18 Lessons",
    person: "40 Students",
  },
  {
    id: 5,
    title: "Backend with Node.js",
    category: "Backend Development",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Node.js, Express, and MongoDB...",
    paragraph2: "By Mark Wilson In Backend Development",
    pricing: "$120",
    actualPrice: "$80",
    rating: "/images/content/star.jpeg",
    lesson: "22 Lessons",
    person: "100 Students",
  },
  {
    id: 6,
    title: "Data Science with Python",
    category: "Data Science",
    image: "/images/content/cards_images.webp",
    paragraph1: "Learn Data Science with Python, Pandas, and NumPy...",
    paragraph2: "By Anna White In Data Science",
    pricing: "$130",
    actualPrice: "$90",
    rating: "/images/content/star.jpeg",
    lesson: "25 Lessons",
    person: "200 Students",
  },
  {
    id: 7,
    title: "Data Science with Python",
    category: "Data Science",
    image: "/images/content/cards_images.webp",
    paragraph1: "Learn Data Science with Python, Pandas, and NumPy...",
    paragraph2: "By Anna White In Data Science",
    pricing: "$130",
    actualPrice: "$90",
    rating: "/images/content/star.jpeg",
    lesson: "25 Lessons",
    person: "200 Students",
  },
  {
    id: 8,
    title: "Data Science with Python",
    category: "Data Science",
    image: "/images/content/cards_images.webp",
    paragraph1: "Learn Data Science with Python, Pandas, and NumPy...",
    paragraph2: "By Anna White In Data Science",
    pricing: "$130",
    actualPrice: "$90",
    rating: "/images/content/star.jpeg",
    lesson: "25 Lessons",
    person: "200 Students",
  },
  {
    id: 9,
    title: "Data Science with Python",
    category: "Data Science",
    image: "/images/content/cards_images.webp",
    paragraph1: "Learn Data Science with Python, Pandas, and NumPy...",
    paragraph2: "By Anna White In Data Science",
    pricing: "$130",
    actualPrice: "$90",
    rating: "/images/content/star.jpeg",
    lesson: "25 Lessons",
    person: "200 Students",
  },
  {
    id: 10,
    title: "Data Science with Python",
    category: "Data Science",
    image: "/images/content/cards_images.webp",
    paragraph1: "Learn Data Science with Python, Pandas, and NumPy...",
    paragraph2: "By Anna White In Data Science",
    pricing: "$130",
    actualPrice: "$90",
    rating: "/images/content/star.jpeg",
    lesson: "25 Lessons",
    person: "200 Students",
  },
];

const ROWS_TO_DISPLAY = 2;

const Card =  ({ card, onClick }: { card: Card; onClick: (card: Card) => void })  => (
  <div
    className="flex flex-col bg-white rounded-lg justify-center items-center gap-6 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
    style={{
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    }}
    onClick={() => onClick(card)}
  >
    <Image
      src={card.image}
      alt={card.title}
      width={231}
      height={324}
      className="rounded-md"
    />
    <div className="flex flex-col justify-between">
      <h4 className="text-xl font-semibold text-gray-800 pl-4">{card.title}</h4>
      <p className="text-sm text-gray-600 pl-4">{card.paragraph1}</p>
      <p className="text-sm flex items-center text-gray-500 pl-4">
        {card.paragraph2}
      </p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold text-blue-600 pl-4">
          <span className="mr-2">{card.pricing}</span>
          <span className="line-through text-gray-400">{card.actualPrice}</span>
        </p>
      </div>
    </div>
  </div>
);

const OneCard = () => {
  const [visibleRows, setVisibleRows] = useState(ROWS_TO_DISPLAY);
  const [mainCard, setMainCard] = useState(cardData[0]);

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + ROWS_TO_DISPLAY);
  };

  const otherCards = cardData.filter((card) => card.id !== mainCard.id);
  const visibleCards = otherCards.slice(0, visibleRows * 3);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-slate-200 p-10">
        {/* Main Card */}
        <div
          className="flex flex-col xl:flex-row md:flex-col bg-white justify-center items-center md:items-center rounded-lg p-4 md:p-2 gap-6 mb-8 w-[350px] xl:w-[750px] md:w-[750px] sm:w-[450px] hover:scale-105 transition-all duration-300 ease-in-out"
          style={{
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Image
            src={mainCard.image}
            alt={mainCard.title}
            width={231}
            height={324}
            className="rounded-md"
          />
          <div className="flex flex-col justify-between p-6 xl:p-10 md:p-6 w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src={mainCard.rating}
                  alt="Rating"
                  width={60}
                  height={60}
                />
                <span className="text-sm">(15 reviews)</span>
              </div>
              <CiBookmark className="text-xl hover:text-blue-600 cursor-pointer" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
              {mainCard.title}
            </h4>
            
            <div className="flex flex-col xl:flex-row md:flex-row sm:flex-col sm:item-start items-start gap-4 my-2">
              <div className="flex flex-row gap-2 items-center">
              <FiBook />
              <span>{mainCard.person}</span>
              </div>
              <div className="flex flex-row gap-2 items-center">
              <MdOutlinePerson />
              <span>{mainCard.lesson}</span>
              </div>
            </div>
           
            <p className="text-sm text-gray-700">{mainCard.paragraph1}</p>
            <p className="text-sm flex items-center text-gray-500">
              <CiCircleMinus className="mr-2" />
              {mainCard.paragraph2}
            </p>
            <div className="flex justify-between flex-row  items-start mt-4">
              <p className="text-lg font-semibold text-blue-600">
                <span className="mr-2">{mainCard.pricing}</span>
                <span className="line-through text-gray-400">
                  {mainCard.actualPrice}
                </span>
              </p>
              <div className="flex flex-row gap-4 items-center text-blue-600 cursor-pointer">
                <p className="hover:underline">Buy Now</p>
                <p className="hover:underline">
                  <AddShoppingCartIcon />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-2/3">
          {visibleCards.map((card) => (
            <Card key={card.id} card={card} onClick={setMainCard} />
          ))}
        </div>

        {/* Show More Button */}
        {visibleCards.length < otherCards.length && (
          <button
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition-all duration-200"
            onClick={handleShowMore}
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default OneCard;
