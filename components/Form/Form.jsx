import styled from "styled-components";
import React, { useState } from "react";

const TitleText = styled.h2`
  text-align: center;
  font-weight: bold;
  font-family: "RedHatDisplayBold";
  text-decoration: underline;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    height: auto;
    padding: 2rem;
    font-size: 36px;
  }
`;

const FormWrapper = styled.div`
  align-items: center;
  margin-bottom: 1rem;

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  input[type="file"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  font-family: "RedHatDisplay";
  align-items: center;
`;

const HelpBlock = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
`;

const FieldSet = styled.fieldset`
  border: none;
`;

const TextArea = styled.textarea`
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
`;

export default function FormSection() {
  return (
    <FormWrapper>
      <a href="mailto:karin@oopssilver.se?subject=Best%C3%A4llning&body=Namn%3A%0A%0AMailadress%3A%0A%0APostadress%3A%0A%0ASmyckesmodell%3A%0A%0AF%C3%A4rgval%3A%20%0A%0AM%C3%A5tt%20och%20storlek%3A%0A%0APresentf%C3%B6rpackning%20(Ja%2FNej)%3A%20%0A%0AMeddelande%20(valfritt)%3A">
        <TitleText>BESTÄLL DITT SMYCKE HÄR</TitleText>
      </a>
    </FormWrapper>
  );
}
