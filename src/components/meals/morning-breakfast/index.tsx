'use client'
import { UtensilsCrossed } from "lucide-react";
import { useState } from "react";

export default function MorningBreakfast() {
  const items = [
    "Aloo Parantha",
    "Gobhi Parantha",
    "Paneer Parantha",
    "Poha",
    "Upma",
    "Idli Sambhar",
    "Veg Sandwich",
    "Butter Toast",
    "Besan Chilla",
    "Plain Pancake",
    "Honey Pancake",
    "Banana Pancake",
    "Nutella Banana Pancake",
    "Fruit Cut with Muesli",
    "Fruit Salad",
    "Cornflakes with Milk",
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const canShowMore = visibleCount < items.length;

  const handleToggle = () => {
    if (canShowMore) {
      setVisibleCount(prev => Math.min(prev + 4, items.length));
    } else {
      setVisibleCount(4);
    }
  };

  return (
    <section className="w-full py-20  flex flex-col gap-14 justify-center items-center ">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-white bg-[#FAA543] max-sm:text-lg px-5 rounded-full py-2 flex justify-center items-center w-fit">
          Morning Breakfast
        </span>
        <h1 className="text-[55px] max-sm:w-[100%] max-sm:text-[27px] leading-[1.1] max-sm:text-center font-bold tracking-wider font-playfair-display">
          Start Your Day Right
        </h1>
        <p className="text-2xl max-sm:text-xl text-[#000000cc]">
          Available 8:00 AM - 10:00 AM
        </p>
      </div>

      {/* Menu */}
      <div className="w-full flex justify-center items-center flex-col gap-10">
        <h2 className="text-3xl w-[20%] max-lg:w-[50%] max-sm:w-[90%] pb-2 border-[#FAA543] border-b-2 text-center">
          Traditional Indian
        </h2>
        <div className="bg-white rounded-3xl shadow-lg w-[90%] flex justify-center items-center py-8">
          <div className="w-[90%] max-sm:w-[100%]  p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items
              .slice(0, isMobile ? visibleCount : items.length)
              .map((item, index) => (
                <div
                  key={index}
                  className="border border-amber-400 text-left text-lg sm:text-xl font-medium flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-[#FAA543] hover:text-white transition duration-300"
                >
                  <UtensilsCrossed className="w-5 h-5 text-[#FAA543]" />
                  {item}
                </div>
              ))}
          </div>
        </div>

        {isMobile && (
          <button
            onClick={handleToggle}
            className="bg-[#FAA543] text-white px-6 py-2 rounded-[8px] text-lg font-medium transition hover:bg-[#e9941e]"
          >
            {canShowMore ? "Show More" : "Show Less"}
          </button>
        )}
      </div>
    </section>
  );
}
