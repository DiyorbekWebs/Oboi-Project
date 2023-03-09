import React from "react";
import styled from "styled-components";
import Product from "../../pages/OneProduct/Product";
import { Yonalish } from "../Adress/Adres";
import List1 from "./List";
import Products from "./Products";

const Page = styled.section`
  padding: 33px 0px 50px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Iformation = styled.div`
  display: flex;
  gap: 57px;
  margin-bottom: 39px;
`;
const Images = styled.div`
  display: flex;
  gap: 6px;
`;
const Img1 = styled.img`
  width: 375px;
  height: 500px;
  background-color: red;
`;
const Img = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Img2 = styled.img`
  width: 351px;
  height: 247px;
  background-color: red;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Texts2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
const Tittle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: #172335;
`;
const Text1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: #172335;
`;
const Paragrf = styled.p`
  width: 357px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #172335;
  opacity: 0.6;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 69px;
`;

const ZBtn = styled.button`
  padding: 15px 45px;
  background: #ffffff;
  border: 2px solid #c5821c;
  border-radius: 1000px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #172335;
  cursor: pointer;
`;
const Texts3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const Text2 = styled.h1`
  width: 1242px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 46px;
  color: #172335;
`;
const Paragrf2 = styled.p`
  width: 698px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #172335;
`;
export default function Commodity() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Yonalish>Главная /// Каталог /// Бумажные обои</Yonalish>
          <Iformation>
            <Images>
              <Img1 />
              <Img>
                <Img2 />
                <Img2 />
              </Img>
            </Images>
            <Texts>
              <Top>
                <Texts2>
                  <Tittle>56 — C TAB</Tittle>
                  <Text1>110 000 uzs</Text1>
                </Texts2>
                <Paragrf>
                  The question isn't who is going to let me. It's who is going
                  to stop me. Do what no one else does' follow through. If
                  everything seems under control...
                </Paragrf>
              </Top>
              <Bottom>
                <List1/>
                <ZBtn>Заказать обои</ZBtn>
              </Bottom>
            </Texts>
          </Iformation>

          <Texts3>
            <Text2>
              Описание продукта: таким образом, в дополнение к работе с
              различными предложениями, которые часто влияют на дизайнерские
              решения в электронной коммерции, на этот раз перед нашей командой
              была поставлена ​​задача представить очень инновационный и
              узкоспециализированный продукт в эмоциональной, увлекательной и
              инклюзивной форме. Он взял на себя задачу создать дизайн, который
              выделял бы бренд из толпы, и применить его в высококонкурентном
              обществе.
            </Text2>
            <Paragrf2>
              Срок кредита — от 6 до 60 месяцев, чтобы у вас была возможность
              выбрать комфортный размер платежаАвтокредит без лишних документов{" "}
            </Paragrf2>
          </Texts3>
          <Products/>
        </Box>
      </div>
    </Page>
  );
}
