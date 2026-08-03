import './Instructor.css'
import { FaFacebookF } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import Image from 'next/image';


export default function InstructorPage(){


    const cardData = [
        { name: 'Irma J. Erwin', subject: 'English Teacher', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
        { name: 'John Due', subject: 'Math Teacher', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
        { name: 'Joo Bieden', subject: 'Science Teacher', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80' },
        { name: 'Alejandro', subject: 'Physics Teacher', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80' },
    ]
    return(
        <div className='instructor-content'>
             <div className='instructor-head'>
                <button className='instructor-span'>OUR INSTRUCTOR</button>
                <h2 className='instructor-head'>Word Class Best Instructor</h2>
                <p className='instructor-para'>There are many variations of passages of the Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
             </div>
             <div className='card-grid'>
              {cardData.map((card)=>(
                <div className='instructor-card' key={card.name}>
                    <Image
                     src={card.image} 
                     alt={card.name} 
                     width={300}
                     height={500}
                     className="instructor-card-image"
                     />
                     <div className='instructor-card-items'>
                        <div className='instructor-card-icons'>
                            <FaFacebookF />
                            <TiSocialLinkedin />
                            <TiSocialTwitter />

                        </div>
                     <div className='instructor-card-content'>
                        <h1>{card.name}</h1>
                        <p>{card.subject}</p>
                    </div>

                </div>
                
                </div>
               
              ))}
             </div>
        </div>
    )
}