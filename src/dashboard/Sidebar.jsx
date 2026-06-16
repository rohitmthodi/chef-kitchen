import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarTabs } from "../constants";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="h-screen w-64 bg-[#f8fafc] border-r border-[#e2e8f0] flex flex-col">

      {/* HEADER */}
      <div className="px-6 py-5 text-center">
        <h1 className="text-xl font-bold text-[#0f172a] tracking-wide">
          CHEF DASHBOARD
        </h1>
        <p className="text-xs text-[#64748b] mt-1 tracking-wider">
          MANAGE YOUR KITCHEN
        </p>
      </div>

      {/* NAV */}
      <nav className="flex flex-col gap-2 p-4">

        {sidebarTabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
                ${
                  isActive ||
                  (tab.path === "/admin/categories" &&
                    location.pathname === "/admin")
                    ? "bg-[#0f172a] text-white shadow-sm"
                    : "text-[#475569] hover:bg-[#e2e8f0] hover:text-[#0f172a]"
                }`
              }
            >
              <Icon />
              <span>{tab.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="mt-auto px-4 pb-3">
        <button className="flex items-center justify-center gap-3 w-full bg-[#e2e8f0] text-[#0f172a] font-medium py-2 rounded-lg hover:bg-[#cbd5e1] transition">
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* FOOTER */}
      <div className="p-4 text-xs text-[#94a3b8] border-t border-[#e2e8f0] text-center">
        © 2026 Chef Kitchen
      </div>

    </aside>
  );
};

export default Sidebar;