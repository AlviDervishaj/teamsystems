import { useState } from "react";
import styles from "./index.module.css";
export const Filters = ({ items }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.filters}>
      <button onClick={() => setIsShown(!isShown)} className={styles.filter_button}>
        <p>
          Filter by
        </p>
        <img className={styles.filter_icon} src="/images/filter.svg" alt="Filter Icon" />
      </button>
      {isShown ?
        <ul className={styles.filters_dropdown}>
          {items.map((item, index) => (
            <li key={`${item.title} ${index}`}>
              <button onClick={item.handleItemEvent} className={styles.filter_item}>
                {item.title}
              </button>
            </li>

          ))}
        </ul>
        : null
      }
    </div>
  )
}
