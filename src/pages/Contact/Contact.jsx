import React from "react";
import Adres from "../../components/Adress/Adres";
import ContactBot from "../../components/Contact/ContactBot";
import Layout from "../../Layout/Layout";
import { RotatingSquare } from "react-loader-spinner";
import styled from "styled-components";
import Contact from "../../components/Contact/Contact";

const Animation = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function ContactPage() {
  const [state, setState] = React.useState(false);
  setTimeout(() => {
    setState(false);
  }, 3000);
  return (
    <>
      {state ? (
        <Animation>
          <RotatingSquare
            height="200"
            width="200"
            color="#4fa94d"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Animation>
      ) : null}
      <Layout>
        <Adres />
        <ContactBot />
      </Layout>
    </>
  );
}
