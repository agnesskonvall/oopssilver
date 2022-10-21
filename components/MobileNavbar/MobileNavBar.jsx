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
  height: 30px;
  width: auto;
`;
const SocialMediaContainer = styled.div``;

const NavList = styled.div`
  list-style-type: none;
  align-items: flex-start;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 173vh;
  margin: 0;
  z-index: 10;
  background-color: beige;
`;

const HamburgerIcon = styled.img`
  height: 50px;
  width: auto;
  margin-top: 0.8rem;
  padding-right: 1rem;
`;

const CrossIcon = styled.img`
  height: 50px;
  width: auto;
`;

const NavItem = styled.a`
  &:focus,
  :hover {
    text-decoration: underline;
    font-style: normal;
  }
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
        {openMenu && <CrossIcon src="/cross.svg"></CrossIcon>}
      </NavContainer>
      {openMenu && (
        <NavList>
          <Link href={"/smycken"}>
            <NavItem className="one">SMYCKEN</NavItem>
          </Link>
          <Link href={"/faq"}>
            <NavItem className="two">FAQ</NavItem>
          </Link>
          <Link href={"/om"}>
            <NavItem className="three">KONTAKT</NavItem>
          </Link>
          <Link href={"/bestall"}>
            <NavItem className="four">BESTÄLLNING</NavItem>
          </Link>
          <SocialMediaContainer>
            <SocialMediaLink src="/facebook.svg"></SocialMediaLink>
            <SocialMediaLink src="/instagram.svg"></SocialMediaLink>
          </SocialMediaContainer>
        </NavList>
      )}
    </MobileNav>
  );
};

export default MobileNavbar;
