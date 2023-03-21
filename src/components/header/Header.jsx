import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  drop,
  face,
  Insta,
  Logo,
  Navigate,
  Telephone,
  Tg,
} from "../../assets/img/img";
import useModal from "../../hooks/useModal/useModal";
import HeaderModal from "../Modal/HeaderModal";
const Headerr = styled.header`
  padding-right: 100px;

  @media screen and (max-width: 1281px) {
    padding-right: 35px;
  }
  @media screen and (max-width: 885px) {
    padding-right: 15px;
  }
  @media screen and (max-width: 835px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 770px) {
    padding-right: 15px;
  }
`;
const Box = styled.div`
  width: 1352px;
  padding: 32px 0px 13px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1281px) {
    width: 1220px;
  }
  @media screen and (max-width: 885px) {
    width: 860px;
  }
  @media screen and (max-width: 835px) {
    width: 800px;
  }
  @media screen and (max-width: 801px) {
    width: 765px;
  }
  @media screen and (max-width: 770px) {
    width: 740px;
    padding: 20px 0px 13px 0px;
  }
  @media screen and (max-width: 430px) {
    width: 410px;
  }
  @media screen and (max-width: 415px) {
    width: 395px;
  }
  @media screen and (max-width: 391px) {
    width: 370px;
  }
  @media screen and (max-width: 376px) {
    width: 355px;
  }
  @media screen and (max-width: 361px) {
    width: 340px;
  }
  @media screen and (max-width: 322px) {
    width: 305px;
  }
`;
const Left = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 391px) {
    gap: 5px;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text1 = styled.h1`
  font-family: Inter;
  font-size: 48px;
  font-weight: 900;
  line-height: 58px;
  letter-spacing: -0.05em;
  text-align: left;
  color: #172335;
  @media screen and (max-width: 885px) {
    font-size: 38px;
    line-height: 48px;
  }
  @media screen and (max-width: 430px) {
    font-size: 28px;
    line-height: 38px;
  }
`;
const Text2 = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  color: #172335;
  opacity: 0.6;
  @media screen and (max-width: 885px) {
    font-size: 10px;
    line-height: 13px;
  }
  @media screen and (max-width: 430px) {
    font-size: 8px;
    line-height: 8px;
  }
`;
const SocialList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 885px) {
    gap: 8px;
  }
  @media screen and (max-width: 885px) {
    display: none;
  }
`;
const Item = styled(Link)``;
const Btn = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: -0.03em;
  text-align: center;
  padding: 15px 45px;
  border: 2px solid #c5821c;
  border-radius: 100px;
  color: #172335;
  @media screen and (max-width: 885px) {
    padding: 15px 30px;
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const Btns = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  @media screen and (max-width: 885px) {
    gap: 10px;
  }
`;
const Nav = styled.nav`
  width: 1240px;
  padding: 26px 0px 38px 0px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid #eeeeee;

  @media screen and (max-width: 1281px) {
    width: 1200px;
  }
  @media screen and (max-width: 885px) {
    width: 840px;
    padding: 20px 0px 32px 0px;
  }
  @media screen and (max-width: 835px) {
    width: 785px;
  }
  @media screen and (max-width: 801px) {
    width: 755px;
  }
  @media screen and (max-width: 770px) {
    width: 730px;
  }

  @media screen and (max-width: 430px) {
    display: none;
  }
  /* @media screen and (max-width: 415px) {
    width: 385px;
  }
  @media screen and (max-width: 391px) {
    width: 360px;
  }
  @media screen and (max-width: 375px) {
    width: 345px;
  }
  @media screen and (max-width: 361px) {
    width: 330px;
  }
  @media screen and (max-width: 321px) {
    width: 300px;
  } */
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 885px) {
    gap: 25px;
  }
`;
const Item2 = styled.li`
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #172335;
  transition: 1s;
  @media screen and (max-width: 885px) {
    font-size: 16px;
    line-height: 20px;
  }

  &:hover {
    transition: 1s;
    color: #c5821c;
  }
`;
const Nomer = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: black;
  @media screen and (max-width: 885px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Place = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 5px;
  @media screen and (max-width: 835px) {
    display: none;
  }
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
  color: #172335;
  opacity: 0.5;
`;
const T2 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  color: #172335;
`;
const Linnk = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const LogoImg = styled.img`
  width: 100px;
  height: 94px;
  @media screen and (max-width: 1281px) {
    width: 90px;
    height: 84px;
  }
  @media screen and (max-width: 885px) {
    width: 80px;
    height: 74px;
  }
  @media screen and (max-width: 835px) {
    width: 80px;
    height: 74px;
  }
  @media screen and (max-width: 801px) {
    width: 80px;
    height: 74px;
  }
  @media screen and (max-width: 770px) {
    width: 70px;
    height: 64px;
  }

  @media screen and (max-width: 430px) {
    width: 60px;
    height: 54px;
  }
  @media screen and (max-width: 415px) {
    width: 60px;
    height: 54px;
  }
  @media screen and (max-width: 391px) {
    width: 60px;
    height: 54px;
  }
  @media screen and (max-width: 376px) {
    width: 55px;
    height: 50px;
  }
  @media screen and (max-width: 361px) {
    width: 50px;
    height: 44px;
  }
  @media screen and (max-width: 321px) {
    width: 40px;
    height: 34px;
  }
`;
export default function Header() {
  const { closeModal, open, openModal } = useModal();
  const styyle = {
    transform: "translateY(-200%)",
    transition: "1.5s",
  };
  return (
    <>
      <Headerr>
        <div className="h1-container">
          <Content>
            <Box>
              <Left>
                <LogoImg src={Logo} alt="Logo" />
                <LogoText>
                  <Text1>Oбои</Text1>
                  <Text2>Украшение вашего дома</Text2>
                </LogoText>
              </Left>
              <Right>
                <SocialList>
                  <Item>
                    <img src={face} alt="" />
                  </Item>
                  <Item>
                    <img src={Insta} alt="" />
                  </Item>
                  <Item>
                    <img src={Tg} alt="" />
                  </Item>
                </SocialList>
                <Place>
                  <img src={Navigate} alt="Navigate" />
                  <Texts>
                    <T1>Приходите в гости</T1>
                    <T2>р.Чилонзор, Абу-Сахий 56 м</T2>
                  </Texts>
                </Place>
                <Link>
                  <Btns>
                    <Btn>Заказать обои</Btn>
                    <img onClick={() => openModal()} src={drop} alt="" />
                  </Btns>
                </Link>
              </Right>
            </Box>
            <Nav>
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
            </Nav>
          </Content>
          {open ? <HeaderModal CloseM={closeModal} /> : <HeaderModal styyle={styyle}/>}
        </div>
      </Headerr>
    </>
  );
}
