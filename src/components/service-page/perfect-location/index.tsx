import Image from "next/image";
import { MapPin, Waves } from "lucide-react";

export default function PerfectLocation() {
  const locations = [
    {
      title: "Highway Access",
      description:
        "Just 350 meters walking distance from Rishikesh Highway for easy transportation.",
      image: "/images/highway.jpg",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Ganga River",
      description:
        "Only 500 meters from the sacred Ganga river perfect for morning walks and spiritual moments.",
      image: "/images/ganga-ghat.jpg",
      icon: <Waves className="w-5 h-5 text-blue-400" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-[#f1f8ff] flex flex-col items-center">
      <h2 className="text-4xl ont-playfair-display font-bold text-center text-[#1e1e1e] mb-12">
        Perfect Location
      </h2>

      <div className="flex flex-col md:flex-row gap-10 px-6 w-full max-w-6xl justify-center">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 w-full md:w-[340px] flex flex-col items-center text-center"
          >
            <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-4">
              <Image
                src={loc.image}
                alt={loc.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#1e1e1e] flex items-center gap-2">
              {loc.icon}
              {loc.title}
            </h3>
            <p className="text-gray-600 mt-2 text-base">{loc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
