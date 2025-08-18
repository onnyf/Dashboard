// import React from "react";

// const OrderDetailsModal = ({ order, onClose }) => {
//   if (!order) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-50"
//         onClick={onClose}
//       ></div>

//       {/* Modal content */}
//       <div className="relative bg-white rounded-lg shadow-lg w-96 p-6 z-10">
//         <h2 className="text-xl font-bold mb-4">Order Details</h2>

//         <p><strong>Order ID:</strong> {order.orderId}</p>
//         <p><strong>Customer:</strong> {order.name}</p>
//         <p><strong>Status:</strong> {order.status}</p>
//         <p><strong>Amount:</strong> {order.amount}</p>
//         <p><strong>Investor:</strong> {order.investor}</p>
//         <p><strong>Date:</strong> {order.date}</p>

//         <div className="mt-6 text-right">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetailsModal;
