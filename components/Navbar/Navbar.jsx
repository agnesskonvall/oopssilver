import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";

const Nav = styled.nav`
  display: none;
  color: black;
  font-family: "RedHatDisplay";

  @media screen and (min-width: 768px) {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 1px;
    display: block;
    width: 100%;
    height: 20vh;
    margin: 0 auto;
    display: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    gap: 5vh;
    align-items: center;
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 18vh;
    border-color: black;
    border-style: solid;
  }
  @media screen and (min-width: 992px) {
    box-sizing: border-box;
    font-size: 20px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-color: black;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 1px;
    display: block;
    width: 100%;
    height: 15vh;
    margin: 0 auto;
    display: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    gap: 100px;
    align-items: center;
    text-align: center;

    padding-top: 5vh;
    padding-bottom: 15vh;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 18vh;
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
`;

const NavItem = styled.a`
  &:focus,
  :hover {
    text-decoration: underline;
    font-style: normal;
  }
`;
const Logo = styled.img`
  height: 120px;
  width: auto;
  padding-bottom: 10px;
`;

const Navbar = ({ text, href, active }) => {
  return (
    <Nav>
      <Link href={"/halsband"}>
        <NavItem className="one">SMYCKEN</NavItem>
      </Link>
      <Link href={"/faq"}>
        <NavItem className="two">FAQ</NavItem>
      </Link>
      <Link href={"/"}>
        <Logo src="/logo.svg" className="three"></Logo>
      </Link>
      <Link href={"/kontakt"}>
        <NavItem className="four">KONTAKT</NavItem>
      </Link>
      <Link href={"/bestall"}>
        <NavItem className="five">BESTÄLLNING</NavItem>
      </Link>
    </Nav>
  );
};

export default Navbar;
