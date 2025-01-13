import { PiArrowRightThin } from "react-icons/pi";

export default function SendEmail() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-48 bg-gradient-to-r from-gray-200 via-pink-200 to-gray-200 p-12">
     
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold">Get Latest Histudy Update</h1>
        <p className="text-lg lg:text-xl font-semibold mt-2">Our Newsletter</p>
      </div>

     
      <div className="relative w-full max-w-lg">
       
        <input
          type="text"
          placeholder="Enter your E-mail"
          className="w-full h-16 px-4 rounded-lg border-2 border-white shadow-lg text-gray-700 "
        />

        <button className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 flex items-center gap-2">
          Subscribe <PiArrowRightThin />
        </button>

   
        <button className="md:hidden mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 flex items-center justify-center gap-2">
          Subscribe <PiArrowRightThin />
        </button>
      </div>
    </div>
  );
}
