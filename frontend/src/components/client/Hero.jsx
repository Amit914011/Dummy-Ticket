import React, { useEffect, useState } from "react";
// import { FaPlane, FaHotel, FaCar, FaUtensils } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brand1 from "../../assets/brand (1).png";
import brand2 from "../../assets/brand (2).png";
import brand3 from "../../assets/brand (3).png";
import brand4 from "../../assets/brand (4).png";
import brand5 from "../../assets/brand (5).png";
import brand6 from "../../assets/brand (6).png";
import brand7 from "../../assets/brand (7).png";
import brand8 from "../../assets/brand (8).png";
import brand9 from "../../assets/brand (9).png";
import photo from "../../assets/how-to-book-dummy-ticket-online.png";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import { FaArrowRightLong } from "react-icons/fa6";
import "aos/dist/aos.css";
import { FaKhanda } from "react-icons/fa6";
import { HiMiniHandThumbUp } from "react-icons/hi2";
import { GiStarsStack } from "react-icons/gi";
import { LuUserCog } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaChalkboardUser } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaPlay, FaTimes } from 'react-icons/fa'; // Importing icons
import { PiPhoneCall } from "react-icons/pi";
import LeadGene from "./LeadGene";



const Hero = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripType, setTripType] = useState("one-way");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  //card section here
  const cards = [
    {
      id: 1,
      icon: <GiStarFormation className="text-4xl text-blue-500" />,
      heading: "4.8 Ratings",
      content:
        "We love our work and our clients too. We're rated 4.8 on Trustpilot based on 1100+ reviews. ",
      hoverContent:
        "We love our work and our clients too. We're rated 4.8 on Trustpilot based on 1100+ reviews. We're rated 4.8 on Google based on 500+ reviews.",
    },
    {
      id: 2,
      icon: <Ri24HoursFill className="text-4xl text-green-500" />,
      heading: "24X7",
      content:
        "Stuck at the airport and need a ticket immediately? We understand.                    ",
      hoverContent:
        "Stuck at the airport and need a ticket immediately? We understand. That's why we work 24 hours in a day 7 days a week.",
    },
    {
      id: 3,
      icon: <HiLightBulb className="text-4xl text-yellow-500" />,
      heading: "Live PNR",
      content:
        "We provide the dummy ticket with a Live PNR that can be verified at Airline websites.",
      hoverContent:
        "We provide the dummy ticket with a Live PNR that can be verified at Airline websites. Likewise, our hotel bookings also come with a booking no. which can be cross-checked at the Hotel website or by mailing directly to the Hotel.",
    },
    {
      id: 4,
      icon: <FaMoneyBill1Wave className="text-4xl text-red-500" />,
      heading: "Cheapest Price",
      content:
        "We offer unbeatable price in the market, starting from $5. We offer best price.",
      hoverContent:
        "We offer unbeatable price in the market, starting from $5. Undoubtedly, we’re the one who offer the dummy ticket at the best price in the market. Dummy-Tickets.com is your only answer while looking for the best price dummy tickets.",
    },
  ];

  //  Brand  Slider
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let image = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];

  //   Dummy Ticket section 2 with Animation
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);




  // Booking Proccess 
  const iconBoxes = [
  {
    number: 1,
    icon: <FaBusinessTime />,
    title: 'Select Your Destination',
    description: 'Choose your origin and destination with desired date.',
  },
  {
    number: 2,
    icon: <GiNotebook />,
    title: 'Fill Your Details',
    description: 'Fill your necessary details like Email, Mobile, Names as per passport and DOB.',
  },
  {
    number: 3,
    icon: <FaChalkboardUser  />,
    title: 'Pay Booking Amount',
    description: 'Secure your reservation today by promptly submitting the required booking amount.',
  },
  {
    number: 4,
    icon: <AiFillLike  />,
    title: 'Get Your Ticket',
    description: 'Embark on your journey and secure your seat by swiftly obtaining your ticket now.',
  },
];


