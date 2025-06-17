// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import logo from "/Logo.png";
// import ButtonLarge from "../components/small/ButtonLarge";
// import { IoArrowBackOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const ForgotPass = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) {
//       setMessage("Please enter your email.");
//       return;
//     }

//     console.log("Password reset email sent to:", email);
//     setMessage("If an account with that email exists, a reset link has been sent.");
//     setEmail("");
//   };

//   return (
//     <div className="w-full h-screen flex justify-center items-center px-4">
//       <div className="w-full max-w-md space-y-6 flex flex-col items-center">
//         <img src={logo} alt="Caerus Logo" className="w-36" />

//         <form
//           onSubmit={handleSubmit}
//           className="w-full p-6 border border-gray-200 rounded-xl flex flex-col items-center space-y-5"
//         >
//           <img src="/key.svg" alt="Key icon" className="w-8 h-8" />

//           <div className="text-center space-y-1">
//             <h1 className="text-xl font-titleFontB text-neutral">Forgot Password?</h1>
//             <p className="text-sm text-gray-500 font-textFont">
//               Enter your email and we`ll send reset instructions.
//             </p>
//           </div>

//           <div className="w-full">
//             <label htmlFor="email" className="text-sm text-gray-600 font-textFont">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="kingsley@gmail.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:outline-none"
//               required
//             />
//           </div>

//           {message && <p className="text-sm text-green-600 font-textFont">{message}</p>}

//           <div className="">
//             <ButtonLarge title="Continue" type="submit" />
//           </div>

//           <Link to="/login" className="flex items-center gap-2 text-secondary text-sm">
//             <IoArrowBackOutline className="text-base" />
//             <span className="font-textFont2">Back to login</span>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPass;
