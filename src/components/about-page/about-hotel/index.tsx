import Button from "@/components/Button";
import Image from "next/image";

export default function About() {
    const data = {
        title: "Welcome To Our Moonlit Hotel & Resort",
        subtitle: "About Us",
        description:
            "Welcome to Sanskrutam, a serene guest house nestled in the spiritual heart of Rishikesh. Designed for international and local travelers. Sanskrutam offers a peaceful retreat just 200 mtrs away from the Ganges and the vibrant energy of yoga, meditation, and ancient Indian culture.",
        image1: "/images/hotelbg.jpg",
        image2: "/images/hotel-img.jpg",
    };

    return (
        <section className="w-full h-screen max-md:h-full py-16 px-4 bg-[#c2c0c01f] flex flex-col lg:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">

                <Image
                    src={data.image1}
                    alt="Hotel background"
                    className="absolute object-cover rounded-[15px] w-[70%] h-[90%] left-10 max-sm:left-5 max-sm:w-[85%] max-sm:h-[90%]   max-md:w-[400px] max-md:h-[350px] max-lg:w-[90%] max-lg:h-[90%]"
                    width={1020} height={120}
                />
                <Image
                    src={data.image2}
                    alt="Hotel interior"
                    className="absolute object-cover rounded-[15px] border-8 border-white w-[50%] h-[60%] top-[210px] right-[20px] max-sm:w-[50%] max-sm:h-[50%] max-sm:top-[180px] "
                     width={1020} height={120}
                />
            </div>

            {/* Text Section */}
            <div className="w-full  lg:w-1/2 flex flex-col gap-8  lg:text-left p-4">
                <h6 className="text-[28px] max-sm:text-[25px] text-[#de8a1e] flex justify-center lg:justify-start items-center gap-2">
                    {data.subtitle}
                </h6>

                <h2 className="font-playfair-display text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] leading-tight">
                    {data.title}
                </h2>

                <p className="text-[15px] max-sm:text-[17px] md:text-[18px] text-gray-700">
                    {data.description}
                </p>

                <div className="flex justify-center lg:justify-start">
                    <Button text={"Get in Touch"} />

                </div>
            </div>
        </section>
    );
}