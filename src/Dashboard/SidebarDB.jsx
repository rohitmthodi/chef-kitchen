import React from "react";
import { IoFastFood } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-300 w-fit h-screen px-3 py-8">
      <div>
        <h1 className="flex items-center gap-2 font-bold text-xl text-gray-600 px-4">
          <span>
            <IoFastFood />
          </span>
          <span>DIGITAL MENU</span>
        </h1>

        <div className="flex flex-col mt-8">
          <Link to="/admin/category">
            <div className="flex items-center gap-2 font-semibold pl-4 hover:bg-gray-100 py-2 rounded-lg transition-all">
              <BiCategory className="text-gray-600 text-lg" />
              <p>Category</p>
            </div>
          </Link>

          <Link to="/admin/products">
            <div className="flex items-center gap-2 font-medium pl-4 hover:bg-gray-100 py-2 rounded-lg transition-all cursor-pointer">
              <TbNotes className="text-gray-600 text-lg" />
              <p>Products</p>
            </div>
          </Link>

          <Link to="/admin/orders">
            <div className="flex items-center gap-2 font-semibold pl-4 hover:bg-gray-100 py-2 rounded-lg transition-all">
              <MdAddShoppingCart className="text-gray-600 text-lg" />
              <p>Orders</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
