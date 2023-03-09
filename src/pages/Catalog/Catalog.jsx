import React from "react";
import Contact from "../../components/Contact/Contact";
import ContactBot from "../../components/Contact/ContactBot";
import Product from "../../components/Product/Product";
import Layout from "../../Layout/Layout";

export default function Catalog() {
  return (
    <Layout>
      <Product />
      <Contact/>
      <ContactBot />
    </Layout>
  );
}
