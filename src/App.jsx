import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./components/Home";
import MenuCards from "./pages/MenuCards";
import Admin from "./dashboard/Admin";
import Categories from "./dashboard/category/Categories";
import AddCategory from "./dashboard/category/AddCategory";
import Menu from "./dashboard/menu/Menu";
import AddMenu from "./dashboard/menu/AddMenu";
import Dashboard from "./dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        {/* USER SIDE */}
        <Route path="/" element={<Welcome />} />

        <Route path="/home" element={<Home />}>
          <Route path="menu-cards" element={<MenuCards />} />
        </Route>


        {/* DASHBAORD */}
        <Route path="/admin" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
          <Route path="category" element={<Categories />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="menu" element={<Menu />} />
          <Route path="add-menu" element={<AddMenu />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
