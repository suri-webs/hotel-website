"use client";
import { useState } from "react";
import { AlignRight, X, } from "lucide-react";
import Image from "next/image";
import { navbarData } from "@/lib/navbar";
import { link } from "fs";
import { PhoneCall, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [click, setclick] = useState(false)
  const mobliedata1 = [
    { name: "About Us", link: "/", },
    { name: "Menu", link: "/", },
    { name: "Explore Rishikesh ", link: "/", },
    { name: "Meals", link: "/", },
    { name: "Information & Policy ", link: "/", },
    { name: "Join us ", link: "/", },
    { name: "Feedback", link: "/", },
    { name: "Contact Us", link: "/", },
  ]

  const mobliedata = [
    {
      icon: <PhoneCall size={30} />,
      label: "CALL NOW",
      info: "+92 (8800) - 98670",
      link: "tel:+92880098670"
    },
    {
      icon: <Mail size={30} />,
      label: "SEND EMAIL",
      info: "help@company.com",
      link: "mailto:help@company.com"
    },
    {
      icon: <Clock size={30} />,
      label: "SEND EMAIL",
      info: "Mon - Sat 8:00 - 6:30,\nSunday - CLOSED",
      link: "#"
    }
  ];
  return (
    <nav className="absolute top-0 left-0 w-full h-[100px] px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between bg-transparent max-sm:h-20 z-[60]">
      <Image className="h-32 max-sm:h-26 w-auto" src="/images/navbar-logo.png" alt="Logo" width={200} height={120} />
      <ul className="gap-6 flex text-base text-[22px] font-serif text-white max-xl:hidden">
        {navbarData.map((item, index) => (
          <Link href={item.path} key={index} className="hover:text-[#F9A442] transition duration-200 cursor-pointer" >
            {item.name}
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-10">


        <button className="max-sm:hidden cursor-pointer font-serif max-lg:block px-[20px] py-[8px] text-[18px] max-lg:px-[28px] max-lg:py-[6px] rounded-[5px] text-white bg-[#ffa844f9]">
          Book Now
        </button>

        {/* second  */}
        <AlignRight className='w-[34px] h-[38px] cursor-pointer text-white' onClick={() => setclick(true)} />
        <div className={`w-[25%] max-md:w-[70%] gap-10 flex flex-col max-sm:w-[100%] top-0 bg-[#121212]  border-[1px] z-99 transition-all duration-[900ms] h-screen max-sm:h-[730px] absolute ${click ? "right-0" : "-right-[700px]"}`}>
          <div className="w-full h-[60%] flex flex-col p-10 py-18 gap-5">
            {
              mobliedata1.map((items, index) => {
                return (
                  <Link className="text-white text-lg" key={index} href={items.link}>{items.name}</Link>
                )
              })
            }

          </div>
          <div className="w-full h-[40%] flex flex-col px-10 py-5 gap-5">
            {mobliedata.map((item, index) => (
              <Link key={index} href={item.link} className="flex items-start gap-4 text-white">
                <div className="mt-1 text-white">{item.icon}</div>
                <div>
                  <p className="text-sm text-[#F9A442] font-medium">{item.label}</p>
                  {item.info.includes("\n") ? (
                    item.info.split("\n").map((line, i) => (
                      <p key={i} className="text-white text-base">
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-white text-base">{item.info}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>


          <X className='w-[40px] max-md:w-[30px] max-sm:right-4 h-[38px] cursor-pointer text-white absolute right-8 top-8'
            onClick={() => { setclick(false) }} />
        </div>
      </div>

    </nav >
  );
}
