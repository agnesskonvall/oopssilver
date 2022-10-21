import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";

const MobileNav = styled.nav`
  background-color: beige;
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
  top: 0;
  right: 0;
  width: 100vw;
  height: 173vh;
  margin: 0;
  z-index: 10;
`;

const HamburgerIcon = styled.img`
  height: 30px;
  width: auto;
`;

const CrossIcon = styled.img`
  height: 30px;
  width: auto;
`;

const MobileNavbar = ({ text, href, active }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MobileNav>
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
          <SocialMediaLink src="/instagram.sv"></SocialMediaLink>
        </SocialMediaContainer>
      </NavList>
    </MobileNav>
  );
};

export default MobileNavbar;
