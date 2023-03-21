import React from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal/useModal";
import { Yonalish } from "../Adress/Adres";
import ModalPart from "../Modal/Modal";
import List1 from "./List";
import Products from "./Products";
const Page = styled.section`
  padding: 33px 0px 50px 0px;
`;
const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: 430px) {
    gap: 30px;
  }
`;
const Iformation = styled.div`
  display: flex;
  gap: 57px;
  margin-bottom: 39px;
  @media screen and (max-width: 886px) {
    flex-direction: column;
  }
  @media screen and (max-width: 430px) {
    gap: 30px;
  }
`;
const Images = styled.div`
  display: flex;
  gap: 6px;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
const Img1 = styled.img`
  width: 375px;
  height: 500px;
  background-color: #e5a9a9;
  @media screen and (max-width: 886px) {
    width: 400px;
    height: 520px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 460px;
  }
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
  @media screen and (max-width: 886px) {
    width: 400px;
    height: 257px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 270px;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  @media screen and (max-width: 886px) {
    flex-direction: row;
    gap: 100px;
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: 430px) {
    gap: 25px;
  }
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
  @media screen and (max-width: 430px) {
    gap: 50px;
  }
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
  @media screen and (max-width: 1281px) {
    width: 1195 px;
    font-size: 30px;
    line-height: 41px;
  }
  @media screen and (max-width: 885px) {
    width: 840px;
  }
  @media screen and (max-width: 835px) {
    width: 785px;
  }
  @media screen and (max-width: 801px) {
    width: 765px;
  }
  @media screen and (max-width: 770px) {
    width: 730px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    font-size: 24px;
    line-height: 30px;
  }
`;
const Paragrf2 = styled.p`
  width: 698px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #172335;
  @media screen and (max-width: 430px) {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
  }
`;
const Modal = styled.div``;
export default function Commodity() {
  const { closeModal, open, openModal } = useModal();

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
                <List1 />
                <ZBtn onClick={() => openModal()}>Заказать обои</ZBtn>
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
          <Products />
        </Box>
        {open ? <ModalPart close={closeModal} /> : null}
      </div>
    </Page>
  );
}
