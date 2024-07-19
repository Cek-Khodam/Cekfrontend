// src/app/page.tsx
import Head from "next/head";
import styles from "src/app/styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cek Khodam</title>
        <meta name="description" content="Aplikasi untuk cek khodam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Selamat Datang di Aplikasi Cek Khodam</h1>
        <p className={styles.description}>
          Masukkan data untuk memeriksa khodam Anda.
        </p>
      </main>
    </div>
  );
}
