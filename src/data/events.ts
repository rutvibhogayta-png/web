// TODO: replace with real data — titles, dates, descriptions, details and
// highlights are placeholders. To use real photos in an event popup, add
// `photos: ["/images/events/e1-1.jpg", ...]` to that event.
import type { ClubEvent } from "@/types";

export const events: ClubEvent[] = [
  {
    id: "e1",
    title: "Hacktober Fest",
    date: "10 October 2026",
    year: "2026",
    category: "Workshops",
    description: "To conduct Hacktober Fest",
    status: "upcoming",
    details: "To conduct Hacktober Fest",
    eventDate: "2026-10-10",
  },
  {
    id: "e2",
    title: "Pull to Commit",
    date: "24 September 2026",
    year: "2026",
    category: "Workshops",
    description: "Block Chain workshop",
    status: "upcoming",
    details: "Block Chain workshop",
    eventDate: "2026-09-24",
  },
  {
    id: "e3",
    title: "Web Development Bootcamp",
    date: "10 December 2023",
    year: "2023",
    category: "Seminars",
    description: "Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and React.",
    status: "past",
    details: "Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and React.",
    eventDate: "2023-12-10",
  },
  {
    id: "e4",
    title: "Winter Code Hackathon",
    date: "1 December 2023",
    year: "2023",
    category: "Competitions",
    description: "24-hour coding marathon with innovative campus solutions.",
    status: "past",
    details: "24-hour coding marathon with innovative campus solutions.",
    eventDate: "2023-12-01",
  },
];
