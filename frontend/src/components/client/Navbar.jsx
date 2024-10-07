import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } fixed w-full top-0 z-50 transition-all duration-300 ease-in-out `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold black uppercase ">
         <a href="" > Dummy Ticket</a>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-8 text-black font-bold">
          <Link to="/b2b" className=" transition duration-300">
            B2B
          </Link>
          <Link to="/blogs" className=" transition duration-300">
            Blog
          </Link>
          <Link to="/faqs" className=" transition duration-300">
            FAQs
          </Link>
        </div>

        {/* Login Button Section */}
        <div className="hidden md:flex">
          <button className="bg-[#32B57A]  text-xl text-white px-4 py-2 rounded-md hover:bg-[#32B57A] transition duration-300">
            <Link to='/login'>Login</Link>
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl text-gray-800" />
            ) : (
              <FaBars className="text-2xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 transition duration-300">
          <Link
            to="/b2b"
            className="block py-2 text-black transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            B2B
          </Link>
          <Link
            to="/blogs"
            className="block py-2 text-black transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/faqs"
            className="block py-2 text-black transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            FAQs
          </Link>
          <Link
            to="/login"
            className="block py-2 text-white text-xl rounded-lg transition duration-300 background text-center "
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
