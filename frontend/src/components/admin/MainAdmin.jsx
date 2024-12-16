import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Ticket() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const navigate = useNavigate()
  const [message, setMessage] = useState("");
 

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:2001/book");
      setBookings(response.data.data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  // Fetch bookings
  useEffect(() => {

    fetchBookings();
  }, []);

  useEffect(()=>{
    if(!localStorage.getItem("token")) {
     navigate('/admin')
    }
   },[])



  // Update booking status to "Delivered"
  const markAsDelivered = async (bookingId) => {
    try {
      await axios.patch("http://localhost:2001/book/updateStatus", {
        bookingId,
        status: "Delivered",
        subject,
        message,
      }).then((res) => {
        fetchBookings()
        setBookings((prev) =>
          prev.map((b) =>
            b._id === bookingId ? { ...b, status: "Delivered" } : b
          )
        );
        setModalOpen(false);
      }).catch((err) => {
        console.log(err);
      })

    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  return (
    <div className="flex relative">
      {/* Sidebar */}
     <div className="">
     <Sidebar />
     </div>

      {/* Main Content */}
      <div className="flex-1 p-8 h-screen overflow-auto bg-gray-100">
        <h1 className="text-3xl font-bold">Pending Bookings</h1>

        {/* Booking List */}
        <div className="mt-4 ">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="p-4 bg-white shadow-md rounded-lg mb-4"
            >
              <h2 className="text-xl font-semibold">Booking ID: {booking._id}</h2>
              <p>
                Email:{" "}
                <Link to={`/booking/${booking._id}`}>
                  {booking.userId.email}
                </Link>
              </p>
              <p>Status: {booking.status}</p>
              <button
                className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                onClick={() => {
                  setSelectedBooking(booking);
                  setModalOpen(true);
                }}
              >
                Mark as Delivered
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Mark as Delivered</h2>
            <div className="mb-4">
              <label htmlFor="subject" className="block font-semibold">
                Subject:
              </label>
              <input
                id="subject"
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold">
                Message:
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded p-2"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => markAsDelivered(selectedBooking._id)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
