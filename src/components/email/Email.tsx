import './Email.css'
import { PiArrowRightThin } from "react-icons/pi";

export default function SendEmail(){
    return(
        <div className='email-content'>
            
                <div className='email-titles'>
                    <h1>Get Latest Histudy Update</h1>
                    <p>Our Newsletter</p>
                </div>

                <div className="email-form">
                    <input placeholder='Enter your E-mail' type='text' />
                    <button className='arrow-mail'>
                    Subscribe <PiArrowRightThin />
                    </button>
                </div>
            </div>
            
       
    )
}