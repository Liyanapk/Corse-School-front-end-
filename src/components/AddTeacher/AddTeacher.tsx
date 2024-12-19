'use client';
import * as React from 'react';
import { TextField, Button, Typography, MenuItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import { useState, useRef } from "react";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Select, { MultiValue, StylesConfig } from 'react-select';

const AddTeacher = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const defaultImage = '/images/avatarImage/avatar_image.webp';
  const [image, setImage] = useState<string>(defaultImage);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    setImage(defaultImage);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };

  interface SubjectOption {
    value: string;
    label: string;
  }
  
  const subjects: SubjectOption[] = [
    { value: '1', label: 'Maths' },
    { value: '2', label: 'AI' },
    { value: '3', label: 'Machine Learning' },
    { value: '4', label: 'Physics' },
  ];


//style of dropdown

const customStyles: StylesConfig<SubjectOption, true> = {
  control: (base) => ({
    ...base,
    height: '56px', // Match TextField height
    borderRadius: '4px',
    borderColor: '#c4c4c4',
    '&:hover': {
      borderColor: '#3f51b5', // Border color on hover
    },
    boxShadow: 'none',
  }),
  menu: (base) => ({
    ...base,
    zIndex: 10,
    borderRadius: '4px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#3f51b5' : state.isFocused ? '#e3f2fd' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    padding: '10px',
    '&:hover': {
      backgroundColor: '#e3f2fd',
    },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: '#e3f2fd',
    color: '#3f51b5',
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: '#3f51b5',
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: '#3f51b5',
    '&:hover': {
      backgroundColor: '#f1f1f1',
      color: '#3f51b5',
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
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label="Date of Birth"
                format="YYYY/MM/DD"
                defaultValue={dayjs('2022-04-17')}
                sx={{ width: '100%' }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField label="Address" variant="outlined" fullWidth />
          <TextField label="Phone Number" variant="outlined" fullWidth />
          <TextField label="Subject" variant="outlined" fullWidth />
         
          <Select
          defaultValue={[]}
          isMulti
          name="subjects"
          options={subjects}
          styles={customStyles}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(selectedOptions: MultiValue<SubjectOption>) => {
            console.log(selectedOptions); 
          }}
        />
          
          <TextField label="Batch ID" variant="outlined" fullWidth />
          <TextField label="Password" variant="outlined" fullWidth type="password" />
        </form>

        <div className="flex justify-center gap-4 mt-20">
          <Button variant="contained" color="primary" type="submit">
            Add Teacher
          </Button>
          <Button variant="outlined" color="secondary">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
