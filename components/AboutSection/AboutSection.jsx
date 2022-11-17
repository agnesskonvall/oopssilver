import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";

const ContactWrapper = styled.div`
  display: grid;
  align-items: center;
  list-style-type: none;
  flex-direction: column;
  width: 100vw;
  grid-template-columns: repeat(1, 1fr);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
  }
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
  margin: 2rem;

  .info {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    margin-left: 1rem;
    margin: 4rem;
  }

  @media screen and (min-width: 992px) {
  }
`;

const AboutText = styled.div``;

const ContactText = styled.div`
  margin-top: 2rem;
  p {
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  align-items: center;
  position: relative;
  margin: 2rem;

  @media screen and (min-width: 768px) {
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    width: 35rem;
    height: auto;
    padding: 2rem;
    margin: 0;
    margin-left: 3rem;
  }
`;

const ContactSection = ({ text, href, active }) => {
  return (
    <ContactWrapper>
      <ImageWrapper>
        <Image
          src="/images/karin.png"
          width="100%"
          height="100%"
          className="image"
          layout="responsive"
          object-fit="contain"
          alt="Bild på Karin som ler"
        ></Image>
      </ImageWrapper>
      <TextWrapper>
        <AboutText>
          <BoldText>OM OOPS SILVER</BoldText>
          <Text>
            OOPS Silver designar och tillverkar silversmycken, gärna i rena
            enkla modeller i starka färger. Det är alltid sterlingsilver i
            smyckena. Ibland används silvret tillsammans med andra material, t
            ex resin för att skapa färgglada smycken.
            <Text>
              Företagets grundare är Karin Skönvall Hesslind som designar och
              tillverkar alla smycken för hand i sin silververkstad vid
              Kyrkesund på Tjörn.
            </Text>
            <Text>
              Oops Silver säljs också via återförsäljare. I dagsläget hittar du
              smyckena på Sintra i centrala Göteborg och RuthEllen i Skärhamn på
              Tjörn.
            </Text>
          </Text>
        </AboutText>
        <ContactText>
          <BoldText>KONTAKT</BoldText>
          <Text className="info">tel: 0704 59 93 24 </Text>
          <Text className="info" href="mailto:karin@oopssilver.se">
            karin@oopssilver.se
          </Text>
        </ContactText>
      </TextWrapper>
    </ContactWrapper>
  );
};

export default ContactSection;
