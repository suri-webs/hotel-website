import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Footer {
  href?: string;
  icon?: LucideIcon;
  name?: string;
  color?: string;
}

interface IFooterData {
  name?: string;
  list: Footer[];
}

export default function Footer() {
  const footerData: IFooterData[] = [
    {
      name: "Quick Links",
      list: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Rooms", href: "/rooms" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      name: "More Info",
      list: [
        { name: "FAQ", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
    {
      name: "Contact Us",
      list: [
        { icon: MapPin, name: "Guest House - Tapovan, Rishikesh" },
        { icon: Mail, name: "information@crownhotel.com" },
        { icon: Phone, name: "8800724168" },
      ],
    },
  ];

  const icons = [
    { icon: Facebook, href: "#", color: "bg-red-400" },
    { icon: Instagram, href: "#", color: "bg-red-400" },
    { icon: Twitter, href: "#", color: "bg-red-400" },
    { icon: Youtube, href: "#", color: "bg-red-400" },
  ];

  const copyRight = [
    { name: "PRIVACY" },
    { name: "TERMS OF USE" },
    { name: "POLICY" },
  ];

  return (
    <footer className="w-full  flex flex-col items-center px-6 py-10 relative text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hotelfooter.jpg"
        className="absolute inset-0 object-cover object-center w-full h-full z-0"
        alt="Footer Background"
        width={120} height={120}
      />
      <div className=" bg-[#121212] absolute inset-0 w-full h-full z-0" />

      {/* Main Content */}
      <div className="w-full max-w-[1310px] mx-auto flex flex-col lg:flex-row flex-wrap gap-15 justify-between relative z-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-6 w-full lg:w-[40%]">
          <h2 className="text-[20px] sm:text-[22px] font-playfair-display font-semibold ">
            Jungle Retreat Tapovan
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#f2eeeeb8] leading-relaxed">
            Founded in 2025, Jungle Retreat Tapovan is nestled in the serene hills of Rishikesh, immersing you in the spiritual charm and natural beauty of the Himalayas under the clear blue sky. Welcome to Jungle Retreat Tapovan, Rishikesh.
          </p>
          <ul className="flex gap-3 mt-2">
            {icons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={idx}
                  className="hover:bg-white hover:text-black border border-white h-9 w-9 rounded-full flex items-center justify-center transition-colors"
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Links and Contact Info */}
        <div className="flex flex-wrap gap-10 w-full lg:w-[55%]">
          {footerData.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4 min-w-[150px]">
              <h2 className="text-[18px] sm:text-[20px] font-semibold">
                {section?.name}
              </h2>
              <ul className="flex flex-col gap-2 text-[#f2eeeeb8] text-[14px] sm:text-[16px]">
                {section.list.map((item, id) => {
                  if (item.href) {
                    return (
                      <li key={id}>
                        <Link href={item.href} className="hover:underline">
                          {item.name}
                        </Link>
                      </li>
                    );
                  }
                  const Icon = item.icon!;
                  return (
                    <li key={id} className="flex items-center gap-2">
                      <Icon size={16} /> {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="w-[90%] mt-10 border-white relative z-10" />

      {/* Bottom Bar */}
      <div className="w-[90%] mt-6 flex flex-row max-md:flex-col items-center max-md:gap-6 justify-between gap-4 text-sm text-white text-center max-md:text-center relative z-10">
        <p>
          Copyright© 2025 Jungle Retreat Tapovan. All Rights Reserved. Developed by
          SkillsYard
        </p>
        <ul className="flex gap-4 flex-wrap justify-center max-md:justify-center">
          {copyRight.map((data, idx) => (
            <li key={idx} className="hover:underline cursor-pointer">
              {data.name}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}