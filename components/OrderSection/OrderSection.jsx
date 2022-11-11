import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";

const TitleText = styled.h2`
  text-align: center;
  font-weight: bold;
  text-align: center;
  font-family: "RedHatDisplayBold";

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    width: 35rem;
    height: auto;
    padding: 2rem;
    font-size: 36px;
  }
`;
const BoldText = styled.p`
  font-family: "RedHatDisplayBold";
  font-size: 22px;
`;
const Text = styled.p`
  font-size: 16px;
  font-family: "RedHatDisplay";
`;

const TextWrapper = styled.div`
  display: grid;
  list-style-type: none;
  flex-direction: column;
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const SectionWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  text-align: center;
`;

const CheckList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  display: inline-block;
  align-items: flex-start;
`;

const CheckItem = styled.li`
  font-family: "RedHatDisplay";
  align-self: center;
`;

const OrderSection = ({ text, href, active }) => {
  return (
    <OrderWrapper>
      <TitleText>BESTÄLLNINGSINFORMATION</TitleText>
      <TextWrapper>
        <SectionWrapper>
          <BoldText>Hur beställer jag?</BoldText>
          <Text>
            Du beställer genom att fylla i meddelanderutan nedan eller skicka
            e-post till: karin@oopssilver.se. Du får en bekräftelse på din
            beställning inom ett dygn. I beställningen uppger du vilken produkt
            du önskar, eventuellt färgval, storlek om det behövs och till vilken
            adress smycket ska skickas. Skriv gärna ifall du ska ge bort smycket
            så kan jag skicka med presentförpackning.{" "}
          </Text>
          <BoldText>Hur lång är leveranstiden?</BoldText>
          <Text>
            Ca 3 veckor. Om du önskar leverans till ett visst datum eller om det
            är brådskande - meddela detta i beställningen. Om din beställda
            produkt inte kommer i utsatt tid är det viktig att meddela det per
            e-post: karin@oopssilver.se
          </Text>
        </SectionWrapper>
        <SectionWrapper>
          <BoldText>Vad kostar frakten?</BoldText>
          <Text>
            Fraktkostnad på 50 kr tillkommer på beställningar under 1000 kr.
            Alla paket skickas spårbart via PostNord. Ringar, hängen och
            örhängen levereras i små svarta smyckeaskar. Leverans till andra
            länder kan ordnas enligt överenskommelse. Du måste vara 18 år eller
            ha målsmans godkännande vid beställning.
          </Text>
          <BoldText>Hur betalar jag?</BoldText>
          <Text>
            Bankgiro OOPS Silver i Sunna: 5443-1481 Swish: 1234031258 Din
            beställning skickas så snart din betalning kommit OOPS Silver
            tillhanda. Det är viktigt att du skriver ditt namn i
            meddelanderutan. Priserna anges i SEK (svenska kronor) och är
            inklusive moms.
          </Text>
        </SectionWrapper>
      </TextWrapper>
      <CheckWrapper>
        <InfoWrapper>
          <BoldText>CHECKLISTA</BoldText>
          <Text>
            När du lägger din beställning är det viktigt att följande
            information är med:
          </Text>
        </InfoWrapper>
        <CheckList>
          <CheckItem>Modell på smycket</CheckItem>
          <CheckItem>Mått och storlek</CheckItem>
          <CheckItem>Eventuellt färgval (färgkod eller beskrivning)</CheckItem>
          <CheckItem>Adress</CheckItem>
          <CheckItem>Om du önskar presentförpackning</CheckItem>
        </CheckList>
      </CheckWrapper>
    </OrderWrapper>
  );
};

export default OrderSection;
