import { FaHome, FaUtensils, FaHeart, FaBell } from "react-icons/fa";

export const sidebarItems = [
  {
    icon: FaHome,
    path: "/home",
  },
  {
    icon: FaUtensils,
    path: "/menu",
  },
  {
    icon: FaHeart,
    path: "/wishlist",
  },
  {
    icon: FaBell,
    path: "/notifications",
  },
];

// DATE
export const formatFullDate = (date = new Date()) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};