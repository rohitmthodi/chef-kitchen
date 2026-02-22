import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MenuLayout from "./Layouts/MenuLayout";
import MenuCard from "./Components/MenuCard";
import Dashboard from "./Dashboard/Dashboard";
import Category from "./Dashboard/Category";
import Products from "./Dashboard/Products";
import Orders from "./Dashboard/Orders";
import Payment from "./Components/Payment";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<MenuLayout />}>
          <Route index element={<MenuCard />} />
          <Route path="menucard" element={<MenuCard />} />
        </Route>

        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Category />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>

      </Routes>
  );
}

export default App;