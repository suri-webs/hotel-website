"use client";
import { Rooms } from "@/lib/RoomsPage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RoomsContainer() {
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(Rooms.length);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
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

  return (
    <section className=" w-full flex mb-20 flex-col justify-center p-5 gap-14 items-center">
      {/* Header */}
      <div className="w-full flex justify-center items-center flex-col gap-5 h-[200px] max-sm:h-full">
        <h1 className="text-4xl max-sm:text-2xl font-playfair-display text-amber-600">Rest Recharge Repeat</h1>
        <p className="text-xl w-[70%] max-sm:w-full max-sm:text-lg text-center text-gray-600">
          Our rooms are built for those who appreciate simplicity and comfort. Affordable yet cozy, making your stay in RISHIKESH both pleasant and budget-friendly that let you spend less on stay and more on experiencing the magic of RISHIKESH.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="w-full flex justify-center items-center">
        <div
          className="grid w-[85%] max-sm:w-full gap-12 justify-center items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {Rooms.slice(0, visibleCards).map((item, id) => (
            <div
              key={id}
              className="flex flex-col overflow-hidden h-[450px] w-full max-w-[380px] shadow-md rounded-[8px] gap-3 relative"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  className="!h-[220px] !w-full object-cover hover:scale-110 transition-all duration-400"
                  alt=""
                  width={1000}
                  height={120}
                />
              </div>
              <p className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full font-semibold text-black">
                ₹{item.price}
              </p>
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
                  <button className="mt-[20px] border-2 text-xl border-red-600 text-black px-7 py-2 max-2xl:text-sm max-lg:px-6 rounded-[8px]">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More / Show Less Button - only on small screens */}
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
