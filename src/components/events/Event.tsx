import './Event.css'
import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { PiArrowRightThin } from "react-icons/pi";



const cards=[
    { image:'/images/event/eventCard.jpeg', place:'IAC', time:'8:00 am - 5:00 pm', title:'International Education Fair 2024',button:'Get Ticket'  },
    { image:'/images/event/eventCard.jpeg', place:'IAC', time:'8:00 am - 5:00 pm', title:'International Education Fair 2024',button:'Get Ticket'  },
    { image:'/images/event/eventCard.jpeg', place:'IAC', time:'8:00 am - 5:00 pm', title:'International Education Fair 2024',button:'Get Ticket'  },
    { image:'/images/event/eventCard.jpeg',  place:'IAC', time:'8:00 am - 5:00 pm', title:'International Education Fair 2024',button:'Get Ticket'  }
]
export default function Event(){
    return(
        <div className='event-total'>
            <div className='event-head'>
                <button>OUR EVENTS</button>
                <h1>University Upcoming Events</h1>
            </div>
          
            <div className='event-card-grid'>
                {cards.map((card, index)=>(
                    
              <div className='event-card' key={index} >
                    <div>
                    <Image
                    src={card.image}
                    alt={card.title}
                    width={230}
                    height={157}
                    className='event-image'
                    />
                </div>
                <div className='event-card-items'>
                    <p><CiLocationOn />{card.place}   <CiClock2 />{card.time}</p>
                    <h1>{card.title}</h1>
                    <button className='event-arrow'>{card.button} <PiArrowRightThin /></button>

                </div>

            </div>

                ))}
            </div>
        </div>
    )
}