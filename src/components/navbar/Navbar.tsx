"use client";
import { useState } from "react";
import { AlignJustify, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  interface NavbarItem {
    name: string;
    path:string;
  }

  const navbarData: NavbarItem[] = [
    { name: "Home",path:"/" },
    { name: "About",path:"/about" },
    { name: "Rooms",path:"/rooms" },
    { name: "Gallery" ,path:"/gallery"},
    { name: "Contact Us",path:"/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full h-[100px] px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between bg-transparent max-sm:h-20 z-[60]">
      {/* Logo */}
      <Image
        className="h-32 max-sm:h-26 w-auto"
        src="/images/navbar-logo.png"
        alt="Logo"
        width={200} height={120}
      />

      <div className="flex items-center gap-10">
        {/* Desktop Nav */}
        <ul className="gap-6 flex text-base font-serif text-[22px] text-white max-xl:hidden">
          {navbarData.map((item, index) => (
            <Link href={item.path}
              key={index}
              className="hover:text-[#F9A442] transition duration-200 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Book Now Button */}
        <button className=" max-sm:hidden cursor-pointer max-lg:block px-[35px] py-[8px] text-[18px] max-lg:px-[28px] max-lg:py-[6px] rounded-[10px] text-white bg-[#ffa844f9]">
          Book Now
        </button>

        {/* Hamburger */}
        <AlignJustify
          className="block lg:hidden max-lg:flex h-10 w-8 cursor-pointer text-white z-[70]"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-full transform transition-transform duration-700 ease-in-out z-[50] ${
          isOpen ? "translate-x-0 overflow-hidden" : "translate-x-full"
        }`}
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/navbar.jpg)",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dim Layer */}
        <div className="absolute inset-0 w-full h-full bg-[#00000077]" />

        {/* Menu Content */}
        <div className="relative z-[60] w-full h-full flex flex-col items-center justify-center gap-8 text-white text-xl font-semibold">
          {navbarData.map((item, index) => (
            <Link href={item.path}
              key={index}
              className="hover:text-yellow-500 transition duration-200 cursor-pointer"
              onClick={()=>{
                setIsOpen(false)
              }}
            >
              {item.name}
            </Link>
          ))}

          <button className="mt-6 bg-[#f39c39fc] cursor-pointer hover:bg-gray-200 text-white hover:text-black text-lg px-6 py-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
