"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

interface TeacherData {
  id: string;
  name: string;
  subject: String;
  age: number;
  email: string;
  address: string;
  image: string;
  PhoneNumber: string;
  className: string;
  batchName: string;
}

const ViewTeacher = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;

  const [teacher, setTeacher] = useState<TeacherData | null>(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      const teachers = [
        {
          id: "1",
          name: "duckyy",
          subject: "Machine Learning, english",
          age: 15,
          email: "duckyy@example.com",
          address: "123 Main Street, Cityville",
          image: "/images/avatarImage/duck.jpg",
          PhoneNumber: "53201230125",
          className: "calass A",
          batchName: "Al -2020",
        },
        {
          id: "2",
          name: "Poopi",
          subject: "maths, AI",
          age: 17,
          email: "poopi@example.com",
          address: "456 Second Street",
          image: "/images/Dashbord/profie.webp",
          PhoneNumber: "53201230125",
          className: "calass A",
          batchName: "Al -2021",
        },
        {
          id: "3",
          name: "Maya",
          subject: "maths, english",
          age: 16,
          email: "maya@example.com",
          address: "789 Third Street",
          image: "/images/Dashbord/profie.webp",
          PhoneNumber: "53201230125",
          className: "calass A",
          batchName: "Al -2022",
        },
      ];
      const foundTeacher = teachers.find((teacher) => teacher.id === id);
      setTeacher(foundTeacher || null);
    };

    if (id) fetchTeacher();
  }, [id]);

  if (!teacher) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <div className="w-full max-w-2xl flex items-center mb-4">
        <button
          onClick={() => router.push("/admin/teacher")}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowBackIcon />
          <span className="ml-2 font-semibold"></span>
        </button>
      </div>

      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={teacher.image}
              alt={`student Profile`}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{teacher.name}</h1>
            </div>
          </div>

          <button className="hover:opacity-80">
            <EditIcon fontSize="large" />
          </button>
        </div>

        {/* Student Details */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Subjet:</span>
            <span className="text-gray-800 font-semibold">
              {teacher.subject}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Age:</span>
            <span className="text-gray-800 font-semibold">{teacher.age}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Email:</span>
            <span className="text-blue-600 font-semibold">{teacher.email}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Address:</span>
            <span className="text-gray-800 font-semibold">
              {teacher.address}
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Phone Number:</span>
            <span className="text-gray-800 font-semibold">
              {teacher.PhoneNumber}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Batch Name:</span>
            <span className="text-gray-800 font-semibold">
              {teacher.batchName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTeacher;
