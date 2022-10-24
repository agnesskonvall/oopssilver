import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
    </div>
  );
}
