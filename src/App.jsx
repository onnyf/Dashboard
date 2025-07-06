import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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

const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-gray-700 text-xl">
    404 - Page Not Found
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layouts />}>
          <Route index element={<Hero />} />
          <Route path="user" element={<User />} />
          <Route path="investment" element={<Investment />} />
          <Route path="properties" element={<Properties />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="withdrawals" element={<Withdrawals />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
