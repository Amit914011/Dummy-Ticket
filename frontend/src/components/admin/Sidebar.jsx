import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {


  return (
    <div className=" h-screen bg-gray-900 text-white p-5">
      {/* Logo Section */}
      <div className="mb-10">
        <img src="your-logo-url.png" alt="Logo" className="h-16 mx-auto" />
      </div>

      {/* Exchange Rates Section */}
      <div>
        <h2 className="text-xl font-semibold mb-5">Exchange Rates</h2>
        <Link to='/admin/b2cadmin' className="flex justify-between items-center bg-gray-700 p-3 rounded-md mb-5">Change Rate B2C</Link>
        <Link to='/admin/b2badmin' className="flex justify-between items-center bg-gray-700 p-3 rounded-md ">Change Rate B2B</Link>
      </div>
    </div>
  );
};

export default Sidebar;
