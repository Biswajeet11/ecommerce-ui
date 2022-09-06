import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </CartContextProvider>
    </Router>
  );
}
