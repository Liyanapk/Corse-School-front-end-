"use client";
import "./Banner.css";

import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Banner() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1011,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const cards = [
    {
      title: "React",
      description: "Spken english dolor sit, amet consectetur.",
      image: "/images/card/subjectImage.webp",
      entrolled: "1500+ students",
    },
    {
      title: "English",
      description: "Spken english dolor sit, amet consectetur.",
      image: "/images/card/subjectImage.webp",
      entrolled: "100+ students",
    },
    {
      title: "Education",
      description: "Eearning edu dolor sit, amet consectetur.",
      image: "/images/card/subjectImage.webp",
      entrolled: "1300+ students",
    },
    {
      title: "Education",
      description: "Lorem ipsum dolor sit, amet consectetur.",
      image: "/images/card/subjectImage.webp",
      entrolled: "1000+ students",
    },
  ];

  return (
    <div className="banner-container">
      <div className="banner-title">
        <div className="trophy-box">
          <p className="banner-box"> 🏆 The Leader in Online Learning</p>
        </div>
        <h1 className="banner-head">
          We teaching, educate and
          <span className="banner-text-color">build the future</span>of online
          learning{" "}
        </h1>
      </div>

      <div>
        <div className="banner-slider-all">
          <Slider {...settings}>
            {cards.map((card) => (
              <div className="banner-card" key={card.title}>
                <div className="banner-card-row">
                  <div className="banner-card-head">
                    <h1>{card.title}</h1>
                    <h2 className="banner-card-head2">{card.description}</h2>
                    <p className="banner-arrow">{card.entrolled} </p>
                  </div>
                  <div className="banner-image-div">
                    <Image
                      src={card.image}
                      alt="image"
                      width={280}
                      height={233}
                      className="banner-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
