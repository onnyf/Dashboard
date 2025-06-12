// src/layout/Layouts.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";  // Adjust paths as needed
import Sidebar from "../components/common/Sidebar"; // Adjust paths as needed

const Layouts = () => {
  return (
    <div>
      <Sidebar/>
      <div className="ml-[2px]">
        <Header />
        <main className="pt-[72px] px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layouts;
