'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MorningBreakfast() {
  const items = [
    {
      name: "Aloo Parantha",
      image: "/meals/aalo-Paratha.jpeg",
    },
    {
      name: "Gobhi Parantha",
      image: "/meals/Gobi-Paratha.jpg",
    },
    {
      name: "Paneer Parantha",
      image: "/meals/paneer-paratha.jpg",
    },
    {
      name: "Poha",
      image: "/meals/poha.webp",
    },
    {
      name: "Upma",
      image: "/meals/upma.jpeg",
    },
    {
      name: "Idli Sambhar",
      image: "/meals/idlisambar.jpeg",
    },
    {
      name: "Veg Sandwich",
      image: "/meals/veg-sandwich.jpeg",
    },
    {
      name: "Butter Toast",
      image: "/meals/buttor-tost.jpg",
    },
    {
      name: "Besan Chilla",
      image: "/meals/besan-chilla.jpg",
    },
    {
      name: "Plain Pancake",
      image: "/meals/plainpancake.jpg",
    },
    {
      name: "Honey Pancake",
      image: "/meals/honey-pancakes.webp",
    },
    {
      name: "Banana Pancake",
      image: "/meals/banana_pancakes.jpg",
    },
    {
      name: "Nutella Banana Pancake",
      image: "/meals/Nutella-Banana.jpeg",
    },
    {
      name: "Fruit Cut with Muesli",
      image: "/meals/fruitcut.jpeg",
    },
    {
      name: "Fruit Salad",
      image: "/meals/Fruit-Salad.jpeg",
    },
    {
      name: "Cornflakes with Milk",
      image: "/meals/Cornflakes.jpeg",
    },
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
        <h2 className="text-3xl w-[40%] max-lg:w-[90%] max-sm:w-[90%] pb-2  border-[#FAA543] border-b-2 text-center">
          Traditional Indian
        </h2>

        <div className="bg-white rounded-3xl shadow-lg w-[90%] sm:w-[80%] lg:w-[90%] max-sm:px-2 px-10 py-8">
          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-x-10 gap-y-6">
            {(isMobile ? items.slice(0, visibleCount) : items).map((item, index) => (
              <div
                key={index}
                className="text-left text-lg sm:text-xl border shadow-md font-medium flex items-center max-sm:px-2 gap-4 px-6 py-4 rounded-2xl border-[#a2a2a23f]  transition duration-500"
              >
                <div className="w-20 h-20 relative rounded-sm overflow-hidden shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span>{item.name}</span>
                </div>
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
