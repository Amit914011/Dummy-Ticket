import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign up
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = () => {
    let validationErrors = {};

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email address is invalid';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (!isLogin && !formData.name) {
      validationErrors.name = 'Name is required';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (isLogin) {
          // Handle login submission
          const response = await axios.post('https://actl.co.in/shop/userLogin', {
            email: formData.email,
            password: formData.password,
          });

          if (response.data.success) {
            // Assuming success returns a token or user data
            console.log('Login successful:', response.data);
            navigate('/');
          } else {
            alert("You entered the wrong details");
          }
        } else {
          // Handle signup submission
          await axios.post('https://actl.co.in/shop/userSave', formData);
          console.log('Sign up data:', formData);
          setIsLogin(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-24 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-20 mb-2">
        <h2 className="text-3xl font-bold mb-6 text-center text-black ">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field for Sign Up */}
          {!isLogin && (
            <div>
              <label className="block text-black font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          )}

          {/* Email field */}
          <div>
            <label className="block text-black font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password field */}
          <div>
            <label className="block text-black font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password field for Sign Up */}
          {!isLogin && (
            <div>
              <label className="block text-black font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full background text-white py-3 rounded-md  transition duration-200"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle between Sign In and Sign Up */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-black hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
