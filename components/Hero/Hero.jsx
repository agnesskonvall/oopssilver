import Image from "next/image";
import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  font-family: "RedHatDisplay";
`;
const HeroHeading = styled.h1`
  color: black;
`;
const HeroHeadingWrapper = styled.div`
  height: 100%;
  width: 50%;
  background-color: #d9d9d960;
`;
const HeroText = styled.p``;

const HeroTextWrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: #d9d9d960;
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
`;

const HeroImageWrapper = styled.div`
  width: 100vw;
  height: 600px;
  position: relative;
`;

function Hero() {
  return (
    <HeroWrapper>
      <HeroImageWrapper>
        <Image src="/hero.png" layout="fill" object-fit="contain"></Image>
      </HeroImageWrapper>
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
