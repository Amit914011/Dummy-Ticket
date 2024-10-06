import React from 'react';
import { Link } from 'react-router-dom';
import { CiCircleCheck } from "react-icons/ci";

export default function SiteMap() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-6">Sitemap</h1>
      <ul className="space-y-4 text-lg">
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/" className="text-blue-600 ">Home</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/aboutus" className="text-blue-600 ">About Us</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/b2b" className="text-blue-600 ">B2B</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/sample" className="text-blue-600 ">Sample</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/blogs" className="text-blue-600 ">Blogs</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/contactus" className="text-blue-600 ">Contact Us</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/termandcondition" className="text-blue-600 ">Terms & Conditions</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/termandcondition" className="text-blue-600 ">Privacy Policy</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/check-status" className="text-blue-600 ">Check Status</Link>
        </li>
        <li><CiCircleCheck className='text-2xl inline mr-2 text-[#32B57A]' />
          <Link to="/faqs" className="text-blue-600 ">FAQs</Link>
        </li>
      </ul>
    </div>
  );
}
