import { useState } from "react";
import styles from "./index.module.css";

export const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleNavigationToggle = () => setIsOpened(prev => !prev);
  return (
    <>
      <nav className={styles.navigation}>
        <a href="#">
          <img loading="lazy" width="20" height="20" src="/images/alvi-logo/svg/logo-no-background.svg" className={styles.navigation_image} alt="Alvi's Logo" />
        </a>
        <button className={styles.navigation_toggle} onClick={() => handleNavigationToggle()}>
          <img id="menu_toggle" src="/images/menu.png" alt="Burger Menu" />
          <img style={{display: "none"}} id="close_menu" src="/images/close.png" alt="Close Modal" width="25" height="25" />
        </button>
        <ul className={styles.navigation_links}>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="/">Home</a>
          </li>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#about">About</a>
          </li>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#skills">Skills</a>
          </li>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {isOpened ? (
      <div id="openMe" className="ease-in-out">
        <ul>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#">Home</a>
          </li>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#about">About</a>
          </li>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#skills">Skills</a>
          </li>
          <li className={`${styles.navigation_link} ease-in-out`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      ) : null }
    </>
  )
}

