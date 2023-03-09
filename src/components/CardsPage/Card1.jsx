import React from "react";
import styled from "styled-components";
import { Vector } from "../../assets/img/img";
const Card = styled.div`
  width: 400px;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;
  cursor: default;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;
const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: #172335;
`;
const Text1 = styled.p`
  width: 357px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #172335;
  opacity: 0.6;
`;
export default function Card1({ wid, text1, text2 }) {
  console.log(wid);
  return (
    <Card>
      <Texts>
        <Title>{text1}</Title>
        <Text1 style={{ width: wid ? "282px" : "357px" }}>{text2}</Text1>
      </Texts>
      <img src={Vector} alt="Vector" />
    </Card>
  );
}
