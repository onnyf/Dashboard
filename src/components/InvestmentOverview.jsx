// import React from "react";

// const InvestmentOverview = () => {
//   return (
//     <div className="pt-6 px-12 pb-6 bg-[#EEF2F1] min-h-screen ml-[258px]">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-[20px] font-semibold text-[#4A4A4A]">Cocoa Land</h2>
//         <div className="flex gap-4">
//           <button className="flex items-center gap-2 text-[#00644C] bg-white rounded-full px-4 py-2 text-sm font-semibold">
//             <img src="/export.svg" alt="export" className="w-4 h-4" />
//             Edit Property
//           </button>
//           <button className="bg-[#FF00001A] text-[#B30000] px-4 py-2 rounded-full text-sm">
//             Un-publish Investment
//           </button>
//         </div>
//       </div>

//       {/* Banner Image */}
//       <div className="w-[1020px]">
//         <img
//           src="/Frame 1618873004.png"
//           alt="Cocoa Land"
//           className="rounded-t-2xl w-full h-[260px] object-cover"
//         />
//       </div>

//       {/* Overview Section */}
//       <div className="bg-white p-6 shadow-sm w-[1020px]">
//         {/* Tabs */}
//         <div className="flex items-center gap-4 text-sm mb-6">
//           {["Overview", "Investors", "Disbursement Transaction", "Orders", "About Investment Property"].map((tab, i) => (
//             <button
//               key={i}
//               className={`px-4 py-2 rounded-full font-medium ${
//                 tab === "Overview"
//                   ? "bg-[#E5FAF9] text-[#009773]"
//                   : "border border-[#E8E8E8] text-[#606060]"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Top Info */}
//         <div className="flex gap-4 mb-6">
//           <div className="bg-[#FAFBFB] rounded-lg p-4 flex-1">
//             <p className="text-xs text-[#7C7C7C] mb-1">Total Property Valuation</p>
//             <p className="text-lg font-semibold text-[#4A4A4A]">₦10,000,000.00</p>
//           </div>
//           <div className="bg-[#FAFBFB] rounded-lg p-4 flex-1">
//             <p className="text-xs text-[#7C7C7C] mb-1">Unit Sold</p>
//             <p className="text-lg font-semibold text-[#4A4A4A]">1002</p>
//           </div>
//           <div className="bg-[#FAFBFB] rounded-lg p-4 flex-1">
//             <p className="text-xs text-[#7C7C7C] mb-1">No. of Investors</p>
//             <p className="text-lg font-semibold text-[#4A4A4A]">1250</p>
//           </div>
//         </div>

//         {/* Property Details */}
//         <div className="grid grid-cols-2 gap-y-4 gap-x-12 text-sm text-[#4A4A4A]">
//           <div>
//             <p className="font-semibold">Name</p>
//             <p>Kingsley Alhaji</p>
//           </div>
//           <div>
//             <p className="font-semibold">Location</p>
//             <p>Lagos State</p>
//           </div>
//           <div>
//             <p className="font-semibold">Property type</p>
//             <p>09040944885</p>
//           </div>
//           <div>
//             <p className="font-semibold">Date Created</p>
//             <p>29-01-2024</p>
//           </div>
//           <div>
//             <p className="font-semibold">Description</p>
//             <p>09040944885</p>
//           </div>
//           <div>
//             <p className="font-semibold">Last modified</p>
//             <p>29-01-2024</p>
//           </div>
//           <div>
//             <p className="font-semibold">Status</p>
//             <p className="text-[#0A8F47] font-semibold">Completed</p>
//           </div>
//           <div>
//             <p className="font-semibold">Completion Progress</p>
//             <p>29-01-2024</p>
//           </div>
//           <div>
//             <p className="font-semibold">Features</p>
//             <p>---</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestmentOverview;
