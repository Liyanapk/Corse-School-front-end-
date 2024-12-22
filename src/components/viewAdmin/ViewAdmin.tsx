"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

interface AdminData {
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
  studentID: String;
  batchName: string;
  ParentNumber: string;
}

const ViewAdmin = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;

  const [admin, setAdmin] = useState<AdminData | null>(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      const admins = [
        {
          id: "1",
          name: "Ramanan222222",
          class: "10",
          age: 15,
          email: "ramanan@example.com",
          address: "123 Main Street, Cityville",
          parent: "Mr. Suresh Ramanan",
          image: "/images/Dashbord/profie.webp",
          PhoneNumber: "53201230125",
          className: "calass A",
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
          className: "calass A",
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
          className: "calass A",
          studentID: "123FGS",
          batchName: "Al -2022",
          ParentNumber: "5231542352",
        },
      ];
      const foundAdmin = admins.find((admin) => admin.id === id);
      setAdmin( foundAdmin|| null);
    };

    if (id) fetchAdmin();
  }, [id]);

  if (!admin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 mt-20">
      <div className="w-full max-w-2xl flex items-center mb-4">
        <button
          onClick={() => router.push("/admin/admins")}
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
              src={admin.image}
              alt={`student Profile`}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{admin.name}</h1>
              <p className="text-sm md:text-base font-medium">{`Class: ${admin.class}`}</p>
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
              {admin.studentID}
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Age:</span>
            <span className="text-gray-800 font-semibold">{admin.age}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Email:</span>
            <span className="text-blue-600 font-semibold">{admin.email}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Address:</span>
            <span className="text-gray-800 font-semibold">
              {admin.address}
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Phone Number:</span>
            <span className="text-gray-800 font-semibold">
              {admin.PhoneNumber}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Parent Name:</span>
            <span className="text-gray-800 font-semibold">
              {admin.parent}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Parent Number:</span>
            <span className="text-gray-800 font-semibold">
              {admin.ParentNumber}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Batch Name:</span>
            <span className="text-gray-800 font-semibold">
              {admin.batchName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAdmin;
