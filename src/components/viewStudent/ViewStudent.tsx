'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface studentData {
  id: string;
  name: string;
  class: string;
  age: number;
  email: string;
  address: string;
  guardian: string;
  image: string;
}

const ViewStudent = ({params}:{params:{ id:string}}) => {
    const router = useRouter();
    const  id  = params.id ;

    // State to hold student data
    const [student, setStudent] = useState<studentData | null>(null);

 
    

    useEffect(() => {
      const fetchStudent = async () => {
        const id = params.id; 
        const students = [
          { id: '1', name: 'Ramanan', class: '10', age: 15, email: 'ramanan@example.com', address: '123 Main Street, Cityville', guardian: 'Mr. Suresh Ramanan', image: '/images/profie.webp' },
          { id: '2', name: 'Poopi', class: '+2', age: 17, email: 'poopi@example.com', address: '456 Second Street', guardian: 'Mr. Vijay Poopi', image: '/images/profie2.webp' },
          { id: '3', name: 'Maya', class: '10', age: 16, email: 'maya@example.com', address: '789 Third Street', guardian: 'Mr. Arun Maya', image: '/images/profie3.webp' }
      ];
      const foundStudent = students.find(student => student.id === id);
      setStudent(foundStudent || null);
      };
  
      fetchStudent();
    }, [params.id]);

    if (!student) {
        return <div>Loading...</div>;
    }
    return (
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 mt-20">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center space-x-4">
            <img
              src={student.image}
              alt={`student Profile`}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{student.name}</h1>
              <p className="text-sm md:text-base font-medium">{`Class: ${student.class}`}</p>
            </div>
          </div>
  
          {/* Details Section */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center space-x-5 border-b pb-2">
              <span className="text-gray-700 font-medium text-sm md:text-base w-24">Age:</span>
              <span className="text-gray-800 font-semibold">{student.age}</span>
            </div>
  
            <div className="flex justify-between items-center space-x-5 border-b pb-2">
              <span className="text-gray-700 font-medium text-sm md:text-base w-24">Email:</span>
              <span className="text-blue-600 font-semibold">{student.email}</span>
            </div>
  
            <div className="flex justify-between items-center space-x-5 border-b pb-2">
              <span className="text-gray-700 font-medium text-sm md:text-base w-24">Address:</span>
              <span className="text-gray-800 font-semibold">{student.address}</span>
            </div>
  
            <div className="flex justify-between items-center space-x-5">
              <span className="text-gray-700 font-medium text-sm md:text-base w-24">Guardian:</span>
              <span className="text-gray-800 font-semibold">{student.guardian}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewStudent;
  