import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";

const MobileNav = styled.nav`
  background-color: beige;
  color: #1e1e1e;
  display: block;
  gap: 5vh;
  align-items: center;
  text-align: center;
  font-family: "RedHatDisplay";

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  padding: 1rem;
`;

const TitleText = styled.h1`
  font-size: 26px;
`;

const SocialMediaLink = styled.img`
  height: 40px;
  width: auto;
`;
const SocialMediaContainer = styled.div`
  margin-right: 50px;

  .facebook {
    margin-right: 20px;
  }
`;

const NavList = styled.div`
  display: grid;
  list-style-type: none;
  flex-direction: column;
  width: 100vw;
  height: 50%;
  margin: 0;
  z-index: 10;
  background-color: beige;
  margin-top: 2rem;
  font-size: 20px;
  text-align: end;
`;

const HamburgerIcon = styled.img`
  height: 40px;
  width: auto;
  margin-top: 1rem;
  padding-right: 1rem;
`;

const CrossIcon = styled.img`
  height: 40px;
  width: auto;
  margin-top: 0.8rem;
  padding-right: 1rem;
  z-index: 10;
`;

const NavItem = styled.a`
  margin-right: 50px;
  &:focus,
  :hover {
    text-decoration: underline;
    font-style: normal;
  }
`;

const NavWrapper = styled.div`
  height: 100vh;
  padding-top: 5vh;
`;
const MobileNavbar = ({ text, href, active }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MobileNav>
      <NavContainer>
        <NavContainer>
          <Logo src="/logo.svg"></Logo>
          <TitleText href={"/"}>OOPS Silver</TitleText>{" "}
        </NavContainer>
        {!openMenu && (
          <HamburgerIcon
            src="/menu-burger.svg"
            onClick={() => setOpenMenu(!openMenu)}
          ></HamburgerIcon>
        )}

        {openMenu && (
          <CrossIcon
            src="/cross.svg"
            onClick={() => setOpenMenu(!openMenu)}
          ></CrossIcon>
        )}
      </NavContainer>
      {openMenu && (
        <NavWrapper>
          <NavList>
            <Link href={"/smycken"}>
              <NavItem className="one">SMYCKEN</NavItem>
            </Link>
            <Link href={"/faq"}>
              <NavItem className="two">FAQ</NavItem>
            </Link>
            <Link href={"/kontakt"}>
              <NavItem className="three">KONTAKT</NavItem>
            </Link>
            <Link href={"/bestall"}>
              <NavItem className="four">BESTÄLLNING</NavItem>
            </Link>
            <SocialMediaContainer>
              <SocialMediaLink
                className="facebook"
                src="/facebook.svg"
              ></SocialMediaLink>
              <SocialMediaLink src="/instagram.svg"></SocialMediaLink>
            </SocialMediaContainer>
          </NavList>
        </NavWrapper>
      )}
    </MobileNav>
  );
};

export default MobileNavbar;
