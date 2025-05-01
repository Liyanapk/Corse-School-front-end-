"use client";
import React, { useState, useEffect } from "react";
import { Tabs } from "@mui/material";
import { FiBook } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories: Category[] = ["Featured", "Popular", "Trending", "Latest"];

const cardData = [
  {
    id: 1,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "Featured",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "By Claudia Pruitt in Designing",
    actualPrice: "$70",
    pricing: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 2,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "Featured",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "By Claudia Pruitt in Designing",
    actualPrice: "$70",
    pricing: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 3,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "Popular",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "By Claudia Pruitt in Designing",
    actualPrice: "$70",
    pricing: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 4,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "Trending",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "By Claudia Pruitt in Designing",
    actualPrice: "$70",
    pricing: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 1,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "Popular",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "By Claudia Pruitt in Designing",
    actualPrice: "$70",
    pricing: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 5,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "Popular",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "By Claudia Pruitt in Designing",
    actualPrice: "$70",
    pricing: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 6,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "Latest",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "By Claudia Pruitt in Designing",
    actualPrice: "$70",
    pricing: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
  {
    id: 7,
    title: "The Complete Histudy 2024: From Zero to Expert!",
    category: "Trending",
    image: "/images/content/cards_images.webp",
    paragraph1: "Master Python by building 100 projects in 100 days...",
    paragraph2: "By Claudia Pruitt in Designing",
    actualPrice: "$70",
    pricing: "$40",
    rating: "/images/content/star.jpeg",
    lesson: "12 Lessons",
    person: "50 Students",
  },
];

type ContentSectionProps = {
  category: string; 
};


type Category = "Featured" | "Popular" | "Trending" | "Latest";

export default function ContentSection({ category }: ContentSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("Featured");
  const [visibleRows, setVisibleRows] = useState(2);

  const router = useRouter();


  useEffect(() => {
    if (categories.includes(category as Category)) {
      setActiveCategory(category as Category);
    }
  }, [category]);

  const handleCategoryChange = (newCategory: Category) => {
    setActiveCategory(newCategory);
    setVisibleRows(2);
  };

  const filteredCards = cardData.filter(
    (card) => activeCategory === "Featured" || card.category === activeCategory
  );

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + 2);
  };

  const visibleCards = filteredCards.slice(0, visibleRows);

  return (
    <div className="flex flex-col items-center p-20">
      <div className="flex flex-col items-center gap-12">
        <button className="sm:w-40 h-10 bg-gray-200 text-blue-500 rounded-full">
          POPULAR COURSE
        </button>
        <p className="text-4xl font-bold tracking-tight max-w-2xl text-center leading-tight">
          Online Coaching Lessons For Remote Learning
        </p>

        <Tabs value={activeCategory} aria-label="category tabs">
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`w-full sm:w-44 h-16 bg-white text-lg rounded-full transition ${
                  activeCategory === cat
                    ? "bg-blue-500 text-blue-400"
                    : "hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full sm:w-[600px] lg:w-[900px] xl:w-[1300px]">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="flex justify-center items-center flex-col 1311px:flex-row bg-white rounded-lg p-6 gap-6 hover:shadow-xl hover:-translate-y-2 transition-transform"
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
                  <p
                    className="flex items-center text-blue-500 cursor-pointer"
                    onClick={() => router.push("/sladingpages/contentCard")}
                  >
                    Learn More <IoIosArrowRoundForward className="ml-2" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCards.length > visibleRows && (
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
