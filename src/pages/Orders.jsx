// import React, { useState } from "react";

// const Orders = () => {
//   const ordersData = [
//     { id: 1, orderId: "ORD-001", customer: "John Doe", date: "2025-08-01", status: "Completed", amount: "$150.00" },
//     { id: 2, orderId: "ORD-002", customer: "Jane Smith", date: "2025-08-02", status: "Pending", amount: "$200.00" },
//     { id: 3, orderId: "ORD-003", customer: "David Brown", date: "2025-08-03", status: "Failed", amount: "$75.00" },
//     { id: 4, orderId: "ORD-004", customer: "Mary Johnson", date: "2025-08-04", status: "Completed", amount: "$350.00" },
//     { id: 5, orderId: "ORD-005", customer: "Chris Evans", date: "2025-08-05", status: "Completed", amount: "$180.00" },
//     { id: 6, orderId: "ORD-006", customer: "Sarah White", date: "2025-08-06", status: "Pending", amount: "$120.00" },
//     { id: 7, orderId: "ORD-007", customer: "Daniel Lee", date: "2025-08-07", status: "Completed", amount: "$220.00" },
//     { id: 8, orderId: "ORD-008", customer: "Emma Wilson", date: "2025-08-08", status: "Failed", amount: "$95.00" },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentOrders = ordersData.slice(indexOfFirstRow, indexOfLastRow);

//   const totalPages = Math.ceil(ordersData.length / rowsPerPage);

//   const OrderDetailsModal = ({ order, onClose }) => {
//     if (!order) return null;
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white rounded-lg p-6 w-[500px] relative">
//           <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
//             ✖
//           </button>
//           <h2 className="text-xl font-semibold mb-4">Order Details</h2>
//           <div className="space-y-2">
//             <p><strong>Order ID:</strong> {order.orderId}</p>
//             <p><strong>Customer:</strong> {order.customer}</p>
//             <p><strong>Date:</strong> {order.date}</p>
//             <p><strong>Status:</strong> {order.status}</p>
//             <p><strong>Amount:</strong> {order.amount}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 bg-[#EEF2F1] min-h-screen ml-[258px]">
//       <h1 className="text-2xl font-bold mb-4">Orders</h1>

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow">
//         <table className="w-full text-sm text-left">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3">Order ID</th>
//               <th className="px-6 py-3">Customer</th>
//               <th className="px-6 py-3">Date</th>
//               <th className="px-6 py-3">Status</th>
//               <th className="px-6 py-3">Amount</th>
//               <th className="px-6 py-3 text-right">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentOrders.map((order) => (
//               <tr key={order.id} className="border-b">
//                 <td className="px-6 py-4">{order.orderId}</td>
//                 <td className="px-6 py-4">{order.customer}</td>
//                 <td className="px-6 py-4">{order.date}</td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs ${
//                       order.status === "Completed"
//                         ? "bg-green-100 text-green-600"
//                         : order.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-600"
//                         : "bg-red-100 text-red-600"
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">{order.amount}</td>
//                 <td className="px-6 py-4 text-right">
//                   <button
//                     onClick={() => setSelectedOrder(order)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Order
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex justify-between items-center p-4">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//             className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           >
//             Prev
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           >
//             Next
//           {/* </button> */}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedOrder && (
//         <OrderDetailsModal
//           order={selectedOrder}
//           onClose={() => setSelectedOrder(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Orders;
