import styles from "./index.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.header_name}>Contact</h2>
      <p className={styles.contact_description}>Let me know how I can help you.</p>
      <div className={styles.links}>
        <a href="mailto:alvidervishaj9@gmail.com" className={styles.contact_link}>
          <img src="./images/envelope.png" alt="email" className={styles.contact_link_image} />
          alvidervishaj9@gmail.com
        </a>
        <a href="https://github.com/AlviDervishaj" className={styles.contact_link}>
          <img src="./images/github.png" alt="Github" className={styles.contact_link_image} />
          AlviDervishaj
        </a>
        <a href="https://www.linkedin.com/in/alviii/" className={styles.contact_link}>
          <img src="./images/linkedin.png" alt="LinkedIn" className={styles.contact_link_image} />
          Alvi Dervishaj
        </a>
      </div>
    </section>
  );
}

