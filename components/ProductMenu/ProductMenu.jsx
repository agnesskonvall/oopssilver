import styled from "styled-components";
import React, { useState } from "react";
import { useRouter } from "next/router";

const BoldText = styled.button`
  font-family: "RedHatDisplayBold";
  font-size: 16px;
  padding: 20px;
  border: none;
  background-color: #fcfff4;
  color: black;
  cursor: pointer;
  &:focus,
  :hover {
    text-decoration: underline;
    font-style: normal;
  }
  overflow-y: hidden;
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
  margin-top: 1rem;

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

const ProductMenu = () => {
  const router = useRouter();
  return (
    <TextWrapper>
      <BoldText type="button" onClick={() => router.push("/smycken/ringar")}>
        RINGAR
      </BoldText>
      <BoldText type="button" onClick={() => router.push("/smycken/orhangen")}>
        ÖRHÄNGEN
      </BoldText>
      <BoldText type="button" onClick={() => router.push("/smycken/halsband")}>
        HALSBAND
      </BoldText>
      <BoldText type="button" onClick={() => router.push("/smycken/armband")}>
        ARMBAND
      </BoldText>
      <BoldText type="button" onClick={() => router.push("/smycken/statement")}>
        STATEMENT
      </BoldText>
    </TextWrapper>
  );
};

export default ProductMenu;
