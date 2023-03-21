import React from "react";
import styled from "styled-components";
import { Img1, Img2, Img3, Img4, Img5 } from "../../assets/img/img";
import Marquee from "react-fast-marquee";

const ImgOne = styled.img`
  width: 375px;
  height: 500px;
  @media screen and (max-width: 886px) {
    width: 300px;
    height: 450px;
  }
  @media screen and (max-width: 430px) {
    width: 351px;
    height: 500px;
  }
  @media screen and (max-width: 361px) {
    width: 351px;
    height: 350px;
  }
  @media screen and (max-width: 321px) {
    width: 320px;
  }
`;
const ImgTwo = styled.img`
  width: 797px;
  height: 500px;
  @media screen and (max-width: 885px) {
    width: 700px;
    height: 450px;
  }
  @media screen and (max-width: 430px) {
    width: 351px;
    height: 500px;
  }
  @media screen and (max-width: 361px) {
    width: 351px;
    height: 350px;
  }
  @media screen and (max-width: 321px) {
    width: 320px;
  }
`;
const ImgThree = styled.img`
  width: 351px;
  height: 247.5px;
  @media screen and (max-width: 885px) {
    width: 280px;
    height: 223px;
  }
  @media screen and (max-width: 430px) {
    width: 351px;
    height: 247px;
  }
  @media screen and (max-width: 361px) {
    width: 351px;
    height: 175px;
  }
  @media screen and (max-width: 321px) {
    width: 320px;
  }
`;
const ImgFour = styled.img`
  height: 500px;
  width: 797px;
  @media screen and (max-width: 885px) {
    width: 700px;
    height: 450px;
  }
  @media screen and (max-width: 430px) {
    width: 351px;
    height: 500px;
  }
  @media screen and (max-width: 361px) {
    width: 351px;
    height: 350px;
  }
  @media screen and (max-width: 321px) {
    width: 320px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
  @media screen and (max-width: 885px) {
    height: 450px;
  }
  @media screen and (max-width: 430px) {
    height: 500px;
  }
  @media screen and (max-width: 361px) {
    height: 350px;
  }
`;
const Elem = styled.div`
  margin-right: 5px;
`;
const Mar = styled.div`
display: flex;
align-items: flex-start;

`;
export default function Carusel1() {
  return (
    <>
      <Marquee gradientColor pauseOnHover speed={80}>
        <Mar>
          <Elem>
            <ImgOne src={Img5} alt="" />
          </Elem>
          <Elem>
            <ImgTwo src={Img1} alt="" />
          </Elem>
          <Elem>
            <Div>
              <ImgThree src={Img2} alt="" />
              <ImgThree src={Img3} alt="" />
            </Div>
          </Elem>
          <Elem>
            <ImgFour src={Img4} />
          </Elem>
          <Elem>
            <ImgOne src={Img5} alt="" />
          </Elem>
          <Elem>
            <ImgTwo src={Img1} alt="" />
          </Elem>
          <Elem>
            <Div>
              <ImgThree src={Img2} alt="" />
              <ImgThree src={Img3} alt="" />
            </Div>
          </Elem>
          <Elem>
            <ImgFour src={Img4} />
          </Elem>
          <Elem>
            <ImgOne src={Img5} alt="" />
          </Elem>
          <Elem>
            <ImgTwo src={Img1} alt="" />
          </Elem>
          <Elem>
            <Div>
              <ImgThree src={Img2} alt="" />
              <ImgThree src={Img3} alt="" />
            </Div>
          </Elem>
          <Elem>
            <ImgFour src={Img4} />
          </Elem>
          <Elem>
            <ImgOne src={Img5} alt="" />
          </Elem>
          <Elem>
            <ImgTwo src={Img1} alt="" />
          </Elem>
          <Elem>
            <Div>
              <ImgThree src={Img2} alt="" />
              <ImgThree src={Img3} alt="" />
            </Div>
          </Elem>
          <Elem>
            <ImgFour src={Img4} />
          </Elem>
          <Elem>
            <ImgOne src={Img5} alt="" />
          </Elem>
          <Elem>
            <ImgTwo src={Img1} alt="" />
          </Elem>
          <Elem>
            <Div>
              <ImgThree src={Img2} alt="" />
              <ImgThree src={Img3} alt="" />
            </Div>
          </Elem>
          <Elem>
            <ImgFour src={Img4} />
          </Elem>
        </Mar>
      </Marquee>
    </>
  );
}
