import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock email validation
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("A password reset link has been sent to your email.");
    // Perform additional actions like API call
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
      {message && (
          <p className="mt-4 text-center text-sm text-green-600 font-medium">{message}</p>
        )}
        <h2 className="text-2xl font-bold text-center text mb-4">Forgot Password</h2>
       
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full background text-white py-2 rounded-md  focus:outline-none"
          >
            Send Reset Link
          </button>
        </form>
        
        <div>
           <Link to='/login'> <p className="text-center text mt-2">Back to Login</p></Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
