import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import ModalPart from "./components/Modal/Modal";
import Catalog from "./pages/Catalog/Catalog";
import ContactPage from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Product from "./pages/OneProduct/Product";
const Error = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.h1`
  font-family: "Inter";
  font-weight: 500;
  font-size: 32px;
  color: red;

`;
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/pro" element={<Product />} />
        <Route path="/*" element={<Error>
          <Text>404 Error</Text>
          <Text>Not Found Page</Text>
        </Error>} />
      </Routes>
      {/* <ModalPart/> */}
    </>
  );
}
