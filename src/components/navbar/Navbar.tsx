"use client";
import { useEffect, useState } from "react";
import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { mobliedata, mobliedata1, navbarData } from "@/lib/navbar";

export function Navbar() {
  const [click, setclick] = useState(false);
  const [click1, setclick1] = useState(false);
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 1300;
    document.body.style.overflow = (click && isSmallScreen) || click1 ? "hidden" : "auto";
  }, [click, click1]);

  const updateRoom = (index: number, type: "adults" | "children", delta: number) => {
    setRooms(prev =>
      prev.map((room, i) =>
        i === index
          ? { ...room, [type]: Math.max(type === "adults" ? 1 : 0, room[type] + delta) }
          : room
      )
    );
  };

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  const removeRoom = (index: number) => {
    setRooms(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <nav className="absolute top-0 left-0 w-full h-[100px] px-4 max-sm:px-2 max-md:px-8 py-3 flex items-center justify-between bg-transparent max-sm:h-20 z-[60]">
      <Link href={"/"}>
        <Image className="h-32 max-sm:h-26 w-auto max-sm:relative -left-2" src="/images/navbar-logo.png" alt="Logo" width={200} height={120} />
      </Link>

      <ul className="gap-14 flex text-base text-[22px] font-serif text-white max-xl:hidden">
        {navbarData.map((item, index) => (
          <Link href={item.path} key={index} className="hover:text-[#F9A442] transition duration-200 cursor-pointer" >
            {item.name}
          </Link>
        ))}
      </ul>

      <div className="flex items-center max-sm:gap-3 gap-10">
        <button className="cursor-pointer font-serif px-5 py-2 rounded-[5px] text-white bg-[#ffa844f9]" onClick={() => setclick1(true)}>
          Book Now
        </button>

        <div className={`fixed inset-0 z-[99] flex justify-center items-center transition-all duration-700 ${click1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-[#00000050]" onClick={() => setclick1(false)}></div>
          <div className="relative w-full max-w-[600px] px-4 sm:px-6 py-10 bg-white border rounded-lg shadow-lg z-[100]">
            <X className="w-6 h-6 text-black absolute top-1 right-1 cursor-pointer" onClick={() => setclick1(false)} />
            <div className="flex w-full flex-col gap-4 text-black text-sm font-sans">
              <div className="flex gap-2 max-sm:flex-col w-full">
                <input type="date" className="border p-2 rounded w-full" />
                <input type="date" className="border p-2 rounded w-full" />
              </div>

              <div className="text-gray-700 font-medium text-[15px]">
                {rooms.reduce((a, r) => a + r.adults, 0)} Adult,{" "}
                {rooms.reduce((a, r) => a + r.children, 0)} Child - {rooms.length} Room
                {rooms.length > 1 ? "s" : ""}
              </div>
              {rooms.map((room, index) => (
                <div key={index} className="border rounded p-3 flex flex-col gap-3">
                  <p className="font-semibold">Room {index + 1}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateRoom(index, "adults", -1)} className="border px-2 py-1 rounded" > - </button>
                      <span>{room.adults} Adult</span>
                      <button onClick={() => updateRoom(index, "adults", 1)} className="border px-2 py-1 rounded" > + </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateRoom(index, "children", -1)} className="border px-2 py-1 rounded" > - </button>
                      <span>{room.children} Child</span>
                      <button onClick={() => updateRoom(index, "children", 1)} className="border px-2 py-1 rounded" > + </button>
                    </div>
                  </div>
                  {rooms.length > 1 && (
                    <button className="text-red-600 underline text-xs self-end" onClick={() => removeRoom(index)} >Remove Room </button>
                  )}
                </div>
              ))}

              <button className="text-[#a6792d] underline font-medium text-sm hover:text-[#855e1f] transition" onClick={addRoom}>
                ADD MORE ROOMS
              </button>

              <button className="mt-2 w-full bg-[#ffa844f9] text-white py-2 rounded text-lg hover:bg-[#f99d30]" onClick={() => {
                alert("Booking submitted!"); setclick1(false);
              }}>
                Book Now
              </button>
            </div>
          </div>
        </div>

        <AlignRight className="w-[38px] h-[38px] cursor-pointer text-white" onClick={() => setclick(true)} />

        <div className={`fixed top-0 right-0 py-10 h-screen flex flex-col justify-around items-center bg-[#121212] z-[99] transition-transform duration-700 transform ${click ? "translate-x-0" : "translate-x-full"} w-[25%] max-md:w-[70%] max-2xl:w-[30%] max-lg:w-[45%] max-sm:w-full overflow-y-auto`}>
          <X className="w-[40px] h-[38px] cursor-pointer text-white absolute right-8 top-8" onClick={() => setclick(false)} />
          <div className="w-full flex flex-col pl-10  max-sm:gap-4 gap-5">
            {mobliedata1.map((item, index) => (
              <Link className="text-white border-[#121212] hover:border-white border-b-2 w-[60%] hover:w-[90%] transition-all duration-300 text-lg hover:text-[#F9A442]" key={index} href={item.link} onClick={() => setclick(false)}>
                {item.name}
              </Link>
            ))}
          </div>

          <hr className="w-[90%]  h-[1px] border-white" />

          <div className="w-full flex flex-col px-10 gap-5">
            {mobliedata.map((item, index) => (
              <Link key={index} href={item.link} className="flex items-start gap-4 text-white">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <p className="text-sm text-[#F9A442] font-medium">{item.label}</p>
                  {item.info.includes("\n") ? (
                    item.info.split("\n").map((line, i) => (
                      <p key={i} className="text-white text-base">{line}</p>
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
    </nav >
  );
}
