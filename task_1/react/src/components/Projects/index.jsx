import { forwardRef, useState } from "react";
import styles from "./index.module.css";
import { Project } from "../Project";
import { projects as _projects } from "../../utils/projects";
import { Filters } from "../Filters";

export const Projects = forwardRef(function Projects({ updateDialogProps }, ref) {
  const [projects, setProjects] = useState(_projects);

  function searchWebProjects() {
    setProjects((prev) => prev.filter((predicate) => predicate.categories.includes("web")));
  }
  function searchTerminalProjects() {
    setProjects((prev) => prev.filter((predicate) => predicate.categories.includes("terminal")));
  }

  const items = [
    { title: "Web Development", handleItemEvent: searchWebProjects },
    { title: "Terminal", handleItemEvent: searchTerminalProjects },
  ];

  return (
    <>
      <Filters items={items} />
      <div className={styles.projects} id="parent_projects">
        {projects.map((project) => (
          <Project project={project} ref={ref} updateDialogProps={updateDialogProps} key={project.id} />
        ))}
      </div>
    </>
  )
});
