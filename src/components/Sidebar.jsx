import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarItems } from "../constants";

const Sidebar = () => {
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden sm:flex h-screen w-25 flex-col bg-[#1c1b1b] border-r border-[#222]">
        
        {/* LOGO */}
        <div className="h-20 sm:h-16 px-4 sm:px-6 flex items-center justify-center">
          <img
            src="logo.svg"
            alt="logo"
            className="h-12 w-12 sm:h-14 sm:w-14"
          />
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col items-center gap-8 pt-10">
          {sidebarItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `group flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive ? "text-[#A84F1D]" : "text-gray-400"
                }`
              }
            >
              <item.icon className="text-3xl transition-transform duration-200 group-hover:scale-125" />
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* MOBILE BOTTOM BAR */}
      <nav className="fixed bottom-0 left-0 right-0 sm:hidden bg-[#1c1b1b] border-t border-[#222] flex items-center justify-around py-3 z-50">
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-center text-2xl ${
                isActive ? "text-[#A84F1D]" : "text-gray-400"
              }`
            }
          >
            <item.icon />
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;