import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookingDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:2001/book/${id}`);
        setBooking(response.data);
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
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Booking Details</h1>
      <p><strong>Booking ID:</strong> {booking._id}</p>
      <p><strong>Email:</strong> {booking.userId.email}</p>
      {/* <p><strong>Status:</strong> {booking.status}</p>
      <p><strong>Flight Details:</strong> {booking.flightDetails}</p>
      <p><strong>Hotel Details:</strong> {booking.hotelDetails}</p>
      <p><strong>Passenger Details:</strong> {JSON.stringify(booking.passengerDetails)}</p>
      <p><strong>Payment Amount:</strong> {booking.paymentAmount}</p>
      <p><strong>Transaction ID:</strong> {booking.transactionId}</p> */}
    </div>
  );
}
