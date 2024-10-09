import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const user = {
    name: "Admin Login",
    profileImage: "https://via.placeholder.com/40" // Replace with actual image URL
  };

  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* User Info Section */}
      <div className="flex items-center space-x-3">
      <FaRegUserCircle className="text-3xl"/>
        <span className="text-lg">{user.name}</span>
      </div>
    </header>
  );
};

export default Header;
