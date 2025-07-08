'use client'

import { useEffect, useState } from "react";

export default function MorningBreakfast() {
  const items = [
    { name: "Aloo Parantha", emoji: "🥔" },
    { name: "Gobhi Parantha", emoji: "🥬" },
    { name: "Paneer Parantha", emoji: "🧀" },
    { name: "Poha", emoji: "🍛" },
    { name: "Upma", emoji: "🥣" },
    { name: "Idli Sambhar", emoji: "🍲" },
    { name: "Veg Sandwich", emoji: "🥪" },
    { name: "Butter Toast", emoji: "🍞" },
    { name: "Besan Chilla", emoji: "🫓" },
    { name: "Plain Pancake", emoji: "🥞" },
    { name: "Honey Pancake", emoji: "🍯" },
    { name: "Banana Pancake", emoji: "🍌" },
    { name: "Nutella Banana Pancake", emoji: "🍫" },
    { name: "Fruit Cut with Muesli", emoji: "🍓" },
    { name: "Fruit Salad", emoji: "🍇" },
    { name: "Cornflakes with Milk", emoji: "🥣" },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const canShowMore = visibleCount < items.length;

  const handleToggle = () => {
    setVisibleCount(prev => (canShowMore ? prev + 4 : 4));
  };

  return (
    <section className="w-full py-20 flex flex-col gap-14 justify-center items-center">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-white bg-[#FAA543] max-sm:text-lg px-5 rounded-full py-2">
          Morning Breakfast
        </span>
        <h1 className="text-[55px] max-sm:text-[27px] font-bold text-center tracking-wider font-playfair-display">
          Start Your Day Right
        </h1>
        <p className="text-2xl max-sm:text-xl text-[#000000cc]">
          Available 8:00 AM - 10:00 AM
        </p>
      </div>

      {/* Grid Container */}
      <div className="w-full flex justify-center items-center flex-col gap-10">
        <h2 className="text-3xl w-[40%] max-lg:w-[90%] max-sm:w-[90%] pb-2 border-[#FAA543] border-b-2 text-center">
          Traditional Indian
        </h2>

        <div className="bg-white rounded-3xl shadow-lg w-[90%] sm:w-[80%] lg:w-[90%] px-10 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-4">
            {(isMobile ? items.slice(0, visibleCount) : items).map((item, index) => (
              <div
                key={index}
                className="border border-amber-400 text-left text-lg sm:text-xl font-medium flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-[#FAA543] hover:text-white transition duration-300"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {isMobile && (
          <button
            onClick={handleToggle}
            className="bg-[#FAA543] text-white px-6 py-2 rounded-lg text-lg font-medium transition hover:bg-[#e9941e]"
          >
            {canShowMore ? "Show More" : "Show Less"}
          </button>
        )}
      </div>
    </section>
  );
}
