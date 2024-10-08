import React from "react";

const Header = () => {
  const user = {
    name: "John Doe",
    profileImage: "https://via.placeholder.com/40" // Replace with actual image URL
  };

  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* User Info Section */}
      <div className="flex items-center space-x-3">
        <img
          src={user.profileImage}
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-lg">{user.name}</span>
      </div>
    </header>
  );
};

export default Header;
