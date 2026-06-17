import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell, FaCog } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="h-20 bg-slate-50 border-b border-slate-200 px-8 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search orders, menu items, customers..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border-2 border-slate-200 rounded-xl transition-all duration-300 hover:border-slate-400 hover:shadow-sm outline-none" />

          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
            <FaSearch size={14} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="relative text-slate-500 hover:text-slate-900 transition-all duration-300 cursor-pointer">
          <FaBell size={18} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>

        {/* Settings */}
        <button className="text-slate-500 hover:text-slate-900 transition-all duration-300 cursor-pointer">
          <FaCog size={18} />
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-slate-300"></div>

        {/* Profile */}
        <div className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
            <HiOutlineUserCircle size={24} className="text-slate-600" />
          </div>

          <div className="leading-tight">
            <h3 className="text-sm font-semibold text-slate-900">Chef Admin</h3>

            <p className="text-xs text-slate-500">Kitchen Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
