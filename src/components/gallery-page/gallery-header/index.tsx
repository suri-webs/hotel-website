export default function GalleryHeader() {
    return (
        <header className="h-[730px] max-sm:h-[70vh] w-full bg-center bg-cover flex flex-col justify-center items-center relative">
            <div className="absolute inset-0 bg-[#000000ab] z-2"></div>
            <div
                className="w-full h-full bg-cover bg-center absolute z-0"
                style={{ backgroundImage: "url(/gallery/Gallery.jpg)" }}
            ></div>
            <h2 className="text-6xl max-md:text-3xl font-serif text-white z-10 text-center px-4 font-light tracking-wider max-lg:text-4xl">
                GALLERY
            </h2>
            <p className="text-white z-10 mt-4 text-lg text-center w-[60%]">Explore our curated selection of elegant guest houses and residential stays that reflect the spirit and serenity of Auroville each space crafted for comfort and a memorable stay.</p>
        </header>
    )
}