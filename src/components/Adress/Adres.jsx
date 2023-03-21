import React from "react";
import styled from "styled-components";
const Page = styled.div`
  padding: 33px 0px 35px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 53px;
`;
export const Yonalish = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #172335;
  opacity: 0.6;
`;
const Bottom = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
const Telefon = styled.div`
  width: 420px;
  height: 198px;
  padding: 20px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  background-color: #f1f1f1;
  border-radius: 2px;
  @media screen and (max-width: 885px) {
    width: 420px;
    height: 198px;
    padding: 20px;
  }
  @media screen and (max-width: 835px) {
    width: 420px;
    height: 170px;
  }
  @media screen and (max-width: 821px) {
    width: 380px;
    height: 170px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

const Manzil = styled.div`
  width: 819px;
  height: 198px;
  padding: 20px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  border-radius: 2px;
  background-color: #f1f1f1;
  @media screen and (max-width: 885px) {
    width: 819px;
    height: 198px;
    padding: 20px;
  }
  @media screen and (max-width: 835px) {
    width: 800px;
    height: 170px;
  }
  @media screen and (max-width: 821px) {
    width: 560px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
const Text1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #172335;
`;
const Text2 = styled.h1`
  width: 359px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.04em;
  color: #172335;
  @media screen and (max-width: 885px) {
    font-size: 38px;
    line-height: 38px;
    width: 290px;
  }
  @media screen and (max-width: 835px) {
    font-size: 32px;
    line-height: 32px;
    width: 250px;
  }
 
`;
const Text3 = styled(Text2)`
  width: 595px;
  @media screen and (max-width: 885px) {
    width: 450px;
  }
  @media screen and (max-width: 885px) {
    width: 400px;
  }
  @media screen and (max-width: 821px) {
    width: 380px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
export default function Adres() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Yonalish>Главная /// Контакты</Yonalish>
          <Bottom>
            <Telefon>
              <Text1>Наш телефонный номер</Text1>
              <Text2>+93 007-06-07</Text2>
            </Telefon>
            <Manzil>
              <Text1>Адрес:</Text1>
              <Text3>р.Чилонзор, Абу-Сахий 56 магазин</Text3>
            </Manzil>
          </Bottom>
        </Box>
      </div>
    </Page>
  );
}
