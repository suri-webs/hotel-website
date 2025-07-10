"use client";
import { serviceData } from "@/lib/Services";
import { useState, useEffect } from "react";
import Heading from "../Heading";
import SubHeading from "../SubHeading";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const visibleServices =
    isMobile && !showAll ? serviceData.slice(0, 3) : serviceData;

  return (
    <section className="h-screen max-lg:h-full w-full  flex flex-col justify-center py-[30px] max-sm:px-1 gap-[50px] items-center  relative px-4 ">
        <div className="text-center space-y-4">
             <Heading text={"OUR SERVICES"} />
             <SubHeading text={"Timeless Elegance & Morden Comforts"} />
           </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-sm:gap-14 gap-20 gap-x-5 w-[90%] mt-10">
        {visibleServices.map(({ icon: Icon, heading, para }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-5 py-8 px-4 bg-white rounded-[15px] relative shadow-[0_0_5px_#2222]"
          >
            <div className="w-[80px] h-[80px] rounded-full bg-[#f39c39fc] flex items-center justify-center absolute bottom-full translate-y-1/2">
              <Icon size={50} className="text-white" />
            </div>
            <div className="text-center mt-2 space-y-3 w-full">
              <h3 className="text-[18px] md:text-[20px] tracking-wider">{heading}</h3>
              <p className="text-[14px] md:text-[16px] text-[#464141] max-w-xs mx-auto">{para}</p>
            </div>
          </div>
        ))}
      </div>
      {isMobile && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 px-6 py-2 bg-[#f39c39fc] text-white rounded-full text-sm"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}