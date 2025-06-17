// // src/authentication/ResetPassword.jsx

// import React, { useState } from "react";

// const ResetPassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirm) {
//       alert("Passwords do not match");
//       return;
//     }

//     // Perform API call to reset password here
//     console.log("Password reset successfully!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Reset Your Password</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="password"
//             placeholder="New password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm new password"
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 font-semibold"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
