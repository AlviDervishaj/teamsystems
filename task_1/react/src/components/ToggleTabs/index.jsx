import styles from "./index.module.css";
export const ToggleTabs = ({ activeTab, setActiveTab }) => {
  return (
    <section className={styles.button_group}>
      <button className={`${styles.button} ${activeTab === "main" ? styles.active : ""}`} onClick={() => setActiveTab("main")}>Main</button>
      <button className={`${styles.button} ${activeTab === "events" ? styles.active : ""}`} onClick={() => setActiveTab("events")}>Events</button>
    </section>
  )
}
