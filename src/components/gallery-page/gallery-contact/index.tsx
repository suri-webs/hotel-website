'use client';
import Image from 'next/image';

export default function GalleryContact() {
  return (
    <section className="bg-[#fff6ec] h-[750px] max-lg:h-full py-16 max-sm:px-4 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col justify-between h-full">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="relative w-full  h-60 md:h-72 rounded-sm overflow-hidden">
            <Image src="/gallery/gallery-1.jpg" alt="Guest House" fill className="object-cover rounded-lg" />
          </div>

          <div className="text-[#a34e2d]">
            <h2 className="text-3xl max-sm:text-2xl font-semibold mb-4 tracking-wide">GUEST HOUSES</h2>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed max-sm:text-lg">
              The international Township of Auroville offers a wide range of hospitality options
              that will help you to discover all the magic of the city that never ages.
            </p>
            <button className="bg-[#f9a825] hover:bg-[#f57f17] text-white px-5 py-2 text-sm font-medium rounded">
              DISCOVER ALL →
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center max-lg:flex max-lg:flex-col-reverse gap-10 mt-10">
          <div className="text-[#a34e2d]">
            <h2 className="text-3xl max-sm:text-2xl font-semibold mb-4 tracking-wide">RESIDENTIAL STAYS</h2>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed max-sm:text-lg">
              There are a wide range of Residential Stay options available in Auroville and through
              your stay, you &apos; ll have a real experience living & sharing with members of Auroville
              and their family.
            </p>
            <button className="bg-[#f9a825] hover:bg-[#f57f17] text-white px-5 py-2 text-sm font-medium rounded">
              DISCOVER ALL →
            </button>
          </div>
          <div className="relative w-full  h-60 md:h-72 rounded-sm overflow-hidden">
            <Image src="/gallery/gallery-2.jpg" alt="Residential Stay" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
