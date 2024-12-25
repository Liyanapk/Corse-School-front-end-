"use client";
import {  useRef } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface StudentData {
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  phone: string;
  parent_name: string;
  parent_number: string;

  gender: string;
  dob: string;
  student_id: string;
  status: string;
  batch: string;
  type: string;
  address: string;
}

const ViewStudent = ({ params }: { params: { student_id: string } }) => {
  const router = useRouter();

  const defaultImage = '/images/avatarImage/avatar_image.webp';
  const [image, setImage] = useState<string>(defaultImage);
  const fileInput = useRef<HTMLInputElement>(null);
  


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            setImage(reader.result);
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const resetImage = () => {
      setImage(defaultImage);
      if (fileInput.current) {
        fileInput.current.value = '';
      }
    };

  const { student_id } = params;
  const [student, setStudent] = useState<StudentData | null>(null);
  useEffect(() => {
    const fetchStudent = async () => {
      const students = [
        {
          first_name: "Ramanan",
          last_name: "10",
          age: 15,
          email: "ramanan@example.com",
          phone: "6512324585",
          parent_name: "Mr. Suresh Ramanan",
          parent_number: "565625985562",
        
          gender: "male",
          dob: "2020/02/02",
          student_id: "LI523k295",
          status: "active",
          batch: "76879890",
          type: "active",
          address: "hill top",
        },
        {
          first_name: "Maya",
          last_name: "10",
          age: 15,
          email: "maya@example.com",
          phone: "6512324585",
          parent_name: "Mr. Suresh Ramanan",
          parent_number: "565625985562",
        
          gender: "female",
          dob: "2020/02/02",
          student_id: "SD35",
          status: "active",
          batch: "76879891",
          type: "active",
          address: "hill top",
        },
      ];
      const foundStudent = students.find((student) => student.student_id === student_id);
      setStudent(foundStudent || null);
    };

    if (student_id) fetchStudent();
  }, [student_id]);

  if (!student) {
    return <div>Loading...</div>;
  }




  
  

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => router.push("/admin/student")}
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
                src={image}
                alt="Profile"
                className="w-32 h-32 mx-auto rounded-full border-4 border-white"
              />
              <h1 className="text-2xl font-bold mt-4">
                {student.first_name} {student.last_name}
              </h1>
              <p className="text-lg h-5">{student.age}</p>
              <p className="text-sm mt-2 h-4">{`Student ID: ${student.student_id}`}</p>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              {/* Email Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Email</label>
                <p className="text-gray-900 h-5">{student.email}</p>
              </div>
              {/* Phone Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Phone</label>
                <p className="text-gray-900 h-5">{student.phone}</p>
              </div>
              {/* Parent Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Parent</label>
                <p className="text-gray-900 h-5">{student.parent_name}</p>
              </div>
              {/* Parent Number Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Parent Number</label>
                <p className="text-gray-900 h-5">{student.parent_number}</p>
              </div>
              {/* Gender Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Gender</label>
                <p className="text-gray-900 h-5">{student.gender}</p>
              </div>
              {/* DOB Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">DOB</label>
                <p className="text-gray-900 h-5">{student.dob}</p>
              </div>
              {/* Status Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Status</label>
                <p className="text-gray-900 h-5">{student.status}</p>
              </div>
              {/* Batch Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Batch</label>
                <p className="text-gray-900 h-5">{student.batch}</p>
              </div>
              {/* Type Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Type</label>
                <p className="text-gray-900 h-5">{student.type}</p>
              </div>
              {/* Address Box */}
              <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
                <label className="block text-gray-700 font-medium text-sm">Address</label>
                <p className="text-gray-900 h-5">{student.address}</p>
              </div>
            </div>
          </div>

       {/* Update Form */}
<div className="bg-white shadow-lg rounded-lg w-full lg:w-2/3 p-8">
  <h2 className="text-2xl font-semibold mb-6">Update Information</h2>
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Image Upload Section */}
    <div className="col-span-1 md:col-span-2 flex flex-col items-center">
      <label className="relative cursor-pointer">
        <img
          src={image}
          width={24}
          height={24}
          alt="Student Profile"
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
        defaultValue={student.first_name}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Last Name</label>
      <input
        type="text"
        defaultValue={student.last_name}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Age</label>
      <input
        type="number"
        defaultValue={student.age}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Student ID</label>
      <input
        type="text"
        defaultValue={student.student_id}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Email</label>
      <input
        type="email"
        defaultValue={student.email}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Phone Number</label>
      <input
        type="text"
        defaultValue={student.phone}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Parent Name</label>
      <input
        type="text"
        defaultValue={student.parent_name}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Parent Number</label>
      <input
        type="text"
        defaultValue={student.parent_number}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Gender</label>
      <input
        type="text"
        defaultValue={student.gender}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">DOB</label>
      <input
        type="text"
        defaultValue={student.dob}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Status</label>
      <input
        type="text"
        defaultValue={student.status}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Batch</label>
      <input
        type="text"
        defaultValue={student.batch}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Type</label>
      <input
        type="text"
        defaultValue={student.type}
        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium text-sm">Address</label>
      <input
        type="text"
        defaultValue={student.address}
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

export default ViewStudent;
