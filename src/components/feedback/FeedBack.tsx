'use client'

import { useState, useEffect } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import Image from 'next/image';
import { IoIosStar } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const cards = [
  {
    profile: '/images/card/profile.webp',
    name: "Maldonado",
    position: "Executive Chairman",
    place: "@ Google",
    description: "After the launch, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
  },
  {
    profile: '/images/card/profile.webp',
    name: "Maldonado",
    position: "Executive Chairman",
    place: "@ Google",
    description: "After the launch, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
  },
  {
    profile: '/images/card/profile.webp',
    name: "Maldonado",
    position: "Executive Chairman",
    place: "@ Google",
    description: "After the launch, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
  }
]

const Data = [
  {
    question: "What is Histudy? How does it work?",
    description:
      "You can run Histudy easily. Any School, University, or College can use this Histudy education template for their educational purposes. A university can run its online learning management system with the Histudy education template.",
  },
  {
    question: "How can I get customer support?",
    description:
      "After purchasing the product, if you need any support, you can contact us by sending an email to rainbowit10@gmail.com.",
  },
  {
    question:
      "Can I get updates regularly, and for how long do I get updates?",
    description:
      "Yes, we regularly update Histudy. You can get updates any time. Next time we will come with more features. You can get updates unlimited times. Our dedicated team works for updates.",
  },
];

export default function FeedBack() {
  const [expand, setExpand] = useState<number | null>(null);
  
  const handleExpand = (index: number) => {
    setExpand(expand === index ? null : index);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="flex flex-col items-center justify-center px-2 sm:px-4" id="feedback">
      <div className="flex flex-col justify-center items-center gap-4">
        <button className="w-64 h-10 text-orange-800 font-medium bg-antiquewhite rounded-full">
          EDUCATION FOR EVERYONE
        </button>
        <h1 className="text-5xl font-extrabold text-center">Students Feedback</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 sm:gap-10 w-full max-w-7xl  mt-24 justify-center sm:px-4 px-2">
        {/* Question Section */}
        <div className="flex flex-col gap-4 w-full sm:w-3/4 lg:w-1/2 max-w-xl mx-auto lg:p-2">
          {Data.map((data, index) => (
            <div key={index} className="flex flex-col">
              <button
                className={`w-full h-12 rounded-md shadow-md flex items-center justify-between p-2 ${expand === index ? 'text-blue-500 font-bold' : ''}`}
                onClick={() => handleExpand(index)}
              >
                {data.question}
                {expand === index ? <IoIosRemove className="text-2xl font-bold" /> : <IoIosAdd className="text-2xl font-bold" />}
              </button>
              {expand === index && (
                <p className="w-full max-w-full p-4 bg-opacity-50 bg-white shadow-md text-gray-600 text-sm mt-2">
                  {data.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Card Section */}
        <div className="w-full sm:w-3/4 lg:w-1/2 max-w-xl mx-auto lg:p-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-10 rounded-lg">
            <Slider {...settings}>
              {cards.map((card) => (
                <div className="flex flex-row p-4" key={card.name}>
                  <div className="flex flex-col  xl:flex-row xl:items-center xl:gap-12 xl:py-6 sm:flex-col lg:flex-row sm:gap-2 lg:py-2 lg:items-start sm:py-2 sm:items-start">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <Image
                        src={card.profile}
                        alt="image"
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h1 className="text-2xl font-semibold">
                      {card.name}
                      <a className="text-sm font-light flex flex-row gap-1">
                        {card.position}
                        <li className='list-none'>{card.place}</li>
                      </a>
                    </h1>
                  </div>
                  <p className="mt-4 text-sm">{card.description}</p>
                  <div className="flex gap-2 text-yellow-500 font-bold mt-8">
                    {[...Array(4)].map((_, idx) => (
                      <IoIosStar key={idx} />
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
