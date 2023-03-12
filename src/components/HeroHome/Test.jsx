import React from "react";
import styled from "styled-components";
import { Img1 } from "../../assets/img/img";
const Slider = styled.div`
  height: 250px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;
  &::before,
  &::after {
    background-color: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
  }
  &::before {
    left: 0;
    top: 0;
  }
  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`;
const SlideTrick = styled.div`
  display: flex;
  width: calc(250px * 18);
  gap: 10px;
  animation: scroll 40s linear infinite;
  &:hover{
    animation-play-state: paused;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-300px * 9));
    }
  }
`;
const Slide = styled.div`
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px;
  background-color: red;
`;
const Body = styled.div`
  min-height: 500px;
  display: grid;
  place-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  &:hover {
    transform: translateZ(20px);
  }
`;
export default function Test() {
  return (
    <Body>
      <Slider>
        <SlideTrick>
          <Slide>
            <Img src={Img1} alt="" />
          </Slide>
          <Slide></Slide>
          <Slide></Slide>
          <Slide></Slide>
          <Slide></Slide>
          <Slide></Slide>
         
        </SlideTrick>
      </Slider>
    </Body>
  );
}
