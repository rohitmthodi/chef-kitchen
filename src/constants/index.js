import { FaHome, FaUtensils, FaHeart, FaBell, FaClipboardList } from "react-icons/fa";
import { GiCookingPot, GiOlive  } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";

// SIDEBAR TABS
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
    path: "/admin",
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

// NAVBAR CATEGORIES
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

// DUMMY FOOD ITEMS
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

export const sidebarTabs = [
  {
    label: "DASHBOARD",
    path: "/admin/dashboard",
    icon: GiOlive, // 🍲 kitchen overview
  },
  {
    label: "CATEGORIES",
    path: "/admin/category",
    icon: GiCookingPot, // 🫒 food/ingredient grouping
  },
  {
    label: "MENU ITEMS",
    path: "/admin/menu",
    icon: MdFastfood,
  },
  {
    label: "ORDERS",
    path: "/admin/orders",
    icon: GiMeal,
  },
];

// DUMMY CATEGORY DATA
export const categoriesData = [
  {
    name: "Signature Pizzas",
    description: "Hand-tossed sourdough pizzas with organic toppings.",
  },
  {
    name: "Signature Pizzas",
    description: "Hand-tossed sourdough pizzas with organic toppings.",
  },
  {
    name: "Signature Pizzas",
    description: "Hand-tossed sourdough pizzas with organic toppings.",
  },
  {
    name: "Signature Pizzas",
    description: "Hand-tossed sourdough pizzas with organic toppings.",
  }
];

// DUMMY MENU DATA
export const menuData = [
  {
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    name: "Chicken Burger",
    category: "Gourmet Burgers",
    stock: 3,
    price: "₹199 / piece",
  },
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    name: "Red Wine",
    category: "House Wines",
    stock: 20,
    price: "₹499 / glass",
  },
];