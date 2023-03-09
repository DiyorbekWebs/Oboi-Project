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
`;
const Telefon = styled.div`
  padding: 21px 35px 85px 30px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  background-color: lightgray;
  border-radius: 2px;
`;
const Manzil = styled.div`
  padding: 21px 194px 37px 30px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  border-radius: 2px;
  background-color: lightgray;
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
  width: 360px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.04em;
  color: #172335;
`;
const Text3 = styled(Text2)`
  width: 595px;
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
