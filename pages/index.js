import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Button from "../components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>Love Bank</Head>

      <main className={styles.main}>
        <img src="/logo.png" className={styles.img1} />

        <h3 className={styles.h3}>WELCOME TO</h3>

        <p className={styles.p}>Love Bank</p>

        <Button>
          {" "}
          <Link href="./auth">Get Started</Link>{" "}
        </Button>
      </main>

      <Footer />
    </div>
  );
}
