import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import NextImage from "next/image";

const InstagramContainer = styled.div`
  font-family: "RedHatDisplay";
  padding: 30px 20px 32px 20px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 30px 32px 32px 32px;
    padding-top: 0;
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
const InstagramImage = styled.div`
  overflow: hidden;
  position: relative;
  margin: 32px 0px 0px 0px;
  border: solid;
  border-color: green;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 50%;
    width: 178px;
    margin: 0px;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
    margin: 32px 0px 0px 0px;
  }
`;

const InstagramImageTwo = styled(InstagramImage)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 992px) {
  } ;
`;
const InstagramImageThree = styled(InstagramImage)`
  display: none;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
    display: block;
  } ;
`;

const Text = styled.p`
  font-size: 36px;
`;

const TextBox = styled.div`
  margin: 0px 0px 40px 0px;
  @media screen and (min-width: 768px) {
    margin: 0px 0px 16px 0px;
  }
`;

const InstagramLink = styled.a`
  font-size: 26px;

  &:focus,
  :hover {
    text-decoration: underline;
    font-style: normal;
  }
`;
const InstagramSection = ({ images }) => {

  return (
    <InstagramContainer>
      <InstagramTextContainer>
        <TextBox>
          <Text>OOPS Silver finns såklart på Instagram!</Text>
        </TextBox>
        <InstagramLink
          href="https://www.instagram.com/oops_silver/"
          target="_blank"
          rel="noreferrer"
        >
          Följ @oops_silver på Instagram
        </InstagramLink>
      </InstagramTextContainer>
      <InstagramImageContainer>
        <InstagramImage>
          <>
            <a href={images[0].permalink} target="_blank" rel="noreferrer">
              <NextImage
                src={images[0].media_url}
                alt={images[0].caption}
                layout="responsive"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </a>
          </>
        </InstagramImage>
        <InstagramImageTwo>
          <>
            <a href={images[1].permalink} target="_blank" rel="noreferrer">
              <NextImage
                src={images[1].media_url}
                alt={images[1].caption}
                layout="responsive"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </a>
          </>
        </InstagramImageTwo>
        <InstagramImageThree>
          <>
            <a href={images[2].permalink} target="_blank" rel="noreferrer">
              <NextImage
                src={images[2].media_url}
                alt={images[2].caption}
                layout="responsive"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </a>
          </>
        </InstagramImageThree>
      </InstagramImageContainer>
    </InstagramContainer>
  );
};

export default InstagramSection;
