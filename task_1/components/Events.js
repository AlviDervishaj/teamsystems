let events = [
  {
    id: 0,
    title: "30min call meeting Prime & Lessie",
    date: dayjs().add(12, "day"),
    startHour: "9:00",
    // duration in seconds.
    // 2400 / 60 = 40 minutes
    duration: 2400,
    description: "Zoom call with colleague",
    location: "Bllok, Tirane",
  },
  {
    id: 1,
    title: "Pair Programming with Josh.",
    date: dayjs().add(8, "day"),
    startHour: "12:00",
    // duration in seconds.
    duration: 3600,
    description: "Pair Programming",
    location: "Online",
  },
  {
    id: 2,
    title: "Fix Laptop. Reformat",
    startHour: "11:00",
    date: dayjs().add(4, "day"),
    // duration in seconds.
    duration: 1800,
    description: "Fix Arch Linux configuration",
    location: "Kashar",
  },
  {
    id: 3,
    title: "Review Serena's Pull Request.",
    startHour: "15:00",
    date: dayjs().add(7, "day"),
    // duration in seconds.
    duration: 600,
    description: "Zoom call with colleague",
    location: "Online",
  },
];


if (localStorage.getItem("events")) {
  events = [...JSON.parse(localStorage.getItem("events"))]
}

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

function deleteEvent(id) {
  const element = document.querySelector(`[data-eventId='${id}']`);
  const parent_elem = document.querySelector(".events");
  if (!element) return;
  if (!parent_elem) return;
  parent_elem.removeChild(element);
  showNotification("Removed Event Successfully !")
}

function filterByDate() {
  const results = events.toSorted((event, predicate) => (dayjs(event.date).isAfter(dayjs(predicate.date)) ? 1 : -1));
  localStorage.setItem("events", JSON.stringify(results));
  location.reload();
}

function filterByDefault() {
  const results = [
    {
      id: 0,
      title: "30min call meeting Prime & Lessie",
      date: dayjs().add(12, "day"),
      startHour: "9:00",
      // duration in seconds.
      // 2400 / 60 = 40 minutes
      duration: 2400,
      description: "Zoom call with colleague",
      location: "Bllok, Tirane",
    },
    {
      id: 1,
      title: "Pair Programming with Josh.",
      date: dayjs().add(8, "day"),
      startHour: "12:00",
      // duration in seconds.
      duration: 3600,
      description: "Pair Programming",
      location: "Online",
    },
    {
      id: 2,
      title: "Fix Laptop. Reformat",
      startHour: "11:00",
      date: dayjs().add(4, "day"),
      // duration in seconds.
      duration: 1800,
      description: "Fix Arch Linux configuration",
      location: "Kashar",
    },
    {
      id: 3,
      title: "Review Serena's Pull Request.",
      startHour: "15:00",
      date: dayjs().add(7, "day"),
      // duration in seconds.
      duration: 600,
      description: "Zoom call with colleague",
      location: "Online",
    },
  ];
  localStorage.removeItem("events");
  localStorage.setItem("events", JSON.stringify(results));
  location.reload();

}

let isFiltersOpened = false;
function handleFiltersToggle() {
  isFiltersOpened = !isFiltersOpened;
  const dropdown = document.querySelector("#filters_dropdown_toggle");
  if (!dropdown) return;
  if (!isFiltersOpened) {
    dropdown.style.display = "none";
    return;
  }
  dropdown.style.display = "flex";
  return;
}


class Events extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let elements = events.map((event) => `<section class="event" data-eventId="${event.id}">
    <div class="event_date_and_day">
      <h1 class="day">${mapIndexToWeekday(dayjs(event.date).day())}</h1>
      <p class="date">${dayjs(event.date).format("DD")}</p>
    </div>
    <section class="event_place_time">
      <div class="event_start">
        <img src="./images/clock.png" width="16" height="16" alt="Clock" />
        <p>${event.startHour}</p>
      </div>
      <div class="event_place">
        <img src="./images/location.png" width="20" height="20" alt="Location" />
        <p>${event.location}</p>
      </div>
    </section>
    <p class="event_title">
      ${event.title}
    </p>
    <button class="delete_button" onClick={deleteEvent(${event.id})}>
      <img src="./images/delete.png" width="20" height="20" alt="Delete" />
    </button>
</section>`
    );
    this.innerHTML = `<div class="events">
    <div class="filters">
      <button onClick={handleFiltersToggle()} class="filter_button ease-in-out">
        <p>
          Filter by
        </p>
        <img class="filter_icon" src="./images/filter.svg" alt="Filter Icon" />
      </button>
      <ul id="filters_dropdown_toggle" style="width: 7rem" class="filters_dropdown">
        <li>
          <button onClick={filterByDefault()} class="filter_item" value="date">
            Default
          </button>
        </li>
        <li>
          <button onClick={filterByDate()} class="filter_item" value="date">
            Date
          </button>
        </li>
      </ul>
    </div>
      ${elements.join(" ")}
    </div> `;
  }
}

customElements.define('events-component', Events);

