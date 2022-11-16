import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/MobileNavbar/MobileNavBar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Circles from "../../components/Circles/Circles";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import ProductMenu from "../../components/ProductMenu/ProductMenu";
import styled from "styled-components";
import Head from "next/head";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "necklaces",
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

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function Necklaces({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Halsband - OOPS Silver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <ProductMenu></ProductMenu>
      <GridWrapper>
        {products.map((product) => (
          <Card key={product.sys.id} product={product} />
        ))}
      </GridWrapper>
      <Footer></Footer>
    </div>
  );
}
