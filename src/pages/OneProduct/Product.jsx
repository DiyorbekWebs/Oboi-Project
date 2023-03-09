import React from "react";
import Commodity from "../../components/Commodity/Commodity";
import Contact from "../../components/Contact/Contact";
import ContactBot from "../../components/Contact/ContactBot";
import Layout from "../../Layout/Layout";

export default function Product() {
  return (
    <Layout>
      <Commodity />
      <Contact />
      <ContactBot />
    </Layout>
  );
}
