import React, { useEffect } from 'react'
import { BiPhoneCall } from "react-icons/bi";
import {FaMapMarkerAlt   } from "react-icons/fa";
import { IoCall,IoTimeSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CiCircleCheck } from "react-icons/ci";
import lata from '../../assets/iata.jpg'
import ssl from '../../assets/ssl-secured.jpg'
import payment from '../../assets/payment-icons.jpg'
import dmca from '../../assets/dmca.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


export default function Footer() {
     // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  // Social media links here
  const socialMedia = [
    { name: 'Facebook', icon: <FaFacebookF />, url: 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
  ];





  // Footer MenuBar here
  const menuItems = [
    { name: 'Contact Us', link: '/contactus' },
    { name: 'About Us', link: '/aboutus' },
    { name: 'Sample', link: '/sample' },
    { name: 'Terms & Conditions', link: '/termandcondition' },
    { name: 'Sitemap', link: '/sitemap' },
    { name: 'Refund Policy', link: '/termandcondition' },
    { name: 'Privacy Policy', link: '/termandcondition' },
  ];

  return (
    <div>
      {/* Banner Image section */}

<div className='w-full h-auto pb-5 bg-[#F9FAFB] pt-5'>
      <div className='w-full md:w-[80%] h-auto md:h-[250px] border m-auto rounded-lg flex flex-col md:flex-row' 
           style={{
              backgroundImage: "url('https://dummy-tickets.com/public/theme/front/assets/images/call-to-pric-bg-1.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: 'cover',
              backgroundPosition: "center"
           }}>
        <div className='flex flex-col justify-center p-5 md:p-10'>
          <h1 className='text-xl md:text-4xl font-bold text-white pt-5 md:pt-16'>Get Your Flight Reservation Today</h1>
          <div className='flex items-center mt-4'>
            <BiPhoneCall className='w-12 h-12 bg-white text-[#31B57B] p-3 rounded-full'/>
            <div className='pl-4'>
              <p className='text-white text-lg font-bold'>Get In Touch</p>
              <p className='text-white'>Email: info@dummy-tickets.com & Phone: +917700006525</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center md:justify-end pt-5 md:pt-0 md:ml-52'>
          <img src="https://dummy-tickets.com/public/theme/front/assets/images/person-selling-dummy-ticket.webp" alt="Person" className='w-60 md:w-48'/>
        </div>
      </div>
    </div>

{/* About us Section */}
<div className="flex justify-center items-center  bg-gradient-to-r py-10 bg-[#F9FAFB]">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
        
        {/* Post Address Card */}
        <div
          className="max-w-sm w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          data-aos="fade-up" // AOS fade-up animation
        >
          <div className="flex items-center">
            <FaMapMarkerAlt  className="text-4xl p-2 rounded-full bg-[#32B57A] text-white mr-4 shadow-md" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Post Address</h1>
              <p className="text-gray-600">
                203, 2-A/3, Kundan Mansion,<br /> Asaf Ali Road, New Delhi - 110002
              </p>
            </div>
          </div>
        </div>

        {/* General Enquiries Card */}
        <div
          className="max-w-sm w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          data-aos="fade-up" // AOS fade-up animation
          data-aos-delay="200" // Add delay to this card
        >
          <div className="flex items-center">
            <IoCall  className="text-4xl p-2 rounded-full bg-[#32B57A] text-white mr-4 shadow-md" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">General Enquiries</h1>
              <p className="text-gray-600">
                Email: info@dummy-tickets.com<br />
                Phone: +91 1234567890
              </p>
            </div>
          </div>
        </div>

        {/* Operation Hours Card */}
        <div
          className="max-w-sm w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          data-aos="fade-up" // AOS fade-up animation
          data-aos-delay="400" // Add more delay to this card
        >
          <div className="flex items-center">
            <IoTimeSharp className="text-4xl p-2 rounded-full bg-[#32B57A] text-white mr-4 shadow-md" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Operation Hours</h1>
              <p className="text-gray-600">
                24 hours in a day,<br />
                7 days in a week
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>



{/* Social Medial Section Here */}
<div className="flex justify-center items-center p-5 bg-[#F9FAFB]">
      <div className="flex space-x-6">
        {socialMedia.map((media, index) => (
          <div key={index} className="relative group">
            {/* Icon Button with Link */}
            <a href={media.url} target="_blank" rel="noopener noreferrer">
              <button
                className="text-2xl p-4 bg-[#32B57A] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
                aria-label={media.name}
              >
                {media.icon}
              </button>
            </a>

            {/* Tooltip */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-14 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out translate-y-2 bg-[#32B57A] text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg">
              {media.name}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col items-center justify-center  py-10 bg-[#F9FAFB]">
      {/* Security Logos Section */}
      <div className="flex space-x-4 mb-6" data-aos="fade-up">
        <img src={dmca} alt="DMCA Protection" className="h-14 w-auto" />
        <img src={lata} alt="IATA" className="h-14 w-auto" />
        <img src={ssl} alt="SSL Secured" className="h-14 w-auto" />
      </div>

      {/* Payment Acceptance Text */}
      <div className="text-center mb-6" data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-xl  text-gray-800">We Accept Payments</h1>
      </div>

      {/* Payment Icons Section */}
      <div data-aos="fade-up" data-aos-delay="400">
        <img src={payment} alt="Payment Methods" className="h-10 w-auto" />
      </div>
    </div>



{/* Footer Menubar Here */}
<div className=" p-4 rounded-lg bg-[#F9FAFB]">
      <ul className=" flex justify-center items-center flex-wrap">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.link} 
              className="block text-gray-800 transition duration-300 ease-in-out p-2 rounded"
            ><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <h1 className="text-sm text-center text-gray-500">CopyWrite © 2024 Dummy Tickets. All Rights Reserved.
     <br/> Powered by <a href="https://techxpert.in">Techxpert</a> </h1>
    </div>


    </div>
  )
}
