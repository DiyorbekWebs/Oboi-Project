import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate, Telephone } from "../../assets/img/img";
const Modal = styled.div`
  width: 100%;
  height: 100vh;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #000000ac;
  align-items: center;
  justify-content: center;
  color: #ffff;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 430px) {
    display: flex;
    transform: translateY(-0%);
    transition: 1.3s;
  }
  @media screen and (max-width: 415px) {
    display: flex;
    transform: translateY(-0%);
    transition: 1.3s;
  }
  @media screen and (max-width: 391px) {
    display: flex;
    transform: translateY(-0%);
    transition: 1.3s;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    transform: translateY(-0%);
    transition: 1.3s;
  }
  @media screen and (max-width: 361px) {
    display: flex;
    transform: translateY(-0%);
    transition: 1.3s;
  }
  @media screen and (max-width: 321px) {
    display: flex;
    transform: translateY(-0%);
    transition: 1.3s;
  }
`;
const Place = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 5px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-items: flex-start;
  cursor: default;
`;
const T1 = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.5;
`;
const T2 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Item2 = styled.li`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  transition: 1s;
  color: #ffff;

  &:hover {
    transition: 1s;
    color: #c5821c;
  }
`;
const Linnk = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Nomer = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffff;
`;
const Close = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 30px;
  height: 30px;
  background-color: red;
  margin: 20px;
`;
export default function HeaderModal({ CloseM, styyle }) {
  return (
    <Modal style={{ ...styyle }}>
      <Close onClick={() => CloseM()}></Close>
      <List>
        <Link to={"/"}>
          <Item2>Главная</Item2>
        </Link>
        <Link to={"/catalog"}>
          <Item2>Главная</Item2>
        </Link>
        <Link to={"/pro"}>
          <Item2>Услуги и цены</Item2>
        </Link>
        <Link to={"/contact"}>
          <Item2>Контакты</Item2>
        </Link>
      </List>
      <Linnk to={"tel:+998935614220"}>
        <img src={Telephone} alt="Telephone" />
        <Nomer>+998935642255</Nomer>
      </Linnk>
      <Place>
        <img src={Navigate} alt="Navigate" />
        <Texts>
          <T1>Приходите в гости</T1>
          <T2>р.Чилонзор, Абу-Сахий 56 м</T2>
        </Texts>
      </Place>
    </Modal>
  );
}
