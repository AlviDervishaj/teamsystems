import { forwardRef } from "react";
import styles from "./index.module.css";
import { Project } from "../Project";

export const Dialog = forwardRef(function Dialog(props, dialogRef) {
  function closeModal() {
    dialogRef.current?.close();
    return;
  }
  return (
    <dialog ref={dialogRef}>
      <div className={styles.dialog}>
        <button onClick={closeModal} className={styles.close_dialog_button} id="close_dialog_button" autoFocus>
          <img src="/images/close.png" alt="Close Modal" width="20" height="20" />
        </button>
        <div id="dialog_content">
          {props.project ?
            <Project isFromModal project={props.project} />
            : null}
        </div>
      </div>
    </dialog>
  );
});
