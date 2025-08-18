import React, { useState } from "react";

const Orders = () => {
  const ordersData = [
    { id: 1, sn: "001", name: "John Doe", orderId: "#A1234", status: "Completed", amount: "$200", investor: "John Doe", date: "2025-08-13", classes: "bg-green-100 text-green-700" },
    { id: 2, sn: "002", name: "Jane Smith", orderId: "#B5678", status: "Pending", amount: "$150", investor: "Jane Smith", date: "2025-08-12", classes: "bg-yellow-100 text-yellow-700" },
    { id: 3, sn: "003", name: "Michael Johnson", orderId: "#C9101", status: "Completed", amount: "$300", investor: "Michael Johnson", date: "2025-08-11", classes: "bg-green-100 text-green-700" },
    { id: 4, sn: "004", name: "Emily Brown", orderId: "#D1123", status: "Failed", amount: "$100", investor: "Emily Brown", date: "2025-08-10", classes: "bg-red-100 text-red-700" },
    { id: 5, sn: "005", name: "Daniel Wilson", orderId: "#E1456", status: "Completed", amount: "$220", investor: "Daniel Wilson", date: "2025-08-09", classes: "bg-green-100 text-green-700" },
    { id: 6, sn: "006", name: "Olivia Davis", orderId: "#F7890", status: "Pending", amount: "$180", investor: "Olivia Davis", date: "2025-08-08", classes: "bg-yellow-100 text-yellow-700" },
    { id: 7, sn: "007", name: "Liam Anderson", orderId: "#G2345", status: "Completed", amount: "$250", investor: "Liam Anderson", date: "2025-08-07", classes: "bg-green-100 text-green-700" },
    { id: 8, sn: "008", name: "Sophia Martinez", orderId: "#H6789", status: "Completed", amount: "$300", investor: "Sophia Martinez", date: "2025-08-06", classes: "bg-green-100 text-green-700" },
    { id: 9, sn: "009", name: "William Taylor", orderId: "#I3456", status: "Failed", amount: "$90", investor: "William Taylor", date: "2025-08-05", classes: "bg-red-100 text-red-700" },
    { id: 10, sn: "010", name: "Mia Hernandez", orderId: "#J9012", status: "Pending", amount: "$170", investor: "Mia Hernandez", date: "2025-08-04", classes: "bg-yellow-100 text-yellow-700" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = ordersData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(ordersData.length / rowsPerPage);

  return (
    <div className="p-6 ml-[258px] min-h-screen bg-[#F5F6FA]">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">S/N</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{order.sn}</td>
                <td className="px-6 py-4 font-medium">{order.name}</td>
                <td className="px-6 py-4">{order.orderId}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${order.classes}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Orders;
