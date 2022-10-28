import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavBar";
import Footer from "../components/Footer/Footer";
import InstagramSection from "../components/InstagramSection/InstagramSection";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
       <Hero></Hero>
      {/* <Card></Card> */}
      <MobileNavbar></MobileNavbar>
      <InstagramSection></InstagramSection>
      <Footer></Footer>

    </div>
  );
}
