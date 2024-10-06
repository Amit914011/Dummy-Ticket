import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image1 from '../../assets/dummy ticket/image1.webp';
import image2 from '../../assets/dummy ticket/image2.webp';
import image3 from '../../assets/dummy ticket/image3.webp';
import image4 from '../../assets/dummy ticket/image4.webp';
import image5 from '../../assets/dummy ticket/image5.webp';
import image6 from '../../assets/dummy ticket/image6.webp';
import image7 from '../../assets/dummy ticket/image7.svg';
import image8 from '../../assets/dummy ticket/image8.webp';
import image9 from '../../assets/dummy ticket/image9.webp';
import image10 from '../../assets/dummy ticket/image10.webp';
import image11 from '../../assets/dummy ticket/image11.webp';
import image12 from '../../assets/dummy ticket/image12.webp';
import pdf1 from '../../assets/dummy ticket/AEGEAN AIRLINES SAMPLE.pdf';
import pdf2 from '../../assets/dummy ticket/Air Algerie Sample.pdf';
import pdf3 from '../../assets/dummy ticket/AIR BALTIC SAMPLE.pdf';
import pdf4 from '../../assets/dummy ticket/AIR FRANCE SAMPLE.pdf';
import pdf5 from '../../assets/dummy ticket/AIR INDIA SAMPLE.pdf';
import pdf6 from '../../assets/dummy ticket/AIR PORTUGAL SAMPLE.pdf';
import pdf7 from '../../assets/dummy ticket/AMERICAN AIRLINE SAMPLE.pdf';
import pdf8 from '../../assets/dummy ticket/ASKY SAMPLE.pdf';
import pdf9 from '../../assets/dummy ticket/BANGKOK AIR SAMPLE.pdf';
import pdf10 from '../../assets/dummy ticket/BIMAG BANGLADESH SAMPLE.pdf';
import pdf11 from '../../assets/dummy ticket/BRITISH AIRWAYS SAMPLE.pdf';
import pdf12 from '../../assets/dummy ticket/DELTA AIRLINE SAMPLE.pdf';

export default function Sample() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  const cards = [
    { id: 1, name: 'AEGEAN AIRLINES', imageUrl: image1, pdfUrl: pdf1 },
    { id: 2, name: 'AIR ALGERIE', imageUrl: image2, pdfUrl: pdf2 },
    { id: 3, name: 'AIR BALTIC', imageUrl: image3, pdfUrl: pdf3 },
    { id: 4, name: 'AIR FRANCE', imageUrl: image4, pdfUrl: pdf4 },
    { id: 5, name: 'AIR INDIA DUMMY TICKET', imageUrl: image5, pdfUrl: pdf5 },
    { id: 6, name: 'AIR PORTUGAL', imageUrl: image6, pdfUrl: pdf6 },
    { id: 7, name: 'AMERICAN AIRLINE', imageUrl: image7, pdfUrl: pdf7 },
    { id: 8, name: 'ASKY', imageUrl: image8, pdfUrl: pdf8 },
    { id: 9, name: 'BANGKOK AIR', imageUrl: image9, pdfUrl: pdf9 },
    { id: 10, name: 'BIMAG BANGLADESH', imageUrl: image10, pdfUrl: pdf10 },
    { id: 11, name: 'BRITISH AIRWAYS', imageUrl: image11, pdfUrl: pdf11 },
    { id: 12, name: 'DELTA AIRLINE', imageUrl: image12, pdfUrl: pdf12 },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-16 pt-28">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800" data-aos="fade-up">
          All Airline Dummy Ticket Samples
        </h1>

        {/* Description Section */}
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up">
          Are you looking for a dummy ticket but not sure how it will look like? 
          Here are the dummy ticket examples of each airline dummy ticket. You can 
          have a look at the dummy ticket format before booking the actual one.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16 pt-0">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
          Sample Ticket
        </h1>

        {/* Row with 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up">
          {cards.map((card) => (
            <div key={card.id} className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="zoom-in">
              <a href={card.pdfUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="w-full h-48 mx-auto mb-4 object-contain"
                />
              </a>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
