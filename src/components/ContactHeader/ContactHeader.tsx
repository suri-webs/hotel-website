export default function ContactHeader() {
    return (
        <section className="relative w-full flex justify-center items-center h-[650px]  bg-cover bg-center bg-no-repeat bg-[url(/images/ContactHeader.jpg)] max-sm:h-[600px]">
            <div className="absolute inset-0 bg-[#030303a8] z-10"></div>
            <div className="relative z-20 text-center text-white flex flex-col items-center gap-7 px-4">
                <h1 className="text-6xl justify-center w-full font-playfair-display text-center flex items-center gap-7 max-sm:text-4xl">Contact Us</h1>
                <p className="text-2xl max-sm:text-[17px] playfair-display">
                    Whether you have questions, need assistance, or simply want to share.
                </p>
            </div>
        </section>
    );
}
