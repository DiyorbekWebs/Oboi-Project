import React from "react";
import styled from "styled-components";
const Section = styled.section`
  padding: 93px 0px 104px 0px;
`;
const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;

`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
const Title = styled.h1`
  width: 806px;
  font-family: Inter;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: #172335;
`;
const Span = styled.span`
  font-family: SF Pro Display;
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: #c5821c;
`;
const Paragrf = styled.p`
  width: 636px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #172335;
`;
const Btn = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #c5821c;
  padding: 12px 32px;
  border-radius: 100px;
  border: 2px solid #c5821c;
  background-color: transparent;
`;
const Divv = styled.div`
  width: 1387px;
  height: 494px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: radial-gradient(
    52.76% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.92) 63.69%,
    #ffffff 100%
  );
`;
const Mapp = styled.div`
  position: absolute;
  left: 20%;
  top: 0;
  z-index: -1;
`;

export default function ContactBot() {
  return (
    <Section>
      <div className="container">
        <Box>
          <Texts>
            <Title>
              Остались вопросы? Позвоните нам, и мы вас{" "}
              <Span>проконсультируем</Span>
            </Title>
            <Paragrf>
              Срок кредита — от 6 до 60 месяцев, чтобы у вас была возможность
              выбрать комфортный размер платежаАвтокредит без лишних документов
            </Paragrf>
          </Texts>
          <Btn>Свяжитесь с нами</Btn>
          <Mapp>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <Divv></Divv>
              <a
                href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 0,
                }}
              >
                Яндекс&nbsp;Карты
              </a>
              <a
                href="https://yandex.uz/maps/?ll=69.110415%2C41.276633&utm_medium=mapframe&utm_source=maps&z=15"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 14,
                }}
              >
                Яндекс&nbsp;Карты — транспорт, навигация, поиск мест
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=69.110415%2C41.276633&z=15"
                width={1387}
                height={494}
                frameBorder={1}
                allowFullScreen="true"
                style={{ position: "relative" }}
              />
            </div>
          </Mapp>
        </Box>
      </div>
    </Section>
  );
}
