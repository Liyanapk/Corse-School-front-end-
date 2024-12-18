'use client';
import * as React from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import { useState, useRef } from "react";
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddTeacher = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const defaultImage = '/images/avatarImage/avatar_image.webp';
  const [image, setImage] = useState<string>(defaultImage); // Default profile image
  const fileInput = useRef<HTMLInputElement>(null); // Create a reference for the file input

  // Handle file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Ensure file exists
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result); // Set the image preview
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset the image and file input
  const resetImage = () => {
    setImage(defaultImage); // Reset to default image
    if (fileInput.current) {
      fileInput.current.value = ''; // Reset the input field
    }
  };

  const classes = [
    { id: '1', class: 'Class A' },
    { id: '2', class: 'Class B' },
    { id: '3', class: 'Class C' },
    { id: '4', class: 'Class D' },
  ];

  return (
    <div className="flex flex-col w-full h-full items-center px-20 sm:px-20 md:px-8 mt-2 overflow-x-hidden">
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
          className="text-center font-bold mb-4 text-gray-600 "
        >
          Add New Teacher
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
              ref={fileInput} // Attach the reference to the input
            />
          </label>
          <button
            className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm py-2 px-2 hover:opacity-90 shadow-md transition-all duration-300"
            onClick={resetImage}
          >
            Change Image
          </button>
        </div>

        <form className="space-y-2 mt-8">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teacher First Name"
                variant="outlined"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teacher Last Name"
                variant="outlined"
                type="text"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teacher Email"
                variant="outlined"
                type="email"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    label="Date of Birth"
                    format="YYYY/MM/DD"
                    defaultValue={dayjs('2022-04-17')}
                    sx={{ width: '100%' }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Age" variant="outlined" type="number" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teacher Address"
                variant="outlined"
                type="text"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teacher Phone"
                variant="outlined"
                type="text"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Select"
                helperText="Please select class"
              >
                {classes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.class}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teacher ID"
                variant="outlined"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Batch ID"
                variant="outlined"
                type="text"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teacher Password"
                variant="outlined"
                type="password"
              />
            </Grid>
          </Grid>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="w-full sm:w-auto"
            >
              Add Teacher
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              className="w-full sm:w-auto"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
