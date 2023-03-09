import React from "react";
import styled from "styled-components";
import { Yonalish } from "../Adress/Adres";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { V6 } from "../../assets/img/img";
import "./styles.css";
import Card2 from "../CardsPage/Card2";
import { Link } from "react-router-dom";

const Page = styled.section`
  padding: 33px 0px 134px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const TabList1 = styled(TabList)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Tabs1 = styled(Tabs)`
  display: flex;
  align-items: flex-start;
  color: #172335;
  gap: 237px;
`;
const Tittle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: #172335;
  margin-bottom: 20px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #172335;
  opacity: 0.4;
`;
const Text1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
const Tab1 = styled(Tab)`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  cursor: pointer;
`;

const TabPanel1 = styled(TabPanel)`
  display: grid;
  column-gap: 20px;
  row-gap: 50px;
  grid-template-columns: auto auto;
`;
const Btn = styled.button`
  padding: 15px 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #c5821c;
  border-radius: 100px;
  background-color: transparent;
  border: 2px solid #c5821c;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
`;
export default function Product() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Yonalish>Главная /// Каталог /// Бумажные обои</Yonalish>
          <Bottom>
            <Tabs1>
              <TabList1>
                <Tittle>Продукты</Tittle>
                <Tab1>
                  <img src={V6} alt="" />
                  <Texts>
                    <Text1>3D Обои</Text1>
                    <Span>45 обои</Span>
                  </Texts>
                </Tab1>
                <Tab1>
                  <img src={V6} alt="" />
                  <Texts>
                    <Text1>Флизелиновые обои</Text1>
                    <Span>213 обои</Span>
                  </Texts>
                </Tab1>
                <Tab1>
                  <img src={V6} alt="" />
                  <Texts>
                    <Text1>Бумажные обои</Text1>
                    <Span>67 обои</Span>
                  </Texts>
                </Tab1>
                <Tab1>
                  <img src={V6} alt="" />
                  <Texts>
                    <Text1>Виниловые обои</Text1>
                    <Span>128 обои</Span>
                  </Texts>
                </Tab1>
                <Tab1>
                  <img src={V6} alt="" />
                  <Texts>
                    <Text1>Велюровые обои</Text1>
                    <Span>78 обои</Span>
                  </Texts>
                </Tab1>
                <Tab1>
                  <img src={V6} alt="" />
                  <Texts>
                    <Text1>Фотообои</Text1>
                    <Span>912 обои</Span>
                  </Texts>
                </Tab1>
                <Tab1>
                  <img src={V6} alt="" />
                  <Texts>
                    <Text1>Обои под покраску</Text1>
                    <Span>98 обои</Span>
                  </Texts>
                </Tab1>
                <Tab1>
                  <img src={V6} alt="" />
                  <Texts>
                    <Text1>Текстильные обои</Text1>
                    <Span>32 обои</Span>
                  </Texts>
                </Tab1>
              </TabList1>

              <TabPanel1>
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
              </TabPanel1>
            </Tabs1>
            <Link>
              <Btn>Загрузить ещё</Btn>
            </Link>
          </Bottom>
        </Box>
      </div>
    </Page>
  );
}
