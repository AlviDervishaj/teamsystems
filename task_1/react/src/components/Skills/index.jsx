import styles from "./index.module.css";

export const Skills = () => {
  const skills = [
    {
      title: "React",
      width: "70%",
    },
    {
      title: "NextJs",
      width: "60%",
    },
    {
      title: "Typescript",
      width: "60%",
    },
  ];
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.header_name}>Skills</h2>
      <ul className={styles.languages}>
        {skills.map((skill, index) => (
          <li className={styles.skill} key={`${skill.title} ${index}`}>
            <p className={styles.skillTitle}>{skill.title}</p>
            <div className={styles.progress_parent}>
              <div className={styles.progress} style={{ width: skill.width }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
