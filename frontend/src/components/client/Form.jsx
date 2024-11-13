import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Form() {
  const [selectedOption, setSelectedOption] = useState("Flight");
  const [flightType, setFlightType] = useState("One Way");
  const [routes, setRoutes] = useState([{ from: "", to: "", departure: "", return: "" }]);
  const [hotels, setHotels] = useState([{ city: "", checkin: "", checkout: "" }]);
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

  const validateForm = () => {
    let formErrors = {};

    // Flight and Hotel validations
    if (selectedOption === "Flight" || selectedOption === "Both") {
      for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        if (!route.from || !route.to || !route.departure) {
          formErrors[`route${i}`] = 'This field is required';
        }
        if (flightType === "Round Trip" && !route.return) {
          formErrors[`route${i}Return`] = 'Return date is required for Round Trip';
        }
      }
    }

    if (selectedOption === "Hotel" || selectedOption === "Both") {
      for (let i = 0; i < hotels.length; i++) {
        const hotel = hotels[i];
        if (!hotel.city || !hotel.checkin || !hotel.checkout) {
          formErrors[`hotel${i}`] = 'This field is required';
        }
      }
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0; // If no errors, form is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!validateForm()) {
    //   alert("Please fill all required fields correctly.");
      return;
    }

    // Form is valid, now handle form submission
    let data={ selectedOption, flightType, routes, hotels }
    console.log('Form Submitted:',data );
    
    // Redirect to the next page (for example, /success)
    navigate('/customerdetails'); // Adjust the route as per your application
  };

  return (
   <>
    <div className="w-[80%] max-w-[600px] h-auto border bg-white border-gray-300 rounded-lg mt-10 m-auto p-8 flex flex-col justify-center items-center shadow-lg">
      
      
      <div className="text-white flex gap-4 mb-6 bg-[#EFEFEF] items-center justify-center rounded py-1 px-2">
        <button
          onClick={() => setSelectedOption("Flight")}
          className={`rounded border px-6 py-2 transition duration-300 uppercase ${selectedOption === "Flight" ? "bg-[#32B57A]" : "border-white hover:bg-[#32B57A] bg-white text-black"}`}
        >
          Flight
        </button>
        <button
          onClick={() => setSelectedOption("Hotel")}
          className={`rounded border px-6 py-2 transition duration-300 uppercase ${selectedOption === "Hotel" ? "bg-[#32B57A]" : "border-white hover:bg-[#32B57A] bg-white text-black"}`}
        >
          Hotel
        </button>
        <button
          onClick={() => setSelectedOption("Both")}
          className={`rounded border px-6 py-2 transition duration-300 ${selectedOption === "Both" ? "bg-[#32B57A]" : "border-white hover:bg-[#32B57A] bg-white text-black"}`}
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
            <label htmlFor="optionone" className="text-[#32B57A]">One Way</label>
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
            <label htmlFor="optiontwo" className="text-[#32B57A]">Round Trip</label>
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
            <label htmlFor="optionthree" className="text-[#32B57A]">Multi Trip</label>
          </div>
        </div>
      )}

      <form className="w-full space-y-6 text-white" onSubmit={handleSubmit}>
        {(selectedOption === "Flight" || selectedOption === "Both") && (
          <>
            {routes.map((route, index) => (
              <div key={index} className="space-y-4 relative">
                <h1 className="text-xl uppercase font-bold">{index >= 1 ? `Route ${index + 1}` : ""}</h1>
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
                  <label htmlFor={`from-${index}`} className="block text-sm font-medium mb-1 text-[#32B57A]" >From</label>
                  <input
                    type="text"
                    id={`from-${index}`}
                    value={route.from}
                    onChange={(e) => handleRouteChange(index, 'from', e.target.value)}
                    className={`w-full px-4 py-2 border ${errors[`route${index}`] ? 'border-red-500' : 'border-gray-500'} rounded bg-white text-white focus:outline-none focus:border-[#32B57A]`}
                  />
                  {errors[`route${index}`] && <p className="text-red-500 text-sm">{errors[`route${index}`]}</p>}
                </div>
                <div>
                  <label htmlFor={`to-${index}`} className="block text-sm font-medium mb-1 text-[#32B57A]">To</label>
                  <input
                    type="text"
                    id={`to-${index}`}
                    value={route.to}
                    onChange={(e) => handleRouteChange(index, 'to', e.target.value)}
                    className={`w-full px-4 py-2 border ${errors[`route${index}`] ? 'border-red-500' : 'border-gray-500'} rounded  text-white focus:outline-none focus:border-[#32B57A]`}
                  />
                  {errors[`route${index}`] && <p className="text-red-500 text-sm">{errors[`route${index}`]}</p>}
                </div>
                <div className="flex gap-5">
                  <div className="w-full">
                    <label htmlFor={`departure-${index}`} className="block text-sm font-medium  text-[#32B57A] mb-1">Departure</label>
                    <input
                      type="date"
                      id={`departure-${index}`}
                      value={route.departure}
                      onChange={(e) => handleRouteChange(index, 'departure', e.target.value)}
                      className={`w-full px-4 py-2 border text-black ${errors[`route${index}`] ? 'border-red-500' : 'border-gray-500'} rounded  text-[#32B57A] focus:outline-none focus:border-blue-400`}
                    />
                    {errors[`route${index}`] && <p className="text-red-500 text-sm">{errors[`route${index}`]}</p>}
                  </div>
                  {flightType === "Round Trip" && (
                    <div className="w-full">
                      <label htmlFor={`return-${index}`} className="block text-sm font-medium mb-1 text-[#32B57A]">Return</label>
                      <input
                        type="date"
                        id={`return-${index}`}
                        value={route.return}
                        onChange={(e) => handleRouteChange(index, 'return', e.target.value)}
                        className={`w-full px-4 py-2 border ${errors[`route${index}Return`] ? 'border-red-500' : 'border-gray-500'} rounded text-black focus:outline-none focus:border-blue-400`}
                      />
                      {errors[`route${index}Return`] && <p className="text-red-500 text-sm">{errors[`route${index}Return`]}</p>}
                    </div>
                  )}
                </div>
              </div>
            ))}
           {
            flightType === "Multi Trip" &&(
                <p
                type="button"
                onClick={handleAddRoute}
                className="text-[#32B57A] cursor-pointer text-right"
              >
                + Add More Route
              </p>
            )
           }
          </>
        )}

        {/* Hotel section */}
        {(selectedOption === "Hotel" || selectedOption === "Both") && (
          <>
            {hotels.map((hotel, index) => (
              <div key={index} className="space-y-4 relative">
                <h1 className="text-xl uppercase font-bold">{index >= 1 ? `Hotel ${index + 1}` : ""}</h1>
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
                  <label htmlFor={`hotel-city-${index}`} className="block text-[#32B57A] text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    id={`hotel-city-${index}`}
                    value={hotel.city}
                    onChange={(e) => handleHotelChange(index, 'city', e.target.value)}
                    className={`w-full px-4 py-2 border ${errors[`hotel${index}`] ? 'border-red-500' : 'border-gray-500'} rounded  text-white focus:outline-none focus:border-[#32B57A]`}
                  />
                  {errors[`hotel${index}`] && <p className="text-red-500 text-sm">{errors[`hotel${index}`]}</p>}
                </div>
                <div className="flex gap-5">
                  <div className="w-full">
                    <label htmlFor={`checkin-${index}`} className="block text-[#32B57A] text-sm font-medium mb-1">Check-in</label>
                    <input
                      type="date"
                      id={`checkin-${index}`}
                      value={hotel.checkin}
                      onChange={(e) => handleHotelChange(index, 'checkin', e.target.value)}
                      className={`w-full px-4 py-2 border ${errors[`hotel${index}`] ? 'border-red-500' : 'border-gray-500'} rounded  text-black focus:outline-none focus:border-[#32B57A]`}
                    />
                    {errors[`hotel${index}`] && <p className="text-red-500 text-sm">{errors[`hotel${index}`]}</p>}
                  </div>
                  <div className="w-full">
                    <label htmlFor={`checkout-${index}`} className="block text-[#32B57A] text-sm font-medium mb-1">Check-out</label>
                    <input
                      type="date"
                      id={`checkout-${index}`}
                      value={hotel.checkout}
                      onChange={(e) => handleHotelChange(index, 'checkout', e.target.value)}
                      className={`w-full px-4 py-2 border ${errors[`hotel${index}`] ? 'border-red-500' : 'border-gray-500'} rounded  text-black focus:outline-none focus:border-blue-400`}
                    />
                    {errors[`hotel${index}`] && <p className="text-red-500 text-sm">{errors[`hotel${index}`]}</p>}
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
        >
            Get Dummy Ticket
        </button>
      </form>
    </div>

   </>
  );
}
