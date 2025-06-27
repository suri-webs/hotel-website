"use client"
import { useState, useEffect } from "react";
import { ActivitiesData } from "@/lib/Activities";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";
import Image from "next/image";

export default function Activities() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Checking if screen is mobile size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const visibleActivities = isMobile && !showAll ? ActivitiesData.slice(0, 3) : ActivitiesData;

  return (
    <section className="min-h-screen w-full py-[40px] flex flex-col gap-[40px] justify-center items-center ">
      <div className="text-center space-y-4">
        <Heading text={"OUTDOOR ACTIVITIES"} />
        <SubHeading text={"Make Memories Together in Rishikesh"} />
      </div>

      <div className="w-[95%] h-[90%] flex flex-col justify-center items-center">
        <div className="flex flex-wrap gap-[30px] justify-center items-center h-[90%] w-[90%] py-[25px]">
          {visibleActivities.map((outdoor, idx) => {
            return (
              <div
                key={idx}
                className="h-[300px] w-[300px] flex flex-col flex-wrap justify-center items-center group overflow-hidden relative rounded-[12px] "
              >
                <Image src={outdoor.img} className="h-full w-full object-cover" alt={outdoor.heading}   width={2020} height={120} />

                <div className="absolute p-4 cursor-pointer text-center text-white h-fit bg-black/70 w-full transform -bottom-16 group-hover:bottom-0 transition-all duration-500 py-[20px]">
                  <h2 className="text-lg font-semibold mb-2 h-[10px] w-full flex items-center justify-center text-center">
                    {outdoor.heading}
                  </h2>
                  <p className="text-sm pt-[3px] h-[50px]">{outdoor.about}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* show more & show less btn */}
        {isMobile && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 px-6 py-2 bg-[#f39c39fc] text-white rounded-full text-sm"
            aria-expanded={showAll}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
}
