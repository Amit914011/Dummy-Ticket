import React, { useEffect, useState } from "react";
import { fetchOrders } from "../../services/api.service";

export default function ClientTicket() {

  const [tickets, setTicket] = useState()


  const fetOrders = async () => {
    await fetchOrders().then((res) => {
      setTicket(res.data.data)
    }).catch((err) => {
      console.log(err);
    })
  }





  useEffect(() => {
    fetOrders()
  }, [])


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
                <th className="px-4 py-2">Order Status</th>
                <th className="px-4 py-2">Amount Paid</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {tickets?.length > 0 && tickets.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-gray-200`}
                  >
                    <td className="border px-4 py-2">{item?._id}</td>
                    <td className="border px-4 py-2">{item?.passengerDetails?.map((i) => i.firstName)}</td>
                    <td
                      className={`border px-4 py-2 ${item?.status === "Completed"
                        ? "text-green-500"
                        : item?.status === "Pending"
                          ? "text-yellow-500"
                          : "text-red-500"
                        }`}
                    >
                      {item?.status}
                    </td>
                    <td className="border px-4 py-2">{item?.paymentAmount}</td>
                    <td className="border px-4 py-2">{new Date(Number(item?.createdAt)).toLocaleDateString()}</td>
                  </tr>
                )
              }

              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
