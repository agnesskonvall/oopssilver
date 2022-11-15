import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/MobileNavbar/MobileNavBar";
import Footer from "../../components/Footer/Footer";
import InstagramSection from "../../components/InstagramSection/InstagramSection";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import Circles from "../../components/Circles/Circles";
import { createClient } from "contentful";
import ProductMenu from "../../components/ProductMenu/ProductMenu";
import { useState, useEffect } from "react";
import styled from "styled-components";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "bracelets",
  });
  return {
    props: {
      products: res.items,
    },
  };
}
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  /* @media screen and (min-width: 425px) {
    margin-left: 2rem;
  } */

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function Bracelets({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Armband - OOPS Silver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <ProductMenu></ProductMenu>
      <GridWrapper>
        {products.map((product) => (
          <Card product={product} key={product.sys.id} />
        ))}
      </GridWrapper>
      <Footer></Footer>
    </div>
  );
}
