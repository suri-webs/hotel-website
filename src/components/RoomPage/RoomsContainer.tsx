import { Rooms } from "@/lib/RoomsPage";
import Image from "next/image";


export default function RoomsContainer() {
  return (
    <section className="min-h-screen w-full flex mb-20 flex-col justify-center p-5 gap-14 items-center">
      <div className="w-full  flex justify-center items-center flex-col gap-5 h-[200px]">
        <h1 className="text-4xl font-playfair-display max-sm:text-2xl text-amber-600">Rest Recharge Repeat</h1>
        <p className="text-xl max-sm:text-sm max-md:text-lg max-sm:w-full w-[70%] text-center text-gray-600">
          Our rooms are built for those who appreciate simplicity and comfort. Affordable yet cozy, making your stay in RISHIKESH both pleasant and budget- friendly that let you spend less on stay and more on experiencing the magic of RISHIKESH.
        </p>

      </div>
      <div className="w-full flex  justify-center items-center">
        <div className="flex flex-wrap w-[85%] max-sm:w-full  items-center gap-[50px]">
          {Rooms.map((item, id) => {
            return (
              <div key={id} className="flex flex-col overflow-hidden h-[450px]  w-[380px] shadow-md rounded-[8px] gap-3 relative">
                <div className="overflow-hidden ">
                  <Image src={item.img} className="!h-[220px] !w-full object-cover hover:scale-110 transition-all duration-400" alt="" width={1000} height={120} />

                </div>
                <p className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full font-semibold text-black">
                  ₹{item.price}</p>
                <div className="p-4">
                  <h2 className=" text-2xl mb-2"><span className="font-playfair-display">Room No </span>{item.heading}</h2>
                  <p className="text-gray-600 text-sm">{item.about}</p>
                  <div className="flex justify-between">
                    <button className="mt-[20px] hover:underline bg-[#ffa844f9] text-xl max-sm:text-sm max-sm:px-6 text-white px-7 py-2 rounded-[8px]">{item.view}</button>
                    <button className="mt-[20px]  border-2 text-xl border-red-600 text-black px-7 py-2 max-sm:text-sm max-sm:px-6 rounded-[8px]">Book Now</button>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
