import React, { useState } from 'react';

const B2B = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    countryCode: '+91',
    mobile: '',
    email: '',
    residentialAddress: '',
    pinCode: '',
    country: '',
    agencyName: '',
    pan: '',
    agencyMobile: '',
    agencyAddress1: '',
    agencyAddress2: '',
    agencyPinCode: '',
    agencyCountry: '',
    city: '',
    state: '',
    fax: '',
    businessType: '',
    yearsInBusiness: '',
    monthlyBookingVolume: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const validationErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Basic phone number validation
    const emailRegex = /\S+@\S+\.\S+/; // Basic email validation

    if (!formData.firstName) validationErrors.firstName = 'First Name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last Name is required';
    if (!formData.mobile || !phoneRegex.test(formData.mobile)) validationErrors.mobile = 'Valid Mobile No is required';
    if (!formData.email || !emailRegex.test(formData.email)) validationErrors.email = 'Valid Email Address is required';
    if (!formData.residentialAddress) validationErrors.residentialAddress = 'Residential Address is required';
    if (!formData.pinCode) validationErrors.pinCode = 'Pin Code is required';
    if (!formData.agencyName) validationErrors.agencyName = 'Agency Name is required';
    if (!formData.pan) validationErrors.pan = 'PAN is required';
    if (!formData.agencyMobile || !phoneRegex.test(formData.agencyMobile)) validationErrors.agencyMobile = 'Valid Agency Mobile No is required';
    if (!formData.agencyAddress1) validationErrors.agencyAddress1 = 'Agency Address1 is required';
    if (!formData.agencyPinCode) validationErrors.agencyPinCode = 'Agency Pin Code is required';
    if (!formData.city) validationErrors.city = 'City is required';
    if (!formData.state) validationErrors.state = 'State/Province is required';
    if (!formData.businessType) validationErrors.businessType = 'Business Type is required';
    if (!formData.yearsInBusiness) validationErrors.yearsInBusiness = 'Years in Business is required';
    if (!formData.monthlyBookingVolume) validationErrors.monthlyBookingVolume = 'Monthly Booking Volume is required';

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
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

      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwiqRmbBgCQWevW4jpH2MbwDsNKELR2iGtHr-M2jo7_OnbEUVhlG03fNOSIPsWcyn5D/exec';

      await fetch(scriptUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors',
      });

      // Reset form and handle success
      setFormData({
        title: '',
        firstName: '',
        lastName: '',
        countryCode: '+91',
        mobile: '',
        email: '',
        residentialAddress: '',
        pinCode: '',
        country: '',
        agencyName: '',
        pan: '',
        agencyMobile: '',
        agencyAddress1: '',
        agencyAddress2: '',
        agencyPinCode: '',
        agencyCountry: '',
        city: '',
        state: '',
        fax: '',
        businessType: '',
        yearsInBusiness: '',
        monthlyBookingVolume: '',
      });
      setErrors({});
      setSuccessMessage('Message sent successfully!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
      setSuccessMessage('');
    } finally {
      setIsSubmitting(false); // End loading state
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 pt-24">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-[80%]">
        <h1 className="text-2xl font-bold mb-6 text-center">B2B Onboarding</h1>
        <p className="text-gray-600 mb-4 text-center">
          Do you require dummy tickets quite often? Get registered yourself with us for special pricing & features.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-semibold">Personal Details</h2>
          
          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <select name="title" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
              <option value="" disabled selected>Select</option>
              <option value="Mr.">Mr.</option>
              <option value="Miss.">Miss.</option>
            </select>
          </div>

          {/* First Name */}
          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='First Name'
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Last Name'
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          {/* Country Code */}
          <div>
            <label className="block font-medium">Country Code</label>
            <select name="countryCode" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
              <option value="+91">+91</option>
              <option value="+92">+92</option>
              <option value="+93">+93</option>
            </select>
          </div>

          {/* Mobile */}
          <div>
            <label className="block font-medium">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Enter Mobile no'
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          {/* Email Id */}
          <div>
            <label className="block font-medium">Email Id</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Email Address'
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Residential Address */}
          <div>
            <label className="block font-medium">Residential Address</label>
            <input
              type="text"
              name="residentialAddress"
              value={formData.residentialAddress}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Residential Address'
            />
            {errors.residentialAddress && <p className="text-red-500 text-sm">{errors.residentialAddress}</p>}
          </div>

          {/* Pin Code */}
          <div>
            <label className="block font-medium">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Pin Code'
            />
            {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
          </div>

          <h2 className="text-xl font-semibold">Agency Details</h2>

          {/* Agency Name */}
          <div>
            <label className="block font-medium">Agency Name</label>
            <input
              type="text"
              name="agencyName"
              value={formData.agencyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Agency Name'
            />
            {errors.agencyName && <p className="text-red-500 text-sm">{errors.agencyName}</p>}
          </div>

          {/* PAN */}
          <div>
            <label className="block font-medium">PAN</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='PAN'
            />
            {errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
          </div>

          {/* Agency Mobile */}
          <div>
            <label className="block font-medium">Agency Mobile</label>
            <input
              type="text"
              name="agencyMobile"
              value={formData.agencyMobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Agency Mobile'
            />
            {errors.agencyMobile && <p className="text-red-500 text-sm">{errors.agencyMobile}</p>}
          </div>

          {/* Agency Address 1 */}
          <div>
            <label className="block font-medium">Agency Address 1</label>
            <input
              type="text"
              name="agencyAddress1"
              value={formData.agencyAddress1}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Agency Address 1'
            />
            {errors.agencyAddress1 && <p className="text-red-500 text-sm">{errors.agencyAddress1}</p>}
          </div>

          {/* Agency Address 2 */}
          <div>
            <label className="block font-medium">Agency Address 2</label>
            <input
              type="text"
              name="agencyAddress2"
              value={formData.agencyAddress2}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Agency Address 2'
            />
          </div>

          {/* Agency Pin Code */}
          <div>
            <label className="block font-medium">Agency Pin Code</label>
            <input
              type="text"
              name="agencyPinCode"
              value={formData.agencyPinCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Agency Pin Code'
            />
            {errors.agencyPinCode && <p className="text-red-500 text-sm">{errors.agencyPinCode}</p>}
          </div>

          {/* City */}
          <div>
            <label className="block font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='City'
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

          {/* State */}
          <div>
            <label className="block font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='State/Province'
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          </div>

          {/* Fax */}
          <div>
            <label className="block font-medium">Fax</label>
            <input
              type="text"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Fax'
            />
          </div>

          <h2 className="text-xl font-semibold">Business Details</h2>

          {/* Business Type */}
          <div>
            <label className="block font-medium">Business Type</label>
            <select name="businessType" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
              <option value="" disabled selected>Select</option>
              <option value="Travel Agency">Travel Agency</option>
              <option value="Corporate Agency">Corporate Agency</option>
              <option value="Event Management">Event Management</option>
              <option value="Other">Other</option>
            </select>
            {errors.businessType && <p className="text-red-500 text-sm">{errors.businessType}</p>}
          </div>

          {/* Years in Business */}
          <div>
            <label className="block font-medium">Years in Business</label>
            <input
              type="text"
              name="yearsInBusiness"
              value={formData.yearsInBusiness}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Years in Business'
            />
            {errors.yearsInBusiness && <p className="text-red-500 text-sm">{errors.yearsInBusiness}</p>}
          </div>

          {/* Monthly Booking Volume */}
          <div>
            <label className="block font-medium">Monthly Booking Volume</label>
            <input
              type="text"
              name="monthlyBookingVolume"
              value={formData.monthlyBookingVolume}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Monthly Booking Volume'
            />
            {errors.monthlyBookingVolume && <p className="text-red-500 text-sm">{errors.monthlyBookingVolume}</p>}
          </div>

          <div className="flex flex-col items-center">
            <button type="submit" className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default B2B;
