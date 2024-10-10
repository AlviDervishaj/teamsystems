import dayjs from "dayjs";

export const events = [
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
    completed: false,
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
    completed: false,
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
    completed: false,
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
    completed: false,
  },
];

