import Image from "next/image";
import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  font-family: "RedHatDisplay";
  overflow-x: hidden;
`;

const HeroHeading = styled.h1`
  color: black;
  font-size: 30px;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }

  @media screen and (min-width: 992px) {
    font-size: 70px;
  }
`;
const HeroHeadingWrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: #d9d9d960;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 992px) {
    height: 120px;
    width: 90%;
  }
`;
const HeroText = styled.p`
  width: 80%;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const HeroTextWrapper = styled.div`
  height: 150px;
  width: 100%;
  background-color: #d9d9d960;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 992px) {
    height: 140px;
    width: 95%;
  }
`;

const HeroContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 992px) {
  }
`;

const HeroImageWrapperMobile = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: block;

  @media screen and (min-width: 768px) {
    height: 600px;
  }

  @media screen and (min-width: 992px) {
    width: 100vw;
    height: 900px;
    display: none;
  }
`;

const HeroImageWrapperDesktop = styled.div`
  width: 100vw;
  height: 400px;
  position: relative;
  display: none;

  @media screen and (min-width: 992px) {
    width: 100vw;
    height: 700px;
    display: block;
  }
`;

function Hero() {
  return (
    <HeroWrapper>
      <HeroImageWrapperMobile>
        <Image
          src="/hero2.jpeg"
          layout="fill"
          object-fit="contain"
          alt="heroimage"
        ></Image>
      </HeroImageWrapperMobile>
      <HeroImageWrapperDesktop>
        <Image
          src="/hero3.jpeg"
          layout="fill"
          object-fit="contain"
          alt="heroimage"
        ></Image>
      </HeroImageWrapperDesktop>
      <HeroContainer>
        <HeroHeadingWrapper>
          <HeroHeading>OOPS Silver</HeroHeading>
        </HeroHeadingWrapper>
        <HeroTextWrapper>
          <HeroText>
            Handgjorda smycken i rena former, gärna med starka färger och alltid
            med en bas av äkta silver. Alla smycken är tillverkade i verkstaden
            på Tjörn.
          </HeroText>
        </HeroTextWrapper>
      </HeroContainer>
    </HeroWrapper>
  );
}
export default Hero;
