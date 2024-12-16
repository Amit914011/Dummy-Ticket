import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";

export default function Form({ setData }) {
  const [selectedOption, setSelectedOption] = useState("Flight");
  const [flightType, setFlightType] = useState("One Way");
  const [loading, setLoading] = useState(false);
  const [routes, setRoutes] = useState([
    { from: "", to: "", departure: "", return: "" },
  ]);
  const [hotels, setHotels] = useState([
    { city: "", checkin: "", checkout: "" },
  ]);
  const [errors, setErrors] = useState({}); // Add state to track errors
  const navigate = useNavigate(); // React Router hook for navigation

  const handleAddRoute = () => {
    setRoutes([...routes, { from: "", to: "", departure: "", return: "" }]);
  };

  const handleRemoveRoute = (index) => {
    if (index >= 1) {
      setRoutes(routes.filter((_, i) => i !== index));
    }
  };

  const handleRouteChange = (index, field, value) => {
    const updatedRoutes = [...routes];
    updatedRoutes[index][field] = value;
    setRoutes(updatedRoutes);
  };

  const handleAddHotel = () => {
    setHotels([...hotels, { city: "", checkin: "", checkout: "" }]);
  };

  const handleRemoveHotel = (index) => {
    if (index >= 1) {
      setHotels(hotels.filter((_, i) => i !== index));
    }
  };

  const handleHotelChange = (index, field, value) => {
    const updatedHotels = [...hotels];
    updatedHotels[index][field] = value;
    setHotels(updatedHotels);
  };

  const showToastError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const validateForm = () => {
    setLoading(true)
    // Flight and Hotel validations
    if (selectedOption === "Flight" || selectedOption === "Both") {
      for (let i = 0; i < routes.length; i++) {
        const route = routes[i];

        // Validate route fields
        if (!route.from || !route.to || !route.departure) {
          showToastError(`Route ${i + 1}: This field is required.`);
          setLoading(false)
          return false; // Return false after showing the error
          
        }

        // Validate return date for round trips
        if (flightType === "Round Trip" && !route.return) {
          showToastError(
            `Route ${i + 1}: Return date is required for Round Trip.`
          );
          setLoading(false)
          return false;
          
        }
      }
    }

    if (selectedOption === "Hotel" || selectedOption === "Both") {
      for (let i = 0; i < hotels.length; i++) {
        const hotel = hotels[i];

        // Validate hotel fields
        if (!hotel.city || !hotel.checkin || !hotel.checkout) {
          showToastError(`Hotel ${i + 1}: This field is required.`);
          setLoading(false)
          return false; // Return false after showing the error
        }
        
      }
    }
    
    setLoading(false)
    return true; // If no errors, form is valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Validate form data
    if (!validateForm()) {
      return; // If validation fails, stop form submission
    }

    // Prepare the data object to be sent
    const data = { selectedOption, flightType, routes, hotels };

    try {
      // Simulate a POST request (commented out for now)
      // const response = await axios.post('http://localhost:3500/api/saveTravelData', data);

      // Log the form data after successful submission
      setData(data);
      navigate("/customerdetails"); // Adjust the route as per your application
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form!", {
        position: "top-right",
        autoClose: 3000,
      });
      setLoading(false)
    }
  };

  return (
    <>
      <div className="md:w-[80%] lg:w-[70%] w-full max-w-[700px] h-auto border bg-white border-gray-300 rounded-lg mt-10 m-auto p-8 flex flex-col justify-center items-center shadow-lg">
        <div className="text-white  flex gap-4 mb-6 bg-[#EFEFEF] items-center justify-center rounded py-1 px-2">
          <button
            onClick={() => setSelectedOption("Flight")}
            className={`rounded text-sm px-2 md:text-md border md:px-6 py-2 transition duration-300 uppercase ${
              selectedOption === "Flight"
                ? "bg-[#32B57A]"
                : "border-white hover:bg-[#32B57A] bg-white text-black"
            }`}
          >
            Flight
          </button>
          <button
            onClick={() => setSelectedOption("Hotel")}
            className={`rounded text-sm px-2 md:text-md border md:px-6 py-2 transition duration-300 uppercase ${
              selectedOption === "Hotel"
                ? "bg-[#32B57A]"
                : "border-white hover:bg-[#32B57A] bg-white text-black"
            }`}
          >
            Hotel
          </button>
          <button
            onClick={() => setSelectedOption("Both")}
            className={`rounded border text-sm px-2 md:text-md md:px-6 py-2 transition duration-300 ${
              selectedOption === "Both"
                ? "bg-[#32B57A]"
                : "border-white hover:bg-[#32B57A] bg-white text-black"
            }`}
          >
            Both
          </button>
        </div>

        {(selectedOption === "Flight" || selectedOption === "Both") && (
          <div className="flex gap-4 bg-[#EFEFEF] py-1 px-4 rounded-full">
            <div className="flex items-center">
              <input
                type="radio"
                name="flightType"
                id="optionone"
                value="One Way"
                checked={flightType === "One Way"}
                onChange={(e) => setFlightType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="optionone" className="text-[#32B57A] text-[12px] md:text-[16px]">
                One Way
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="flightType"
                id="optiontwo"
                value="Round Trip"
                checked={flightType === "Round Trip"}
                onChange={(e) => setFlightType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="optiontwo" className="text-[#32B57A] text-[12px] md:text-[16px]">
                Round Trip
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="flightType"
                id="optionthree"
                value="Multi Trip"
                checked={flightType === "Multi Trip"}
                onChange={(e) => setFlightType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="optionthree" className="text-[#32B57A] text-[12px] md:text-[16px]">
                Multi Trip
              </label>
            </div>
          </div>
        )}

        <form
          className="w-full space-y-6 text-[#32B57A]"
          onSubmit={handleSubmit}
        >
          {(selectedOption === "Flight" || selectedOption === "Both") && (
            <>
              {routes.map((route, index) => (
                <div key={index} className="space-y-4 relative">
                  <h1 className="text-xl uppercase font-bold">
                    {index >= 1 ? `Route ${index + 1}` : ""}
                  </h1>
                  {index >= 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveRoute(index)}
                      className="absolute right-0 top-0 text-red-500 hover:text-red-300 transition duration-300"
                    >
                      ✖
                    </button>
                  )}
                  <div>
                    <label
                      htmlFor={`from-${index}`}
                      className="block text-sm font-medium mb-1 text-[#32B57A]"
                    >
                      From
                    </label>
                    <input
                      type="text"
                      id={`from-${index}`}
                      value={route.from}
                      onChange={(e) =>
                        handleRouteChange(index, "from", e.target.value)
                      }
                      className={`w-full px-4 py-2 border ${
                        errors[`route${index}`]
                          ? "border-red-500"
                          : "border-gray-500"
                      } rounded bg-white text-black focus:outline-none focus:border-[#32B57A]`}
                    />
                    {errors[`route${index}`] && (
                      <p className="text-red-500 text-sm">
                        {errors[`route${index}`]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor={`to-${index}`}
                      className="block text-sm font-medium mb-1 text-[#32B57A]"
                    >
                      To
                    </label>
                    <input
                      type="text"
                      id={`to-${index}`}
                      value={route.to}
                      onChange={(e) =>
                        handleRouteChange(index, "to", e.target.value)
                      }
                      className={`w-full px-4 py-2 border ${
                        errors[`route${index}`]
                          ? "border-red-500"
                          : "border-gray-500"
                      } rounded  text-black focus:outline-none focus:border-[#32B57A]`}
                    />
                    {errors[`route${index}`] && (
                      <p className="text-red-500 text-sm">
                        {errors[`route${index}`]}
                      </p>
                    )}
                  </div>
                  <div className="md:flex gap-5 ">
                    <div className="w-full">
                      <label
                        htmlFor={`departure-${index}`}
                        className="block text-sm font-medium  text-[#32B57A] mb-1"
                      >
                        Departure
                      </label>
                     
                      <input
                        type="date"
                        id={`departure-${index}`}
                        value={route.departure} // Set default to today's date
                        onChange={(e) =>
                          handleRouteChange(index, "departure", e.target.value)
                        }
                        min={new Date().toISOString().slice(0, 10)}
                        className={`w-full px-4 py-2 border text-black ${
                          errors[`route${index}`]
                            ? "border-red-500"
                            : "border-gray-500"
                        } rounded text-[#32B57A] focus:outline-none focus:border-blue-400`}
                      />
                      {errors[`route${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`route${index}`]}
                        </p>
                      )}
                    </div>
                    {flightType === "Round Trip" && (
                      <div className="w-full">
                        <label
                          htmlFor={`return-${index}`}
                          className="block text-sm font-medium mb-1 text-[#32B57A]"
                        >
                          Return
                        </label>
                        <input
                          type="date"
                          id={`return-${index}`}
                          value={route.return}
                          onChange={(e) =>
                            handleRouteChange(index, "return", e.target.value)
                          }
                          min={
                            route.departure ||
                            new Date().toISOString().slice(0, 10)
                          } // Ensure return is after departure
                          className={`w-full px-4 py-2 border ${
                            errors[`route${index}Return`]
                              ? "border-red-500"
                              : "border-gray-500"
                          } rounded text-black focus:outline-none focus:border-blue-400`}
                        />
                        {errors[`route${index}Return`] && (
                          <p className="text-red-500 text-sm">
                            {errors[`route${index}Return`]}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {flightType === "Multi Trip" && (
                <p
                  type="button"
                  onClick={handleAddRoute}
                  className="text-[#32B57A] cursor-pointer text-right"
                >
                  + Add More Route
                </p>
              )}
            </>
          )}

          {/* Hotel section */}
          {(selectedOption === "Hotel" || selectedOption === "Both") && (
            <>
              {hotels.map((hotel, index) => (
                <div key={index} className="space-y-4 relative">
                  <h1 className="text-xl uppercase font-bold">
                    {index >= 1 ? `Hotel ${index + 1}` : ""}
                  </h1>
                  {index >= 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveHotel(index)}
                      className="absolute right-0 top-0 text-red-500 hover:text-red-300 transition duration-300"
                    >
                      ✖
                    </button>
                  )}
                  <div>
                    <label
                      htmlFor={`hotel-city-${index}`}
                      className="block text-[#32B57A] text-sm font-medium mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id={`hotel-city-${index}`}
                      value={hotel.city}
                      onChange={(e) =>
                        handleHotelChange(index, "city", e.target.value)
                      }
                      className={`w-full px-4 py-2 border ${
                        errors[`hotel${index}`]
                          ? "border-red-500"
                          : "border-gray-500"
                      } rounded  text-black focus:outline-none focus:border-[#32B57A]`}
                    />
                    {errors[`hotel${index}`] && (
                      <p className="text-red-500 text-sm">
                        {errors[`hotel${index}`]}
                      </p>
                    )}
                  </div>
                  <div className="md:flex gap-5">
                    <div className="w-full">
                      <label
                        htmlFor={`checkin-${index}`}
                        className="block text-[#32B57A] text-sm font-medium mb-1"
                      >
                        Check-in
                      </label>
                      <input
                        type="date"
                        id={`checkin-${index}`}
                        value={hotel.checkin}
                        onChange={(e) =>
                          handleHotelChange(index, "checkin", e.target.value)
                        }
                        min={new Date().toISOString().slice(0, 10)} // Disable past dates
                        className={`w-full px-4 py-2 border ${
                          errors[`hotel${index}`]
                            ? "border-red-500"
                            : "border-gray-500"
                        } rounded text-black focus:outline-none focus:border-[#32B57A]`}
                      />

                      {errors[`hotel${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`hotel${index}`]}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor={`checkout-${index}`}
                        className="block text-[#32B57A] text-sm font-medium mb-1"
                      >
                        Check-out
                      </label>
                      <input
                        type="date"
                        id={`checkout-${index}`}
                        value={hotel.checkout}
                        onChange={(e) =>
                          handleHotelChange(index, "checkout", e.target.value)
                        }
                        className={`w-full px-4 py-2 border ${
                          errors[`hotel${index}`]
                            ? "border-red-500"
                            : "border-gray-500"
                        } rounded  text-black focus:outline-none focus:border-blue-400`}
                      />
                      {errors[`hotel${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`hotel${index}`]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <p
                type="button"
                onClick={handleAddHotel}
                className=" text-[#32B57A] cursor-pointer text-right"
              >
                + Add More Hotel
              </p>
            </>
          )}
          <button
            type="submit"
            className="mt-6 w-full py-2 px-4 uppercase bg-[#32B57A] text-white font-semibold rounded "
            disabled={loading}
          >
            {loading ? <Loader color="white" size="7" /> : " Get Dummy Ticket"}
          </button>
        </form>
      </div>
    </>
  );
}
