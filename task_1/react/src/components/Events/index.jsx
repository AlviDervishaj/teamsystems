import { events as _events } from "../../utils/events";
import dayjs from "dayjs";
import Notify from 'simple-notify';
import styles from "./index.module.css";
import { useState } from "react";
import { Filters } from "../Filters";
export const Events = () => {
  const [events, setEvents] = useState(_events);


  function mapIndexToWeekday(index) {
    switch (index) {
      case 0:
        return "Mon";
      case 1:
        return "Tue";
      case 2:
        return "Wed";
      case 3:
        return "Thu";
      case 4:
        return "Fri";
      case 5:
        return "Sat";
      case 6:
        return "Sun";
      default:
        return "Mon";
    }
  }

  function showNotification(message) {
    new Notify({
      status: 'success',
      title: 'Action Succes',
      text: message,
      effect: 'slide',
      speed: 300,
      customClass: '',
      customIcon: '',
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 3000,
      notificationsGap: null,
      notificationsPadding: null,
      type: 'outline',
      position: 'x-center bottom',
      customWrapper: '',
    })
  };

  function deleteEvent(event) {
    setEvents((prev) => prev.filter((e) => e.id !== event.id ? e : null).sort());
    showNotification("Event sucessfully deleted.");
    // save to localStorage
    localStorage.setItem("events", JSON.stringify(events));
  }

  function sortByDefault() {
    setEvents(_events);
  }

  function sortByDate() {
    const results = events.toSorted((event, predicate) => (dayjs(event.date).isAfter(dayjs(predicate.date)) ? 1 : -1));
    localStorage.setItem("events", JSON.stringify(results));
    showNotification("Sorted By Date.");
  }

  const filterItems = [
    { title: "Default", handleItemClick: sortByDefault },
    { title: "Date", handleItemClick: sortByDate },
  ];

  return (
    <div>
      <Filters items={filterItems}/>
      {
        events.map((event) => (
          <section className={styles.event} key={event.id}>
            <div className={styles.event_date_and_day}>
              <h1 className={styles.day}>{mapIndexToWeekday(dayjs(event.date).day())}</h1>
              <p className={styles.date}>{dayjs(event.date).format("DD")}</p>
            </div>
            <section className={styles.event_place_time}>
              <div className={styles.event_start}>
                <img src="/images/clock.png" width="16" height="16" alt="Clock" />
                <p>{event.startHour}</p>
              </div>
              <div className={styles.event_place}>
                <img src="/images/location.png" width="20" height="20" alt="Location" />
                <p>{event.location}</p>
              </div>
            </section>
            <p className={styles.event_title}>
              {event.title}
            </p>
            <button className={styles.delete_button} onClick={() => deleteEvent(event)}>
              <img src="/images/delete.png" width="20" height="20" alt="Delete" />
            </button>
          </section>
        ))
      }
    </div>
  );
}
