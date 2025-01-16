import Header from "../header/Header"
import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";


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
      description:"uhgdjnvdjkn"
    },
]
const OneCard =()=> {
  

    return(
        <div>
           <Header />

             <div className="flex justify-center items-center gap-8"
                    
                    >
                      {cardData.map((card) => (
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
                              <CiBookmark className="text-xl" />
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
                              <p className="flex flex-row gap-10 items-center text-blue-500 cursor-pointer">
                                <p>
                                Pay Now 
                                </p>
                                <p>
                                    Add To Cart
                                </p>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
        </div>
    )
}
export default  OneCard