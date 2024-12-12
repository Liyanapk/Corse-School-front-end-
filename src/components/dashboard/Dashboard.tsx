'use client'
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
    { icon: <AutoStoriesIcon />, end: '78', title: 'ACTIVE COURSES', color: '#e4e9fd', bgcolor: '#c3c7e3', iconColor: 'blue' },
    { icon: <PersonalVideoIcon />, end: '10', title: 'ACTIVE COURSES', color: '#f6ebfc', bgcolor: '#c3c7e3', iconColor: 'violet' },
    { icon: <WorkspacePremiumIcon />, end: '7', title: 'COMPLETED COURSES', color: '#efdeef', bgcolor: '#c3c7e3', iconColor: 'purple' },
    { icon: <PeopleAltIcon />, end: '160', title: 'TOTAL STUDENTS', color: '#faecf1', bgcolor: '#c3c7e3', iconColor: 'blue' },
    { icon: <CardGiftcardIcon />, end: '20', title: 'TOTAL COURSES', color: '#fcf1ee', bgcolor: '#c3c7e3', iconColor: 'gray' },
    { icon: <AttachMoneyIcon />, end: '25000', title: 'TOTAL EARNINGS', color: '#fff8f3', bgcolor: '#c3c7e3', iconColor: 'brown' }
  ];

  return (
    <>
      <div className="flex flex-col w-full h-full box-border items-center -ml-10">
        

        {/* Dashboard */}
        <div className="px-0 py-2 w-screen max-w-7xl mx-auto bg-white rounded-md shadow-lg ">
          <h1 className="text-2xl font-bold mb-5 px-2 md:px-48 mt-4">Dashboard</h1>
          <hr className="border-t-1 border-gray-200 my-4 mx-2 md:mx-48" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 md:px-8 py-4">
            {Cards.map((card, index) => (
              <div
                className="flex flex-col items-center justify-center px-0 py-12 rounded-lg shadow-md gap-3"
                style={{ backgroundColor: card.color }}
                key={index}
              >
                <div
                  className="text-4xl mb-2 px-10 py-8 rounded-full"
                  style={{ backgroundColor: card.bgcolor, color: card.iconColor }}
                >
                  {card.icon}
                </div>
                <h2 className="text-5xl font-bold" style={{ color: card.iconColor }}>
                  <CountUp start={0} end={parseInt(card.end)} duration={2.75}></CountUp>
                </h2>
                <h1 className="text-xs text-gray-600" style={{ color: card.iconColor }}>
                  {card.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
