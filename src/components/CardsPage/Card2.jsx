import React from "react";
import styled from "styled-components";
import { Oboi1 } from "../../assets/img/img";

const Card = styled.div`
  width: 400px;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
const Img = styled.img`
  width: 400px;
  height: 239px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Price = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #172335;
`;
const Price2 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #172335;
`;
export default function Card2() {
  return (
    <Card>
      <Img src={Oboi1} alt="" />
      <Texts>
        <Price>57 — C TAB</Price>
        <Price2>1 кв ≈ 69 000 uzs</Price2>
      </Texts>
    </Card>
  );
}
