"use client";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AxiosInstance from '../../utils/axiosInstance';
import Cookies from 'js-cookie';
import Image from "next/image";

interface AdminData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  dob: string;
  password: string;
  role: string;
  profile_pic: string;
}

const ViewAdmin = ({ params }: { params: { _id: string } }) => {
  const router = useRouter();

  const defaultImage = "/images/avatarImage/avatar_image.webp";
  const [image, setImage] = useState<string>(defaultImage);
  const fileInput = useRef<HTMLInputElement>(null);
  const [admin, setAdmins] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  const { _id } = params;

  useEffect(() => {
    const fetchAdmins = async () => {
      const token = Cookies.get('authToken');
      if (!token) {
        setError('No authentication token found');
        setLoading(false);
        return;
      }

      try {
        const response = await AxiosInstance.get(`/api/v1/admin/${_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setAdmins(response.data.data);
        } else {
          console.error("Failed to fetch admin data");
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (_id) fetchAdmins();
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

  if (!admin) {
    return <div>Admin not found</div>;
  }

  const imageURL = `http://localhost:5000/${admin.profile_pic}`;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => router.push("/admin/admins")}
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
            <Image
              src={imageURL}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full border-4 border-white"
              width={200}
              height={100}
            />
            <h1 className="text-2xl font-bold mt-4">
              {admin.first_name} {admin.last_name}
            </h1>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            {/* Email Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Email</label>
              <p className="text-gray-900 h-5">{admin.email || 'N/A'}</p>
            </div>
            {/* Phone Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Phone</label>
              <p className="text-gray-900 h-5">{admin.phone || 'N/A'}</p>
            </div>
            {/* Status Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Status</label>
              <p className="text-gray-900 h-5">{admin.status || 'N/A'}</p>
            </div>
            {/* DOB Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">DOB</label>
              <p className="text-gray-900 h-5">{admin.dob || 'N/A'}</p>
            </div>
            {/* Role Box */}
            <div className="border p-4 bg-gray-50 rounded-lg shadow-sm">
              <label className="block text-gray-700 font-medium text-sm">Role</label>
              <p className="text-gray-900 h-5">{admin.role || 'N/A'}</p>
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
                <Image
                  src={imageURL}
                  width={24}
                  height={24}
                  alt="admin Profile"
                  className="md:w-32 md:h-32 rounded-full border-2 border-blue-200 shadow-lg"
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
                defaultValue={admin.first_name}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Last Name</label>
              <input
                type="text"
                defaultValue={admin.last_name}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm">Email</label>
              <input
                type="email"
                defaultValue={admin.email}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Phone Number</label>
              <input
                type="text"
                defaultValue={admin.phone}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm">Status</label>
              <input
                type="text"
                defaultValue={admin.status}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">DOB</label>
              <input
                type="text"
                defaultValue={admin.dob}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm">Role</label>
              <input
                type="text"
                defaultValue={admin.role}
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

export default ViewAdmin;
