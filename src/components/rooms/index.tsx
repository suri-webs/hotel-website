"use client"
import React, { useEffect, useState } from "react";
import SubHeading from "../SubHeading";
import Heading from "../Heading";
import Image from "next/image";
import { roomOptions } from "@/lib/RoomsPage";
import { X } from "lucide-react";

export default function Rooms() {
    interface Room {
        images: string;
        text: string;
    }

    const divdata: Room[] = [
        { images: "/rooms-images/image-3.jpg", text: "Junior Suite" },
        { images: "/rooms-images/image-4.jpg", text: "Family Rooms" },
    ];
    const divdata2: Room[] = [
        { images: "/rooms-images/iamge-1.jpg", text: "Executive Room" },
        { images: "/rooms-images/image-6.jpg", text: "Presidential Suite" },
        { images: "/rooms-images/image-8.jpg", text: "Luxury Suite" },
    ];

    const [showMore, setShowMore] = useState(false);
    const [click1, setclick1] = useState(false);
    const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
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
        const isSmall = window.innerWidth <= 1300;
        document.body.style.overflow = isSmall || click1 ? "hidden" : "auto";
    }, [click1]);

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
        <section className="w-full h-screen max-lg:h-full playfair-display my-[40px] flex justify-center items-center bg-[#fff]">
            <div className="w-full h-auto flex flex-col justify-center gap-10 items-center p-5 max-sm:gap-5">
                <div className="flex flex-col mb-5 items-center gap-5 max-sm:gap-6">
                    <Heading text={"RISHIKESH LUXURY ROOMS"} />
                    <SubHeading text={"Luxury Geust Rooms"} />
                </div>

                <div className="w-[89%] flex justify-center items-center gap-10 max-sm:gap-5 max-lg:flex-col">
                    {divdata.map((item, i) => (
                        <div key={i} className="w-[45%] max-sm:w-[115%] h-[240px] max-sm:h-[200px] relative overflow-hidden rounded-[8px] group max-lg:w-full">
                            <Image src={item.images} alt=""
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0"
                                width={120} height={120} />
                            <div className="absolute inset-0 bg-[#2222221d] z-10 pointer-events-none"></div>
                            <span className="absolute w-[180px] cursor-pointer bottom-[-95px] right-0 text-white text-lg justify-end z-20 flex rounded-l-md flex-col transition-all duration-500 group-hover:-bottom-1 gap-2 bg-[#151515a5] p-[10px] max-sm:text-[17px]">
                                <p>{item.text}</p>
                                <button className="px-[20px] cursor-pointer rounded-[10px] text-[15px] py-[7px] bg-[#f39c39fc]" onClick={() => setclick1(!click1)}>Book Now</button>
                            </span>
                        </div>
                    ))}
                </div>

                <div className={`w-full flex justify-center items-center gap-[40px] max-sm:gap-5 max-sm:w-[75%] max-lg:w-[89%] max-lg:flex-col ${showMore ? "flex" : "hidden"} md:flex`}>
                    {(isSmallScreen ? divdata2.slice(0, 1) : divdata2).map((item, index) => (
                        <div key={index}
                            className={`relative group rounded-[10px] overflow-hidden h-[240px] ${index === 1 ? "w-[37%] max-sm:w-[137%] max-sm:h-[200px] max-lg:w-[100%]" : "w-[20%] max-sm:w-[137%] max-sm:h-[200px] max-[320px]:w-[270px] max-lg:w-[100%] max-lg:h-[240px] max-sm:flex"}`}>
                            <Image src={item.images} alt=""
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                                width={120} height={120} />
                            <div className="absolute inset-0 bg-[#2222221d] z-10 pointer-events-none"></div>
                            <span className="absolute w-[180px] cursor-pointer bottom-[-95px] right-0 text-white text-lg max-sm:text-[17px] justify-end z-20 flex rounded-l-md flex-col transition-all duration-500 group-hover:-bottom-1 gap-2 bg-[#151515e3] p-[10px]">
                                <p>{item.text}</p>
                                <button className="px-[20px] cursor-pointer rounded-[10px] text-[15px] py-[7px] bg-[#f39c39fc]" onClick={() => setclick1(!click1)}>Book Now</button>

                                {/* Modal */}
                                <div className={`fixed inset-0 z-[99] flex justify-center items-center transition-all duration-700 ${click1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                                    <div className="absolute inset-0 bg-[#000000dc]" onClick={() => setclick1(false)}></div>
                                    <div className="relative w-full max-w-[600px] px-4 sm:px-6 py-10 bg-white border rounded-lg shadow-lg z-[100]">
                                        <X className="w-6 h-6 text-black absolute top-1 right-1 cursor-pointer" onClick={() => setclick1(false)} />
                                        <div className="flex w-full flex-col gap-4 text-black text-sm font-sans">
                                            <select className="w-full rounded-[4px] h-[40px] border">
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
                                                            <button onClick={() => updateRoom(index, "adults", -1)} className="border px-2 py-1 rounded"> - </button>
                                                            <span>{room.adults} Adult</span>
                                                            <button onClick={() => updateRoom(index, "adults", 1)} className="border px-2 py-1 rounded"> + </button>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <button onClick={() => updateRoom(index, "children", -1)} className="border px-2 py-1 rounded"> - </button>
                                                            <span>{room.children} Child</span>
                                                            <button onClick={() => updateRoom(index, "children", 1)} className="border px-2 py-1 rounded"> + </button>
                                                        </div>
                                                    </div>
                                                    {rooms.length > 1 && (
                                                        <button className="text-red-600 underline text-xs self-end" onClick={() => removeRoom(index)}>Remove Room</button>
                                                    )}
                                                </div>
                                            ))}

                                            <button className="text-[#a6792d] underline font-medium text-sm hover:text-[#855e1f] transition" onClick={addRoom}>
                                                ADD MORE ROOMS
                                            </button>

                                            <button className="mt-2 w-full bg-[#ffa844f9] text-white py-2 rounded text-lg hover:bg-[#f99d30]" onClick={() => {
                                                alert("Booking submitted!");
                                                setclick1(false);
                                            }}>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>

                <button
                    className="md:hidden cursor-pointer text-white bg-[#f39c39fc] px-6 py-2 rounded-full"
                    onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </section>
    );
}
