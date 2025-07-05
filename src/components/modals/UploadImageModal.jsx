// import React from "react";
// import { IoMdClose } from "react-icons/io";
// import { LuUploadCloud } from "react-icons/lu";

// const UploadImageModal = ({ onClose, onPrevious }) => {
//   return (
//     <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center px-4">
//       <div className="bg-white rounded-[24px] shadow-lg w-[400px] sm:w-[460px] relative p-6 sm:p-8">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
//         >
//           <IoMdClose size={20} className="text-gray-500 hover:text-black" />
//         </button>

//         <h3 className="text-lg font-semibold text-center mb-6">Add Property</h3>

//         <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center space-y-4 mb-6">
//           <LuUploadCloud className="mx-auto text-3xl text-gray-400" />
//           <div className="text-sm text-gray-500">
//             <strong className="text-[#00644C] cursor-pointer hover:underline">
//               Click to upload
//             </strong>{" "}
//             or drag and drop <br />
//             <span className="text-xs text-gray-400">
//               SVG, PNG, JPG or GIF (max. 800x400px)
//             </span>
//           </div>
//           <input type="file" className="hidden" accept="image/*" multiple />
//           <button className="bg-[#00644C] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#00563f]">
//             Browse Files
//           </button>
//         </div>

//         <div className="flex justify-between">
//           <button
//             onClick={onPrevious}
//             className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-100"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => {
//               console.log("Image uploaded & property added!");
//               onClose();
//             }}
//             className="bg-[#00644C] text-white px-4 py-2 rounded-md text-sm hover:bg-[#00563f]"
//           >
//             Add Property
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadImageModal;
