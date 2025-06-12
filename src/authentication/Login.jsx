import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/Group.png" alt="Caerus Logo" className="h-10" />
        </div>

        {/* Welcome Text */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-1">Welcome back!</h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Kindly fill in your details to login to your account
        </p>

        {/* Form */}
        <form>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 pr-10"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mb-6">
            <a href="#" className="text-sm text-yellow-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-full hover:bg-green-900 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
