"use client"
import React, { useState } from "react";
import SubHeading from "../SubHeading";
import Heading from "../Heading";
import Image from "next/image";

export default function Rooms() {
    interface Room {
        images: string;
        text: string;
    }
    const divdata: Room[] = [
        { images: "/rooms-images/image-3.jpg", text: "Junior Suite", },
        { images: "/rooms-images/image-4.jpg", text: "Family Rooms", },
    ];
    const divdata2: Room[] = [
        { images: "/rooms-images/iamge-1.jpg", text: "Executive Room",  },
        { images: "/rooms-images/image-6.jpg", text: "Presidential Suite", },
        { images: "/rooms-images/image-8.jpg", text: "Luxury Suite",},
    ];
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="w-full h-screen  max-lg:h-full playfair-display my-[40px] flex justify-center items-center bg-[#fff]">
            <div className="w-full h-auto flex flex-col justify-center gap-10 items-center p-5 max-sm:gap-5">
                <div className="flex flex-col mb-5 items-center gap-5 max-sm:gap-6">
                    <Heading text={"RISHIKESH LUXURY ROOMS"} />
                    <SubHeading text={"Luxury Rooms & Suites"} />

                </div>
                <div className="w-[89%] flex  justify-center items-center gap-10 max-sm:gap-5 max-lg:flex-col">
                    {divdata.map((item, i) => (
                        <div key={i} className="w-[45%]   max-sm:w-[115%] h-[240px] max-sm:h-[200px] relative overflow-hidden rounded-[8px] group max-lg:w-full">
                            <Image src={item.images} alt=""
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0"   width={120} height={120} />
                            <div className="absolute inset-0 bg-[#2222221d] z-10 pointer-events-none"></div>
                            <span className="absolute  w-[180px]  cursor-pointer bottom-[-95px] right-0 text-white text-lg justify-end z-20 flex rounded-l-md flex-col transition-all duration-500 group-hover:-bottom-1 gap-2 bg-[#151515a5] p-[10px] max-sm:text-[17px]">
                                <p>{item.text}</p>
                                <button className="px-[20px]  cursor-pointer rounded-[10px]  text-[15px] py-[7px] bg-[#f39c39fc]">Book Now</button>

                            </span>
                        </div>
                    ))}
                </div>
                <div className={`w-full flex justify-center items-center gap-[40px] max-sm:gap-5 max-sm:w-[75%] max-lg:w-[89%] max-lg:flex-col ${showMore ? "flex" : "hidden"} md:flex`}>
                    {divdata2.map((item, index) => (
                        <div key={index}
                            className={`relative group rounded-[10px] overflow-hidden h-[240px] ${index === 1 ? "w-[37%] max-sm:w-[137%] max-sm:h-[200px] max-lg:w-[100%]" : "w-[20%] max-sm:w-[137%] max-sm:h-[200px] max-[320px]:w-[270px] max-lg:w-[100%] max-lg:h-[240px] max-sm:flex"}`}>
                            <Image src={item.images} alt=""
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"   width={120} height={120} />
                            <div className="absolute inset-0 bg-[#2222221d] z-10 pointer-events-none"></div>
                            <span className="absolute w-[180px] cursor-pointer bottom-[-95px] right-0 text-white text-lg max-sm:text-[17px] justify-end z-20 flex rounded-l-md flex-col transition-all duration-500 group-hover:-bottom-1 gap-2 bg-[#151515a5] p-[10px]">
                                <p>{item.text}</p>
                                <button className="px-[20px]  cursor-pointer rounded-[10px] text-[15px] py-[7px] bg-[#f39c39fc]">Book Now</button>

                            </span>
                        </div>
                    ))}
                </div>
                <button
                    className="md:hidden  cursor-pointer  text-white bg-[#f39c39fc]  px-6 py-2 rounded-full" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </section>
    );
}
