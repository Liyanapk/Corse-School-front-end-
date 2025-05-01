"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AxiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

const Profile = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdminProfile = async () => {
      const token = Cookies.get("authToken");
      if (!token) {
        setError("Unauthorized. Please log in.");
        return;
      }

      try {
        // Decode the token to get the adminId
        const decodedToken = jwtDecode(token);
        const adminId = decodedToken.id; // Assuming the token contains 'id'

        // Send request to the backend to fetch admin details using adminId
        const response = await AxiosInstance.get(`/api/v1/admin/${adminId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAdmin(response.data.data); // Assuming the backend returns admin details under 'data'
      } catch (error) {
        console.error("Error fetching admin profile:", error);
        setError("Failed to fetch profile. Please try again.");
      }
    };

    fetchAdminProfile();
  }, []);

  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!admin) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={admin.profile_pic || "/images/avatarImage/avatar_image.webp"}
              alt="Admin Profile"
              width={200}
              height={200}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                {admin.first_name} {admin.last_name}
              </h1>
              <p className="text-sm md:text-base font-medium">{admin.email}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Phone Number:</span>
            <span className="text-gray-800 font-semibold">{admin.phone || "N/A"}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Age:</span>
            <span className="text-gray-800 font-semibold">{admin.age || "N/A"}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Status:</span>
            <span className="text-gray-800 font-semibold">{admin.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
