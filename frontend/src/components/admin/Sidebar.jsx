import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoTicket } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: <IoTicket />, label: "Ticket", link: "/admin/ticket" },
    { icon: <IoMdHelpCircle />, label: "Help", link: "/admin/help" },
    { icon: <RiLogoutCircleRLine />, label: "Logout", link: "/" },
  ];

  const handleLogout = (item) => {
    if (item.label === "Logout") {
      localStorage.removeItem("token")
    }else return true 

  }






  return (
    <div className={` bg-gray-800 text-white  ${isCollapsed ? "w-16" : "w-64"} h-screen transition-all duration-300`}>
      {/* Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="text-xl md:text-2xl p-4 focus:outline-none hover:bg-gray-700"
      >
        <AiOutlineMenu />
      </button>

      {/* Menu Items */}
      <ul className="flex flex-col space-y-2">
        {menuItems.map((item, index) => (
          <li key={index} className="block items-center w-full" onClick={() => handleLogout(item)}>
            <Link
              to={item.link}
              className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md"
            >
              <span className="md:text-xl">{item.icon}</span>
              {!isCollapsed && <p className="text-sm w-full block">{item.label}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
