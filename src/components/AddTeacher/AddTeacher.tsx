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
import Select, { MultiValue, StylesConfig } from "react-select";
import AxiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import dayjs, { Dayjs } from "dayjs";
import { log } from "console";

interface SubjectOption {
  value: number;
  label: string;
  name: string;
  _id:number;
}

const AddTeacher = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const defaultImage = "/images/avatarImage/avatar_image.webp";
  const [image, setImage] = useState<string>(defaultImage);
  const fileInput = useRef<HTMLInputElement>(null);
  const [subjects, setSubjects] = useState<SubjectOption[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dob: null as Dayjs | null,
    phone: "",
    gender: "",
    status: "",
    password: "",
    subject: "",
    address: "",
    image: null,
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
        const response = await AxiosInstance.get("/api/v1/subject", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setSubjects(response.data.data);
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

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >
  ) => {
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
      const response = await AxiosInstance.post("/api/v1/teacher", payload, {
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
          dob: null as Dayjs | null,
          phone: "",
          gender: "",
          status: "",
          password: "",
          subject: "",
          address: "",
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



  //style of dropdown

  const customStyles: StylesConfig<SubjectOption, true> = {
    control: (base) => ({
      ...base,
      height: "56px", // Match TextField height
      borderRadius: "4px",
      borderColor: "#c4c4c4",
      "&:hover": {
        borderColor: "#3f51b5", // Border color on hover
      },
      boxShadow: "none",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 10,
      borderRadius: "4px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#3f51b5"
        : state.isFocused
          ? "#e3f2fd"
          : "#fff",
      color: state.isSelected ? "#fff" : "#000",
      padding: "10px",
      "&:hover": {
        backgroundColor: "#e3f2fd",
      },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#e3f2fd",
      color: "#3f51b5",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "#3f51b5",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "#3f51b5",
      "&:hover": {
        backgroundColor: "#f1f1f1",
        color: "#3f51b5",
      },
    }),
  };

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
          Add New Teacher
        </Typography>

        <div className="col-span-1 md:col-span-2 flex flex-col items-center">
          <label className="relative cursor-pointer">
            <img
              src={image || defaultImage}
              alt="User Image"
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

        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          onSubmit={handleSubmit}
        >
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
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />

<Select
  defaultValue={[]}
  name="subject"
  isMulti
  options={subjects.map((subject) => ({
    value: subject._id,
    label: subject.name,
  }))}
  onChange={(selectedOptions) =>
    setFormData((prevData) => ({
      ...prevData,
      subject: selectedOptions.map((option) => option.value).join(","), // Store as a comma-separated string
    }))
  }
  styles={customStyles}
  className="basic-multi-select"
  classNamePrefix="select"
/>


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
            label="Status"
            variant="outlined"
            name="status"
            value={formData.status}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            type="password"
          />
        </form>

        <div className="flex justify-center gap-4 mt-20">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Add Teacher
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() =>
              setFormData({
                first_name: "",
                last_name: "",
                email: "",
                dob: null as Dayjs | null,
                phone: "",
                gender: "",
                status: "",
                password: "",
                subject: "",
                address: "",
                image: null,
              })
            }
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
