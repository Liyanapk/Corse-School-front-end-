import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { PiArrowRightThin } from "react-icons/pi";

const cards = [
    { image: '/images/event/Event2.webp', place: 'IAC', time: '8:00 am - 5:00 pm', title: 'International Education Fair 2024', button: 'Get Ticket' },
    { image: '/images/event/Event2.webp', place: 'IAC', time: '8:00 am - 5:00 pm', title: 'International Education Fair 2024', button: 'Get Ticket' },
    { image: '/images/event/Event2.webp', place: 'IAC', time: '8:00 am - 5:00 pm', title: 'International Education Fair 2024', button: 'Get Ticket' },
    { image: '/images/event/Event2.webp', place: 'IAC', time: '8:00 am - 5:00 pm', title: 'International Education Fair 2024', button: 'Get Ticket' }
];

export default function Event() {
    return (
        <div className='flex flex-col justify-center items-center bg-[#e4deff44] my-16 py-16' id='event'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <button className='w-[150px] h-[50px] text-blue-500 bg-[rgba(137,43,226,0.281)] border-none rounded-full'>
                    OUR EVENTS
                </button>
                <h1 className='text-4xl font-extrabold'>
                    University Upcoming Events
                </h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mx-4 sm:mx-16 my-16'>
                {cards.map((card, index) => (
                    <div className='max-w-xl bg-white flex flex-col sm:flex-row p-5 gap-6 items-center rounded-lg hover:shadow-xl hover:-translate-y-2 transition-transform' key={index}
                    style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1), 0 -4px 10px rgba(0, 0, 0, 0.1), 4px 0 10px rgba(0, 0, 0, 0.1), -4px 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={400} 
                                height={250}
                                className='rounded-lg object-cover'
                            />
                        </div>
                        <div className='flex flex-col items-start gap-2 sm:w-2/3'>
                            <p className='flex items-center gap-2 text-gray-500 text-sm'>
                                <CiLocationOn />{card.place} <CiClock2 />{card.time}
                            </p>
                            <h1 className='text-xl font-semibold'>
                                {card.title}
                            </h1>
                            <button className='flex items-center justify-center gap-2 w-[150px] h-[50px] border-2 border-[#00003c3d] rounded-[30px]'>
                                {card.button} <PiArrowRightThin />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
