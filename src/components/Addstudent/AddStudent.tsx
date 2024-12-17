'use client'
import * as React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation'

const AddStudent = () => {
  const router = useRouter();  

  const handleBackClick = () => {
    router.back();  
  };

  return (
    <div className="flex flex-col w-full h-full items-center px-20 sm:px-20 md:px-8 mt-10 overflow-x-hidden">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
        
        <div className="flex items-center mb-4 cursor-pointer" onClick={handleBackClick}>
          <ArrowBackIcon className="text-gray-800" />
          <Typography variant="h6" component="h2" className="ml-2 font-bold text-gray-800">
           
          </Typography>
        </div>

        <Typography variant="h4" component="h1" className="text-center font-bold mb-4 text-gray-600 " >
          Add New Student
        </Typography>

        <form className="space-y-2">
          <div>
            <TextField
              fullWidth
              label="Student Name"
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
