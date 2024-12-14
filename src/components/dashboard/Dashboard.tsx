'use client';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import * as React from 'react';
import CountUp from 'react-countup';

const Dashboard = () => {
  const Cards = [
    { icon: <AutoStoriesIcon />, end: '30', title: 'ENROLLED COURSES', color: '#e4e9fd', bgcolor: '#c3d4f7', iconColor: '#3b82f6' },
    { icon: <PersonalVideoIcon />, end: '10', title: 'ACTIVE COURSES', color: '#f6ebfc', bgcolor: '#e4d9f8', iconColor: '#8b5cf6' },
    { icon: <WorkspacePremiumIcon />, end: '7', title: 'COMPLETED COURSES', color: '#efdeef', bgcolor: '#dec4eb', iconColor: '#9333ea' },
    { icon: <PeopleAltIcon />, end: '160', title: 'TOTAL STUDENTS', color: '#faecf1', bgcolor: '#f8d1d9', iconColor: '#ec4899' },
    { icon: <CardGiftcardIcon />, end: '20', title: 'TOTAL COURSES', color: '#fcf1ee', bgcolor: '#f5d1c8', iconColor: '#f97316' },
    { icon: <AttachMoneyIcon />, end: '25000', title: 'TOTAL EARNINGS', color: '#fff8f3', bgcolor: '#fce7c7', iconColor: '#d97706' }
  ];

  return (
    <div className="flex flex-col w-full h-full box-border items-center px-4 sm:px-6 md:px-8">
      {/* Dashboard */}
      <div className="py-8 max-w-7xl mx-auto bg-white rounded-md shadow-lg mt-8">
        <h1 className="text-xl md:text-2xl font-bold mb-8 px-4 md:px-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-8">
          {Cards.map((card, index) => (
            <div
              className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg shadow-md gap-3"
              style={{ backgroundColor: card.color }}
              key={index}
            >
              <div
                className="text-3xl sm:text-4xl mb-4 px-6 sm:px-8 py-4 sm:py-6 rounded-full"
                style={{ backgroundColor: card.bgcolor, color: card.iconColor }}
              >
                {card.icon}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: card.iconColor }}>
                <CountUp start={0} end={parseInt(card.end)} duration={2.75}></CountUp>
              </h2>
              <h1 className="text-xs sm:text-sm font-medium text-gray-700">
                {card.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
