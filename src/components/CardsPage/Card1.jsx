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
  overflow: hidden;

  cursor: default;
  @media screen and (max-width: 885px) {
    width: 385px;
    height: 298px;
  }
  @media screen and (max-width: 885px) {
    width: 409px;
    height: 298px;
  }
  @media screen and (max-width: 835px) {
    width: 380px;
    height: 280px;
  }
  @media screen and (max-width: 801px) {
    width: 366.5px;
    height: 275px;
  }
  @media screen and (max-width: 770px) {
    width: 355px;
    height: 275px;
  }
  @media screen and (max-width: 430px) {
    width: 400px;
    height: 300px;
  }
  @media screen and (max-width: 415px) {
    width: 385px;
    height: 270px;
  }
  @media screen and (max-width: 391px) {
    width: 360px;
    height: 260px;
  }
  @media screen and (max-width: 376px) {
    width: 345px;
    height: 254px;
  }
  @media screen and (max-width: 361px) {
    width: 330px;
    height: 250px;
  }
  @media screen and (max-width: 321px) {
    width: 300px;
    height: 250px;
  }
  
  
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
const Img = styled.img`
  transition: 1s;

  &:hover {
    transition: 1s;
    margin-left: 15px;
    opacity: 1;
  }
`;
export default function Card1({ wid, text1, text2 }) {
  return (
    <Card>
      <Texts>
        <Title>{text1}</Title>
        <Text1 style={{ width: wid ? "282px" : "357px" }}>{text2}</Text1>
      </Texts>
      <Img src={Vector} alt="Vector" />
    </Card>
  );
}
