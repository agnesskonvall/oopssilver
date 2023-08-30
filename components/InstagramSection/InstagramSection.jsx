import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import NextImage from "next/image";

const InstagramContainer = styled.div`
  font-family: "RedHatDisplay";
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* display: flex;
    align-items: center; */
    /* grid-template-rows: repeat(2, 1fr); */
    /* padding: 30px 32px 32px 32px; */
    /* padding-top: 0; */
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
const InstagramTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
  }
`;
const InstagramImageContainer = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 60%;
    margin-right: 2rem;
  }
  @media screen and (min-width: 992px) {
    width: 60%;
    margin-right: 2rem;
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
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    margin: 36px 0px 36px 0px;
  }
`;

const TextBox = styled.div`
  margin: 0px 0px 40px 0px;
  @media screen and (min-width: 768px) {
    margin: 0px 0px 16px 0px;
  }
`;

const InstagramLink = styled.a`
  font-size: 36px;
  text-decoration: underline;

  &:focus,
  :hover {
    text-decoration: underline;
    font-style: normal;
  }
`;
const InstagramSection = ({}) => {
  return (
    <InstagramContainer>
      <InstagramTextContainer>
        <InstagramLink
          href="https://www.instagram.com/oops_silver/"
          target="_blank"
          rel="noreferrer"
        >
          Följ @oops_silver <br></br> på Instagram
        </InstagramLink>
      </InstagramTextContainer>
      {/* <figure data-behold-id="FLLaLeqp4AOg5Nn7Hk4f"></figure> */}
      {/* <script src="https://w.behold.so/widget.js" type="module"></script> */}
      <InstagramImageContainer>
        <figure data-behold-id="FLLaLeqp4AOg5Nn7Hk4f"></figure>
        <script src="https://w.behold.so/widget.js" type="module"></script>

        {/* <InstagramImage>
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
        </InstagramImageThree> */}
      </InstagramImageContainer>
    </InstagramContainer>
  );
};

export default InstagramSection;
