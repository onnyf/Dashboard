import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Layout
import Layouts from "./layout/Layouts";

// Pages
import Login from "./authentication/Login";
import Hero from "./components/home/Hero";
import User from "./pages/Users";
import Investment from "./pages/Investment";
import Properties from "./pages/Properties";
import Transactions from "./pages/Transactions";
import Withdrawals from "./pages/Withdrawals";
import Settings from "./pages/Settings";
import PreviewImage from "./pages/PreviewImage";
import CocoaLandDetails from "./pages/CocoaLandDetails";
import PropertyDetails from "./pages/PropertyDetails";
import InvestmentBreakdown from "./pages/InvestmentBreakdown";
import Orders from "./pages/Orders";

// Private Route Wrapper
const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("token"); // replace with real auth check
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// 404 Page
const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-gray-700 text-xl">
    404 - Page Not Found
  </div>
);

const App = () => {
  return (
    <Router>
      {/* Global Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        {/* Redirect Root to Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/preview/:id" element={<PreviewImage />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Layouts />}>
            <Route index element={<Hero />} />
            <Route path="user" element={<User />} />

            {/* Investments */}
            <Route path="investment" element={<Investment />} />
            <Route path="investment/:id" element={<CocoaLandDetails />} />
            <Route path="investment-breakdown" element={<InvestmentBreakdown />} />
            <Route path="orders" element={<Orders />} />

            {/* Properties */}
            <Route path="properties" element={<Properties />} />
            <Route path="properties/:id" element={<PropertyDetails />} />

            {/* Transactions & Others */}
            <Route path="transactions" element={<Transactions />} />
            <Route path="withdrawals" element={<Withdrawals />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
