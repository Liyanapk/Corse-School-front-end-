'use client'
import './FeedBack.css'
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
    

      <div className="feedback-content">
        <div className="feedback-top">
          <button className="feedback-head-button">EDUCATION FOR EVERYONE</button>
          <h1 className="feedback-heading">Student's Feedback</h1>
        </div>

        <div className="feedback-row">
          <div className="feedback-question">
            {Data.map((data, index) => (
              <div key={index} className="feedback-item">
                <button
                  className={`feedback-button ${expand === index ? "feedback-button-active" : ""
                    }`}
                  onClick={() => handleExpand(index)}
                >
                  {data.question}{" "}
                  {expand === index ? <IoIosRemove className='add-expand-icon' /> : <IoIosAdd className='add-expand-icon' />}
                </button>
                {expand === index && (
                  <p className="feedback-description">{data.description}</p>
                )}
              </div>
            ))}
          </div>


          <div>
          
          <div className="slider-all" >
            
          <Slider {...settings}>
            {cards.map((card) => (
              <div className='feedback-card'>

              <div className='feedback-card-top' key={card.name}>

                <div className='image-div' >
                  <Image
                    src={card.profile}
                    alt='image'
                    width={60}
                    height={60}
                    className='feedback-image'
                  />
                </div>

                <h1 className='feedback-head'>
                  {card.name}
                  <a className='feedback-para'>{card.position}<li>{card.place}</li></a>
                </h1>
                </div>

                      <p className='feedbackcard-description'>{card.description}</p>
                      <div className='feedback-star'>
                    <a>
                      <li><IoIosStar /></li>
                    </a>
                    <a>
                      <li><IoIosStar /></li>
                    </a>
                    <a>
                      <li><IoIosStar /></li>
                    </a>
                    <a>
                      <li><IoIosStar /></li>
                    </a>
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
