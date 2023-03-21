import React from "react";
import styled from "styled-components";
import { Sister } from "../../assets/img/img";
import { Link } from "react-router-dom";
const Page = styled.section`
  padding: 57px 0px;
`;
const Box = styled.div`
  display: flex;
  background: #eaeaeb;
  @media screen and (max-width: 1281px) {
    gap: 150px;
  }
  @media screen and (max-width: 885px) {
    gap: 0px;
  }
  @media screen and (max-width: 430px) {
    padding: 20px 0px 0px 0px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 361px) {
    padding: 20px 5px 0px 20px;
  }
  @media screen and (max-width: 321px) {
    padding: 20px 0px 0px 45px;
  }
`;
const Right = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  @media screen and (max-width: 885px) {
    gap: 15px;
  }
  @media screen and (max-width: 430px) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
const Imgs = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (max-width: 430px) {
    display: flex;
    gap: 0px;
    align-items: center;
  }
`;
const Row = styled.div`
  width: 6px;
  height: 99px;
  background: #bababc;
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media screen and (max-width: 885px) {
    width: 380px;
  }
  @media screen and (max-width: 835px) {
    width: 325px;
  }
  @media screen and (max-width: 770px) {
    width: 315px;
  }
  @media screen and (max-width: 430px) {
    align-items: flex-start;
  }
`;
const Text1 = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  @media screen and (max-width: 835px) {
    font-size: 10px;
    line-height: 13px;
  }
  @media screen and (max-width: 430px) {
    text-align: start;
  }
`;
const Text2 = styled.h1`
  font-family: Inter;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #172335;
  @media screen and (max-width: 835px) {
    font-size: 15px;
    line-height: 17px;
  }
  @media screen and (max-width: 770px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
const Btn = styled(Link)`
  padding: 15px 30px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #172335;
  background-color: #fff;
  border-radius: 1000px;
  @media screen and (max-width: 885px) {
    padding: 15px 25px;
  }
  @media screen and (max-width: 801px) {
    padding: 15px 22px;
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and (max-width: 770px) {
    padding: 15px 20px;
    font-size: 13px;
    line-height: 15px;
  }
`;
const Img = styled.img`
  width: 100%;
  background-color: red;
  @media screen and (max-width: 430px) {
    width: 355px;
    height: 144px;
  }
  @media screen and (max-width: 391px) {
    width: 325px;
    height: 150px;
  }
  @media screen and (max-width: 361px) {
    width: 300px;
    height: 150px;
  }
  @media screen and (max-width: 321px) {
    width: 270px;
    height: 130px;
  }
`;
const Divv = styled.div`
  display: flex;
  gap: 182px;
  @media screen and (max-width: 1281px) {
    gap: 150px;
  }
  @media screen and (max-width: 885px) {
    gap: 0px;
  }
  @media screen and (max-width: 430px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
`;
export default function Consultation() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Right>
            <Imgs>
              <Img src={Sister} alt="sister" />
              <Row />
            </Imgs>
            <Divv>
              <Texts>
                <Text1>Мы поможем вам выбрать то, что вам нужно!</Text1>
                <Text2>
                  Если вам нужна консультация специалиста, то вы попали по
                  адресу!
                </Text2>
              </Texts>
              <Btn>Хочу консультацию</Btn>
            </Divv>
          </Right>
        </Box>
      </div>
    </Page>
  );
}
