import { ReactNode } from "react";
import styles from "src/app/styles/home.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <header>
        <h1>Cek Khodam</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Cek Khodam. All rights reserved.</p>
      </footer>
    </div>
  );
}
