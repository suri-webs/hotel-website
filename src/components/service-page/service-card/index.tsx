"use client";
import { services } from "@/lib/servicepage";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function SeviceCards() {
    const [visibleCount, setVisibleCount] = useState(9);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => { setIsSmallScreen(window.innerWidth < 900); };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isSmallScreen) { setVisibleCount(4); } else { setVisibleCount(9); }
    }, [isSmallScreen]);

    const handleShowMore = () => {
        setVisibleCount((prev) => Math.min(prev + 2, services.length));
    };


    return (
        <section className="w-full py-16 bg-[#f9f9f9] flex flex-col items-center">
            <h2 className="text-4xl f font-bold text-center text-[#1e1e1e] mb-12">
                Our Premium Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 px-6 max-sm:px-6 w-full max-w-7xl">
                {services.slice(0, visibleCount).map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden ">
                        <div className="relative w-full overflow-hidden h-[180px]">
                            <Image src={service.image} alt={service.title} fill className="object-cover  transition-transform duration-300 hover:scale-105" />
                            <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-sm z-10">{service.icon}</div>
                        </div>

                        <div className="p-5 max-sm:p-4 flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-[#1e1e1e]"> {service.title}</h3>
                            <p className="text-gray-600 max-sm:text-sm text-lg">{service.description}</p>
                            {service.features.length > 0 && (
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {service.features.map((feature, i) => (
                                        <span key={i} className={`text-xs px-3 py-1.5 rounded-full ${feature.toLowerCase().includes("off")
                                            ? "bg-green-100 text-green-700"
                                            : "bg-[#FAA543] text-white"}`}>{feature}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {isSmallScreen && visibleCount < services.length && (
                <button onClick={handleShowMore} className="mt-10 px-6 py-2 bg-[#FAA543] text-white rounded-full text-sm 
                hover:bg-[#e39535]">
                    Show More
                </button>
            )}
        </section>
    );
}
