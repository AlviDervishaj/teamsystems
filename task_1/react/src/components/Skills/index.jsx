import styles from "./index.module.css";

export const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.header_name}>Skills</h2>
      <ul className={styles.languages}>
        <li className={styles.react_lang}>
          <p>React</p>
          <div className={styles.progress_parent}>
            <div className={styles.progress} style={{width: "70%"}} />
          </div>
        </li>
        <li className={styles.nextjs_lang}>
          <p>NextJs</p>
          <div className={styles.progress_parent}>
            <div className={styles.progress} style={{width: "60%"}} />
          </div>
        </li>
        <li className={styles.typescript_lang}>
          <p>Typescript</p>
          <div className={styles.progress_parent}>
            <div className={styles.progress} style={{width: "60%"}} />
          </div>
        </li>
      </ul>
    </section>
  )
}
