import styled from "styled-components";
import React, { useState } from "react";

const BoldText = styled.a`
  font-family: "RedHatDisplayBold";
  font-size: 20px;
  padding: 20px;
`;

const TextWrapper = styled.div`
  text-align: center;
  justify-content: space-between;
  align-items: center;
  display: grid;
  list-style-type: none;
  flex-direction: column;
  width: 100vw;
  padding-left: 10rem;
  padding-right: 10rem;
  grid-template-columns: repeat(5, 1fr);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const ProductMenu = ({ text, href, active }) => {
  return (
    <TextWrapper>
      <BoldText href="/smycken/ringar">RINGAR</BoldText>
      <BoldText href="/smycken/örhängen">ÖRHÄNGEN</BoldText>
      <BoldText href="/smycken/halsband">HALSBAND</BoldText>
      <BoldText href="/smycken/armband">ARMBAND</BoldText>
      <BoldText href="/smycken/statement">STATEMENT</BoldText>
    </TextWrapper>
  );
};

export default ProductMenu;
