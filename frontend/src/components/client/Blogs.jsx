import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';

// Dummy blog data
const blogs = [
  {
    id: 1,
    title: 'How to Learn React for Beginners',
    content: 'React is a popular JavaScript library for building user interfaces. In this guide, we’ll go through the basics of React and how to get started...',
    imageUrl: blog1,
    link: '/blogs/react-for-beginners',
  },
  {
    id: 2,
    title: 'Understanding Tailwind CSS for Fast Prototyping',
    content: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed...',
    imageUrl: blog2,
    link: '/blogs/tailwind-css-for-fast-prototyping',
  },
  {
    id: 3,
    title: 'Why JavaScript is the Future of Web Development',
    content: 'JavaScript has grown to be one of the most popular programming languages in the world. Its versatility and widespread usage...',
    imageUrl: blog3,
    link: '/blogs/javascript-future',
  },
];

const latestBlogs = [
  {
    id: 1,
    title: 'Learn JavaScript in 2024',
    link: '/blogs/learn-javascript',
  },
  {
    id: 2,
    title: 'Understanding Flexbox in CSS',
    link: '/blogs/flexbox-guide',
  },
  {
    id: 3,
    title: 'How to Use React Hooks',
    link: '/blogs/react-hooks',
  },
];

export default function BlogSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      easing: 'ease-in-out', // Easing style
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* First Column: Blog List */}
        <div className="md:col-span-2">
          <h1
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            data-aos="fade-up" // AOS animation
          >
            Latest Blogs
          </h1>
          <div className="grid grid-cols-1 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                data-aos="fade-up" // AOS animation
              >
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-[300px] object-cover" // Set fixed height with object-cover to maintain aspect ratio
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.content}</p>
                  <Link
                    to={`/blogpage/${blog.id}`}
                    className="text-blue-600 font-medium hover:text-blue-400"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column: Sidebar */}
        <div className="md:col-span-1 space-y-8">
          
          {/* Filter/Search Section */}
          <div className="bg-white p-4 shadow-lg rounded-lg" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4">Search Blog</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Latest Blogs Section */}
          <div className="bg-white p-4 shadow-lg rounded-lg" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4">Latest Blogs</h3>
            <ul className="space-y-4">
              {latestBlogs.map((blog) => (
                <li key={blog.id}>
                  <Link
                    to={blog.link}
                    className="text-blue-600 font-medium hover:text-blue-400"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="bg-white p-4 shadow-lg rounded-lg" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaFacebook className="text-2xl" /> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <FaTwitter className="text-2xl" /> {/* Twitter Icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <FaInstagram className="text-2xl" /> {/* Instagram Icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500">
                <FaYoutube className="text-2xl" /> {/* YouTube Icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
