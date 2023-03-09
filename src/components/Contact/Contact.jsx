import React from "react";
import styled from "styled-components";
import { Img6 } from "../../assets/img/img";
const Page = styled.section`
  padding: 62px 0px;
`;
const Box = styled.div`
  padding: 10px;
  background-color: #eeeeee;
  display: flex;
  gap: 15px;
`;
const Right = styled.div`
  background-color: red;
  position: relative;
`;
const Img = styled.img`
  height: 600px;
`;
const Left = styled.div`
  padding: 54px 160px 11px 82px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: flex-start;
  gap: 51px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Text1 = styled.p`
  width: 282px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #fff;
`;
const Text2 = styled(Text1)`
  width: 454px;
  color: #172335;
  opacity: 0.4;
`;
const Title = styled.h1`
  color: #172335;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Element = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #172335;
`;
const Input = styled.input`
  width: 535px;
  height: 44px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #c9cfd8;
  border-radius: 3px;
  outline: none;
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
  border: 2px solid #c5821c;
  background-color: #fff;
  cursor: pointer;
`;
const Batafsil = styled.div`
  padding: 54px 104px 182px 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(181, 182, 186, 0.72) 0%,
    rgba(186, 185, 181, 0) 100%
  );
`;
const Title1 = styled.h1`
  font-family: Inter;
  font-size: 32px;
  font-weight: 900;
  line-height: 39px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;
const Bttn = styled.button`
  padding: 12px 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 150px;
  background-color: transparent;
  cursor: pointer;
`;


const Texts1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: default;
`;
export default function Contact() {
  const [value, setValue] = React.useState("+998");
  console.log(value);
  return (
    <Page>
      <div className="container">
        <Box>
          <Right>
            <Img src={Img6} alt="" />
            <Batafsil>
              <Texts1>
                <Title1>34 — LACHINA</Title1>
                <Text1>
                  The question isn't who is going to let me. It's who is going
                  to stop me.
                </Text1>
              </Texts1>
              <Bttn>Batafsil</Bttn>
            </Batafsil>
          </Right>
          <Left>
            <Top>
              <Texts>
                <Text2>
                  Если у вас возникли затруднения в выборе, оставьте свои
                  контактные данные и мы вам поможем!
                </Text2>
                <Title>Мы перезвоним</Title>
              </Texts>
              <Form>
                <Element>
                  <Label>Ваше имя</Label>
                  <Input placeholder="Имя" />
                </Element>
                <Element>
                  <Label>Где живёте</Label>
                  <Input placeholder="место заказа" />
                </Element>
                <Element>
                  <Label>Телефон</Label>
                  <Input
                    placeholder="Телефон"
                    value={value}
                    onChange={() => setValue()}
                  />
                </Element>
              </Form>
            </Top>
            <Btn>Отправить для обратного звонка</Btn>
          </Left>
        </Box>
      </div>
    </Page>
  );
}
