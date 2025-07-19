'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Soups() {
  const items = [
    { name: "Carrot Ginger Soup", image: "/meals/Carrot-Ginger-Soup.jpeg" },
    { name: "Beetroot Soup", image: "/meals/Beetroot-Soup.jpeg" },
    { name: "Mushroom Soup", image: "/meals/Mushroom-Soup.jpeg" },
    { name: "Pumpkin Soup", image: "/meals/Pumpkin-Soup.jpeg" },
    { name: "Tomato Soup", image: "/meals/Tomato-Soup.jpeg" },
    { name: "Mixed Vegetable Soup", image: "/meals/Mixed-Vegetable-Soup.jpeg" },
    { name: "Sweet Corn Soup", image: "/meals/Sweet-Corn-Soup.jpeg" },
    { name: "Spinach Soup", image: "/meals/Spinach-Soup.jpeg" },
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
        <span className="text-white bg-[#FAA543] max-sm:text-lg text-xl px-10 rounded-full py-2 flex justify-center items-center w-fit">
          Soups
        </span>
        <h1 className="text-[55px] max-sm:text-[27px] leading-[1.1] max-sm:text-center font-bold tracking-wider font-playfair-display">
          Warm & Nourishing
        </h1>
        <p className="text-2xl max-sm:text-xl text-[#000000cc]">
          Served Fresh on Request
        </p>
      </div>

      {/* Menu */}
      <div className="w-full flex justify-center items-center flex-col gap-10">
        <div className="bg-white rounded-3xl shadow-lg w-[90%] sm:w-[80%] lg:w-[90%] max-sm:px-2 px-10 py-8">
          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-x-10 gap-y-4">
            {(isMobile ? items.slice(0, visibleCount) : items).map((item, index) => (
              <div
                key={index}
                className="border border-[#a2a2a23f] shadow-md text-left text-lg sm:text-xl font-medium flex items-center max-sm:px-2 gap-4 px-6 py-4 rounded-2xl transition duration-500"
              >
                <div className="w-20 h-20 relative rounded-sm overflow-hidden shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
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
