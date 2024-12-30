'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AxiosInstance from '../../utils/axiosInstance';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation'; // For navigation after login
import Cookies from 'js-cookie';

interface InputFieldProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'; // Add more types as necessary
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, value, onChange, required }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
    </div>
  );
};

const Login = () => {

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // For redirecting after login

  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await AxiosInstance.post('/api/v1/admin/login', {
        email: email,
        password: password,
      });
  
      setData(response.data); // Save the response data
  
      if (response.data.token) {
        Cookies.set('authToken', response.data.token, {
          expires: 1, // 1 day
          secure: process.env.NODE_ENV === 'production', // Only set secure flag in production
          sameSite: 'Strict', // Prevent CSRF
        });
      
        console.log('Token saved:', Cookies.get('authToken'));
        router.push('/admin/dashboard');
      }

      
    } catch (err) {
      // Handle the error, assert it as AxiosError
      const errorResponse = err as AxiosError<{ message: string }>;
      const errorMessage = errorResponse.response?.data.message || 'Something went wrong,  Please try Again!';
  
      if (errorMessage === 'Invalid credentials') {
        setError('Wrong details, please try again');
      } else {
        setError(errorMessage);
      }
    }
  };
  
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl flex">

        <div className="relative hidden lg:block w-1/2">
          <Image
            src="/images/logo/login_logo.jpg"
            alt="Login Background"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 p-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              height={0}
              width={120}
              className="w-auto"
            />
          </div>

          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Admin Login</h1>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-6 flex flex-col justify-center">
            <InputField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="px-6 py-2 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account?{' '}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;