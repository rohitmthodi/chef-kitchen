import React, { useState } from "react";
import { menuItems } from "../constants";

const MenuCards = () => {
  const [selectedSizes, setSelectedSizes] = useState(() => {
    const defaultSizes = {};
    menuItems.forEach((item) => {
      defaultSizes[item.id] = "S";
    });
    return defaultSizes;
  });

  const handleSizeClick = (itemId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemId]: size,
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 bg-[#2f2b2b] min-h-screen">
      
      {/* GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-15 lg:gap-x-8 lg:gap-y-18 mt-10 md:mt-8 lg:mt-5 mb-15 sm:mb-5">
        
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#1c1b1b] border border-[#2a2a2a] rounded-2xl pt-16 pb-6 px-4 sm:px-5 text-white transition-transform duration-100 ease-out hover:scale-[1.03]">
            
            {/* FLOATING CIRCLE IMAGE (FIXED PERFECT ROUND) */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="h-28 w-28 sm:h-35 sm:w-35 rounded-full overflow-hidden border-4 border-[#111] shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center gap-2 text-center">
              
              <h2 className="text-sm sm:text-base font-semibold truncate mt-10">
                {item.name}
              </h2>

              <p className="text-xs sm:text-sm text-gray-400">
                {item.category}
              </p>

              {/* SIZE SELECTOR */}
              <div className="flex justify-center gap-2 mt-2">
                {item.sizes.map((s) => {
                  const isSelected = selectedSizes[item.id] === s;

                  return (
                    <span
                      key={s}
                      onClick={() => handleSizeClick(item.id, s)}
                      className={`text-xs px-3 py-1 border border-[#333] rounded cursor-pointer transition
                        ${
                          isSelected
                            ? "bg-[#B65E2E] text-white"
                            : "text-gray-300"
                        }
                      `}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>

              {/* STOCK */}
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Stock:{" "}
                <span className="text-white font-medium">
                  {item.stock}
                </span>
              </p>

              {/* BUTTON */}
              <button className="mt-3 w-full bg-[#B65E2E] hover:bg-[#C76A35] transition py-2 rounded-md text-xs sm:text-sm font-medium cursor-pointer">
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCards;