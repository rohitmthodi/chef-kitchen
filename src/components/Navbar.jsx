import React from "react";
import { FaSearch } from "react-icons/fa";
import { formatFullDate } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full bg-[#1c1b1b] border-b border-[#222] px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
      
      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Chef Kitchen
        </h1>

        <p className="text-sm text-gray-400">
          {formatFullDate()}
        </p>
      </div>

      {/* RIGHT (SEARCH) */}
      <div className="relative w-full sm:w-72">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Search for food, coffee..."
          className="w-full bg-[#1a1a1a] text-gray-200 placeholder-gray-500 pl-10 pr-4 py-2 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#A84F1D] transition"
        />
      </div>
    </header>
  );
};

export default Navbar;