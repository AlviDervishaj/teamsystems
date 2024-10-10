import { useRef, useState } from "react";
import { Navigation } from './components/Navigation/';
import { Header } from './components/Header/';
import { Dialog } from './components/Dialog/';
import { Projects } from "./components/Projects/";
import { Footer } from "./components/Footer/";
import { Skills } from "./components/Skills/";
import { Contact } from "./components/Contact/";
import { ToggleTabs } from "./components/ToggleTabs/";
import './preflight.css';
import styles from "./App.module.css";
import { Events } from "./components/Events";

function App() {
  const dialogRef = useRef(null);
  const [dialogData, setDialogData] = useState(null);
  // main or events
  const [activeTab, setActiveTab] = useState("main");
  return (
    <>
      <Navigation />
      <ToggleTabs  setActiveTab={setActiveTab} activeTab={activeTab}/>
      {activeTab === "main" ? (
        <>
          <main className={styles.main_content}>
            <Header />
          </main>
          <Dialog project={dialogData} ref={dialogRef} />
          <section className={styles.projects_section} id="projects">
            <h2 className={styles.header_name}>Projects</h2>
            <Projects ref={dialogRef} updateDialogProps={setDialogData} />
          </section>
          <Skills />
          <Contact />
        </>
      ) : (
        <Events />
      )}
      <Footer />
    </>
  )
}

export default App
