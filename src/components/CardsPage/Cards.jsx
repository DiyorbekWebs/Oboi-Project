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
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 885px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 801px) {
    row-gap: 30px;
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: auto;
    column-gap: 30px;
    margin: auto;
}
`;
const Bottom = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 885px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 801px) {
    row-gap: 30px;
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: auto;
    column-gap: 0px;
    margin: auto;

  }
`;
export default function Cards() {
  const [wid, setWid] = React.useState(true);
  const [value, setValue] = React.useState();

  axios
    .get("http://localhost:9000/products")
    .then((res) => setValue(res.data.Products));
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
            {/* {value?.map((e, inx) => (
              <Card2
              key={inx}
                text1={e.name}
                img={"http://localhost:9000" + e.img}
                text2={e.price}
              />
            ))} */}
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
          </Bottom>
        </Box>
      </div>
    </Page>
  );
}
