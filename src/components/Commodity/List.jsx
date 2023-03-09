import React from "react";
import styled from "styled-components";
const List = styled.ul`
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
  color: #172335;
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
  color: #172335;
  opacity: 0.4;
`;
export default function List1() {
  return (
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
  );
}