// background overlay section
 const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };



  // Dummy Ticket FAQs

  // Separate states for each accordion
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  // Toggle accordion 1
  const toggleAccordion1 = (index) => {
    setActiveIndex1(activeIndex1 === index ? null : index);
  };

  // Toggle accordion 2
  const toggleAccordion2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };

  const accordionData1 = [
    {
      title: 'Is Dummy Flight Ticket Legal Or Illegal?',
      content:
        'Dummy Tickets are completely legal in order to obtain a visa application. Here, a dummy ticket refers to an actual flight reservation that is on hold, with payment pending. To avoid visa cancellation, ensure you get a genuine dummy ticket with a live verifiable PNR.',
    },
    {
      title: 'Will PNR Show On The Airline Website?',
      content: 'It comes with a Valid PNR which can be verified at airline website',
    },
    {
      title: 'Is It Possible To Get A Dummy Ticket Free?',
      content: 'There are few websites who provide online generated dummy tickets without any cost but they are not real and invalid. The staff of any airline or visa embassies do not accept it. We are one of the trustworthy IATA approved travel agencies who provide dummy tickets at very reasonable prices. With the valid PNR, and good time of validity. Our dummy tickets are genuine and acceptable by embassies. You can also verify at airline websites.',
    },
  ];
  const accordionData2 = [
    {
      title: 'What Are Dummy Tickets Airlines?',
      content:
        'Dummy ticket is an alternative name of flight reservation which means reserving flight seats, fares, or both. Generally, there are two types of airlines, Low-Cost-Carrier (LCC) & Normal airlines. Making a dummy ticket in a low-cost airline is not possible but, that is possible in airlines other than LCC. So other than LCC airlines can also be known as dummy ticket airlines. Some of them are: Air India, Qatar Airways, Lufthansa, Air Canada, British Airways, Air France, Emirates, Etihad, KLM Royal Dutch Airline, United Airlines, Singapore Airlines, etc. Some of the LCC are: Indigo, GoAir, Air Asia, Air Arabia, etc.',
    },
    {
      title: 'In What Format Will I Receive The Dummy Ticket?',
      content: 'The format of a ticket completely depends on the airline of your ticket. Each airline has a different format for its ticket. Click here to check the sample ticket of your each airline.',
    },
    {
      title: 'Which Airline Dummy Ticket Will I Be Getting?',
      content: `You'll be getting a dummy ticket of any FSC airline other. It doesn't matter with which airlines' dummy ticket you're applying your visa until it has a valid PNR. We provide Qatar Airways, Singapore Airline, Malaysian Airlines, Thai Airways International, Emirates dummy ticket and many other dummy airline tickets as well.`,
    },
  ];





  return (
    <>
      <section className="min-h-[130vh] flex flex-col md:flex-row items-center justify-between p-10 bg-gradient-to-r from-gray-100 to-[#DDFEF1] pt-20 lg:pt:0">
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-6 text-black md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Get your Dummy Ticket At $5
          </h1>
          <p className="text-xl">
            For visa application/immigration/proof of return/passport
            renewal/visa extension.
            <br />
            We Offer Genuine Dummy Ticket At A Reasonable Price Within 60
            Minutes.
          </p>
          <button className="bg-[#32B57A] text-white text-xl font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition duration-300">
            Buy Dummy Ticket
          </button>
        </div>

        {/* Right Column: Tab Switcher */}
        <div className="w-full md:w-1/2 mt-8 md:mt-10">
          <LeadGene/>
        </div>

      </section>

      {/* Card Section */}

      <div className="h-auto flex justify-center items-center   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 cursor-pointer overflow-hidden"
            >
              {/* Initial Content */}
              <div className="flex flex-col items-center text-center space-y-4 transition-opacity duration-500 group-hover:opacity-0">
                <div className="bg-gray-100 p-4 rounded-full">{card.icon}</div>
                <h3 className="text-xl font-semibold">{card.heading}</h3>
                <p className="text-gray-500">{card.content}</p>
              </div>

              {/* Hover Content (Initially Hidden) */}
              <div className="absolute inset-0 flex justify-center items-center bg-[#32B57A] p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white">{card.hoverContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Slider effect */}
      <div className="slider-container overflow-hidden m-2  my-16 ">
        <Slider {...settings}>
          {image.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={image} alt={image} width="100px" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Dummy Ticket Section */}
      <div className="h-auto w-full bg-[#F0F3F9]">
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center py-16 px-6">
          {/* First Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center flex-col relative">
            <img
              src={photo} // Replace with actual image URL
              alt="Dummy Ticket"
              className="rounded-lg shadow-lg w-full h-auto max-w-lg "
            />
            <div className="bg-white px-5 py-2 rounded-xl absolute -bottom-3 left-10 text-2xl">
              <h1>24x7 Hours Support</h1>
            </div>
          </div>

          {/* Second Section: Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 space-y-6">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-800">
              Dummy Ticket
            </h1>
            <p className="text-gray-600 text-lg">
              Over 5 years of experience, we’ll ensure you always get the best
              guidance. We serve clients at every level of their organization
              where we can be most useful, whether as a trusted advisor to top
              management.
            </p>

            {/* Topics */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">
                  <FaCheckCircle className="inline text-[#32B57A] text-3xl" />{" "}
                  What Is A Dummy Flight Ticket?
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-semibold ">
                  <FaCheckCircle className="inline text-[#32B57A] text-3xl" />{" "}
                  Dummy Ticket Booking For Visa
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-semibold ">
                  <FaCheckCircle className="inline text-[#32B57A] text-3xl" />{" "}
                  How To Make A Dummy Flight Ticket Online?
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Dummy Ticket section 2 */}
        <section className=" bg-[#F9FAFB] py-12 px-4 overflow-x-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-12">
            {/* First Section */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2 flex gap-5"
              data-aos="fade-right"
            >
              <img
                src="https://dummy-tickets.com/public/images/dummy_ticket_sample.png"
                alt=""
                width="100px"
              />
              <div>
                <h2 className="text-2xl font-semibold text-black  mb-4">
                  Dummy Ticket Sample
                </h2>
                <p className="text-[#32B57A]">
                  Check All Airline Dummy Ticket Format Here{" "}
                  <FaArrowRightLong className="inline" />
                </p>
              </div>
            </div>

            {/* Second Section */}
            <div
              className="bg-[#32B57A]  rounded-lg pt-5 pr-5 shadow-lg w-full lg:w-1/2 flex"
              data-aos="fade-left"
            >
              <p className="text-white text-xl p-5">
                Register now in our B2B Dummy Ticket program & get special
                pricing. Contact us. <FaArrowRightLong className="inline" />
              </p>
              <img
                src="https://dummy-tickets.com/public/theme/front/assets/images/person-selling-dummy-ticket.webp"
                alt=""
                width="130px"
              />
            </div>

            {/* Why choose Dummy Ticket Setion */}
          </div>
          <div className="mt-[100px]">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              Why Choose Dummy-Tickets.com
            </h1>
            <div className="py-12 px-4">
              <div className="w-full h-auto flex overflow-hidden flex-wrap gap-6 justify-center">
                {/* First Card */}
                <div
                  className="w-full sm:w-[48%] bg-white lg:w-[22%] h-auto shadow-lg border p-1 rounded-lg"
                  data-aos="fade-up"
                >
                  <div className="border border-dashed border-black p-5 rounded-lg h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <FaKhanda className="text-3xl p-1 rounded-full" />
                      <span className="overflow-hidden text-[#32B57A] text-3xl font-bold ">
                        IATA
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h1 className="font-bold mb-2 text-black">Accredited</h1>
                      <p className="text-gray-600 text-sm">
                        We're one of very few travel agents providing flight
                        reservations services online.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Card */}
                <div
                  className="w-full sm:w-[48%] bg-white lg:w-[22%] h-auto shadow-lg border p-1 rounded-lg"
                  data-aos="fade-up"
                >
                  <div className="border border-dashed border-black p-5 rounded-lg h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <HiMiniHandThumbUp className="text-3xl p-1 rounded-full" />
                      <span className="font-bold text-3xl overflow-hidden text-[#32B57A]">
                        5
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h1 className=" font-bold mb-2 text-black">
                        Since 5 Years
                      </h1>
                      <p className="text-gray-600 text-sm">
                        With five years of dedicated service, our commitment is
                        to provide exceptional experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Third Card */}
                <div
                  className="w-full sm:w-[48%] bg-white lg:w-[22%] h-auto shadow-lg border p-1 rounded-lg"
                  data-aos="fade-up"
                >
                  <div className="border border-dashed border-black p-5 rounded-lg h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <GiStarsStack className="text-3xl p-1 rounded-full" />
                      <span className="font-bold text-[#32B57A] text-3xl overflow-hidden">
                        60
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h1 className=" font-bold mb-2">Minutes</h1>
                      <p className="text-gray-600 text-sm">
                        Efficiency is our promise - expect your tickets
                        delivered promptly, between 10 to 60 minutes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fourth Card */}
                <div
                  className="w-full sm:w-[48%] bg-white lg:w-[22%] h-auto shadow-lg border p-1 rounded-lg"
                  data-aos="fade-up"
                >
                  <div className="border border-dashed border-black p-5 rounded-lg h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <LuUserCog className="text-3xl p-1 rounded-full" />
                      <span className="font-bold text-[#32B57A] text-3xl overflow-hidden">
                        1600+
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h1 className=" font-bold mb-2">Reviews</h1>
                      <p className="text-gray-600 text-sm">
                        Join over 1600 satisfied customers who have shared their
                        positive experiences on Google & Trustpilot.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* Choose Among Best Dummy Ticket & Dummy Hotel Plan */}

          <div className="py-8">
            <h1 className="text-center text-2xl md:text-4xl font-bold"> Choose Among Best Dummy Ticket & Dummy Hotel Plan</h1>
            <div className="container mx-auto px-4 my-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-hidden">
          {/* First card */}
          <div
            className="border shadow p-5 rounded-lg bg-white flex flex-col justify-between"
            data-aos="fade-up" // AOS effect
          >
            <div>
              <h1 className="mb-2 text-xl font-bold">Dummy Flight Ticket</h1>
              <div className="w-14 h-[2px] bg-[#32B57A]"></div>
              <div className="pt-5">
                <h1 className="text-4xl font-bold  text-[#32B57A]">
                  5<sup>$</sup>
                </h1>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg mt-2">
                  Verifiable flight reservation. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="py-1 px-2 rounded-lg">Maximum of 2 Flights. <FaCheck className="inline text-[#32B57A]"/></p>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg">
                  Validity Depends on Travel Date. Generally, Valid for 1 - 2 weeks. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="py-1 px-2 rounded-lg">
                  Urgent Delivery between 30 to 60 minutes. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg">Rs. 400 /- <FaCheck className="inline text-[#32B57A]"/></p>
              </div>
            </div>
            <button className="py-2 mt-5 w-full rounded-lg hover:bg-[#32B57A] text-center border border-[#32B57A] text-[#32B57A] hover:text-white">
              Buy Now
            </button>
          </div>

          {/* Duplicate for other cards */}
          <div
            className="border shadow p-5 rounded-lg bg-white flex flex-col justify-between"
            data-aos="fade-up" // AOS effect
          >
            <div>
              <h1 className="mb-2 text-xl font-bold">Dummy Hotel & Flight Ticket</h1>
              <div className="w-14 h-[2px] bg-[#32B57A]"></div>
              <div className="pt-5">
                <h1 className="text-4xl font-bold text-[#32B57A]">
                  8<sup>$</sup>
                </h1>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg mt-2">
                  All DUMMY FLIGHT TICKET Benefits. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="py-1 px-2 rounded-lg">All HOTEL RESERVATION Benefits. <FaCheck className="inline text-[#32B57A]"/></p>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg">Discounted Price. <FaCheck className="inline text-[#32B57A]"/></p>
                <p className="py-1 px-2 rounded-lg">
                  Urgent Delivery between 30 to 60 minutes. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg">Rs. 650 /- <FaCheck className="inline text-[#32B57A]"/></p>
              </div>
            </div>
            <button className="py-2 mt-5 w-full rounded-lg hover:bg-[#32B57A] text-center border border-[#32B57A] text-[#32B57A] hover:text-white">
              Buy Now
            </button>
          </div>

          <div
            className="border shadow p-5 rounded-lg bg-white flex flex-col justify-between"
            data-aos="fade-up" // AOS effect
          >
            <div>
              <h1 className="mb-2 text-xl font-bold">Dummy Hotel</h1>
              <div className="w-14 h-[2px] bg-[#32B57A]"></div>
              <div className="pt-5">
                <h1 className="text-4xl font-bold text-[#32B57A]">
                  3<sup>$</sup>
                </h1>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg mt-2">
                  Hotel reservation. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="py-1 px-2 rounded-lg">
                  Maximum of 2 Hotels with maximum duration of 30 days each. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg">
                  Validity till a few days before the check-in date. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="py-1 px-2 rounded-lg">
                  Urgent Delivery between 30 to 60 minutes. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg">Rs. 250 /- <FaCheck className="inline text-[#32B57A]"/></p>
              </div>
            </div>
            <button className="py-2 mt-5 w-full rounded-lg hover:bg-[#32B57A] text-center border border-[#32B57A] text-[#32B57A] hover:text-white">
              Buy Now
            </button>
          </div>

          <div
            className="border shadow p-5 rounded-lg bg-white flex flex-col justify-between"
            data-aos="fade-up" // AOS effect
          >
            <div>
              <h1 className="mb-2 text-xl font-bold">Return Flight Ticket with E Ticket Number</h1>
              <div className="w-14 h-[2px] bg-[#32B57A]"></div>
              <div className="pt-5">
                <h1 className="text-4xl font-bold text-[#32B57A]">
                  15<sup>$</sup>
                </h1>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg mt-2">
                  Confirmed Flight Ticket with E-Ticket Number & Payment Details. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="py-1 px-2 rounded-lg">Maximum of 1 PNR/Sector. <FaCheck className="inline text-[#32B57A]"/></p>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg">
                  Will be cancelled only after you reach the destination. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="py-1 px-2 rounded-lg">
                  Urgent Delivery between 30 to 60 minutes. <FaCheck className="inline text-[#32B57A]"/>
                </p>
                <p className="bg-[#F0F3F9] py-1 px-2 rounded-lg">Starting Price ₹999 /- <FaCheck className="inline text-[#32B57A]"/></p>
              </div>
            </div>
            <button className="py-2 mt-5 w-full rounded-lg hover:bg-[#32B57A] text-center border border-[#32B57A] text-[#32B57A] hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
          </div>



            {/*  TESTIMONIAL section  */}
            <div className='w-full h-auto bg-gray-50 py-10'>
      <div>
        <p className='text-xl text-center'> <IoBagCheckOutline className='text-[#32B57A] text-3xl inline '/> TESTIMONIAL</p>
        <h1 className='text-2xl md:text-4xl mt-10  text-black text-center font-bold '>
        Words From Our Customers
        </h1>
        <p className='w-[70%] m-auto text-center mt-3'>
        Discover firsthand experiences, glowing testimonials, and valuable feedback straight from our customers on platforms like GMB & Trustpilot. Hear their stories of satisfaction and find out why they love us.
        </p>
      </div>

    </div>
      



{/* Booking Process Section */}

 <div className="container mx-auto py-10">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">Booking Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {iconBoxes.map((box, index) => (
          <div
            key={index}
            className="icon-box bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative" // Adding hover shadow and translation effect
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={`${index * 200}`} // Adding staggered delay
          >
            {/* Number above the icon with background styling */}
            <div className="flex items-center justify-center absolute z-20 right-24">
              <div className="bg-[#32B57A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl">
                {box.number}
              </div>
            </div>

            {/* Icon inside a circle */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-28 h-28 text-6xl text-[#32B57A] border shadow-2xl rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:text-[#1A936F]"> {/* Adding scale and color change on hover */}
                {box.icon}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
            <p className="text-gray-600">{box.description}</p>
          </div>
        ))}
      </div>
    </div>







{/* Background overlay section */}
 <div className="relative h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://dummy-tickets.com/public/theme/front/assets/images/how-to-book-dummy-ticket-online.avif')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Video Play Button with Wave Effect */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Wave Animation */}
          <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#32B57A] opacity-75 animate-ping"></div>

          {/* Play Button */}
          <button 
            className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#32B57A] hover:bg-[#1A936F] text-white rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl transition-transform transform hover:scale-110"
            onClick={toggleModal} // Trigger modal on click
          >
            <FaPlay />
          </button>
        </div>

        <p className='text-lg sm:text-xl font-bold'>Need Some Help?</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Working Process</h1>
        <p className="text-sm sm:text-lg md:text-xl max-w-2xl">Step Inside Our Working Process: Watch as we guide you through our seamless booking process in the video below.</p>
        
        {/* Contact Section */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-5 mt-5'>
          <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#32B57A] hover:bg-[#1A936F] text-white font-semibold rounded-full flex items-center">
            Contact Us <FaArrowRightLong className='inline ml-2'/>
          </button>

          <PiPhoneCall className='w-12 h-12 sm:w-16 sm:h-16 p-2 sm:p-3 border-dashed border rounded-full hover:bg-[#32B57A] cursor-pointer'/>
          
          <div className='text-center sm:text-left'>
            <p className='text-lg sm:text-2xl font-bold'>Contact Us Soon</p>
            <p className="text-sm sm:text-base">info@dummy-tickets.com <br /> +91 1234567890</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          {/* Modal Content */}
          <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-3xl w-full mx-2">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={toggleModal}
            >
              <FaTimes size={24} />
            </button>

            {/* Video */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>



    {/* Dummy Ticket FAQs */}
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Dummy Ticket FAQs</h1>
      <p className="text-xl text-center">Check our FAQs for quick answers to frequently asked questions we receive.</p>

      {/* Responsive Flex Container for Two Sections */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Section 1 */}
        <section className="flex-1 py-12  text-center md:text-left">
          <div className="max-w-xl mx-auto">
            <div className="max-w-4xl mx-auto p-6">
              {accordionData1.map((item, index) => (
                <div key={index} className="mb-4 border-b border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center text-left font-semibold text-lg text-gray-700 focus:outline-none"
                    onClick={() => toggleAccordion1(index)}
                  >
                    <span><FaCheck className='inline w-7 h-7 p-1 text-white rounded bg-[#32B57A]'/> {item.title}</span>
                    <span className="text-2xl">{activeIndex1 === index ? '-' : '+'}</span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out  ${
                      activeIndex1 === index ? 'max-h-96 border border-dashed' : 'max-h-0'
                    }`}
                  >
                    <div className="p-4 text-gray-600">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex-1 py-12 text-center md:text-left">
          <div className="max-w-xl mx-auto">
            <div className="max-w-4xl mx-auto p-6">
              {accordionData2.map((item, index) => (
                <div key={index} className="mb-4 border-b border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center text-left font-semibold text-lg text-gray-700 focus:outline-none"
                    onClick={() => toggleAccordion2(index)}
                  >
                    <span><FaCheck className='inline w-7 h-7 p-1 text-white rounded bg-[#32B57A]'/> {item.title}</span>
                    <span className="text-2xl">{activeIndex2 === index ? '-' : '+'}</span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      activeIndex2 === index ? 'max-h-96 border border-dashed' : 'max-h-0'
                    }`}
                  >
                    <div className="p-4 text-gray-600">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>


      </div>
    </>
  );
};

export default Hero;
