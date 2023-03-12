import React from "react";
import styled from "styled-components";
import { Img1, Img2, Img3, Img4, Img5 } from "../../assets/img/img";
import Marquee from "react-fast-marquee";


const ImgOne = styled.img`
  height: 500px;
  width: 375px;
`;
const ImgTwo = styled.img`
  width: 797px;
  height: 500px;
`;
const ImgThree = styled.img`
  width: 351px;
  height: 247px;
`;
const ImgFour = styled.img`
  height: 500px;
  width: 797px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
`;
const Elem = styled.div`
  margin-right: 5px;
`;


export default function Carusel1() {
  return (
    <>
      <Marquee gradientColor pauseOnHover speed={20}>
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
      </Marquee>
    </>
  );
}
