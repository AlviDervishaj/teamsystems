import styles from "./index.module.css";

export const Footer = () => {
  const currentYear = new Date().getUTCFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Alvi Dervishaj. All rights reserved.</p>
    </footer>
  )
}

