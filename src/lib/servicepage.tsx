import {
    Snowflake,
    BedDouble,
    Wifi,
    Laptop,
    UtensilsCrossed,
    Droplet,
    Shirt,
    StretchHorizontal,
    Mountain,
} from "lucide-react";
export const services = [
    {
        icon: <Snowflake className="w-5 h-5 text-blue-500" />,
        title: "AC Rooms",
        description: "Comfortable air-conditioned rooms for a perfect stay in any weather.",
        image: "/images/room1.jpg",
        features: ["24/7 AC", "Room Service", "Attached Bathroom"],
    },
    {
        icon: <BedDouble className="w-5 h-5 text-purple-500" />,
        title: "Dormitory",
        description: "Budget-friendly shared accommodation for backpackers and solo travelers.",
        image: "/images/room2.jpg",
        features: ["Shared Kitchen", "Locker Facility", "Hot Showers"],
    },
    {
        icon: <Wifi className="w-5 h-5 text-green-500" />,
        title: "Free WiFi Access",
        description: "Stay connected with high-speed internet throughout your stay.",
        image: "/images/room3.webp",
        features: ["24/7 WiFi", "High Speed", "No Extra Charges"],
    },
    {
        icon: <Laptop className="w-5 h-5 text-yellow-500" />,
        title: "Work Desk",
        description: "Dedicated table and desk space perfect for laptop work and productivity.",
        image: "/images/room4.webp",
        features: ["Power Backup", "Silent Zone", "WiFi Enabled"],
    },
    {
        icon: <UtensilsCrossed className="w-5 h-5 text-orange-500" />,
        title: "In-house Kitchen",
        description: "Fresh, home-cooked vegetarian meals prepared with love and care.",
        image: "/images/room5.webp",
        features: ["10% off when pre-booked!"],
    },
    {
        icon: <Droplet className="w-5 h-5 text-blue-400" />,
        title: "Filtered Water",
        description: "Pure, filtered drinking water available free of cost throughout your stay.",
        image: "/images/room6.webp",
        features: ["24/7 Supply", "Purified RO", "No Extra Charges"],
    },
    {
        icon: <Shirt className="w-5 h-5 text-lime-600" />,
        title: "Laundry Service",
        description: "Convenient paid laundry service with timely pickup, hygienic wash, and neatly folded clothes.",
        image: "/images/HotelsImage2.jpg",
        features: ["Next-Day Delivery", "Paid Service", "Hygienic Wash"],
    },
    {
        icon: <StretchHorizontal className="w-5 h-5 text-pink-500" />,
        title: "Yoga & Wellness",
        description:
            "Nearby yoga and meditation centers. We assist with booking wellness classes and adventure trips.",
        image: "/images/HotelsImage4.avif",
        features: ["Meditation Support", "Group Yoga", "Adventure Trips"],
    },
    {
        icon: <Mountain className="w-5 h-5 text-red-500" />,
        title: "Adventure Trips",
        description:
            "Exciting river rafting and adventure activities with our assistance and guidance.",
        image: "/images/tracking.jpg",
        features: ["River Rafting", "Guided Tours", "Group Bookings"],
    },
];