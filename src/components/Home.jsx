import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex bg-[#121212] text-white">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Navbar />

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;