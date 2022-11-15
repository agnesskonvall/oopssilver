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

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,caption,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const instagramData = await fetch(url);
  const feed = await instagramData.json();
  const images = feed.data;

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries();

  return {
    props: {
      images,
      products: res.items,
    },
  };
};

export default function Home({ products, images }) {
  console.log(products);
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <Hero></Hero>
      <div>
        {products.map((product) => (
          <Card product={product} key={product.sys.id} />
        ))}
      </div>
      {/* <Circles></Circles> */}
      <InstagramSection images={images} />
      <Footer></Footer>
    </div>
  );
}
