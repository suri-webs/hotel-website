

export default function RoomsHeader() {
    return (
        <section className="h-[650px] max-sm:h-[720px] w-full flex flex-col relative">
            {/* Background-Image */}
            <div className="absolute h-[100%] w-full inset-0 bg-[url('/images/RoomHeader.jpg')]  bg-cover bg-center bg-fixed"></div>
            {/* Dark-overLay */}
            <div className="absolute h-[100%] inset-0 bg-[#000000af] z-20"></div>
            {/* Contact */}
            <div className="absolute inset-0 z-30 flex flex-col gap-3 text-white justify-center items-center ">
            <h1 className="text-6xl justify-center w-full font-playfair-display text-center flex items-center gap-7 max-sm:text-4xl">Our Rooms </h1>
                <p className="text-2xl max-sm:text-[17px] playfair-display max-sm:text-center">
                    Whether you have questions, need assistance, or simply want to share.
                </p>
            </div>

        </section>
    );
}
