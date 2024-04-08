import maldives from "./images/maldives.jpg";
import india from "./images/india.jpg";
import greece from "./images/greece.jpg";
import dubai from "./images/dubai.jpg";
export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#featured", text: "Featured" },
  { id: 3, href: "#about", text: "About" },
  { id: 4, href: "#services", text: "Services" },
  { id: 5, href: "#gallery", text: "Gallery" },
];

export const socialLinks = [
  { id: 1, href: "#", iconClassName: "fa-brands fa-twitter fa-fw" },
  { id: 2, href: "#", iconClassName: "fa-brands fa-facebook fa-fw" },
  { id: 3, href: "#", iconClassName: "fa-brands fa-instagram fa-fw" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    iconClassName: "fa-solid fa-wallet fa-fw",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    title: "Hiking",
    iconClassName: "fa-solid fa-person-hiking fa-fw",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    title: "Amazing Comfort",
    iconClassName: "fa-solid fa-socks fa-fw",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    title: "Maldives Adventure",
    location: "Maldives",
    date: "August 26th, 2020",
    days: "6",
    price: "$2100",
    image: maldives,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    title: "Incredible India",
    location: "India",
    date: "December 1st, 2022",
    days: "6",
    price: "$1500",
    image: india,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    title: "Explore Dubai",
    location: "Dubai",
    date: "October 20th, 2022",
    days: "6",
    price: "$2100",
    image: dubai,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 4,
    title: "Greece",
    location: "Greece",
    date: "September 20th, 2022",
    days: "6",
    price: "$8000",
    image: greece,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];
