"use client";
import { testimonials } from "@/lib/Testmonilas";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const sliderRef = useRef<SwiperClass>(null);

  return (
    <section className="w-full relative h-fit p-6 max-sm:p-0 max-md:p-5 max-lg:p-10 flex flex-col justify-center items-center gap-15 bg-gray-50">
      <div className="text-center  space-y-4">
        <Heading text={"TESTIMONIALS"} />
        <SubHeading text={"What Our Guest are Saying"} />
      </div>

      <div className="w-[90%] max-sm:w-full max-sm:p-1 h-[380px] overflow-x-hidden">
        <Swiper onSwiper={(it) => (sliderRef.current = it)} slidesPerView={3} spaceBetween={0}
          loop={true} freeMode={true} pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false, }}
          speed={700}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 }, 480: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 24 }, 1024: { slidesPerView: 3, spaceBetween: 32 },
            1336: { slidesPerView: 3, spaceBetween: 32 },
          }} modules={[FreeMode, Navigation, Pagination, Autoplay]} className="w-full h-full !pb-20">

          {testimonials.map((slide, i) => (
            <SwiperSlide key={i} className="h-full w-full  cursor-pointer p-4 max-md:p-1 max-sm:p-2 flex">
              <div className="w-full h-full bg-white p-6 rounded-3xl shadow-lg flex flex-col gap-5 justify-between hover:scale-102 transition-transform duration-300">
                <div className="flex flex-col gap-3">
                  <Image src="/images/download.png" className="w-8" alt="quote symbol" width={120} height={120} />
                  <p className="text-md text-gray-700 leading-relaxed line-clamp-3">“{slide.message}”</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <Image src="/images/person.jpg" className="w-14 h-14 rounded-full" alt={`Photo of ${slide.name}`} width={120} height={120} />
                  <div>
                    <div className="flex gap-2 ">
                      {Array.from({ length: slide.rating }).map((_, ratingIndex) => (
                        <Star key={ratingIndex} className="text-yellow-500 w-[15px] fill-amber-500" />
                      ))}
                      {slide.rating === Math.floor(slide.rating) ? null : (
                        <StarHalf className="text-yellow-500 w-[15px] fill-amber-500" />
                      )}
                    </div>
                    <h5 className="text-base font-medium">{slide.name}</h5>
                    <p className="text-xs text-gray-500">{slide.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons - Now fixed inside container left/right */}
        <button onClick={() => sliderRef.current?.slidePrev()} className="absolute max-sm:hidden cursor-pointer top-[55%] left-10 max-sm:left-0 max-lg:left-5 max-md:left-0 -translate-y-1/2 bg-[#00000068] text-white  px-3 py-3 max-sm:px-2 max-sm:py-2 rounded-[50%] hover:bg-[#222222e7] transition-all ease-in duration-300 z-10">
          <ChevronLeft />
        </button>
        <button onClick={() => sliderRef.current?.slideNext()} className="absolute max-sm:hidden cursor-pointer top-[55%] right-10 max-lg:right-5 max-md:right-0 -translate-y-1/2 bg-[#00000068] text-white px-3 py-3  max-sm:px-2 max-sm:py-2 rounded-[50%] hover:bg-[#222222e7] transition-all ease-in duration-300 z-10" >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}