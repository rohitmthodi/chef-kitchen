import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./components/Home";
import MenuCards from "./pages/MenuCards";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/home" element={<Home />}>
          <Route path="menu-cards" element={<MenuCards />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
