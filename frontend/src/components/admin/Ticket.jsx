import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Ticket() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  // Fetch tickets on component mount
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        await axios.get('http://localhost:2001/contact').then((res) => {
          console.log(res);
          setTickets(res.data.data || []);
          setLoading(false);
        }).catch((err) => {
          console.log(err);
        })

      } catch (err) {
        setError('Failed to fetch tickets. Please try again later.');
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  useEffect(()=>{
    if(!localStorage.getItem("token")) {
     navigate('/admin')
    }
   },[])

  // Mark ticket as done
  const markAsDone = async (id) => {
    try {
      await axios.patch(`http://localhost:2001/contact/${id}/status`).then((res) => {
        console.log(res);
        alert("Markey done ")
        setTickets((prevTickets) => prevTickets.filter((ticket) => ticket._id !== id));
      }).catch((err) => {
        console.log(err);
      })

    } catch (err) {
      alert('Failed to update ticket status.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">Tickets</h1>
        <p className="mt-4 mb-6">Manage your tickets here.</p>

        {tickets.length === 0 ? (
          <p>No tickets available.</p>
        ) : (
          <div className="space-y-4">
            {tickets?.map((ticket) => (
              <div
                key={ticket._id}
                className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{ticket.subject}</h3>
                  <p className="text-gray-600">{ticket.message}</p>
                  <p className="text-gray-500 text-sm mt-2">Created by: {ticket.name} ({ticket.email})</p>
                  <p className="text-gray-500 text-sm">Phone: {ticket.phone}</p>
                  <p className="text-gray-500 text-sm">Created At: {new Date(ticket.createdAt).toLocaleString()}</p>
                </div>

                <button
                  disabled={ticket.status == "resolved"}
                  onClick={() => markAsDone(ticket._id)}
                  className={` ${ticket.status == "resolved" ? 'bg-gray-900 ' : 'bg-green-500 hover:bg-green-600 '}  text-white px-4 py-2 rounded `}
                >
                  {
                    ticket.status == "resolved" ? "Resolved" : "Mark As done"
                  }

                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
