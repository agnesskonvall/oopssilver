import styled from "styled-components";
import React, { useState } from "react";
import { useRouter } from "next/router";

const BoldText = styled.button`
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
