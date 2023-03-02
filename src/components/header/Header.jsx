import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { drop, face, Insta, Logo, Tg } from "../../assets/img/img";
const Headerr = styled.header``;
const Box = styled.div`
width: 100%;
  padding: 32px 0px 13px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  gap: 10px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
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
`;
const SocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Item = styled.li``;
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
`;
const Btns = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
`;
const Nav = styled.nav`
  padding: 26px 0px 38px 0px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid #eeeeee;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
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
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export default function Header() {
  return (
    <>
      <Headerr>
        <div className="h1-container">
          <Content>
            <Box>
              <Left>
                <img src={Logo} alt="Logo" />
                <LogoText>
                  <Text1>Бобои</Text1>
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
                <Link>
                  <Btns>
                    <Btn>Заказать обои</Btn>
                    <img src={drop} alt="" />
                  </Btns>
                </Link>
              </Right>
            </Box>
            <div className="container">
              <Nav>
                <List>
                  <Link>
                    <Item2>Главная</Item2>
                  </Link>
                  <Link>
                    <Item2>Каталог</Item2>
                  </Link>
                  <Link>
                    <Item2>Услуги и цены</Item2>
                  </Link>
                  <Link>
                    <Item2>Контакты</Item2>
                  </Link>
                </List>
                <Link to={"tel:+998935614220"}>
                  <Nomer>+998935642255</Nomer>
                </Link>
              </Nav>
            </div>
          </Content>
        </div>
      </Headerr>
    </>
  );
}
