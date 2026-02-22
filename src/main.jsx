import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AppProvider } from "./Contexts/CartContext";
import { CategoryProvider } from "./Contexts/CategoryContext";
import { ProductProvider } from "./Contexts/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <CategoryProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </CategoryProvider>
    </ProductProvider>
  </BrowserRouter>,
);
