"use client";

import * as React from "react";
import { TextField, Button, Typography, MenuItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AxiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import dayjs, { Dayjs } from 'dayjs';




interface ClassData {
    name: string;
    _id:number;
}

const AddStudent = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const defaultImage = "/images/avatarImage/avatar_image.webp";
  const [image, setImage] = useState<string>(defaultImage);
  const fileInput = useRef<HTMLInputElement>(null);

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

  const [classess, setClassess] = useState<ClassData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    parent_name: "",
    parent_number: "",
    gender: "",
    status:"",
    address: "",
    dob: null as Dayjs | null,
    batch: "",
    image:null,
  });

  useEffect(() => {
    const fetchClass = async () => {
      const token = Cookies.get("authToken");
      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const response = await AxiosInstance.get("/api/v1/batch", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setClassess(response.data.data);
      
        } else {
          console.error("Failed to fetch class data");
        }
      } catch (error) {
        console.error("Error fetching class data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClass();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    if (name) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, 
      }));
    }
  };
  
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const token = Cookies.get("authToken");
  
    if (!token) {
      console.error("No token found. Cannot add student.");
      return;
    }
  
    const payload = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "image") {
        if (fileInput.current?.files?.[0]) {
          payload.append(key, fileInput.current.files[0]); // Append file for image
        } else {
          payload.append(key, ""); // Append an empty string if no file is selected
        }
      } else {
        const value = formData[key as keyof typeof formData];
        if (value !== null && value !== undefined) {
          payload.append(
            key,
            dayjs.isDayjs(value) ? value.format("YYYY-MM-DD") : String(value)
          );
        }
      }
    });
  
    try {
      const response = await AxiosInstance.post("/api/v1/student", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Student added successfully:", response.data);
  
      if (response.data.message === "student created successfully") {
        window.alert("Student added successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          parent_name: "",
          parent_number: "",
          gender: "",
          status: "",
          address: "",
          dob: null,
          batch: "",
          image: null,
        });
        resetImage();
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
};

  


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!classess) {
    return <div>Student not found</div>;
  }

  
  

  return (
    <div className="flex flex-col w-full h-full items-center px-8 sm:px-10 md:px-10 mt-2 overflow-x-hidden">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
        <div
          className="flex items-center mb-4 cursor-pointer"
          onClick={handleBackClick}
        >
          <ArrowBackIcon className="text-gray-800" />
        </div>

        <Typography
          variant="h4"
          component="h1"
          className="text-center font-bold mb-6 text-gray-600"
        >
          Add New Student
        </Typography>
          {/* Image Upload Section */}
  <div className="col-span-1 md:col-span-2 flex flex-col items-center">
    <label className="relative cursor-pointer">
      <img
        src={image || defaultImage} alt="User Image"
        width={24}
        height={24}
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

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            type="email"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DemoContainer components={["DatePicker"]}>
    <DatePicker
      label="Date of Birth"
      value={formData.dob} // Ensure this is a Dayjs object
      onChange={(date) =>
        setFormData((prevData) => ({
          ...prevData,
          dob: date, // Store as Dayjs
        }))
      }
      format="YYYY/MM/DD"
      slotProps={{
        textField: {
          placeholder: "YYYY/MM/DD",
        },
      }}
      sx={{ width: "100%" }}
    />
  </DemoContainer>
</LocalizationProvider>
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Parent Name"
            name="parent_name"
            value={formData.parent_name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Parent Number"
            name="parent_number"
            value={formData.parent_number}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            fullWidth
            name="batch"
            select
            label="Batch"
            value={formData.batch}
            onChange={handleChange}
            helperText="Please select batch"
          >
       {classess.map((option) => (
  <MenuItem key={option._id} value={option._id}>
    {option.name}
  </MenuItem>
))}


          </TextField>
          <TextField
            fullWidth
            name="gender"
            select
            label="Gender"
            value={formData.gender}
            onChange={handleChange}
            helperText="Please select Gender"
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
             <TextField
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </form>

        <div className="flex justify-center gap-4 mt-20">
          <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
            Add Student
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setFormData({
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
              parent_name: "",
              parent_number: "",
              gender: "",
              address: "",
              dob: null as Dayjs | null,
              status:"",
              batch: "",
              image:null
            })}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
