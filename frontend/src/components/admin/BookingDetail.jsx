import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

export default function BookingDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  
  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:2001/book/${id}`);
        setBooking(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    };
    fetchBookingDetails();
  }, [id]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex w-full items-center justify-center h-screen pt-24 bg-gray-100 overflow-auto">
        <div className="w-full max-w-lg bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-2 text-center bg-[#32B57A] text-white">
            <h1 className="text-3xl font-bold">Tickets</h1>
            <p className="mt-2 mb-2">Manage your tickets here.</p>
          </div>

          {/* Booking Details Card */}
          <div className="pt-2 p-8">
            <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
            <div className="space-y-4">
              <p><strong>Booking ID:</strong> {booking._id}</p>
              <p><strong>Email:</strong> {booking.userId.email}</p>
              <p><strong>Status:</strong> {booking.status}</p>
              <p><strong>Payment Amount:</strong> {booking.paymentAmount}</p>
              <p><strong>Transaction ID:</strong> {booking.RazorPayOrderId}</p>

              {/* Flight Details */}
              <div>
                <h3 className="font-semibold">Flight Details:</h3>
                {booking.flightDetails.length > 0 ? (
                  booking.flightDetails.map((flight, index) => (
                    <div key={index} className="ml-4 space-y-2">
                      <p><strong>From:</strong> {flight.from}</p>
                      <p><strong>To:</strong> {flight.to}</p>
                      <p><strong>Type:</strong> {flight.type}</p>
                    </div>
                  ))
                ) : (
                  <p>No flight details available.</p>
                )}
              </div>

              {/* Hotel Details */}
              <div>
                <h3 className="font-semibold">Hotel Details:</h3>
                {booking.hotelDetails.length > 0 ? (
                  booking.hotelDetails.map((hotel, index) => (
                    <div key={index} className="ml-4 space-y-2">
                      <p><strong>Hotel Name:</strong> {hotel.name}</p>
                      <p><strong>Location:</strong> {hotel.location}</p>
                      {/* Add other hotel details as required */}
                    </div>
                  ))
                ) : (
                  <p>No hotel details available.</p>
                )}
              </div>

              {/* Passenger Details */}
              <div>
                <h3 className="font-semibold">Passenger Details:</h3>
                {booking.passengerDetails.length > 0 ? (
                  booking.passengerDetails.map((passenger, index) => (
                    <div key={index} className="ml-4 space-y-2">
                      <p><strong>Name:</strong> {passenger.title} {passenger.firstName} {passenger.lastName}</p>
                      <p><strong>Date of Birth:</strong> {passenger.dob}</p>
                      <p><strong>Nationality:</strong> {passenger.nationality}</p>
                    </div>
                  ))
                ) : (
                  <p>No passenger details available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
