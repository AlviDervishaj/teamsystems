import { forwardRef, useState } from "react";
import styles from "./index.module.css";
import { Project } from "../Project";
import { projects as _projects } from "../../utils/projects";
import { Filters } from "../Filters";

export const Projects = forwardRef(function Projects({ updateDialogProps }, ref) {
  const [projects, setProjects] = useState(_projects);

  function searchWebProjects() {
    const results = _projects.filter((predicate) => predicate.categories.includes("web_dev"));
    console.log({ results });
    setProjects(results);
  }
  function searchTerminalProjects() {
    const results = _projects.filter((predicate) => predicate.categories.includes("terminal"));
    console.log({ results });
    setProjects(results);
  }

  function searchByDefualt() {
    setProjects(_projects);
  }

  const items = [
    { title: "Default", handleItemEvent: searchByDefualt },
    { title: "Web Development", handleItemEvent: searchWebProjects },
    { title: "Terminal", handleItemEvent: searchTerminalProjects },
  ];

  return (
    <>
      <h2 className={styles.header_name}>Projects</h2>
      <Filters items={items} />
      <div className={styles.projects} id="parent_projects">
        {projects.map((project) => (
          <Project project={project} ref={ref} updateDialogProps={updateDialogProps} key={project.id} />
        ))}
      </div>
    </>
  )
});
