import { PhoneCall, Mail, Clock } from "lucide-react";

interface NavbarItem {
  name: string;
  path: string;
}
export const navbarData: NavbarItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rooms", path: "/rooms" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

export const mobliedata1 = [
  { name: "About Us", link: "/" },
  { name: "Menu", link: "/" },
  { name: "Rooms", link: "/" },
  { name: "Meals", link: "/" },
  { name: "Information & Policy", link: "/" },
  { name: "Explore Rishikesh", link: "/" },
  { name: "Join us", link: "/" },
  { name: "Feedback", link: "/" },
  { name: "Contact Us", link: "/" },
];

export const mobliedata = [
  {
    icon: <PhoneCall size={30} />,
    label: "CALL NOW",
    info: "+92 (8800) - 98670",
    link: "tel:+92880098670",
  },
  {
    icon: <Mail size={30} />,
    label: "SEND EMAIL",
    info: "help@company.com",
    link: "mailto:help@company.com",
  },
  {
    icon: <Clock size={30} />,
    label: "SEND EMAIL",
    info: "Mon - Sat 8:00 - 6:30,\nSunday - CLOSED",
    link: "#",
  },
];