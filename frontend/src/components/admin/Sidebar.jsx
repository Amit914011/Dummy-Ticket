import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="md:hidden flex justify-between items-center p-5 bg-gray-900 text-white">
        {/* <h1 className="text-xl font-bold">Your Logo</h1> */}
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white p-5 z-20 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`} // Sidebar is hidden on mobile, visible on md+ screens
      >
        {/* Logo Section */}
        <div className="mb-10">
          <img src="your-logo-url.png" alt="Logo" className="h-16 mx-auto" />
        </div>

        {/* Exchange Rates Section */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Exchange Rates</h2>
          <Link
            to="/admin/b2cadmin"
            className="flex justify-between items-center bg-gray-700 p-3 rounded-md mb-5"
          >
            Change Rate B2C
          </Link>
          <Link
            to="/admin/b2badmin"
            className="flex justify-between items-center bg-gray-700 p-3 rounded-md"
          >
            Change Rate B2B
          </Link>
          <Link
            to="/"
            className="flex justify-center items-center bg-gray-700 p-3 rounded-md mt-5"
          >
            Log Out
          </Link>
        </div>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
