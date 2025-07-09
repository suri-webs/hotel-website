import { Facebook, Instagram, PhoneCall, LucideIcon } from "lucide-react";
import React from "react";

import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import SubHeading from "@/components/SubHeading/SubHeading";

interface Team {
  img: string;
  name: string;
  post: string;
  icon1: LucideIcon;
  icon2: LucideIcon;
  icon3: LucideIcon;
}

export default function Aboutteam() {
  const teamData: Team[] = [
    {
      img: "/images/1.webp",
      name: "Raj",
      post: "Manager",
      icon1: Facebook,
      icon2: Instagram,
      icon3: PhoneCall,
    },
    {
      img: "/images/2.webp",
      name: "Rahul",
      post: "Assistant Manager",
      icon1: Facebook,
      icon2: Instagram,
      icon3: PhoneCall,
    },
    {
      img: "/images/3.webp",
      name: "Mayank",
      post: "General Manager",
      icon1: Facebook,
      icon2: Instagram,
      icon3: PhoneCall,
    },
    {
      img: "/images/4.webp",
      name: "Sumit",
      post: "Quality Inspector",
      icon1: Facebook,
      icon2: Instagram,
      icon3: PhoneCall,
    },
  ];

  return (
    <section className="min-h-screen w-full flex  flex-col gap-[50px] items-center py-10">
      <div className="text-center ">
        <Heading text={"OUR TEAM"} />
        <SubHeading text={"Meet The Team"} />
      </div>

      <div className="w-[90%] flex justify-center items-center flex-wrap gap-8">
        {teamData.map((data, idx) => {
          const Icon1 = data.icon1;
          const Icon2 = data.icon2;
          const Icon3 = data.icon3;

          return (
            <div key={idx} className="h-[400px] w-[300px] bg-white shadow-[0_0_5px_#2222] rounded-2xl p-4 flex flex-col justify-evenly items-center">
              <Image src={data.img} alt={data.name} className="h-48 w-48 object-cover rounded-full" width={120} height={120} />
              <h2 className="text-2xl font-semibold font-playfair-display">{data.name}</h2>
              <p className="text-gray-500">{data.post}</p>
              <div className="flex gap-4 ">
                <Icon1 className="text-blue-600 hover:scale-110 transition-transform" />
                <Icon2 className="text-pink-500 hover:scale-110 transition-transform" />
                <Icon3 className="text-green-600 hover:scale-110 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

