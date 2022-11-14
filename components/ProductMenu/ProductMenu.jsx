import styled from "styled-components";
import React, { useState } from "react";

const BoldText = styled.a`
  font-family: "RedHatDisplayBold";
  font-size: 16px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 992px) {
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: grid;
  list-style-type: none;
  flex-direction: row;
  width: 100vw;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow: auto;
  display: flex;
  -webkit-box-sizing: border-box;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  @media screen and (min-width: 992px) {
    padding-left: 10rem;
    padding-right: 10rem;
    grid-template-columns: repeat(5, 1fr);
    display: grid;
    justify-content: space-between;
  }
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
