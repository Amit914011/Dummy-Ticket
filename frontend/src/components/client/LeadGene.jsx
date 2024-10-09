import React, { useState } from 'react';

const LeadGene = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    from: '',
    to: '',
    departureDate: '',
    adults: '',
    children: '',
    travelClass: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeButton, setActiveButton] = useState(''); // Track which button is clicked

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.number) formErrors.number = 'Number is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.from) formErrors.from = 'Departure location is required';
    if (!formData.to) formErrors.to = 'Destination is required';
    if (!formData.departureDate) formErrors.departureDate = 'Departure date is required';
    if (!formData.adults) formErrors.adults = 'Number of adults is required';
    if (!formData.travelClass) formErrors.travelClass = 'Travel class is required';
    
    return formErrors;
  };

  const handlePayment = async (type) => {
    const amount = type === 'B2C' ? 50000 : 100000; // Amount in paise (₹500 for B2C, ₹1000 for B2B)

    // Call the Razorpay payment gateway popup
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
      amount: amount, // Amount in paise (100000 paise = Rs 1000)
      currency: 'INR',
      name: formData.name,
      description: `Dummy Ticket Purchase (${type})`,
      image: 'https://your-logo-url.com/logo.png', // Add your company logo URL here
      handler: function (response) {
        // Handle the payment response
        setSuccessMessage(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.number,
      },
      theme: {
        color: '#32B57A',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setActiveButton(type); // Set which button is clicked

      try {
        // Here you can handle form submission (if required) and then open the payment gateway
        await handlePayment(type); // Open the Razorpay payment popup
      } catch (err) {
        setErrorMessage(err.message || 'There was an error submitting the form. Please try again.');
      } finally {
        setActiveButton(''); // Reset active button after the request
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className='w-[100%] mb-2 flex justify-center items-center bg-gray-200 rounded'>
        <button
          className={`mr-4 p-2 px-7 rounded ${activeButton === 'B2C' ? 'bg-[#32B57A] text-white' : 'bg-white'}`}
          onClick={() => setActiveButton('B2C')}
        >
          B2C
        </button>
        <button
          className={`p-2 px-7 rounded ${activeButton === 'B2B' ? 'bg-[#32B57A] text-white' : 'bg-white'}`}
          onClick={() => setActiveButton('B2B')}
        >
          B2B
        </button>
      </div>

      <form className="bg-white shadow-md rounded px-8 py-6 w-full">
        <h2 className="text-2xl font-bold mb-4">Get your Dummy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Name */}
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Number */}
          <div>
            <label className="block mb-2">Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* From */}
          <div>
            <label className="block mb-2">From</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.from && <p className="text-red-500 text-sm">{errors.from}</p>}
          </div>

          {/* To */}
          <div>
            <label className="block mb-2">To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.to && <p className="text-red-500 text-sm">{errors.to}</p>}
          </div>

          {/* Departure Date */}
          <div>
            <label className="block mb-2">Departure Date</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.departureDate && <p className="text-red-500 text-sm">{errors.departureDate}</p>}
          </div>

          {/* Adults */}
          <div>
            <label className="block mb-2">Adults</label>
            <input
              type="number"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.adults && <p className="text-red-500 text-sm">{errors.adults}</p>}
          </div>

          {/* Children */}
          <div>
            <label className="block mb-2">Children</label>
            <input
              type="number"
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Travel Class */}
          <div>
            <label className="block mb-2">Travel Class</label>
            <select
              name="travelClass"
              value={formData.travelClass}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
            {errors.travelClass && <p className="text-red-500 text-sm">{errors.travelClass}</p>}
          </div>
        </div>

        {/* Submit buttons */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
            onClick={(e) => handleSubmit(e, 'B2C')}
          >
            Pay ₹500 for B2C
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={(e) => handleSubmit(e, 'B2B')}
          >
            Pay ₹1000 for B2B
          </button>
        </div>

        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LeadGene;
