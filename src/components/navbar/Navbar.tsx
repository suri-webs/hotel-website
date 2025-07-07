"use client";
import {useState } from "react";
import { AlignRight, X,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { mobliedata, mobliedata1, navbarData } from "@/lib/navbar";
export function Navbar() {
  const [click, setclick] = useState(false);


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
        <AlignRight className="w-[34px] h-[38px] cursor-pointer text-white" onClick={() => setclick(true)} />

        <div className={`fixed top-0 right-0 h-screen max-sm:h-[720px] bg-[#121212] z-[99] transition-transform duration-700 transform ${click ? "translate-x-0" : "translate-x-full"
          } w-[25%] max-md:w-[70%] max-sm:w-full overflow-y-auto`}
        >
          <X className="w-[40px] max-md:w-[30px] max-sm:right-4 h-[38px] cursor-pointer text-white absolute right-8 top-8"
            onClick={() => setclick(false)} />
          <div className="w-full flex flex-col pl-10 pt-10 gap-5">
            {mobliedata1.map((item, index) => (
              <Link className="text-white text-lg hover:text-[#F9A442] transition" key={index} href={item.link} onClick={() => setclick(false)} >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="w-full flex flex-col px-10 py-5 gap-5">
            {mobliedata.map((item, index) => (
              <Link key={index} href={item.link} className="flex items-start gap-4 text-white" >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <p className="text-sm text-[#F9A442] font-medium">
                    {item.label}
                  </p>
                  {item.info.includes("\n") ? (
                    item.info.split("\n").map((line, i) => (
                      <p key={i} className="text-white text-base"> {line}</p>
                    ))
                  ) : (
                    <p className="text-white text-base">{item.info}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
