import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./components/Home";
import MenuCards from "./pages/MenuCards";
import Admin from "./dashboard/Admin";
import Categories from "./dashboard/category/Categories";

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
          <Route path="category" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
