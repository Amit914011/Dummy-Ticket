import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser, AiOutlineLock } from 'react-icons/ai'; // Import icons
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending POST request to the API with username and password
      const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });

      // Handle success response
      // if (response.data) {
        navigate('/admin/ticket') ; // Navigate to /admin after successful login
      
      // } else {
      //   setErrorMessage('Invalid credentials');
      // }
    } catch (error) {
      // Handle error
      setErrorMessage('Login failed. Please try again.');
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[610px] bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Logo Section */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold uppercase text-[#32B57A]">Login</h1>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-center">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4 relative">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username or Email Address
            </label>
            <div className="relative">
              <AiOutlineUser className="absolute left-3 top-2/4 transform -translate-y-1/2 text-[#32B57A] font-bold" size={20} />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#32B57A] focus:border-[#32B57A] sm:text-sm"
                placeholder="Enter your username or email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <AiOutlineLock className="absolute left-3 top-2/4 transform -translate-y-1/2 text-[#32B57A]" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#32B57A] focus:border-[#32B57A] sm:text-sm"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-500 hover:text-[#32B57A]"
              >
                {showPassword ? <AiFillEyeInvisible size={20} className='text-[#32B57A]' /> : <AiFillEye size={20} className='text-[#32B57A]'/>}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#32B57A] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#32B57A] focus:outline-none focus:ring-2 focus:ring-[#32B57A] focus:ring-offset-2"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
