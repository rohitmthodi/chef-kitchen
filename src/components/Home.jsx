import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#2f2b2b]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="flex-1 overflow-y-auto bg-[#111]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;