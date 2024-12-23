"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


interface StudentData {
  id: string;
  name: string;
  class: string;
  age: number;
  email: string;
  address: string;
  parent: string;
  image: string;
  PhoneNumber: string;
  className: string;
  studentID: string;
  batchName: string;
  ParentNumber: string;
}

const ViewStudent = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;

  const [student, setStudent] = useState<StudentData | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const students = [
        {
          id: "1",
          name: "Ramanan",
          class: "10",
          age: 15,
          email: "ramanan@example.com",
          address: "123 Main Street, Cityville",
          parent: "Mr. Suresh Ramanan",
          image: "/images/Dashbord/profie.webp",
          PhoneNumber: "53201230125",
          className: "Class A",
          studentID: "123FGS",
          batchName: "Al -2020",
          ParentNumber: "565625985562",
        },
        {
          id: "2",
          name: "Poopi",
          class: "+2",
          age: 17,
          email: "poopi@example.com",
          address: "456 Second Street",
          parent: "Mr. Vijay Poopi",
          image: "/images/Dashbord/profie.webp",
          PhoneNumber: "53201230125",
          className: "Class A",
          studentID: "123FGS",
          batchName: "Al -2021",
          ParentNumber: "956232646",
        },
        {
          id: "3",
          name: "Maya",
          class: "10",
          age: 16,
          email: "maya@example.com",
          address: "789 Third Street",
          parent: "Mr. Arun Maya",
          image: "/images/Dashbord/profie.webp",
          PhoneNumber: "53201230125",
          className: "Class A",
          studentID: "123FGS",
          batchName: "Al -2022",
          ParentNumber: "5231542352",
        },
      ];
      const foundStudent = students.find((student) => student.id === id);
      setStudent(foundStudent || null);
    };

    if (id) fetchStudent();
  }, [id]);

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
        <div className="bg-white shadow-lg rounded-lg flex-shrink-0 w-full lg:w-1/3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center rounded-t-lg">
            <img
              src={student.image}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full border-4 border-white"
            />
            <h1 className="text-2xl font-bold mt-4">{student.name}</h1>
            <p className="text-lg">{student.class}</p>
            <p className="text-sm mt-2">{`Student ID: ${student.studentID}`}</p>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium text-sm">Email</label>
              <p className="text-gray-900">{student.email}</p>
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Phone</label>
              <p className="text-gray-900">{student.PhoneNumber}</p>
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Parent</label>
              <p className="text-gray-900">{student.parent}</p>
            </div>
          </div>
        </div>

        {/* Update Form */}
        <div className="bg-white shadow-lg rounded-lg w-full lg:w-2/3 p-8">
          <h2 className="text-2xl font-semibold mb-6">Update Information</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium text-sm">Name</label>
              <input
                type="text"
                defaultValue={student.name}
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
                defaultValue={student.PhoneNumber}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Parent Name</label>
              <input
                type="text"
                defaultValue={student.parent}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Parent Number</label>
              <input
                type="text"
                defaultValue={student.ParentNumber}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Batch Name</label>
              <input
                type="text"
                defaultValue={student.batchName}
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
            <div>
              <label className="block text-gray-700 font-medium text-sm">Age</label>
              <input
                type="number"
                defaultValue={student.age}
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
