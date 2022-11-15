import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavBar";
import Footer from "../components/Footer/Footer";
import FaqSection from "../components/FaqSection/FaqSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ - OOPS Silver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </div>
  );
}
