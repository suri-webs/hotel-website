"use client"
import { useState } from "react"
import { ShieldX } from 'lucide-react';
import Image from "next/image";
import { images } from "@/lib/gallery";
export default function Gallery() {
    const [selectedImage, setselectedImage] = useState<string | null>(null);

    const [showImage, setshowImage] = useState(0) 

    const btns = ['all', 'rooms', 'restaurant', 'spa', 'swimmimg pool']
    const openImg = (img: string) => { 
        setselectedImage(img);
    };

    const closeImg = () => {
        setselectedImage(null);
    };

    return (
        <section className="flex flex-col gap-1 justify-center items-center w-full  max-lg:w-full">
            {/* Gallery Header  */}
            <header className="h-[650px] max-sm:h-[720px] max-lg:w-full w-full bg-center bg-cover flex flex-col justify-center items-center relative ">
                <div className="absolute inset-0 bg-[#0000006f] z-2 max-sm:h-full"></div>
                <div
                    className="w-full inset-0 max-lg:w-full h-full max-sm:h-full bg-cover bg-center absolute z-0"
                    style={{ backgroundImage: "url(/Gallery.jpg)" }}
                ></div>
                <h2 className="text-6xl max-md:text-3xl  font-serif text-white z-10 text-center px-4 font-light tracking-wider max-lg:text-4xl">
                    GALLERY
                </h2>
                <p className="text-white/100 z-10 mt-4 text-lg font-light">Discover Our Luxury Spaces</p>
            </header>


            {/* Gallery main Head  */}
            <h2 className="text-black  text-4xl font-serif mt-30 mb-3.5 max-sm:text-3xl">Our Gallery</h2>

            <div className="flex flex-col gap-6 mb-10 justify-center items-center w-full">


                <ul className=" h-12 w-full rounded-xl list-none flex flex-row [@media(max-width:430px)]:flex-wrap  [@media(max-width:430px)]:text-
                  justify-center gap-9 items-center cursor-pointer:">
                    {
                        btns.map((value, index) => (
                            <li key={index}
                                onClick={() => setshowImage(index)}
                                className={`text-[18px] cursor-pointer [@media(max-width:550px)]:text-[11px] max-sm:text-[15px]  font-semibold tracking-widest uppercase  text-center rounded-[5px] ${showImage === index ? "text-amber-600" : "text-black/70"}`}>{value}</li>

                        ))
                    }
                </ul>



                {/* All Images  */}
                {
                    showImage == 0 ? (<div className="flex flex-wrap max-sm:w-full max-sm:p-1.5 max-md:w-full max-lg:w-full max-lg:p-1.5  gap-8 w-[90%] justify-center items-center">
                        {
                            images.all.map((item, imageIndex) => {
                                return (
                                    <div key={imageIndex} className="flex max-sm:w-55 flex-col  relative w-[380px] rounded-xl h-55 tracking-widest text-gray-700  justify-center items-center">
                                        <Image className=" [@media(max-width:550px)]:w-50  [@media(max-width:550px)]:h-45 [@media(max-width:550px)]:p-0.5 [@media(max-width:550px)]:gap-1 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full  h-full object-cover overflow-hidden group-hover:scale-105 rounded-[8px] border border-[#0000005b]
                                " src={item.img}
                                            alt=""
                                            onClick={() => openImg(item.img)}
                                       width={120} height={120} /> {item.data}</div>
                                )
                            })
                        }
                    </div>) : null
                }

                {/* Room Images  */}
                {
                    showImage == 1 ? (<div className="flex flex-wrap max-sm:w-full max-sm:p-1.5 max-md:w-full max-lg:w-full  gap-8 w-[70%] justify-center items-center">
                        {
                            images.rooms.map((item, imageIndex) => {
                                return (
                                    <div
                                        key={imageIndex}
                                        className="flex max-sm:w-55 flex-col  relative w-[380px] rounded-xl h-55 tracking-widest text-gray-700  justify-center items-center">
                                        <Image className=" [@media(max-width:550px)]:w-50  [@media(max-width:550px)]:h-45 [@media(max-width:550px)]:p-0.5 [@media(max-width:550px)]:gap-1 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full  h-full object-cover overflow-hidden group-hover:scale-105 rounded-[8px] border border-[black]
                                " src={item.img}
                                            alt=""
                                            onClick={() => openImg(item.img)}
                                        width={120} height={120}    /> </div>
                                )
                            })
                        }
                    </div>) : null
                }


                {/* Restaurant Images */}
                {
                    showImage == 2 ? (<div className="flex flex-wrap max-sm:w-full max-sm:p-1.5 max-md:w-full max-lg:w-full  gap-8 w-[70%] justify-center items-center">
                        {
                            images.restaurant.map((item, imageIndex) => {
                                return (
                                    <div
                                        key={imageIndex}
                                        className="flex max-sm:w-55 flex-col  relative w-[380px] rounded-xl h-55 tracking-widest text-gray-700  justify-center items-center">
                                        <Image className=" [@media(max-width:550px)]:w-50  [@media(max-width:550px)]:h-45 [@media(max-width:550px)]:p-0.5 [@media(max-width:550px)]:gap-1 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full  h-full object-cover overflow-hidden group-hover:scale-105 rounded-[8px] border border-[black]
                                " src={item.img}
                                            alt=""
                                            onClick={() => openImg(item.img)}
                                       width={120} height={120}     /> </div>
                                )
                            })
                        }
                    </div>) : null
                }

                {/* Spa Images  */}
                {
                    showImage == 3 ? (<div className="flex flex-wrap max-sm:w-full max-sm:p-1.5 max-md:w-full max-lg:w-full  gap-8 w-[70%] justify-center items-center">
                        {
                            images.spa.map((item, imageIndex) => {
                                return (
                                    <div
                                        key={imageIndex}
                                        className="flex max-sm:w-55 flex-col  relative w-[380px] rounded-xl h-55 tracking-widest text-gray-700  justify-center items-center">
                                        <Image className=" [@media(max-width:550px)]:w-50  [@media(max-width:550px)]:h-45 [@media(max-width:550px)]:p-0.5 [@media(max-width:550px)]:gap-1 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full  h-full object-cover overflow-hidden group-hover:scale-105 rounded-[8px] border border-[black]
                                " src={item.img}
                                            alt=""
                                            onClick={() => openImg(item.img)}
                                width={120} height={120}            /> </div>
                                )
                            })
                        }
                    </div>) : null
                }

                {/* Swimming Pool  */}
                {
                    showImage == 4 ? (<div className="flex flex-wrap max-sm:w-full max-sm:p-1.5 max-md:w-full max-lg:w-full  gap-8 w-[70%] justify-center items-center">
                        {
                            images.swimmingpool.map((item, imageIndex) => {
                                return (
                                    <div key={imageIndex} className="flex max-sm:w-55 flex-col  relative w-[380px] rounded-xl h-55 tracking-widest text-gray-700  justify-center items-center">
                                        <Image className=" [@media(max-width:550px)]:w-50  [@media(max-width:550px)]:h-45 [@media(max-width:550px)]:p-0.5 [@media(max-width:550px)]:gap-1 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full  h-full object-cover overflow-hidden group-hover:scale-105 rounded-[8px] border border-[black]
                                " src={item.img}
                                            alt=""
                                            onClick={() => openImg(item.img)}
                                    width={120} height={120}        /> </div>
                                )
                            })
                        }
                    </div>) : null
                }

            </div>
            {
                selectedImage && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50  ">
                        <div className="relative  w-fit ">
                            <Image
                                className="w-full max-sm:w-110 max-lg:w-170 max-md:w-140  [@media(max-width:500px)]:w-80 h-[80vh] 
                                rounded-lg object-contain"
                                src={selectedImage}
                               width={120} height={120}     alt="Selected Image"
                            />
                            <button
                                onClick={closeImg}
                                className="absolute -right-8 -top-5 bg-white/80 rounded-full p-1 shadow-lg hover:scale-110 transition"
                            >
                                <ShieldX className="text-red-500 w-6 h-6" />
                            </button>
                        </div>
                    </div>
                )
            }

        </section>
    )
}