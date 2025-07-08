"use client"

import Image from "next/image";
import { useState } from "react";
import { ShieldX } from 'lucide-react';

interface ImageItem {
  img: string;
  data?: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showImage, setShowImage] = useState(0);

  const images: Record<string, ImageItem[]> = {
    all: [
      { img: "/gallery-1.jpg", data: "Room" },
      { img: "/gallery-3.jpg", data: "Restaurant" },
      { img: "/gallery-4.jpg", data: "Room" },
      { img: "/gallery-5.jpg", data: "Swimming Pool" },
      { img: "/gallery-6.jpg", data: "Swimming Pool" },
      { img: "/gallery-7.jpg", data: "Room" },
      { img: "/gallery-8.jpg", data: "Restaurant" },
      { img: "/gallery-9.jpg", data: "Restaurant" },
      { img: "/gallery-10.jpg", data: "Spa" },
      { img: "/gallery-11.jpg", data: "Restaurant" },
      { img: "/gallery-12.jpg", data: "Restaurant" },
      { img: "/gallery-13.jpg", data: "Swimming Pool" },
    ],
    rooms: [
      { img: "/gallery-1.jpg" },
      { img: "/gallery-7.jpg" },
      { img: "/gallery-2.jpg" },
      { img: "/gallery-4.jpg" },
      { img: "/images/HotelsImaegs1.jpg" },
      { img: "/images/HotelsImage3.jpg" },
      { img: "/images/HotelsImage4.avif" },
    ],
    restaurant: [
      { img: "/gallery-8.jpg" },
      { img: "/gallery-9.jpg" },
      { img: "/gallery-11.jpg" },
      { img: "/gallery-12.jpg" },
      { img: "/gallery-3.jpg" },
    ],
    spa: [
      { img: "/gallery-10.jpg" },
      { img: "/spa2.avif" },
    ],
    swimmingpool: [
      { img: "/gallery-2.jpg" },
      { img: "/gallery-5.jpg" },
      { img: "/gallery-6.jpg" },
      { img: "/gallery-13.jpg" },
    ],
  };

  const btns = ['all', 'rooms', 'restaurant', 'spa', 'swimmingpool'];

  const openImg = (img: string) => setSelectedImage(img);
  const closeImg = () => setSelectedImage(null);

  const currentImages = Object.values(images)[showImage];

  return (
    <section className="flex flex-col gap-1 justify-center items-center w-full">
      <header className="h-[650px] max-sm:h-[70vh] w-full bg-center bg-cover flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-[#0000006f] z-2"></div>
        <div
          className="w-full h-full bg-cover bg-center absolute z-0"
          style={{ backgroundImage: "url(/Gallery.jpg)" }}
        ></div>
        <h2 className="text-6xl max-md:text-3xl font-serif text-white z-10 text-center px-4 font-light tracking-wider max-lg:text-4xl">
          GALLERY
        </h2>
        <p className="text-white z-10 mt-4 text-lg font-light">Discover Our Luxury Spaces</p>
      </header>

      <h2 className="text-black text-4xl font-serif mt-10 mb-4 max-sm:text-3xl">Our Gallery</h2>

      <ul className="h-12 w-full rounded-xl flex flex-row flex-wrap justify-center mb-20 gap-6 items-center">
        {btns.map((value, index) => (
          <li
            key={index}
            onClick={() => setShowImage(index)}
            className={`text-[18px] cursor-pointer max-sm:text-[14px] font-semibold tracking-widest uppercase text-center rounded-[5px] ${showImage === index ? "text-amber-600" : "text-black/70"}`}
          >
            {value.replace("swimmingpool", "swimming pool")}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-10 w-[90%] justify-center items-center mb-20">
        {currentImages.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col w-96 h-55 relative max-sm:w-55 rounded-xl tracking-widest text-gray-700 justify-center items-center"
          >
            <Image
              className="w-full h-full object-cover rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300"
              src={item.img}
              alt="Gallery Image"
              width={300}
              height={300}
              onClick={() => openImg(item.img)}
            />
            {item.data && <span className="mt-2 text-sm text-gray-600">{item.data}</span>}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50">
          <div className="relative w-fit">
            <Image
              className="w-full max-w-[90vw] max-h-[80vh] rounded-lg object-contain"
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
            />
            <button
              onClick={closeImg}
              className="absolute -right-8 -top-5 bg-white/80 rounded-full p-1 shadow-lg hover:scale-110 transition"
            >
              <ShieldX className="text-red-500 w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
