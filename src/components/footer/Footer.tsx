import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="flex flex-col items-center md:items-start gap-8">
            <Image src="/images/logo/logo.png" alt="logo" width={152} height={49} />
            <p className="text-black text-center md:text-left max-w-sm">
              We’re always in search of talented and motivated people. Don’t be shy; introduce yourself!
            </p>
            <div className="flex gap-4 text-2xl text-black">
              <FaFacebookF />
              <FaTwitter />
              <RiInstagramFill />
              <FaLinkedinIn />
            </div>
            <button className="mt-6 bg-purple-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-purple-700 transition-all">
              Contact with us <BsArrowRight />
            </button>
          </div>

          <div className="flex flex-wrap gap-16 md:gap-24 justify-center md:justify-start text-black">
            <div>
              <h5 className="text-xl font-semibold mb-4">Useful Links</h5>
              <ul>
                <li><a href="#" className="hover:text-purple-400">Marketplace</a></li>
                <li><a href="#" className="hover:text-purple-400">Kindergarten</a></li>
                <li><a href="#" className="hover:text-purple-400">University</a></li>
                <li><a href="#" className="hover:text-purple-400">Classic LMS</a></li>
                <li><a href="#" className="hover:text-purple-400">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4">Our Company</h5>
              <ul>
                <li><a href="#" className="hover:text-purple-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-purple-400">Become Teacher</a></li>
                <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400">Instructor</a></li>
                <li><a href="#" className="hover:text-purple-400">Events</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4">Get Contact</h5>
              <ul>
                <li><a href="tel:+4065550120" className="hover:text-purple-400">Phone: (406) 555-0120</a></li>
                <li><a href="mailto:admin@example.com" className="hover:text-purple-400">E-mail: admin@example.com</a></li>
              </ul>
              <div className="text-center md:text-left mt-8">
                <h5 className="text-black font-semibold mb-2">Newsletter</h5>
                <p className="text-black w-40">
                    2000+ Our students are subscribed Around the World. Don’t be shy, introduce yourself!
                </p>
                </div>
            </div>
          </div>
        </div>

       

        <div className="mt-16 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center md:flex-row justify-between text-center text-black">
            <p>Copyright © 2024 <a href="#" >Rainbow-Themes</a>.All Rights Reserved</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-400">Terms of service</a>
              <a href="#" className="hover:text-purple-400">Privacy policy</a>
              <a href="#" className="hover:text-purple-400">Subscription</a>
              <a href="#" className="hover:text-purple-400">Login & Register</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
