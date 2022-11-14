import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";

const ContactWrapper = styled.div`
  display: grid;
  list-style-type: none;
  flex-direction: column;
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const BoldText = styled.h2`
  font-family: "RedHatDisplayBold";
  font-size: 22px;
  text-align: center;
`;
const Text = styled.p`
  font-size: 16px;
  font-family: "RedHatDisplay";
`;

const TextWrapper = styled.div`
  width: 60%;
  margin-left: 1rem;
  margin: 4rem;

  .info {
    text-align: center;
  }
`;

const AboutText = styled.div``;
const ContactText = styled.div``;

const ImageWrapper = styled.div`
  align-items: center;
  position: relative;
  margin-left: 3rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    width: 35rem;
    height: auto;
    padding: 2rem;
  }
`;

const ReturnSection = ({ text, href, active }) => {
  return (
    <ContactWrapper>
      <ImageWrapper>
        <Image
          src="/images/color-rings.jpeg"
          width="100%"
          height="100%"
          className="image"
          layout="responsive"
          object-fit="contain"
          alt="Färgglada ringar på en kvinnohand"
        ></Image>
      </ImageWrapper>
      <TextWrapper>
        <AboutText>
          <BoldText>RETUR OCH ÅNGERRÄTT</BoldText>
          <Text>
            Produkten ska vara i säljbart skick med oskadad förpackning.
            Ångerrätten gäller ej för vara specialbeställd eller specialdesignad
            för dig som kund. Du har en lagstadgad 14 dagars ångerrätt från det
            att du tagit emot en vara som du beställt. Vid nyttjande av
            ångerrätten står du själv för returfrakten. Vid nyttjande av
            ångerrätten återbetalas hela köpesumman. Meddela varför du inte
            godtar varan per e-post till: karin@oopssilver.se. Meddela alltid
            eventuell reklamation snarast möjligt. Du har enligt lag
            reklamationsrätt på din vara i 3 år förutsatt att felet kan åberopas
            säljaren som ursprungligt, inom 6 månader från köptillfället.
            Självklart accepteras beslut från Allmänna reklamationsnämnden
            (ARN).
            <Text>
              Vid byte av produkt, t ex vid köp av fel storlek eller färg gäller
              följande: Du står själv för returfrakten. Bytesrätten gäller i 14
              dagar från att du tagit emot varan. Vid byte står OOPS Silver för
              fraktkostnaden när den nya varan skickas till dig. Kom ihåg att
              alltid höra av dig per e-post innan du skickar tillbaka en vara,
              e-post: karin@oopssilver.se
            </Text>
            <Text>
              Reservation för eventuella tryckfel på denna webbsida samt
              slutförsäljning av produkter. Garanti lämnas inte att bilderna
              återger produkternas äkta utseende då färgskillnader kan förekomma
              beroende på bildskärm, fotokvalitet och upplösning.
            </Text>
          </Text>
        </AboutText>
      </TextWrapper>
    </ContactWrapper>
  );
};

export default ReturnSection;
