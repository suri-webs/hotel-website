'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const guestData = [
    { name: 'Arul Residential Stay', image: '/gallery/gallery-3.jpg' },
    { name: 'Nordhausen Residential Stay', image: '/gallery/gallery-4.jpg' },
    { name: 'Neeraja Guest House', image: '/gallery/gallery-5.jpg' },
    { name: 'La Salle De Vie Residential Stay', image: '/gallery/gallery-6.jpg' },
    { name: 'Utility Residential Stay', image: '/gallery/gallery-7.jpg' },
    { name: 'Gaurdava Guest House', image: '/gallery/gallery-8.jpg' },
    { name: 'Serendipity Guest House', image: '/gallery/gallery-9.jpg' },
    { name: 'New Creation Guest House', image: '/gallery/gallery-10.jpg' },
    { name: 'Vetri Kyoda Residential Stay', image: '/gallery/gallery-11.jpg' },
];

export default function RandomPickGrid() {
    const [visibleCount, setVisibleCount] = useState(guestData.length);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 900;
            setIsMobile(mobile);
            setVisibleCount(mobile ? 4 : guestData.length);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = () => {
        if (visibleCount >= guestData.length) {
            setVisibleCount(4);
        } else {
            setVisibleCount(prev => Math.min(prev + 2, guestData.length));
        }
    };

    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl font-semibold text-[#a34e2d] mb-10">RANDOM PICK</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-lg:gap-5 gap-14">
                    {guestData.slice(0, visibleCount).map((item, index) => (
                        <div key={index} className="relative w-full h-[270px] rounded-sm overflow-hidden shadow-sm">
                            <Image src={item.image} alt={item.name} fill className="object-cover hover:scale-105 transition-all duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-sm p-2">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
                {isMobile && (
                    <button
                        onClick={handleToggle}
                        className="mt-8 bg-[#f39c39fc] text-white px-10 py-3 rounded-[8px]  text-lg"
                    >
                        {visibleCount >= guestData.length ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        </section>
    );
}
