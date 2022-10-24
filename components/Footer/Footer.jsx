import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const FooterWrapper = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 28rem;
  border-top: 1px solid black;
  font-family: "RedHatDisplay";
  display: flex;
  flex-direction: column;

  .StyledText {
    margin: 0;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 16px;
    width: 100%;
    height: 12rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: column;
    justify-items: center;
  }
  .one {
    grid-column: 1;
  }
  .two {
    grid-column: 2;
  }
  .three {
    grid-column: 3;
  }
  .four {
    grid-column: 4;
  }
  .five {
    grid-column: 5;
  }

  .StyledText {
    margin: 0;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 992px) {
    margin: 0;
  }
`;

const StyledIcons = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  @media screen and (min-width: 992px) {
    margin: 0;
    margin-left: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 992px) {
    margin: 0;
    align-items: flex-start;

    .StyledReturn {
      margin-bottom: 3rem;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <StyledLogo
          className="three"
          src="/circle-footer-mobile.svg"
        ></StyledLogo>
      </LogoWrapper>
      <InfoWrapper className="two">
        <h2 className="StyledText">KONTAKT</h2>
        <p className="StyledText">tel: 0704 59 93 24</p>
        <p className="StyledText">karin@oopssilver.se</p>
      </InfoWrapper>
      <InfoWrapper className="four">
        <h2 className="StyledText">ÅTERFÖRSÄLJARE</h2>
        <a className="StyledText" href="https://ruthellen.se/">
          ruthellen
        </a>
        <a className="StyledText" href="https://sintra.se/">
          sintra
        </a>
      </InfoWrapper>
      <InfoWrapper className="five">
        <h2 className="StyledReturn StyledText">RETUR</h2>
      </InfoWrapper>
      <IconWrapper className="one">
        <a href="https://facebook.com/">
          <StyledIcons src="/facebook-icon.svg"></StyledIcons>
        </a>
        <a href="https://instagram.com/">
          <StyledIcons src="/instagram-icon.svg"></StyledIcons>
        </a>
      </IconWrapper>
    </FooterWrapper>
  );
}
export default Footer;
