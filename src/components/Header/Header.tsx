'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [fitImage, setImage] = useState(0);

    const data = [
        "/images/HeaderBg2.avif", "/images/HeaderBg4.avif",
        "/images/HeaderBg3.avif",
        "/images/JungleHeading.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImage(prev => (prev + 1) % data.length);
        }, 7500);
        return () => clearInterval(interval);
    }, [fitImage, data.length]);


    return (
        <header className="w-full relative overflow-hidden h-[730px] max-sm:h-[720px] flex flex-col max-sm:justify-center max-sm:items-center justify-end p-[50px]  items-start max-sm:p-[20px]  ">
            <div className="absolute inset-0 bg-[#000000d3] z-10"></div>

            {data.map((src, index) => (
                <Image key={index} src={src}
                    className={`!w-full !h-full absolute inset-0 object-cover object-center zooming-image transition-opacity duration-1000 ease-in-out ${fitImage === index ? 'opacity-100 z-0' : 'opacity-0'}`}
                    alt={`Background ${index}`}
               width={1020} height={20} />
            ))}
            <span className="z-20 flex w-[50%] max-sm:w-full flex-col gap-[30px] max-sm:gap-5 justify-center items-start max-sm:items-center">
                <p className="playfair-display tracking-widest  w-full max-sm:text-[20px] max-sm:text-center  text-2xl text-white">
                    HOTELS & RESORTS
                </p>
                <h1 className="text-[55px] w-[680px] max-sm:w-[100%] max-sm:text-[27px] leading-[1.1] max-sm:text-center   font text-white  tracking-wider font-playfair-display">
                    Your Perfect Stay Begins Here Rishikesh
                </h1>
                <button className="px-10 py-2 cursor-pointer text-white text-[18px] rounded-[5px] bg-[#ffa844f9]">Explore Now</button>

            </span>


        </header>
    );
}


