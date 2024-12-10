import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Image from 'next/image';

const Dashboard = () => {


  const Cards=[
    { icon:<AutoStoriesIcon/>, count:'78', title:'ACTIVE COURSES', color:'#e4e9fd'},
    { icon:<PersonalVideoIcon/>, count:'10', title:'ACTIVE COURSES', color:'#f6ebfc'},
    { icon:<WorkspacePremiumIcon/>, count:'7', title:'Completed Courses', color:'#efdeef'},
    { icon:<PeopleAltIcon/> , count:'160', title:'Total Students', color:'#faecf1'},
    { icon:<CardGiftcardIcon/>, count:'20', title:'Total Courses', color:'#fcf1ee'},
    { icon:<AttachMoneyIcon/>, count:'25000', title:'Total Earnings', color:'#fff8f3'}
  ]
  return (
    <>
        <div className="grid p-16 w-full box-border justify-center items-center">

            <h1 className="text-2xl font-bold mb-5 px-12 ">Dashboard</h1>
            <div className="grid grid-cols-3 gap-5 justify-center items-center p-10 w-full box-border">


            {Cards.map((card, index)=>(
              <div className="flex flex-col items-center justify-center p-5 rounded-lg shadow-md"
              style={{ backgroundColor: card.color }} key={index}>
              <div className=" text-4xl mb-2" >{card.icon}</div>
              <h2 className="text-3xl font-bold">{card.count}</h2>
              <h1 className="text-lg text-gray-600">{card.title}</h1>
            </div>

           ))}
        
          </div>
    </div>


    </>



  
  );
};

export default Dashboard;
