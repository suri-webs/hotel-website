
export default function ServiceHeader() {
    return (
        <header className="w-full h-[730px] flex justify-center items-center relative bg-[url('/images/service.jpg')] bg-cover bg-center bg-no-repeat border border-black">
            <div className="w-full h-full absolute inset-0 bg-[#000000ad]"></div>
            <div className="relative flex flex-col gap-5 justify-center items-center text-center px-4">
                <h1 className="text-[40px] max-sm:text-[28px] leading-tight text-white font-bold tracking-wide font-playfair-display">
                    Welcome to Our Hotel Services
                </h1>
                <p className="text-[#ffffffd3] max-sm:text-sm text-lg max-w-2xl">
                    Experience comfort and tranquility in the heart of Rishikesh. Just steps away from the sacred Ganga river and surrounded by spiritual energy.
                </p>
                <button className="mt-3 px-8 py-3 cursor-pointer text-white text-[18px] rounded-[8px] bg-[#FAA543] shadow-lg hover:scale-105 transition">
                  Book Now 
                </button>
            </div>
        </header>
    );
}
