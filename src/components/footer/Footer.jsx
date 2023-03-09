import React from "react";
import styled from "styled-components";
import { Clock, V1, V3, V4 } from "../../assets/img/img";
const Foooter = styled.footer`
  padding: 48px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Top = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 103px;
`;
const Texts1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Texts2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Text1 = styled.h4`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 141%;
  color: #172335;
`;
const Text2 = styled.p`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 141%;
  color: #172335;
`;
const Text3 = styled(Text2)`
  width: 360px;
`;
const Text4 = styled(Text2)`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Texts3 = styled.div`
  display: flex;
  gap: 20px;
`;
const Divv = styled.div`
  display: flex;
  gap: 194px;
`;
const Text5 = styled(Text4)`
  width: 210px;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Item = styled.li`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #172335;
  opacity: 0.75;
`;
const Item2 = styled.div`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: rgba(23, 35, 53, 0.5);
`;
const Span = styled.span`
  font-family: "SF Pro Display";
  font-size: 12px;
  font-weight: 900;
  line-height: 15px;
  letter-spacing: -0.03em;
  text-align: right;
  color: #172335;
`;
export default function Footer() {
  return (
    <>
      <Foooter>
        <div className="container">
          <Box>
            <Top>
              <Texts1>
                <Text1>Обои</Text1>
                <Text3>
                  ООО «Fargona kredit» — микрофинансовая организация,
                  ориентрированная на оперативность и современную финансовую
                  помощь
                </Text3>
              </Texts1>
              <Divv>
                <Texts1>
                  <Text1>Время работы</Text1>
                  <Text4>
                    <img src={Clock} alt="Clock" />
                    Мы работаем без выходных с 10:00 до 19:00
                  </Text4>
                </Texts1>
                <Texts2>
                  <Text1>Наши контакты</Text1>
                  <Texts3>
                    <Text5>
                      <img src={V1} alt="Clock" />
                      Farg'ona, Mustaqillik ko'chasi, 4
                    </Text5>
                    <Text4>
                      <img src={Clock} alt="Clock" />
                      info@gmail.com
                    </Text4>
                  </Texts3>
                  <Text4>
                    <img src={V4} alt="Clock" />
                    +998 93 007 06 07
                    <img src={V3} alt="Clock" />
                  </Text4>
                </Texts2>
              </Divv>
            </Top>
            <Bottom>
              <List>
                <Item>Политика безопасности</Item>
                <Item>Условия соглашения</Item>
                <Item>Публичная оферта</Item>
                <Item>© 2023 ООО. All rights reserved</Item>
              </List>
              <Item2>
                Designed by: <Span>Getter</Span>
              </Item2>
            </Bottom>
          </Box>
        </div>
      </Foooter>
    </>
  );
}
