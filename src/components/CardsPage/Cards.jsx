import axios from "axios";
import React from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import Card2 from "./Card2";
const Page = styled.section`
  padding: 52px 0px;
  background-color: #fff;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 105px;
`;
const Top = styled.div`
  display: flex;
  gap: 20px;
`;
const Bottom = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 50px;
`;
export default function Cards() {
  const [wid, setWid] = React.useState(true);
  axios.get()
  return (
    <Page>
      <div className="container">
        <Box>
          <Top>
            <Card1
              text1={"Мы предлагаем"}
              text2={
                "The question isn't who is going to let me. It's who is going to stop me. Do what no one else does' follow through. If everything seems under control..."
              }
            />
            <Card2 />
            <Card2 />
          </Top>
          <Bottom>
            <Card1
              text1={"Новые продукты"}
              text2={
                "The question isn't who is going to let me. It's who is going to stop me. "
              }
              wid={wid}
            />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </Bottom>
        </Box>
      </div>
    </Page>
  );
}