import { UtensilsCrossed } from "lucide-react";

export default function MealsHeader() {
    return (
        <header className="w-full h-[730px] flex justify-center items-center relative bg-[url('/images/meals-header.jpg')] bg-cover bg-center bg-no-repeat border border-black">
            <div className="w-full h-full absolute inset-0 bg-[#000000d0]"></div>
            <div className="relative flex flex-col gap-5 justify-center items-center">
                <UtensilsCrossed className="w-14 h-14 text-[#fff]" />
                <h1 className="text-[55px]  max-sm:w-[100%] max-sm:text-[27px] leading-[1.1] max-sm:text-center   font text-white  tracking-wider font-playfair-display">
                    Tapovan Kitchen
                </h1>
                <p className="text-[#ffffffd3] max-sm:w-[95%] max-sm:text-sm text-lg w-[70%] text-center">We serve home-cooked, hygienic vegetarian meals made with care and seasonal ingredients. Enjoy a mix of Indian flavors and light continental options to nourish your body and soul.</p>
                <button className="px-10 py-2 cursor-pointer text-white text-[18px] rounded-[5px] bg-[#ffa844f9]">Explore Menu</button>
            </div>
        </header>
    )
}