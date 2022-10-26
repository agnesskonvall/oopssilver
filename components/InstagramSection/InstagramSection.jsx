import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import NextImage from "next/image";

const InstagramContainer = styled.div`
  background-color: white;
  font-family: "RedHatDisplay";
  padding: 30px 20px 32px 20px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 30px 32px 32px 32px;
  }
  @media screen and (min-width: 992px) {
  }
`;
const InstagramTextContainer = styled.div`
  @media screen and (min-width: 768px) {
    grid-column: 1/3;
    grid-row: 1;
  }
  @media screen and (min-width: 992px) {
  }
`;
const InstagramImageContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 58px;
    grid-column: 3/5;
    grid-row: 1;
  }
  @media screen and (min-width: 992px) {
    gap: 3rem;
  }
`;
const InstagramImageOne = styled.div`
  position: relative;
  margin: 32px 0px 0px 0px;
  border: solid;
  border-color: green;
  border-radius: 10px;
  width: 33%;
  @media screen and (min-width: 768px) {
    width: 178px;
    margin: 0px;
  }
  @media screen and (min-width: 992px) {
    width: 340px;
    margin: 32px 0px 0px 0px;
  }
`;
const InstagramImageTwo = styled(InstagramImageOne)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 992px) {
  }
`;
const InstagramImageThree = styled(InstagramImageOne)`
  display: none;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
    display: block;
  }
`;

const Text = styled.p`
  font-size: 16px;
`;

const TextBox = styled(Text)`
  margin: 0px 0px 40px 0px;
  @media screen and (min-width: 768px) {
    margin: 0px 0px 16px 0px;
  }
`;
const InstagramSection = ({ text, href, active }) => {
  return (
    <InstagramContainer>
      <InstagramTextContainer>
        <h2 Color>OOPS Silver finns på Instagram!</h2>
        <TextBox Color>
          Besök OOPS Silver instagram för de senaste nyheterna!
        </TextBox>
        <Link href="" target="_blank" rel="noreferrer" Color>
          Följ @oopssilver på Instagram
        </Link>
      </InstagramTextContainer>
      <InstagramImageContainer>
        <InstagramImageOne>
          <>
            <a href="/" target="_blank" rel="noreferrer">
              <NextImage
                src="/images/pink-rings.jpeg"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </>
        </InstagramImageOne>
        <InstagramImageTwo>
          <>
            <a href="/" target="_blank" rel="noreferrer">
              <NextImage
                src="/images/pink-rings.jpeg"
                // alt={images[1].caption}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                border-radius="10px"
              />
            </a>
          </>
        </InstagramImageTwo>
        <InstagramImageThree>
          <>
            <a href="/" target="_blank" rel="noreferrer">
              <NextImage
                src="/images/pink-rings.jpeg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
              />
            </a>
          </>
        </InstagramImageThree>
      </InstagramImageContainer>
    </InstagramContainer>
  );
};

export default InstagramSection;
