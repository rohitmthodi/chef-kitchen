import { FaHome, FaUtensils, FaHeart, FaBell } from "react-icons/fa";
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.jpg"

// SIDEBAR-TABS
export const sidebarItems = [
  {
    icon: FaHome,
    path: "/",
  },
  {
    icon: FaUtensils,
    path: "/home/menu-cards",
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

// NAVBAR-CATEGORIES
export const navbarCategories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Today Special",
    value: "today-special",
  },
  {
    label: "Our Specials",
    value: "our-specials",
  },
];

// DUMMY-FOOD-ITEMS
export const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    image: food1,
    sizes: ["S", "M", "L"],
    stock: 12,
  },
  {
    id: 2,
    name: "Chicken Burger",
    category: "Burger",
    image: food2,
    sizes: ["S", "M", "L"],
    stock: 5,
  },
  {
    id: 3,
    name: "Cold Coffee",
    category: "Beverage",
    image: food3,
    sizes: ["S", "M", "L"],
    stock: 20,
  },
  {
    id: 4,
    name: "Veg Sandwich",
    category: "Snack",
    image: food1,
    sizes: ["S", "M", "L"],
    stock: 8,
  },
  {
    id: 5,
    name: "French Fries",
    category: "Snack",
    image: food3,
    sizes: ["S", "M", "L"],
    stock: 15,
  },
  {
    id: 6,
    name: "Pasta Alfredo",
    category: "Pasta",
    image: food2,
    sizes: ["S", "M", "L"],
    stock: 10,
  },
  {
    id: 7,
    name: "Fried Chicken",
    category: "Chicken",
    image: food3,
    sizes: ["S", "M", "L"],
    stock: 6,
  },
  {
    id: 8,
    name: "Chocolate Cake",
    category: "Dessert",
    image: food1,
    sizes: ["S", "M", "L"],
    stock: 9,
  },
  {
    id: 9,
    name: "Mojito",
    category: "Drink",
    image: food2,
    sizes: ["S", "M", "L"],
    stock: 18,
  },
  {
    id: 10,
    name: "Grilled Sandwich",
    category: "Snack",
    image: food3,
    sizes: ["S", "M", "L"],
    stock: 11,
  },
];