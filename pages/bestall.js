import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar/MobileNavBar";
import Footer from "../components/Footer/Footer";
import OrderSection from "../components/OrderSection/OrderSection";
import FormSection from "../components/Form/Form";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <OrderSection></OrderSection>
      <FormSection></FormSection>
      <Footer></Footer>
    </div>
  );
}
