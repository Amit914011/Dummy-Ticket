import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import about from "../../assets/about-6.webp";
import about2 from "../../assets/about-7.webp";
import about3 from "../../assets/shape-1.webp";

export default function AboutUs() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 pt-24 flex flex-col md:flex-row md:space-x-8">
        {/* Section 1 - Text Content */}
        <div className="text-center md:text-left mb-12 md:mb-0 w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 underline">
            Welcome to
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-[#32B57A] mb-6">
            Dummy-Tickets.com
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Your premier flight reservation service provider since 2019. In a
            market previously dominated by high-cost options, we emerged as a
            game-changer, offering unparalleled services at an affordable rate
            starting from just $5.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our journey began with a vision to make travel accessible to
            everyone, and we take pride in being the go-to travel company for
            thousands of satisfied customers. Backed by a commitment to
            excellence and affordability, we've earned the trust of our
            clientele, amassing over 500 reviews on Google and 1300 reviews on
            Trustpilot, both platforms reflecting an impressive 4.8 rating.
          </p>
          <button className="px-6 py-3 bg-[#32B57A] text-white font-semibold rounded-lg hover:bg-[#28A46E] transition duration-300">
            Buy Dummy Tickets <FaArrowRightLong className="inline ml-2" />
          </button>
        </div>

        {/* Section 2 - Image Content */}
        <div
          className="relative bg-cover bg-center py-16 px-8 flex justify-center w-full md:w-1/2"
          style={{ backgroundImage: `url(${about3})` }}
        >
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
            <img
              src={about}
              alt="About Dummy Tickets"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <img
              src={about2}
              alt="More About Dummy Tickets"
              className="md:absolute relative md:w-[270px] top-20 w-full right-0 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="container mx-auto px-4 pb-16">
        <p className="text-lg text-gray-600 mb-4">
          What sets us apart is not just our unbeatable prices but also our
          dedication to providing a comprehensive suite of services. In addition
          to flight reservations, we offer a range of travel-related solutions,
          including travel insurance, confirmed flight tickets, actual hotel
          accommodations, and various other services designed to enhance your
          travel experience.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          We are proud to be the only IATA accredited travel agent in the market
          specializing in flight reservations. This accreditation speaks to our
          commitment to industry standards and ensures that our customers
          receive reliable and professional service.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          At Dummy-Tickets.com, we believe in making travel dreams a reality
          without breaking the bank. Join the ranks of satisfied travelers who
          have chosen us for their journey, and experience travel with
          convenience, reliability, and affordability like never before.
        </p>
      </div>
    </>
  );
}
