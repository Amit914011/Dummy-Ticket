import React from "react";

export default function ClientTicket() {
  const tickets = [
    {
      id: "ORD1234",
      customerName: "John Doe",
      phoneNumber: "123-456-7890",
      orderStatus: "Completed",
      amountPaid: "$120.50",
      date: "2024-12-14",
    },
    {
      id: "ORD5678",
      customerName: "Jane Smith",
      phoneNumber: "987-654-3210",
      orderStatus: "Pending",
      amountPaid: "$75.00",
      date: "2024-12-12",
    },
    {
      id: "ORD9101",
      customerName: "Alice Johnson",
      phoneNumber: "555-555-5555",
      orderStatus: "Cancelled",
      amountPaid: "$0.00",
      date: "2024-12-10",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-20">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Tickets</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Order Status</th>
                <th className="px-4 py-2">Amount Paid</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="border px-4 py-2">{ticket.id}</td>
                  <td className="border px-4 py-2">{ticket.customerName}</td>
                  <td className="border px-4 py-2">{ticket.phoneNumber}</td>
                  <td
                    className={`border px-4 py-2 ${
                      ticket.orderStatus === "Completed"
                        ? "text-green-500"
                        : ticket.orderStatus === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {ticket.orderStatus}
                  </td>
                  <td className="border px-4 py-2">{ticket.amountPaid}</td>
                  <td className="border px-4 py-2">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
