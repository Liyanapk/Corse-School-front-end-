'use client';

import React, { useState } from 'react';
import './Content.css';
import { Tabs, Tab } from '@mui/material';
import { CiBookmark } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';

type Category = 'Featured' | 'Popular' | 'Trending' | 'Latest';

interface CardUpdate {
  id: number;
  heading: string;
  content: string;
}
const cardData = [
  { 
    id: 1, 
    title: 'The Complete Histudy 2024: From Zero to Expert!', 
    category: 'All Course', 
    image: '/images/content/course-list-01.jpg', 
    paragraph1: 'Master Python by building 100 projects in 100 days...', 
    paragraph2: 'ByClaudia PruittIn Designing', 
    pricing: '$70',
    actualPrice:'$40',
    rating:'/images/content/star.jpeg',
    lesson: '12 Lessons' ,
    person:'50 Students'
  },
  { 
    id: 2, 
    title: 'Difficult Things About Education.', 
    category: 'All Course', 
    image: '/images/content/course-list-01.jpg', 
    paragraph1: 'Master Python by building 100 projects in 100 days...', 
    paragraph2: 'ByFred GuerIn Math Teacher', 
    pricing: '$75',
    actualPrice:'$10',
    rating:'/images/content/star.jpeg',
    lesson: '12 Lessons' ,
    person:'30 Students'
  },
  { 
    id: 3, 
    title: 'Five Things You Should Do In Education.', 
    category: 'All Course', 
    image: '/images/content/course-list-01.jpg',  
    paragraph1: 'Master Python by building 100 projects in 100 days...', 
    paragraph2: 'ByLevi ArmIn Advanced Educator', 
    pricing: '$90',
    actualPrice:'$40',
    rating:'/images/content/star.jpeg',
    lesson: '12 Lessons' ,
    person:'30 Students'
  },
  { 
    id: 4, 
    title: 'The Complete Histudy 2024: From Zero to Expert!', 
    category: 'All Course', 
    image: '/images/content/course-list-01.jpg', 
    paragraph1: 'Master Python by building 100 projects in 100 days...', 
    paragraph2: 'ByClaudia PruittIn Designing', 
    pricing: '$70',
    actualPrice:'$20',
    rating:'/images/content/star.jpeg',
    lesson: '12 Lessons' ,
    person:'50 Students'

  },
  { 
    id: 5, 
    title: 'Difficult Things About Education.', 
    category: 'All Course', 
    image: '/images/content/course-list-01.jpg', 
    paragraph1: 'Master Python by building 100 projects in 100 days...', 
    paragraph2: 'ByFred GuerIn Math Teacher', 
    pricing: '$75',
    actualPrice:'$10',
    rating:'/images/content/star.jpeg',
    lesson: '12 Lessons' ,
    person:'50 Students'
  },
  { 
    id: 6, 
    title: 'Five Things You Should Do In Education.', 
    category: 'All Course',  
    image: '/images/content/course-list-01.jpg', 
    paragraph1: 'Master Python by building 100 projects in 100 days...', 
    paragraph2: 'ByLevi ArmIn Advanced Educator', 
    pricing: '$90',
    actualPrice:'$40',
    rating:'/images/content/star.jpeg',
    lesson: '12 Lessons' ,
    person:'50 Students'
  },
];

const customCategoryUpdates = {
  Featured: [
    { id: 2, heading: 'Updated Card 2', content: 'Featured Content 2' },
    { id: 3, heading: 'Updated Card 3', content: 'Featured Content 3' },
    { id: 4, heading: 'Updated Card 4', content: 'Featured Content 4' },
  ],
  Popular: [
    { id: 3, heading: 'Updated Card 3', content: 'Popular Content 3' },
  ],
  Trending: [
    { id: 1, heading: 'Updated Card 1', content: 'Trending Content 1' },
  ],
  Latest: [
    { id: 1, heading: 'Updated Card 1', content: 'Latest Content 1' },
  ],
};

export default function ContentSection() {
  const [activeCategory, setActiveCategory] = useState('All Course');

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveCategory(newValue as Category); // Ensure type is a valid Category
  };

  const filteredCards = () => {
    if (activeCategory === 'All Course') {
      return cardData;
    }

    const updates = customCategoryUpdates[activeCategory] || [];
    const updatedCards = cardData.map((card) => {
      // Find if there's an update for this card based on its id
      const update = updates.find((update :any ) => update.id === card.id);
      
      // If an update is found, merge it with the current card
      if (update) {
        return { ...card, ...update };
      }
      
      // Otherwise, return the original card
      return card;
    });

    // Limit cards based on category
    if (activeCategory === 'Latest') {
      return updatedCards.slice(0, 2); // Show only the first two cards
    }
    if (activeCategory === 'Popular' || activeCategory === 'Trending') {
      return updatedCards.slice(0, 3); // Show only the first three cards
    }
    if (activeCategory === 'Featured') {
      return updatedCards.slice(0, 4); // Show only the first four cards
    }

    return updatedCards;
  };

  return (
    <div className='content-section'>
      <div className='content-section-items'>
        <button className='popular-button'>POPULAR COURSE</button>
        <p className='content-title'>Online Coaching Lessons For Remote Learning</p>
        
        <Tabs
          value={activeCategory}
          onChange={handleCategoryChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="category tabs"
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none', // Hide the underline indicator
            },
          }}
        >
          {[        
          'All Course', 'Featured', 'Popular', 'Trending', 'Latest'].map((category) => (
            <Tab
              key={category}
              label={category}
              value={category}
              className={`popular-item-buttons ${
                activeCategory === category ? 'active' : ''
              }`}
            />
          ))}
        </Tabs>
        
        <div className='content-cards'>
          {filteredCards().map((card) => (
            <div className='card' key={card.id}>
              <div>
                <Image
                 src={card.image} 
                 alt={card.title} 
                 width={231}
                 height={324}
                 className='card-image' />
                
              </div>
              <div className='card-content-item'>
                <div className='bookmark'>
                    <div className="rating-container">
                       <img src={card.rating} alt="Rating" className="rating-img" />
                       <span className="review-count">(15 reviews)</span>
                    </div>
                         <CiBookmark />
                </div>
                
                
                <h4 className='title'>{card.title}</h4>
                <div className='person-book'>
                    <FiBook /><span>{card.person}</span>
                    <MdOutlinePerson /><span>{card.lesson}</span>
                </div>
                <p className='para-1'>{card.paragraph1}</p>
                <p className='para-2'><CiCircleMinus className='icon-container' />{card.paragraph2}</p>

                <div className='card-end'>
                    <p className="pricing">
                       <span className="new-price">{card.pricing}</span>
                       <span className="original-price">{card.actualPrice}</span>
                    </p>
                       <p className='content-learnmore'>Learn More  <IoIosArrowRoundForward /></p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
