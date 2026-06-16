import React from "react";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full py-4 bg-[#f3f4f6] border-b border-[#e5e7eb] flex justify-end px-4 sm:px-6">

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">

        {/* NOTIFICATION */}
        <div className="relative cursor-pointer group">
          <FaBell className="text-[#6b7280] text-lg group-hover:text-[#111827] transition" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#d97706] rounded-full"></span>
        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full border border-[#e5e7eb] shadow-sm hover:shadow-md hover:border-[#d1d5db] transition cursor-pointer">

          {/* IMAGE */}
          <img
            src="https://i.pravatar.cc/100"
            alt="admin"
            className="h-9 w-9 rounded-full object-cover border border-[#e5e7eb]"
          />

          {/* TEXT */}
          <div className="leading-tight">
            <p className="text-sm text-[#111827] font-semibold">
              Admin
            </p>
            <p className="text-[11px] text-[#6b7280]">
              admin@gmail.com
            </p>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;