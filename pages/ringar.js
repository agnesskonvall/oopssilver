import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavBar";
import Footer from "../components/Footer/Footer";
import InstagramSection from "../components/InstagramSection/InstagramSection";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import Circles from "../components/Circles/Circles";
import { createClient } from "contentful";
import { useState, useEffect } from "react";

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
      rings: res.items,
    },
  };
}

export default function Rings({ rings }) {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      {rings.map((ring) => (
        <Card key={ring.sys.id} ring={ring} />
      ))}
      <Footer></Footer>
    </div>
  );
}
