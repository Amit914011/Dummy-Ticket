import React, { useState } from 'react';

import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import contact from '../../assets/contactus.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Input validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(); // Call validate
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true); // Show loading

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxDqN-T0yv5KBlGW-4spxpw_Jm9sPYECdmkVH3D-4kDyRqxkm8HxRPQmneOHoOl-SZF/exec';

      await fetch(scriptUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors',
      });

      // Reset form and handle success
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });
      setErrors({});
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false); // End loading state
    }
  };

  return (
    <>
      <div className="container mx-auto p-24">
        <h1 className="text-4xl font-bold text-center mb-6">Let's Connect and Get to Know Each Other</h1>
        <p className="text-center text-lg mb-10">Feel free to reach out to us through any of the following options.</p>

        <div className="flex flex-col md:flex-row justify-between gap-6 p-20">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaPhone className="text-3xl mb-4 text" />
            <h2 className="text-2xl font-semibold mb-2">Call Us</h2>
            <p className="mb-4">We are available 24/7 to answer your calls.</p>
            <button className="background text-white px-4 py-2 rounded">+123 456 7890</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaEnvelope className="text-3xl mb-4 text" />
            <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
            <p className="mb-4">Feel free to send us an email anytime.</p>
            <button className="background text-white px-4 py-2 rounded">contact@example.com</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex space-x-4 mb-4">
              <FaFacebook className="text-3xl text" />
              <FaTwitter className="text-3xl text" />
              <FaInstagram className="text-3xl text" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
            <p className="mb-4">Connect with us on social media for updates.</p>
            <button className="background text-white px-4 py-2 rounded">Follow</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
                  placeholder="Enter your name"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-lg mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-lg mb-2 font-medium">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
                  placeholder="Enter your mobile number"
                  required
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>

              <div>
                <label className="block text-lg mb-2 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32B57A]"
                  placeholder="Enter your message"
                  rows="3"
                  required
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full background text-white py-3 px-6 rounded-lg transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          <div className="flex justify-center p-28 items-center">
            <img src={contact} alt="Contact Us" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
