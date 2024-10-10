import { events as _events } from "../../utils/events";
import dayjs from "dayjs";
import Notify from 'simple-notify';
import { useEffect, useState } from "react";
import { Filters } from "../Filters";
import styles from "./index.module.css";
import 'simple-notify/dist/simple-notify.css'

export const Events = () => {
  const [events, setEvents] = useState(localStorage && localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : _events);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    function presistEventsState() {
      localStorage.setItem("events", JSON.stringify(events));
    }
    window.addEventListener("beforeunload", presistEventsState)
    return () => {
      window.removeEventListener("beforeunload", presistEventsState)
    }
  }, [events]);

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

  function markAsCompleted(event) {
    event.completed = true;
    const results = events.filter((predicate) => predicate.id === event.id ? event : predicate);
    setEvents(results);
    showNotification("Event sucessfully deleted.");

  }

  function deleteEvent(event) {
    const results = events.filter((predicate) => predicate.id !== event.id);
    setEvents(results);
    showNotification("Event sucessfully deleted.");
  }

  function sortByDefault() {
    setEvents(_events);
    showNotification("Sorted by default.");
  }

  function sortByDate() {
    const results = events.toSorted((event, predicate) => (dayjs(event.date).isAfter(dayjs(predicate.date)) ? 1 : -1));
    setEvents(results);
    showNotification("Sorted By Date.");
  }

  function sortByText(event) {
    const title = event.currentTarget.value;
    setSearchTitle(title);
    if (title.trim("") === "" || !title) {
      setEvents(_events);
      return;
    }
    const results = events.filter((predicate) => predicate.title === title || predicate.title.startsWith(title) || predicate.title.includes(title));
    setEvents(results);
    return;
  }

  const filterItems = [
    { title: "Default", handleItemEvent: () => sortByDefault() },
    { title: "Date", handleItemEvent: () => sortByDate() },
  ];

  return (
    <div className={styles.events}>
      <Filters items={filterItems} />
      <input type="text" alt="Search by title" placeholder="Search by title..." className={styles.input} value={searchTitle} onChange={sortByText} />
      {
        events.map((event) => (
          <div key={event.id}>
            {
              event.completed ? null :
                <section className={styles.event}>
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
                  <div className={styles.button_group}>
                    <button className={styles.delete_button} onClick={() => deleteEvent(event)}>
                      <img src="/images/delete.png" width="20" height="20" alt="Delete" />
                    </button>
                    <button className={styles.markAsCompleted} onClick={() => markAsCompleted(event)}>
                      <img src="/images/check.png" width="25" height="25" alt="Check" />
                    </button>
                  </div>
                </section>
            }
          </div>
        ))
      }
    </div>
  );
}
