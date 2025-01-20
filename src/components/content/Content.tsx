"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

import { FiBook } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { useRouter } from 'next/navigation'

type Category = "Featured" | "Popular" | "Trending" | "Latest" | "All Course";

interface CardUpdate {
  id: number;
  heading: string;
  content: string;
}
const cardData = [
  {
    id: 1,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "All Course",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "ByClaudia PruittIn Designing",
    pricing: "$70",
    actualPrice: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 2,
    title: "Difficult Things About Education.",
    category: "All Course",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "ByFred GuerIn Math Teacher",
    pricing: "$75",
    actualPrice: "$10",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "30 Students",
  },
  {
    id: 3,
    title: "Five Things You Should Do In Education.",
    category: "All Course",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "ByLevi ArmIn Advanced Educator",
    pricing: "$90",
    actualPrice: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "30 Students",
  },
  {
    id: 4,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "All Course",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "ByClaudia PruittIn Designing",
    pricing: "$70",
    actualPrice: "$20",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 5,
    title: "Difficult Things About Education.",
    category: "All Course",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "ByFred GuerIn Math Teacher",
    pricing: "$75",
    actualPrice: "$10",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 6,
    title: "Five Things You Should Do In Education.",
    category: "All Course",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "ByLevi ArmIn Advanced Educator",
    pricing: "$90",
    actualPrice: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
];

const customCategoryUpdates: Record<
  Exclude<Category, "All Course">,
  { id: number; heading: string; content: string }[]
> = {
  Featured: [
    { id: 2, heading: "Updated Card 2", content: "Featured Content 2" },
    { id: 3, heading: "Updated Card 3", content: "Featured Content 3" },
    { id: 4, heading: "Updated Card 4", content: "Featured Content 4" },
  ],
  Popular: [{ id: 3, heading: "Updated Card 3", content: "Popular Content 3" }],
  Trending: [
    { id: 1, heading: "Updated Card 1", content: "Trending Content 1" },
  ],
  Latest: [{ id: 1, heading: "Updated Card 1", content: "Latest Content 1" }],
};

export default function ContentSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Course");
  const [visibleRows, setVisibleRows] = useState(2);

  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setActiveCategory(newValue as Category);
  };

  const filteredCards = () => {
    if (activeCategory === "All Course") {
      return cardData;
    }
  
    const updates = customCategoryUpdates[activeCategory] || [];
    const updatedCards = cardData.map((card) => {
      const update = updates.find((update: any) => update.id === card.id);

      if (update) {
        return { ...card, ...update };
      }

      return card;
    });

    if (activeCategory === "Latest") {
      return updatedCards.slice(0, 2);
    }
    if (activeCategory === "Popular" || activeCategory === "Trending") {
      return updatedCards.slice(0, 3);
    }
    if (activeCategory === "Featured") {
      return updatedCards.slice(0, 4);
    }

    return updatedCards;
  };


  const handleShowMore = () => {
    setVisibleRows(prevRows => prevRows + 2);
  };

  const router = useRouter()

  const filteredAndVisibleCards = filteredCards().slice(0, visibleRows);

  return (
    <div className="flex flex-col items-center mt-32">
      <div className="flex flex-col items-center gap-12">
        <button className="flex-grow sm:w-40 h-10 bg-gray-200 text-blue-500 rounded-full">
          POPULAR COURSE
        </button>

        <p className="text-4xl font-bold tracking-tight max-w-2xl text-center leading-tight">
          Online Coaching Lessons For Remote Learning
        </p>
        <Tabs
          value={activeCategory}
          onChange={handleCategoryChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="category tabs"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {["All Course", "Featured", "Popular", "Trending", "Latest"].map(
              (category) => (
                <button
                  key={category}
                  className={`w-full sm:w-44 h-16 bg-white text-black text-lg rounded-full transition hover:bg-blue-500 hover:text-white ${
                    activeCategory === category ? "bg-blue-500 text-black" : ""
                  }`}
                  onClick={(e) => handleCategoryChange(e, category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </Tabs>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[350px] sm:w-[600px] lg:w-[900px] xl:w-[1300px]"
        onClick={() => router.push('/sladingpages/contentCard')}
        >
          {filteredAndVisibleCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col 1311px:flex-row bg-white rounded-lg p-6 gap-6 hover:shadow-xl hover:-translate-y-2 transition-transform"
              style={{
                boxShadow:
                  "0 4px 10px rgba(0, 0, 0, 0.1), 0 -4px 10px rgba(0, 0, 0, 0.1), 4px 0 10px rgba(0, 0, 0, 0.1), -4px 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={231}
                height={324}
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={card.rating}
                      alt="Rating"
                      width={60}
                      height={60}
                    />
                    <span className="text-sm">(15 reviews)</span>
                  </div>
                 
                </div>
                <h4 className="text-xl font-bold">{card.title}</h4>
                <div className="flex items-center gap-4 my-2">
                  <FiBook />
                  <span>{card.person}</span>
                  <MdOutlinePerson />
                  <span>{card.lesson}</span>
                </div>
                <p className="text-sm text-gray-700">{card.paragraph1}</p>
                <p className="text-sm flex items-center text-gray-500">
                  <CiCircleMinus className="mr-2" />
                  {card.paragraph2}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-semibold text-blue-500">
                    <span className="mr-2">{card.pricing}</span>
                    <span className="line-through text-gray-400">
                      {card.actualPrice}
                    </span>
                  </p>
                  <p className="flex items-center text-blue-500 cursor-pointer">
                    Learn More <IoIosArrowRoundForward className="ml-2" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredCards().length > visibleRows && (
          <button
            onClick={handleShowMore}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
