import styles from "./index.module.css";

export const Header = () => {
  return (
    <>
      <img loading="lazy" src="/images/coding-bg.jpg" alt="Coding Background" className={styles.coding_background} />
      <section className={styles.cta} id="about">
        <h1 className={styles.header_name}>Alvi Dervishaj</h1>
        <p className={styles.description}>Junior Front-end developer. Mainly focused on React, NextJs.</p>
        <div className={styles.button_group}>
          <a href="#projects" className={`${styles.view_work} ease-in-out`}>
            <p className={styles.button_text}>
              View my Work
            </p>
          </a>
          <a href="#" className={`${styles.reserve_meeting} ease-in-out`}>
            <p className={styles.button_text}>
              Reserve a meeting
            </p>
          </a>
        </div>
      </section>
    </>
  );
}

