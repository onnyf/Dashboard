// src/pages/OrdersPage.jsx
import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import OrderDetailsModal from "../components/OrderDetailsModal";

const OrdersPage = () => {
  // Dummy orders data
  const [orders] = useState([
    {
      id: 1,
      investor: "John Doe",
      amount: "150,000",
      date: "2025-08-01",
      status: "Pending",
      classes: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 2,
      investor: "Jane Smith",
      amount: "250,000",
      date: "2025-08-02",
      status: "Completed",
      classes: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      investor: "Mike Johnson",
      amount: "500,000",
      date: "2025-08-03",
      status: "Cancelled",
      classes: "bg-red-100 text-red-800",
    },
    // Add more dummy orders here...
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  // Pagination calculations
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Orders</h1>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left border border-[#E8E8E8]">
          <thead className="bg-[#FAFBFB] text-[#4A4A4A]">
            <tr className="border-b border-[#E8E8E8]">
              <th className="p-3">S/N</th>
              <th className="p-3">Order ID</th>
              <th className="p-3">Investor's Name</th>
              <th className="p-3">Amount (₦)</th>
              <th className="p-3">Date</th>
              <th className="p-3 flex items-center gap-1">
                Status <IoFilter className="text-[#4A4A4A] w-4 h-4" />
              </th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr
                key={order.id}
                className="border-b border-[#E8E8E8] hover:bg-gray-50"
              >
                <td className="p-3">{indexOfFirstOrder + index + 1}</td>
                <td className="p-3">{String(order.id).padStart(8, "0")}</td>
                <td className="p-3">{order.investor}</td>
                <td className="p-3">{order.amount}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">
                  <span
                    className={`inline-flex items-center justify-center rounded-full text-xs font-medium px-3 py-1 ${order.classes}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-[#00644C] hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {currentOrders.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => setCurrentPage(page + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === page + 1
                ? "bg-[#00644C] text-white"
                : "bg-gray-200"
            }`}
          >
            {page + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default OrdersPage;
