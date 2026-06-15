import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./components/Home";
import MenuCards from "./pages/MenuCards";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />

        {/* PARENT ROUTE */}
        <Route path="/home" element={<Home />}>
          <Route path="menu-cards" element={<MenuCards />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;