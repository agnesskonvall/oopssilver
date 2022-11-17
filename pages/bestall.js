import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavBar";
import Footer from "../components/Footer/Footer";
import OrderSection from "../components/OrderSection/OrderSection";
import FormSection from "../components/Form/Form";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beställ - OOPS Silver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <OrderSection></OrderSection>
      <FormSection></FormSection>
      <Footer></Footer>
    </div>
  );
}
