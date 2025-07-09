import { PhoneCall, Mail, Clock } from "lucide-react";

interface NavbarItem {
  name: string;
  path: string;
}
export const navbarData: NavbarItem[] = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Meals", path: "/meals" },
  { name: "Gallery", path: "/gallery" },
  { name: "Service", path: "/service" },
  { name: "Contact Us", path: "/contact" },

];

export const mobliedata1 = [
  { name: "About Us", link: "/about" },
  { name: "Meals", link: "/meals" },
  { name: "Rooms", link: "/rooms" },
  { name: "Explore Rishikesh", link: "/gallery" },
  { name: "Feedback", link: "/feedback" },
  { name: "Information & Policy", link: "/privacy" },
  { name: "Contact Us", link: "/contact" },
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
    info: "Mon - Sat 8:00 - 6:30, Sunday - CLOSED",
    link: "#",
  },
];


import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const socialLinks = [
  { icon: <Instagram className="text-white" />, color: "#F02592" },
  { icon: <Facebook className="text-white" />, color: "#1877F2" },
  { icon: <Twitter className="text-white" />, color: "#1DA1F2" },
  { icon: <Youtube className="text-white" />, color: "#FF0000" },
];
