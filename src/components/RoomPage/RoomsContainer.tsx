import { Rooms } from "@/lib/RoomsPage";
import Image from "next/image";


export default function RoomsContainer() {
  return (
    <section className="min-h-screen w-full flex mb-20 flex-col justify-center p-5 gap-14 items-center">
      <div className="w-full  flex justify-center items-center flex-col gap-5 h-[200px]">
        <h1 className="text-4xl font-playfair-display text-amber-600">Rest Recharge Repeat</h1>
        <p className="text-xl w-[70%] text-center text-gray-600">
          Our thoughtfully curated rooms, warm hospitality, and local experiences ensure a comfortable stay rooted in authenticity. Whether you &apos; re here for inner peace, adventure, or cultural exploration, Sanskrutam is your home in Rishikesh.
        </p>

      </div>
      <div className="flex flex-wrap w-full justify-center items-center gap-[50px]">
        {Rooms.map((item, id) => {
          return (
            <div key={id} className="flex flex-col overflow-hidden h-[450px] w-[400px] border border-[#ffa844f9] rounded-[15px] gap-3 relative">
              <div className="overflow-hidden ">
                <Image src={item.img} className="!h-[220px] !w-full object-cover rounded-t-[15px] hover:scale-110 transition-all duration-400" alt=""   width={1000} height={120}/>

              </div>
              <p className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full font-semibold text-black">
                ₹{item.price}</p>
              <div className="p-4">
                <h2 className="font-playfair-display text-2xl mb-2">{item.heading}</h2>
                <p className="text-gray-600 text-sm">{item.about}</p>
                <button className="mt-[20px] hover:underline bg-[#ffa844f9] text-white px-7 py-2 rounded-2xl">{item.view}</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
