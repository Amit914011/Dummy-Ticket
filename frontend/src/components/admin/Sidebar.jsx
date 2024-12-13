import React, { useState } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { FaHistory, FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: <AiFillHome />, label: "Home", link: "/home" },
    { icon: <MdSubscriptions />, label: "Subscriptions", link: "/subscriptions" },
    { icon: <MdVideoLibrary />, label: "Library", link: "/library" },
    { icon: <FaHistory />, label: "History", link: "/history" },
    { icon: <FaUserCircle />, label: "Profile", link: "/profile" },
    { icon: <RiLogoutCircleRLine />, label: "Logout", link: "/logout" },
  ];

  return (
    <div className={`flex flex-col bg-gray-800 text-white ${isCollapsed ? "w-16" : "w-64"} h-screen transition-all duration-300`}>
      {/* Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="text-2xl p-4 focus:outline-none hover:bg-gray-700"
      >
        <AiOutlineMenu />
      </button>

      {/* Menu Items */}
      <ul className="flex flex-col space-y-2">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <a
              href={item.link}
              className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md"
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && <span className="md:text-sm">{item.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
