import React, { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", "example_token");
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Logo at the top */}
      <div className="mb-6">
        <img src="/Group (1).png" alt="Caerus Logo" className="h-10 mb-6" />
      </div>

      {/* Login Card */}
      <div className="bg-white w-full max-w-[500px] p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-md flex flex-col gap-8">
        <div>
          <h2 className="text-center text-xl sm:text-2xl font-bold text-[#606060] mb-1">
            Welcome back!
          </h2>
          <p className="text-center text-[#606060] text-sm sm:text-base">
            Kindly fill in your details to login to your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-[#777777] mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#333] placeholder-[#D2D2D2] focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-[#777777] mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=""
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#333] placeholder-[#D2D2D2] focus:outline-none pr-10"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-[#A4A4A4]"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          <div>
            <a href="#" className="text-sm text-[#BE8824] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{ backgroundColor: "#00644C" }}
            className={`w-full py-2 rounded-full text-white transition duration-200 flex justify-center items-center gap-2 ${
              isLoading ? "cursor-not-allowed opacity-70" : "hover:opacity-90"
            }`}
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
            )}
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;