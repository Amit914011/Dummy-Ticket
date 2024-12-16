import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export default function CustomerDetails({ itemData }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [passengers, setPassengers] = useState([
    { title: "", firstName: "", lastName: "", dob: "", nationality: "" },
  ]);
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("passenger");
  const [amount, setAmount] = useState(69);
  const navigate = useNavigate();
  // Get Data API Here
  let [data, setData] = useState([itemData]);

  const countryCodes = [
    { country: "United States", code: "+1" },
    { country: "India", code: "+91" },
    { country: "United Kingdom", code: "+44" },
  ];

  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const addPassenger = () => {
    const newPassenger = {
      id: passengers.length + 1,
      title: "",
      firstName: "",
      lastName: "",
      dob: "",
      nationality: "",
    };
    setPassengers([...passengers, newPassenger]);
  };

  const removePassenger = (id) => {
    setPassengers(passengers.filter((passenger) => passenger.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setPassengers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const validateForm = () => {
    const newErrors = {};
  
    // Validate contact details
    if (!selectedCountry) newErrors.selectedCountry = "Country is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    if (!email) newErrors.email = "Email is required.";
  
    // Validate passenger details
    passengers.forEach((passenger, index) => {
      if (!passenger.title) newErrors[`title-${index}`] = "Title is required.";
      if (!passenger.firstName) newErrors[`firstName-${index}`] = "First name is required.";
      if (!passenger.lastName) newErrors[`lastName-${index}`] = "Last name is required.";
      if (!passenger.dob) newErrors[`dob-${index}`] = "Date of birth is required.";
      if (!passenger.nationality) newErrors[`nationality-${index}`] = "Nationality is required.";
    });
  
    // Update errors state
    // setErrors(newErrors); // Make sure setErrors is defined to update the state of errors
    
     // Check if there are any validation errors
  if (Object.keys(newErrors).length > 0) {
    Object.values(newErrors).forEach((error) => {
      toast.error(error, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
    return false;
      }
  
    // Return true if no errors
    return true;
  };
  
  const validateForm2 = () => {
    const newErrors = {};
  
    // Validate receiving time
    if (!formData.receivingtime) newErrors.receivingtime = "Receiving time is required.";
  
    // Validate delivery date if "Receive Later" is selected
    if (formData.receivingtime === "later" && !formData.deliveryDate) {
      newErrors.deliveryDate = "Delivery date is required.";
    }
  
    // Validate purpose
    if (!formData.purpose) newErrors.purpose = "Purpose is required.";
  
    // Validate additional message
    if (!formData.message) newErrors.message = "Additional message is required.";
  
    // Update errors state
    setErrors(newErrors);
  
    // Check if there are any errors
    if (Object.keys(newErrors).length > 0) {
      return false; // Return false if there are errors
    }
  
    return true; // Return true if no errors
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        country: selectedCountry,
        phone,
        email,
        passengers,
      };
      // window.open("/next-page", "_blank"); // Open a new tab to the next page
    }
  };

  const handleNext = () => {
    if (validateForm()) {
      setActiveTab("additional");
    }
  };

  // next form data

  const [formData, setFormData] = useState({
    receivingtime: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();

    let payload = {
      email: email,
      phone: phone,
      flightDetails: [
        {
          from: itemData?.routes[0].from,
          to: itemData?.routes[0].to,
          type: itemData?.flightType,
        },
      ],
      passengerDetails: passengers,
      bookingType: itemData.selectedOption?.toLowerCase(),
      delivery: formData,
      paymentAmount: amount,
    };

    // Step 1: Post the booking data
    axios.post('http://localhost:2001/book', payload)
      .then((res) => {
        console.log(res, "response");
        console.log(res?.data?.orderId?.id, "res.orderId?.id");

        // Step 2: Set up Razorpay options
        const options = {
          key: "rzp_live_DJ3aueV0Jcg2xr", // Replace with your RazorPay Key ID
          amount: amount,
          currency: "INR",
          name: "Support My Travel",
          description: `For visa application/immigration/proof of return/passport renewal/visa extension.
                       We Offer Genuine Dummy Ticket At A Reasonable Price Within 60 Minutes.`,
          order_id: res?.data?.orderId?.id,
          handler: (response) => {


            alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

            navigate('/')
          },
          prefill: {
            name: "Hemant",
            email: "hemant@example.com",
            contact: "6239484624",
          },
          theme: {
            color: "#32B57A",
          },
          // Step 3: Handle modal dismissal
          modal: {
            ondismiss: () => {
            

              // Step 4: Call delete API
              axios.delete(`http://localhost:2001/book/${res?.data?.orderId?.id}`)
                .then(() => {
                  alert("Booking deleted successfully.");
                })
                .catch((deleteErr) => {
                  console.error("Error deleting booking:", deleteErr);
                  alert("Failed to delete booking. Please contact support.");
                });
            },
          },
        };

        // Step 5: Handle payment failure
        const paymentObject = new window.Razorpay(options);
        paymentObject.on("payment.failed", (response) => {
          // console.log("Payment failed:", response.error);
          // alert(`Payment failed: ${response.error.description}`);

          // Call delete API if payment fails
          axios.delete(`http://localhost:2001/book/${res?.data?.orderId?.id}`)
            .then((res) => {
              console.log(res);
              // alert("Booking deleted successfully.");
            })
            .catch((deleteErr) => {
              console.error("Error deleting booking:", deleteErr);
              alert("Failed to delete booking. Please contact support.");
            });
        });

        paymentObject.open();
      })
      .catch((err) => {
        console.error("Error creating booking:", err);
        alert("An error occurred while processing your booking. Please try again later.");
      });
  };









  return (
    <div className="mt-[150px] px-5 md:px-20">
      <h1 className="text-2xl uppercase font-bold underline mt-10 text-center text-[#32B57A]">
        Booking Details
      </h1>
      <div className="w-full flex flex-col lg:flex-row gap-5 mt-5">
        <div className="lg:w-[70%]">
          {/* Tabs */}
          <div className="flex">
            <div className={` px-8 bg-[#32B57A] py-5 rounded mr-2 text-white`}>
              <span className="py-[10px] px-[20px] rounded-full bg-white text-[#32B57A] font-bold text-2xl">
                1
              </span>{" "}
              <span className="text-xl hidden lg:inline">Route Details</span>
            </div>
            <button
              onClick={() => setActiveTab("passenger")}
              className={`py-2 px-8  bg-[#32B57A]  rounded mr-2 text-white ${activeTab === "passenger" ? "border-b-2 border-[#32B57A]" : ""
                }`}
            >
              <span className="py-[10px] px-[20px] rounded-full bg-white text-[#32B57A] font-bold text-2xl">
                2
              </span>{" "}
              <span className="text-xl hidden lg:inline">
                Passenger Details
              </span>
            </button>
            <button
              className={`py-2 px-8 text-white  bg-[#32B57A]  rounded ${activeTab === "additional" ? "border-b-2 border-[#32B57A]" : ""
                }`}
            >
              <span className="py-[10px] px-[19px] mr-1 rounded-full bg-white text-[#32B57A] font-bold text-2xl">
                3
              </span>
              <span className="text-xl hidden lg:inline">
                Additional Details
              </span>
            </button>
          </div>

          {/* Conditional Rendering based on Active Tab */}
          {activeTab === "passenger" && (
            <form onSubmit={handleSubmit}>
              <h1 className="text-xl font-bold mt-5">Contact Details</h1>
              <div className="mt-5">
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    id="country"
                    className="w-full sm:w-[250px] p-2 border border-gray-300 rounded-md"
                    value={selectedCountry}
                    onChange={handleSelectChange}
                  >
                    <option value="">-- Select Country --</option>
                    {countryCodes.map((item, index) => (
                      <option key={index} value={item.code}>
                        {item.country} ({item.code})
                      </option>
                    ))}
                  </select>
                  {errors.selectedCountry && (
                    <span className="text-red-500">
                      {errors.selectedCountry}
                    </span>
                  )}

                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone}</span>
                  )}
                </div>

                <div className="mt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                </div>

                <div className="mt-6">
                  {passengers.map((passenger, index) => (
                    <div
                      key={passenger.id}
                      className="mb-5 border p-4 rounded-md relative"
                    >
                      <h1 className="text-lg font-semibold">
                        Passenger {passenger.id}
                      </h1>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removePassenger(passenger.id)}
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      )}
                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <select
                          value={passenger.title}
                          onChange={(e) =>
                            handleInputChange(
                              passenger.id,
                              "title",
                              e.target.value
                            )
                          }
                          className="w-full sm:w-[80px] p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Title</option>
                          <option value="Mr">Mr</option>
                          <option value="Ms">Ms</option>
                          <option value="Mrs">Mrs</option>
                        </select>
                        {errors[`title-${index}`] && (
                          <span className="text-red-500">
                            {errors[`title-${index}`]}
                          </span>
                        )}

                        <input
                          type="text"
                          value={passenger.firstName}
                          onChange={(e) =>
                            handleInputChange(
                              passenger.id,
                              "firstName",
                              e.target.value
                            )
                          }
                          placeholder="First Name"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors[`firstName-${index}`] && (
                          <span className="text-red-500">
                            {errors[`firstName-${index}`]}
                          </span>
                        )}

                        <input
                          type="text"
                          value={passenger.lastName}
                          onChange={(e) =>
                            handleInputChange(
                              passenger.id,
                              "lastName",
                              e.target.value
                            )
                          }
                          placeholder="Last Name"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors[`lastName-${index}`] && (
                          <span className="text-red-500">
                            {errors[`lastName-${index}`]}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <input
                          type="date"
                          value={passenger.dob}
                          onChange={(e) =>
                            handleInputChange(
                              passenger.id,
                              "dob",
                              e.target.value
                            )
                          }
                          className="w-full sm:w-[200px] p-2 border border-gray-300 rounded-md"
                        />
                        {errors[`dob-${index}`] && (
                          <span className="text-red-500">
                            {errors[`dob-${index}`]}
                          </span>
                        )}

                        <select
                          value={passenger.nationality}
                          onChange={(e) =>
                            handleInputChange(
                              passenger.id,
                              "nationality",
                              e.target.value
                            )
                          }
                          className="w-full sm:w-[200px] p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Nationality</option>
                          <option value="Indian">Indian</option>
                          <option value="American">American</option>
                          <option value="British">British</option>
                        </select>
                        {errors[`nationality-${index}`] && (
                          <span className="text-red-500">
                            {errors[`nationality-${index}`]}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <h1
                  onClick={addPassenger}
                  className=" py-2 px-4  text-[#32B57A] rounded-md text-right cursor-pointer"
                >
                  + Add Another Passenger
                </h1>
              </div>

              <button
                type="submit"
                onClick={handleNext}
                className="mt-6 py-2 px-6 bg-[#32B57A] text-white rounded-md"
              >
                Next
              </button>
            </form>
          )}

          {activeTab === "additional" && (
            <form
              className="mt-10 p-5 bg-white rounded-lg shadow-md"
              onSubmit={handleSubmitData}
            >
              <h1 className="text-2xl font-semibold text-[#32B57A]">
                Receiving Time
              </h1>
              <div className="mt-5 space-y-5">
                {/* Radio buttons for receiving time */}
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="receivenow"
                    name="receivingtime"
                    value="now"
                    className="h-5 w-5 text-[#32B57A] border-gray-300 focus:ring-[#32B57A]"
                    onChange={handleChange}
                    checked={formData.receivingtime === "now"}
                  />
                  <label htmlFor="receivenow" className="text-lg">
                    Receive Now
                  </label>

                  <input
                    type="radio"
                    id="receivelater"
                    name="receivingtime"
                    value="later"
                    className="h-5 w-5 text-[#32B57A] border-gray-300 focus:ring-[#32B57A]"
                    onChange={handleChange}
                    checked={formData.receivingtime === "later"}
                  />
                  <label htmlFor="receivelater" className="text-lg">
                    Receive Later
                  </label>
                </div>
                {errors.receivingtime && (
                  <span className="text-red-500 text-sm">
                    {errors.receivingtime}
                  </span>
                )}

                {/* New select fields when 'Receive Later' is selected */}
                {formData.receivingtime === "later" && (
                  <div className="mt-4 space-y-4">
                    <h2 className="text-xl font-semibold text-[#32B57A]">
                      Select Delivery Date
                    </h2>
                    <input
                      type="date"
                      name="deliveryDate"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#32B57A] focus:border-[#32B57A]"
                      onChange={handleChange}
                      value={formData.deliveryDate}
                    />
                    {errors.deliveryDate && (
                      <span className="text-red-500 text-sm">
                        {errors.deliveryDate}
                      </span>
                    )}
                  </div>
                )}

                {/* Important suggestion */}
                <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-md text-sm">
                  <p className="text-gray-700">
                    Important Suggestion: To get good validity of your flight
                    reservation, either schedule the delivery for a day before
                    using it or book it just a day in advance.
                  </p>
                </div>

                {/* Select dropdown for purpose */}
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-[#32B57A]">
                    Purpose to buy dummy tickets
                  </h2>
                  <select
                    name="purpose"
                    id="purpose"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#32B57A] focus:border-[#32B57A]"
                    onChange={handleChange}
                    value={formData.purpose}
                  >
                    <option value="">Select Purpose</option>
                    <option value="business">Business</option>
                    <option value="vacation">Vacation</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.purpose && (
                    <span className="text-red-500 text-sm">
                      {errors.purpose}
                    </span>
                  )}
                </div>

                {/* Textarea for additional message */}
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-[#32B57A]">
                    Additional Message
                  </h2>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-[#32B57A] focus:border-[#32B57A]"
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Next button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#32B57A] text-white font-semibold rounded-md hover:bg-[#2c9d5f]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="lg:w-[27%] w-full">
          <div
            className={` text-center bg-[#32B57A] py-5 rounded mr-2 text-white`}
          >
            <h1 className="text-xl">Order Summary</h1>
          </div>
          {
            data.map((items, index) => (
              <>
                <div className="mt-5" key={index}>
                  <h1 className="bg-gray-200 text-center w-[97.5%] py-3 text-xl rounded ">
                    {items?.flightType}
                  </h1>
                </div>
                {
                  items?.selectOption ||
                  <>
                    {
                      items?.routes &&
                      <>
                        {
                          items.routes.map((items, index) => (
                            <div className="mt-3" key={index}>
                              <p>{items?.from}</p>
                              <p className="text-center">➡</p>
                              <p>{items?.to}</p>
                              <div className="flex justify-between">
                                <p className="">{items?.departure}</p>
                                <p className="pr-3">{items?.return}</p>
                              </div>


                            </div>
                          ))
                        }

                      </>
                    }
                  </>
                }
                {/* Hotel data */}
                {
                  items?.hotels &&
                  <>
                    {
                      items.hotels.map((items, index) => (
                        <div key={index}>
                          <p>{items?.city}</p>
                          <div className="flex justify-between">
                            <p>{items?.checkin}</p>
                            <p className="pr-3">{items?.checkout}</p>
                          </div>
                        </div>

                      ))
                    }
                  </>
                }
                <div className="mt-3 flex flex-col gap-3">
                  <div className="flex justify-between pr-3">
                    <span>ROUTES</span>
                    <span>Rs 400.00</span>
                  </div>
                  <div className="flex justify-between pr-3">
                    <span>AMOUNT</span>
                    <span>Rs 400.00</span>
                  </div>
                  <div className="flex justify-between pr-3 border-dashed border-t-2 border-black pt-3">
                    <span>GST </span>
                    <span>Rs 72.00</span>
                  </div>
                  <div className="flex justify-between pr-3 bg-gray-100 p-3 rounded">
                    <span>TOTAL</span>
                    <span>Rs 472.00</span>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
}
