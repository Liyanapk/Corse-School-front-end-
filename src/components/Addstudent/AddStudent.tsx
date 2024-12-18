'use client'
import * as React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';



const AddStudent = () => {
  const router = useRouter();  

  const handleBackClick = () => {
    router.back();  
  };



  const [image, setImage] = useState<string>('/images/avatarImage/avatar_image.webp'); // Default profile image

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



  const classes = [
    {
      id:'1',
      class:'Class A'
    },
    {
      id:'2',
     class:'Class B'
    },
    {
      id:'3',
      class:'Class C'
    },
    {
      id:'4',
      class:'Class D'
    },
  ];

  return (
    <div className="flex flex-col w-full h-full items-center px-20 sm:px-20 md:px-8 mt-2 overflow-x-hidden">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
        
        <div className="flex items-center mb-4 cursor-pointer" onClick={handleBackClick}>
          <ArrowBackIcon className="text-gray-800" />
        </div>

        <Typography variant="h4" component="h1" className="text-center font-bold mb-4 text-gray-600 " >
          Add New Student
        </Typography>


    <div className="flex flex-col items-center">
      <label className="relative cursor-pointer">
        <img
          src={image}
          alt="Student Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-blue-200 shadow-lg"
        />
       
        <input
          type="file"
          accept="image"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
      </label>
      <p className="text-sm text-gray-500 mt-2">Click to upload image</p>
    </div>


        <form className="space-y-2">
          <div>
            <TextField
              fullWidth
              label="Student First Name"
              variant="outlined"
              type="text"
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Student Last Name"
              variant="outlined"
              type="text"
            />
          </div>
          


          <div>
            <TextField
              fullWidth
              label="Student Email"
              variant="outlined"
              type="email"
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="DOB"
              variant="outlined"
              type="number"
            />
          </div>

          <div>
            <TextField
              fullWidth
              label="Age"
              variant="outlined"
              type="number"
            />
          </div>

          <div>
            <TextField
              fullWidth
              label="Student Address"
              variant="outlined"
              type="text"
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Student Number"
              variant="outlined"
              type="text"
            />
          </div>

          <div>
            <TextField
              fullWidth
              label="Parent Name"
              variant="outlined"
              type="text"
            />
          </div>

          <div>
            <TextField
              fullWidth
              label="Parent Number"
              variant="outlined"
              type="text"
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Student Phone"
              variant="outlined"
              type="password"
            />
          </div>
   
          <div>
          <TextField
          fullWidth
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select class"
        >
          {classes.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.class}
            </MenuItem>
          ))}
        </TextField>
          </div>

          <div>
          <TextField
              fullWidth
              label="Student ID"
              variant="outlined"
              type="password"
            />
          </div>
          <div>
          <TextField
              fullWidth
              label="Batch ID"
              variant="outlined"
              type="password"
            />
          </div>
          
          

          <div>
            <TextField
              fullWidth
              label="Student Password"
              variant="outlined"
              type="password"
            />
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="w-full sm:w-auto"
            >
              Add Student
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

export default AddStudent;
