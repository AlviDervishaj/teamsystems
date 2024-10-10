import { useRef, useState, useEffect } from "react";
import { Navigation } from './components/Navigation/';
import { Header } from './components/Header/';
import { Dialog } from './components/Dialog/';
import { Projects } from "./components/Projects/";
import { Footer } from "./components/Footer/";
import { Skills } from "./components/Skills/";
import { Contact } from "./components/Contact/";
import { ToggleTabs } from "./components/ToggleTabs/";
import { Events } from "./components/Events";
import './preflight.css';
import styles from "./App.module.css";

function App() {
  const dialogRef = useRef(null);
  const [dialogData, setDialogData] = useState(null);
  // main or events
  const [activeTab, setActiveTab] = useState(localStorage && localStorage.getItem("active_tab") ? localStorage.getItem("active_tab") : "main");

  // When user reloads page it will presist the state of the last visited tab.
  useEffect(() => {
    function presistTabsState() {
      localStorage.setItem("active_tab", activeTab);
    }
    window.addEventListener("beforeunload", presistTabsState)
    return () => {
      window.removeEventListener("beforeunload", presistTabsState)
    }
  }, [activeTab])
  return (
    <>
      <Navigation />
      <ToggleTabs setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "main" ? (
        <>
          <main className={styles.main_content}>
            <Header />
          </main>
          <Dialog project={dialogData} ref={dialogRef} />
          <section className={styles.projects_section} id="projects">
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
