"use client";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AxiosInstance from '../../utils/axiosInstance';
import Cookies from 'js-cookie';

interface TeacherData {
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  status: string;
  type: string;
  address: string;
  profile_pic:string;
}

const ViewTeacher = ({ params }: { params: { _id: string } }) => {
  const router = useRouter();

  const defaultImage = "/images/avatarImage/avatar_image.webp";
  const [image, setImage] = useState<string>(defaultImage);
  const fileInput = useRef<HTMLInputElement>(null);

  const [teacher, setTeachers] = useState<TeacherData | null>(null);
 
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

  const { _id } = params;

  useEffect(() => {
    const fetchTeachers = async () => {
      const token = Cookies.get('authToken');
      if (!token) {
        setError('No authentication token found');
        setLoading(false);
        return;
      }

      try {
        console.log("_id:", _id);
        const response = await AxiosInstance.get(`/api/v1/teacher/${_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setTeachers(response.data.data);
        } else {
          console.error("Failed to fetch teacher data");
        }
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (_id) fetchTeachers();
  }, [_id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    setImage(defaultImage);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  const imageURL = `http://localhost:5000/${teacher.profile_pic}`;

 return (
  <div className="max-w-7xl mx-auto px-6 py-12">
    {/* Header */}
    <div className="flex items-center mb-8">
      <button
        onClick={() => router.push("/admin/teacher")}
        className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
      >
        <ArrowBackIcon />
        <span className="ml-2 font-semibold text-lg">Back</span>
      </button>
    </div>
    
   {/* Profile and Update Section */}
   <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-lg w-full lg:w-1/2 xl:w-1/2 h-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center rounded-t-lg">
            <img
              src={imageURL}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full border-4 border-white"
            />
            <h1 className="text-2xl font-bold mt-4">
              {teacher.first_name} {teacher.last_name}
            </h1>
            <p className="text-lg h-5">{teacher.age}</p>
           
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            {/* Email Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Email</label>
              <p className="text-gray-900 h-5">{teacher.email}</p>
            </div>
            {/* Phone Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Phone</label>
              <p className="text-gray-900 h-5">{teacher.phone}</p>
            </div>
           
            
            {/* Gender Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Gender</label>
              <p className="text-gray-900 h-5">{teacher.gender}</p>
            </div>
            {/* DOB Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">DOB</label>
              <p className="text-gray-900 h-5">{teacher.dob}</p>
            </div>
            {/* Status Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Status</label>
              <p className="text-gray-900 h-5">{teacher.status}</p>
            </div>
         
            {/* Type Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Type</label>
              <p className="text-gray-900 h-5">{teacher.type}</p>
            </div>
            {/* Address Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Address</label>
              <p className="text-gray-900 h-5">{teacher.address}</p>
            </div>
          </div>
        </div>

     {/* Update Form */}
<div className="bg-white shadow-lg rounded-lg w-full lg:w-2/3 p-8">
<h2 className="text-2xl font-semibold mb-6">Update Information</h2>
<form  className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Image Upload Section */}
  <div className="col-span-1 md:col-span-2 flex flex-col items-center">
    <label className="relative cursor-pointer">
      <img
        src={imageURL}
        width={24}
        height={24}
        alt="teacher Profile"
        className=" md:w-32 md:h-32 rounded-full border-2 border-blue-200 shadow-lg"
      />
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleImageChange}
        ref={fileInput}
      />
    </label>
    <button
      type="button"
      className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm py-2 px-4 hover:opacity-90 shadow-md transition-all duration-300"
      onClick={resetImage}
    >
      Remove Image
    </button>
  </div>

  {/* Form Fields */}
  <div>
    <label className="block text-gray-700 font-medium text-sm">First Name</label>
    <input
      type="text"
      defaultValue={teacher.first_name}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
  <div>
    <label className="block text-gray-700 font-medium text-sm">Last Name</label>
    <input
      type="text"
      defaultValue={teacher.last_name}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
  <div>
    <label className="block text-gray-700 font-medium text-sm">Age</label>
    <input
      type="number"
      defaultValue={teacher.age}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
 
  <div>
    <label className="block text-gray-700 font-medium text-sm">Email</label>
    <input
      type="email"
      defaultValue={teacher.email}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
  <div>
    <label className="block text-gray-700 font-medium text-sm">Phone Number</label>
    <input
      type="text"
      defaultValue={teacher.phone}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
 
  
  <div>
    <label className="block text-gray-700 font-medium text-sm">Gender</label>
    <input
      type="text"
      defaultValue={teacher.gender}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
  <div>
    <label className="block text-gray-700 font-medium text-sm">DOB</label>
    <input
      type="text"
      defaultValue={teacher.dob}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
  <div>
    <label className="block text-gray-700 font-medium text-sm">Status</label>
    <input
      type="text"
      defaultValue={teacher.status}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
  
  <div>
    <label className="block text-gray-700 font-medium text-sm">Type</label>
    <input
      type="text"
      defaultValue={teacher.type}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
  <div>
    <label className="block text-gray-700 font-medium text-sm">Address</label>
    <input
      type="text"
      defaultValue={teacher.address}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
  <div className="col-span-1 md:col-span-2">
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
    >
      Update
    </button>
  </div>
</form>
</div>

    </div>
  </div>
);
};

export default ViewTeacher;
