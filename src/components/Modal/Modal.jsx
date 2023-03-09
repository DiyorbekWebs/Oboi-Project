import React from "react";
import styled from "styled-components";
import { backModal } from "../../assets/img/img";
const ModalBox = styled.div`
  /* transform: translateY(-200%);
  transition: 3s; */
  width: 100%;
  height: 100vh;
  background-color: #0000003b;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  padding: 10px 10px;
  background: #eeeeee;
  display: flex;
  gap: 15px;
`;
const Right = styled.div`
  position: relative;
  width: 428px;
  height: 600px;
`;
const Img = styled.img`
  width: 428px;
  height: 600px;
`;
const List = styled.ul`
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 243px;
  display: flex;
  column-gap: 60px;
  row-gap: 23px;
  flex-wrap: wrap;
`;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  opacity: 0.4;
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
const Text1 = styled.p`
  width: 282px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #fff;
`;
const Left = styled.div`
  padding: 54px 160px 112px 82px;
  background-color: #fff;
  width: 777px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 51px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Text2 = styled.p`
  width: 454px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #172335;
  opacity: 0.4;
`;
const Text3 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #172335;
`;
const InputGroup = styled.div`
  display: flex;
  row-gap: 16px;
  column-gap: 15px;
  flex-wrap: wrap;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
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
  width: 260px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #c9cfd8;
  border-radius: 10px;
  outline: none;
  padding-left: 20px;
`;
const Input2 = styled(Input)`
  width: 535px;
`;
const Zbtn = styled.button`
  padding: 15px 32px;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  border: 2px solid #c5821c;
  background-color: transparent;
  border-radius: 100px;
  color: #c5821c;
`;

export default function ModalPart({ close }) {
  return (
    <ModalBox onClick={() => close()}>
      <Modal>
        <Right>
          <Img src={backModal} />
          <Batafsil>
            <Texts1>
              <Title1>34 — LACHINA</Title1>
              <Text1>
                The question isn't who is going to let me. It's who is going to
                stop me.
              </Text1>
            </Texts1>
            <Bttn>Отменить</Bttn>
          </Batafsil>
          <List>
            <Item>
              <Span>1 Rulon</Span>3 m
            </Item>
            <Item>
              <Span>1 Rulon</Span>3 m
            </Item>
            <Item>
              <Span>1 Rulon</Span>3 m
            </Item>
            <Item>
              <Span>1 Rulon</Span>3 m
            </Item>
            <Item>
              <Span>1 Rulon</Span>3 m
            </Item>
          </List>
        </Right>
        <Left>
          <Form>
            <Texts>
              <Text2>
                Если у вас возникли затруднения в выборе, оставьте свои
                контактные данные и мы вам поможем!
              </Text2>
              <Text3>Заказать обои 56 — C TAB </Text3>
            </Texts>
            <InputGroup>
              <Inputs>
                <Label>Ваше имя</Label>
                <Input placeholder="имя" />
              </Inputs>
              <Inputs>
                <Label>Телефон</Label>
                <Input placeholder="Телефон" />
              </Inputs>
              <Inputs>
                <Label>Название обоя</Label>
                <Input placeholder="Название обоя" />
              </Inputs>
              <Inputs>
                <Label>Количество рулона</Label>
                <Input placeholder=" рулона" type={"number"} />
              </Inputs>
              <Inputs>
                <Label>Адрес для доставку:</Label>
                <Input2 placeholder="Адрес для доставку" />
              </Inputs>
            </InputGroup>
          </Form>
          <Zbtn>Заказать</Zbtn>
        </Left>
      </Modal>
    </ModalBox>
  );
}
