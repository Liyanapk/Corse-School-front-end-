'use client'
import React, { useState } from "react";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";


const Data = [
  {
    id: 1,
    icon: <HeadphonesIcon className="text-blue-500 text-4xl" />,
    title: "Contact Phone Number",
    description: "+123 456 789",
  },
  {
    id: 2,
    icon: <EmailIcon className="text-blue-500 text-4xl" />,
    title: "Our Email Address",
    description: "dummy@gmail.com",
  },
  {
    id: 3,
    icon: <LocationOnIcon className="text-blue-500 text-4xl" />,
    title: "Our Location",
    description: "Hilite, Calicut, Kerala",
  },
];

export default function ContactUs() {
  const [isSubmit, setIsSubmitted] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSf-37-gTZnFX9f-aCJ_KBZv6k7lLEDpk1MtcIMizaLEjYHqOg/formResponse?usp=pp_url";

    fetch(googleFormURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setIsSubmitted(true);
        form.reset(); 
      })
      .catch((err) => {
        console.error("Error submitting the form: ", err);
      });
  };
  const resetForm = ()=>{
    setIsSubmitted(false)
  }


  return (
    <div className="bg-gradient-to-b from-purple-100 via-purple-50 to-blue-50 min-h-screen flex flex-col items-center p-10">
      <div className="px-3 py-1 bg-purple-200 text-purple-600 rounded-full text-sm">
        Contact Us
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800 ">
          Histudy Course Contact
        </h1>
        <p className="text-lg text-gray-600 mt-2">You can join with us.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-8 mt-8">
        {Data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start text-start p-16 bg-white shadow-lg rounded-lg"
          >
            {item.icon}
            <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
            <p className="text-gray-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-1 max-w-6xl w-2xl justify-items-center mb-8 mt-10 ">
        <Image
          src="/images/card/contact (1).webp"
          alt="contact image"
          width={500}
          height={500}
          className="rounded-lg"
        />

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Get a Free Course You Can Contact With Me
          </h2>
          {isSubmit ? (
            <div className="text-center text-green-600">
              <h2 className="text-2xl font-semibold">Thank you!</h2>
              <p>Your message has been submitted successfully.</p>
              <button
                onClick={resetForm}
                className="mt-4 py-2 px-4 bg-purple-400 text-white rounded-lg from-neutral-500 hover:bg-blue-600 transition"
              >
                Submit Another Response
              </button>
            </div>
          ) :(

          <form
          onSubmit={handleSubmit}
          className="space-y-4"
          >
          <input
            type="text"
            name="entry.159793954"
            placeholder="Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="entry.731597513"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Subject"
            name="entry.437826207"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            name="entry.740480200"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Get It Now
          </button>
          </form>

         )}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-6 text-center">
          Find Us Here
        </h2>
        <div className="rounded-lg overflow-hidden shadow-lg mb-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094196!2d144.9630579153166!3d-37.81362797975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4fd2b4f%3A0xa3ed58f09db13e15!2sSome%20Location!5e0!3m2!1sen!2sus!4v1632735071530!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
