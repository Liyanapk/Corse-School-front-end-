import Image from "next/image";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Profile = () => {
  return (
    <div className="flex items-start justify-center min-h-screen pt-20">
      <div className="flex flex-col items-center  px-6 py-28 w-full max-w-4xl mx-auto rounded-lg shadow-2xl">
      <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/Dashbord/profie.webp"
            width={120}
            height={120}
            className="rounded-full border-4 border-blue-500 shadow-md"
            alt="Profile"
          />
          <h1 className="text-4xl font-semibold mt-3 text-gray-800">Ramanan</h1>
          <p className="text-xl text-blue-500 font-medium">Admin</p>
        </div>

        {/* Profile Details Section */}
        <div className="w-full flex justify-center space-x-6  mt-6">
  {/* Email */}
  <div className="py-0 px-32 flex-1 ">
    <h2 className="text-base font-semibold text-gray-500  ">Email </h2>
    <p className="text-base font-medium text-gray-800 flex flex-row items-center gap-2"><MailOutlineIcon className="text-large font-bold "/>Ramanan@gmail.com</p>
  </div>
  
  {/* Phone */}
  <div className="py-0 flex-1">
    <h2 className="text-base font-semibold text-gray-500">Phone</h2>
    <p className="text-base font-medium text-gray-800 flex flex-row items-center gap-2"> <LocalPhoneIcon className="text-large font-bold "/> +123 456 7890</p>
  </div>
</div>

       
      </div>
    </div>
  );
};

export default Profile;