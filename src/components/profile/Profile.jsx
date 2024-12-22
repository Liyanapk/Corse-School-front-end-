"use client";

import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

const Data = [
  {
    id: "1",
    name: "Ramana2",
    class: "10",
    age: 15,
    email: "ramanan@example.com",
    address: "123 Main Street, Cityville",
    parent: "Mr. Suresh Ramanan",
    image: "/images/avatarImage/avatar_image.webp",
    PhoneNumber: "53201230125",
    className: "class A",
    studentID: "123FGS",
    batchName: "Al -2020",
    ParentNumber: "565625985562",
  },
];

const Profile = () => {
  const router = useRouter();

  // Assume we are displaying the first student's profile
  const student = Data[0];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={student.image}
              alt="Student Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{student.name}</h1>
              <p className="text-sm md:text-base font-medium">{`Class: ${student.class}`}</p>
            </div>
          </div>

          <button className="hover:opacity-80">
            <EditIcon fontSize="large" />
          </button>
        </div>

        {/* Student Details */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Student ID:</span>
            <span className="text-gray-800 font-semibold">
              {student.studentID}
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Age:</span>
            <span className="text-gray-800 font-semibold">{student.age}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Email:</span>
            <span className="text-blue-600 font-semibold">{student.email}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Address:</span>
            <span className="text-gray-800 font-semibold">
              {student.address}
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Phone Number:</span>
            <span className="text-gray-800 font-semibold">
              {student.PhoneNumber}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Parent Name:</span>
            <span className="text-gray-800 font-semibold">
              {student.parent}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Parent Number:</span>
            <span className="text-gray-800 font-semibold">
              {student.ParentNumber}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Batch Name:</span>
            <span className="text-gray-800 font-semibold">
              {student.batchName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
