"use client";
import { roomOptions, Rooms } from "@/lib/RoomsPage";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function RoomsContainer() {
  const [click1, setclick1] = useState(false);
  const [visibleCards, setVisibleCards] = useState(Rooms.length);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [click, setclick] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setVisibleCards(4);
    } else {
      setVisibleCards(Rooms.length);
    }
  }, [isSmallScreen]);

  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  useEffect(() => {
    const handleResizeOrClick = () => {
      const isSmall = window.innerWidth <= 1300;
      document.body.style.overflow = (click && isSmall) || click1 ? "hidden" : "auto";
    };

    handleResizeOrClick(); 
    window.addEventListener("resize", handleResizeOrClick);

    return () => window.removeEventListener("resize", handleResizeOrClick);
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
    <section className=" w-full flex mb-20 flex-col justify-center p-5 gap-14 items-center">
      <div className="w-full flex justify-center items-center flex-col gap-5 h-[200px] max-sm:h-full">
        <h1 className="text-4xl max-sm:text-2xl font-playfair-display text-amber-600">Rest Recharge Repeat</h1>
        <p className="text-xl w-[70%] max-sm:w-full max-sm:text-lg text-center text-gray-600">
          Our rooms are built for those who appreciate simplicity and comfort. Affordable yet cozy, making your stay in RISHIKESH both pleasant and budget-friendly that let you spend less on stay and more on experiencing the magic of RISHIKESH.
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="grid w-[85%] max-sm:w-full gap-12 justify-center items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", }} >
          {Rooms.slice(0, visibleCards).map((item, id) => (
            <div key={id} className="flex flex-col overflow-hidden border border-[#0000004a] h-[450px] w-full max-w-[380px] shadow-md rounded-[8px] gap-3 relative" >
              <div className="overflow-hidden">
                <Image src={item.img} className="!h-[220px] !w-full object-cover hover:scale-110 transition-all duration-400" alt="" width={1000} height={120} />
              </div>
              <div className="p-4">
                <h2 className="text-2xl mb-2">
                  <span className="font-playfair-display">Room No </span>
                  {item.heading}
                </h2>
                <p className="text-gray-600 text-sm">{item.about}</p>
                <div className="flex justify-between">
                  <button className="mt-[20px] hover:underline bg-[#ffa844f9] text-xl max-2xl:text-sm max-lg:px-6 text-white px-7 py-2 rounded-[8px]">
                    {item.view}
                  </button>
                  <button className="mt-[20px] border-2 text-xl border-[#ffa844f9] text-black px-7 py-2 max-2xl:text-sm max-lg:px-6 rounded-[8px]"  onClick={() => setclick1(true)}>
                    Book Now
                  </button>

                  <div className={`fixed inset-0 z-[99] flex justify-center items-center transition-all duration-700 ${click1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className="absolute inset-0 bg-[#00000021]" onClick={() => setclick1(false)}></div>
                    <div className="relative w-full max-w-[600px] px-4 sm:px-6 py-10 bg-white border rounded-lg shadow-lg z-[100]">
                      <X className="w-6 h-6 text-black absolute top-1 right-1 cursor-pointer" onClick={() => setclick1(false)} />
                      <div className="flex w-full flex-col gap-4 text-black text-sm font-sans">
                        <select name="" className="w-full rounded-[4px] h-[40px] border" id="">
                          {roomOptions.map((room, index) => (
                            <option key={index} value={room.toLowerCase().replace(/[^a-z0-9]/g, "-")}>
                              {room}
                            </option>
                          ))}
                        </select>

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isSmallScreen && (
        <div className="mt-5 flex gap-4">
          {visibleCards < Rooms.length && (
            <button
              onClick={() => {
                const next = visibleCards + 2;
                setVisibleCards(next > Rooms.length ? Rooms.length : next);
              }}
              className="px-6 py-2 bg-[#FFAA48] text-white rounded-md hover:bg-[#ff8848]"
            >
              Show More
            </button>
          )}
          {visibleCards > 4 && (
            <button
              onClick={() => setVisibleCards(4)}
              className="px-6 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
            >
              Show Less
            </button>
          )}
        </div>
      )}

    </section>
  );
}
