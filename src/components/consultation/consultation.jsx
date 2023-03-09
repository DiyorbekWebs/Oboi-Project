import React from "react";
import styled from "styled-components";
import { Sister } from "../../assets/img/img";
const Page = styled.section`
  padding: 57px 0px;
`;
const Box = styled.div`
  background: #eaeaeb;
  display: flex;
  align-items: center;
  gap: 182px;
`;
const Right = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
const Imgs = styled.div`
  display: flex;
  gap: 12px;
`;
const Row = styled.div`
  width: 6px;
  height: 99px;
  background: #bababc;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const Text1 = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
`;
const Text2 = styled.h1`
  font-family: Inter;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #172335;
`;
const Btn = styled.div`
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
`;
export default function Consultation() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Right>
            <Imgs>
              <img src={Sister} alt="sister" />
              <Row />
            </Imgs>
            <Texts>
              <Text1>Мы поможем вам выбрать то, что вам нужно!</Text1>
              <Text2>
                Если вам нужна консультация специалиста, то вы попали по адресу!
              </Text2>
            </Texts>
          </Right>
          <Btn>Хочу консультацию</Btn>
        </Box>
      </div>
    </Page>
  );
}
