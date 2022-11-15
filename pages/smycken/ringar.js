import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/MobileNavbar/MobileNavBar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import ProductMenu from "../../components/ProductMenu/ProductMenu";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "rings",
  });
  return {
    props: {
      products: res.items,
    },
  };
}

export default function Rings({ products }) {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <ProductMenu></ProductMenu>
      <ProductGrid>
        {" "}
        {products.map((product) => (
          <Card product={product} key={product.sys.id} />
        ))}
      </ProductGrid>
      <Footer></Footer>
    </div>
  );
}
