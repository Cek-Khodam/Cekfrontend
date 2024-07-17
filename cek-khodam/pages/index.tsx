import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import KhodamCheckForm from "../components/Khodamcekform";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cek Khodam</title>
        <meta name="description" content="Cek Khodam Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Cek Khodam</h1>
        <KhodamCheckForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;
