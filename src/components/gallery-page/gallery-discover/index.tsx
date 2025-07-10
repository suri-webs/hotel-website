'use client';

import Image from 'next/image';
import Link from 'next/link';

const discoverImages = [
    { src: '/gallery/gallery-3.jpg', alt: 'Farming' },
    { src: '/gallery/gallery-8.jpg', alt: 'Massage Therapy' },
    { src: '/gallery/gallery-6.jpg', alt: 'Classroom' },
    { src: '/gallery/gallery-13.jpg', alt: 'Art & Dance' },
    { src: '/gallery/gallery-12.jpg', alt: 'Matrimandir Morning' },
];

export default function DiscoverAuroville() {
    return (
        <section className="bg-[#fff6ec] py-14 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl font-semibold text-[#a34e2d] mb-10">DISCOVER AUROVILLE</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-14 place-items-center mb-8">
                    {discoverImages.map((img, index) => (
                        <div key={index} className="relative w-full h-[270px] rounded overflow-hidden">
                            <Image src={img.src} alt={img.alt} fill className="object-cover" />
                        </div>
                    ))}
                </div>
                <Link href={"/contact"} className="bg-[#f9a825] hover:bg-[#f57f17] text-white px-6 py-2 text-sm font-medium rounded">
                    KNOW MORE →
                </Link>
            </div>
        </section>
    );
}
