import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavBar";
import Footer from "../components/Footer/Footer";
import InstagramSection from "../components/InstagramSection/InstagramSection";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import ProductMenu from "../components/ProductMenu/ProductMenu";
import Circles from "../components/Circles/Circles";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import styled from "styled-components";

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,caption,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const instagramData = await fetch(url);
  const feed = await instagramData.json();
  const images = feed.data;

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({
    content_type: "bestsellers",
  });

  return {
    props: {
      images,
      products: res.items,
    },
  };
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1439px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TitleText = styled.h2`
  text-align: center;
  font-weight: bold;
  text-align: center;
  font-family: "RedHatDisplayBold";

  @media screen and (min-width: 992px) {
    font-size: 36px;
  }
`;

export default function Home({ products, images }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>OOPS Silver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <Hero></Hero>
      <TitleText>BÄSTSÄLJARE</TitleText>
      <GridWrapper>
        {products.map((product) => (
          <Card product={product} key={product.sys.id} />
        ))}
      </GridWrapper>
      <Circles></Circles>
      <InstagramSection images={images} />
      <Footer></Footer>
    </div>
  );
}
