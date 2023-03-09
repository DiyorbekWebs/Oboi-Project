import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import ModalPart from "./components/Modal/Modal";
import Catalog from "./pages/Catalog/Catalog";
import ContactPage from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Product from "./pages/OneProduct/Product";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/pro" element={<Product />} />
      </Routes>
      {/* <ModalPart/> */}
    </>
  );
}
