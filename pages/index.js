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


export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,caption,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const instagramData = await fetch(url);
  const feed = await instagramData.json();
  const images = feed.data;

  console.log(images[0].permalink);

  return {
    props: {
      images,
    },
  };
};

export default function Home({ images }) {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
       <Hero></Hero>
      {/* <Card></Card> */}
      <MobileNavbar></MobileNavbar>
      {/* <ProductMenu></ProductMenu> */}
      <InstagramSection images={images} />
      <Footer></Footer>

    </div>
  );
}
