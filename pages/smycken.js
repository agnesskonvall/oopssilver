import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavBar";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/AboutSection/AboutSection";
import ProductMenu from "../components/ProductMenu/ProductMenu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <ProductMenu></ProductMenu>
      <Footer></Footer>
    </div>
  );
}
