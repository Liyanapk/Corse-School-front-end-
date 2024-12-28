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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AxiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

interface ClassData {
  batch: {
    name: string;
  };
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

  const [classess, setClassess] = useState<ClassData | null>(null);

  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

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
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!classess) {
    return <div>Student not found</div>;
  }

  console.log(classess);

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

        <div className="flex flex-col items-center">
          <label className="relative cursor-pointer">
            <img
              src={image}
              alt="Teacher Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-blue-200 shadow-lg"
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
            className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm py-2 px-4 hover:opacity-90 shadow-md transition-all duration-300"
            onClick={resetImage}
          >
            Remove Image
          </button>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <TextField label="First Name" variant="outlined" fullWidth />
          <TextField label="Last Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth type="email" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Date of Birth"
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
          <TextField label="Phone Number" variant="outlined" fullWidth />
          <TextField label="Parent Name" variant="outlined" fullWidth />
          <TextField label="Parent Number" variant="outlined" fullWidth />
          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="DOB"
            helperText="Please select class"
          >
            {classess.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>

          {/* Gender Radio Group with consistent styling */}

          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="Gender"
            helperText="Please select Gender"
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <TextField label="Address" variant="outlined" fullWidth />
        </form>

        <div className="flex justify-center gap-4 mt-20">
          <Button variant="contained" color="primary" type="submit">
            Add Student
          </Button>
          <Button variant="outlined" color="secondary">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
