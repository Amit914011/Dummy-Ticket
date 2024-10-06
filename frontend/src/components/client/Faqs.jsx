import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";


export default function Faqs() {
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
    <div>
       <div className="container mx-auto p-4 mt-28">
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
  )
}
