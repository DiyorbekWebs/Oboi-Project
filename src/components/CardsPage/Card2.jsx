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
  overflow: hidden;
  @media screen and (max-width: 1281px) {
    width: 380px;
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
const Img = styled.img`
  width: 100%;
  height: 239px;
  transition: 1s;
  overflow: hidden;

  &:hover {
    transition: 1s;
    transform: scale(1.1);
  }
  @media screen and (max-width: 835px) {
    height: 225px;
  }
  @media screen and (max-width: 801px) {
    height: 215px;
  }
  @media screen and (max-width: 430px) {
    height: 300px;
  }
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
const Imges = styled.div`
  overflow: hidden;
`;
export default function Card2({ text1, text2, img }) {
  return (
    <Card>
      <Imges>
        <Img src={Oboi1} alt="" />
      </Imges>
      <Texts>
        <Price>{text1}test</Price>
        <Price2>1 кв ≈ {text2}test</Price2>
      </Texts>
    </Card>
  );
}
