import React from "react";
import styled from "styled-components";
import Card1 from "../CardsPage/Card1";
import Card2 from "../CardsPage/Card2";
const Section = styled.section`
  padding: 61px 0px 100px 0px;
  @media screen and (max-width: 885px) {
    padding: 50px 0px 0px 0px;
  }
`;
const Box = styled.div`
  display: flex;
`;
const Left = styled.div``;
const Right = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 885px) {
    grid-template-columns: auto auto;
  }
`;
export default function Products() {
  return (
    <Section>
      <div className="container">
        <Box>
          <Right>
            <Left>
              <Card1
                text1={"Мы предлагаем"}
                text2={
                  "The question isn't who is going to let me. It's who is going to stop me. Do what no one else does' follow through. If everything seems under control..."
                }
              />
            </Left>
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </Right>
        </Box>
      </div>
    </Section>
  );
}
