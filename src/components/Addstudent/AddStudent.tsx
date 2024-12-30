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
import dayjs, { Dayjs } from "dayjs";
import { MdBatchPrediction } from "react-icons/md";


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
        [name]: value, // Dynamically update the field based on the `name` attribute
      }));
    }
  };
  
  


 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Check for the token in cookies
  const token = Cookies.get("authToken"); // Adjust "token" to the actual key used in your cookies

  if (!token) {
    console.error("No token found. Cannot add student.");
    return; // Exit if no token is found
  }

  // Convert Dayjs object to string before sending to the server
  const payload = { ...formData, dob: formData.dob?.format("YYYY-MM-DD") };

  try {
    // Add token to the request headers
    const response = await AxiosInstance.post("/api/v1/student", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Student added successfully:", response.data);
   
    if (response.data.message === "student created successfully") {
      // Display success alert
      window.alert("Student added successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        parent_name: "",
        parent_number: "",
        gender: "",
        address: "",
        dob: null,
        status: "",
        batch: "",
      });

    }else{
      console.log("Something went wrong")
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
