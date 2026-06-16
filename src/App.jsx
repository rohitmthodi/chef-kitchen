import React from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Welcome from "./pages/Welcome";
import Home from "./components/Home";
import MenuCards from "./pages/MenuCards";
import Admin from "./dashboard/Admin";
import Category from "./dashboard/category/Category";
import AddCategory from "./dashboard/category/AddCategory";
import Products from "./dashboard/products/Products";
import AddProducts from "./dashboard/products/AddProducts";
import Orders from "./dashboard/Orders";

const App = () => {
  return (
    <>
      {/* ✅ GLOBAL TOAST SYSTEM */}
      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/home" element={<Home />}>
          <Route path="menu-cards" element={<MenuCards />} />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route index element={<Category />} />

          <Route path="categories" element={<Category />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="products" element={<Products />} />
          <Route path="add-product" element={<AddProducts />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;