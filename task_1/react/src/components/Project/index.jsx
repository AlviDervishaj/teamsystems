import { forwardRef } from "react";
import styles from "./index.module.css";

export const Project = forwardRef(function Project({ project, updateDialogProps, isFromModal }, ref) {
  function showModal() {
    if (!ref) return;
    ref.current?.showModal();
    updateDialogProps(project);
  }
  return (
    <section className={styles.project} key={project.id}>
      <img className={styles.project_image} src={project.imageUrl} loading="lazy" alt={`${project.title} image`} />
      <a className={styles.project_title} href={project.url ? project.url : project.repo}>{project.title}</a>
      <p className={styles.project_description}>{project.description}</p>
      <div className={styles.button_group}>
        {!isFromModal ?
          <button className={styles.project_detailed} onClick={showModal}>Detaje</button>
          : null}
        <a className={`${styles.project_repo} ease-in-out`} href={project.repo}>Shiko Repon</a>
      </div>
    </section>
  )
});
