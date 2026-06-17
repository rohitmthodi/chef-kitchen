import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiExitDoor } from "react-icons/gi";
import { sidebarTabs } from "../constants";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="w-65 h-screen bg-slate-50 border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="px-8 py-8">
        <div className="cursor-pointer text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            CHEF KITCHEN
          </h1>

          <p className="mt-1 text-xs font-medium tracking-widest text-slate-500">
            MANAGE YOUR KITCHEN
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {sidebarTabs.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-slate-100 text-blue-600 shadow-sm border border-blue-100"
                      : "text-slate-600 hover:bg-slate-100 hover:shadow-sm hover:text-slate-900"
                  }`
                }
              >
                <Icon
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="font-medium text-sm">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-200">
        <button
          onClick={handleLogout}
          className="group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-slate-100 hover:shadow-sm transition-all duration-300"
        >
          <GiExitDoor
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span className="font-medium text-sm">LOGOUT</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;