import React from "react";
import styled from "styled-components";
import Cards from "../../components/CardsPage/Cards";
import Consultation from "../../components/consultation/consultation";
import Contact from "../../components/Contact/Contact";
import ContactBot from "../../components/Contact/ContactBot";
import Carusel1 from "../../components/HeroHome/Carusel1";
import Layout from "../../Layout/Layout";
import { RotatingSquare } from "react-loader-spinner";

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
export default function Home() {
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
        <Carusel1/>
        <Consultation />
        <Cards />
        <Contact />
        <ContactBot />
      </Layout>
    </>
  );
}
