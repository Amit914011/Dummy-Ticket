import React, { useState } from "react";

export default function CustomerDetails() {
    const [selectedCountry, setSelectedCountry] = useState("");
     // List of countries and their codes
     const countryCodes = [
        { country: "United States", code: "+1" },
        { country: "Canada", code: "+1" },
        { country: "United Kingdom", code: "+44" },
        { country: "Australia", code: "+61" },
        { country: "India", code: "+91" },
        { country: "China", code: "+86" },
        { country: "Japan", code: "+81" },
        { country: "Germany", code: "+49" },
        { country: "France", code: "+33" },
        { country: "Italy", code: "+39" },
        { country: "South Korea", code: "+82" },
        { country: "Brazil", code: "+55" },
        { country: "Mexico", code: "+52" },
        { country: "Russia", code: "+7" },
        { country: "South Africa", code: "+27" },
        { country: "Netherlands", code: "+31" },
        { country: "Spain", code: "+34" },
        { country: "Sweden", code: "+46" },
        { country: "Switzerland", code: "+41" },
        { country: "New Zealand", code: "+64" },
        { country: "Argentina", code: "+54" },
        { country: "Egypt", code: "+20" },
        { country: "Turkey", code: "+90" },
        { country: "Saudi Arabia", code: "+966" },
        { country: "Israel", code: "+972" },
        { country: "Thailand", code: "+66" },
        { country: "Indonesia", code: "+62" },
        { country: "Philippines", code: "+63" },
        { country: "Malaysia", code: "+60" },
        { country: "Vietnam", code: "+84" },
        { country: "Singapore", code: "+65" },
        { country: "Hong Kong", code: "+852" },
        { country: "United Arab Emirates", code: "+971" },
        { country: "Pakistan", code: "+92" },
        { country: "Bangladesh", code: "+880" },
        { country: "Nigeria", code: "+234" },
        { country: "Kenya", code: "+254" },
        { country: "Ghana", code: "+233" },
        { country: "Uganda", code: "+256" },
        { country: "Morocco", code: "+212" },
        { country: "Portugal", code: "+351" },
        { country: "Greece", code: "+30" },
        { country: "Belgium", code: "+32" },
        { country: "Austria", code: "+43" },
        { country: "Denmark", code: "+45" },
        { country: "Norway", code: "+47" },
        { country: "Finland", code: "+358" },
        { country: "Poland", code: "+48" },
        { country: "Czech Republic", code: "+420" },
        { country: "Hungary", code: "+36" },
        { country: "Ireland", code: "+353" },
        { country: "Romania", code: "+40" },
        { country: "Chile", code: "+56" },
        { country: "Colombia", code: "+57" },
        { country: "Peru", code: "+51" },
        { country: "Venezuela", code: "+58" },
        { country: "Cuba", code: "+53" },
        { country: "Costa Rica", code: "+506" },
        { country: "Panama", code: "+507" },
        { country: "Jamaica", code: "+1-876" },
        { country: "Trinidad and Tobago", code: "+1-868" },
        { country: "Dominican Republic", code: "+1-809" },
        { country: "Ecuador", code: "+593" },
        { country: "Bolivia", code: "+591" },
        { country: "Paraguay", code: "+595" },
        { country: "Uruguay", code: "+598" },
        { country: "Qatar", code: "+974" },
        { country: "Kuwait", code: "+965" },
        { country: "Oman", code: "+968" },
        { country: "Iraq", code: "+964" },
        { country: "Syria", code: "+963" },
        { country: "Lebanon", code: "+961" },
        { country: "Jordan", code: "+962" },
        { country: "Bahrain", code: "+973" },
        { country: "Sri Lanka", code: "+94" },
        { country: "Myanmar", code: "+95" },
        { country: "Nepal", code: "+977" },
        { country: "Cambodia", code: "+855" },
        { country: "Laos", code: "+856" },
        { country: "Mongolia", code: "+976" },
        { country: "Kazakhstan", code: "+7" },
        { country: "Uzbekistan", code: "+998" },
        { country: "Afghanistan", code: "+93" },
        { country: "Armenia", code: "+374" },
        { country: "Azerbaijan", code: "+994" },
        { country: "Georgia", code: "+995" },
        { country: "Turkmenistan", code: "+993" },
        { country: "Tajikistan", code: "+992" },
        { country: "Kyrgyzstan", code: "+996" },
        { country: "Cyprus", code: "+357" },
        { country: "Iceland", code: "+354" },
        { country: "Luxembourg", code: "+352" },
        { country: "Monaco", code: "+377" },
        { country: "Malta", code: "+356" },
        { country: "Andorra", code: "+376" },
        { country: "Liechtenstein", code: "+423" },
      ];
      

       // Handle country selection
  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <>
      <div className="mt-[150px]">
        <h1 className="text-2xl uppercase font-bold underline mt-10 text-center text-[#32B57A]">
          Booking Details
        </h1>
        <div className="w-full flex gap-5 px-20 mt-5 ">
          <div className="w-[70%]">
            <div className=" flex gap-5">
              <div className="w-full h-auto bg-[#32B57A] p-5 rounded-md ">
                <span className="text-[#32B57A] text-xl bg-white px-4  py-2 rounded-full">
                  1
                </span>
                <span className="text-xl bg-[#32B57A] ml-2 font-semibold text-white">
                  Route Details
                </span>
              </div>
              <div className="w-full h-auto bg-[#32B57A] p-5 rounded-md ">
                <span className="text-[#32B57A] text-xl bg-white px-4  py-2 rounded-full">
                  2
                </span>
                <span className="text-xl bg-[#32B57A] text-white ml-2 font-semibold">
                  Passenger Details
                </span>
              </div>
              <div className="w-full h-auto bg-[#32B57A] p-5 rounded-md ">
                <span className="text-xl bg-white px-4 text-[#32B57A]  py-2 rounded-full">
                  3
                </span>
                <span className="text-xl bg-[#32B57A] text-white ml-2 font-semibold">
                  Additional Details
                </span>
              </div>
            </div>



            <div className="my-5">
      <form>
        <h1 className="text-xl font-bold">Contact Details</h1>
        
        <div className="mt-5">
          <div className="flex gap-2">
            <select
              id="country"
              className="w-[250px] p-2 border border-gray-300 rounded-md"
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
            
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mt-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-lg font-semibold">Passenger 1</h1>
            <div className="flex gap-2 mt-2">
              <select
                name="title"
                id="title"
                className="w-[80px] p-2 border border-gray-300 rounded-md"
              >
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
              </select>
              
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex gap-2 mt-4">
              <input
                type="date"
                name="dob"
                id="dob"
                className="w-[200px] p-2 border border-gray-300 rounded-md"
              />

              <select
                name="nationality"
                id="nationality"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Nationality</option>
                {/* Add options for nationalities */}
              </select>
            </div>

            <p className="mt-3 text-blue-500 cursor-pointer hover:underline text-right">
              + Add Passenger
            </p>
          </div>
        </div>
      </form>
    </div>





          </div>




          <div className="w-[25%] h-auto rounded-md ">
            <div className="bg-[#32B57A] p-5 rounded-md">
              <span className="text-xl bg-[#32B57A] text-white ml-2 font-semibold">
                Order Summary{" "}
              </span>
            </div>
            <div>hii</div>
          </div>
        </div>
      </div>
    </>
  );
}
