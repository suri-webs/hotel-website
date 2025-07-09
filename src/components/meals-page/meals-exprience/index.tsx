export default function CuisineCTA() {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-white">
      <div className="w-[90%] bg-white shadow-lg rounded-3xl text-center max-sm:p-2 p-10 flex flex-col gap-6 items-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E2F]">
          Ready to Experience Our Cuisine?
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-600">
          Book your stay and indulge in our carefully crafted vegetarian meals made with love and seasonal ingredients.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="px-8 py-3 bg-[#FAA543] text-white font-semibold rounded-[8px] shadow-md hover:bg-[#e19031] transition">
            Book Your Stay
          </button>
          <button className="px-8 py-3 border-2 border-[#FAA543] text-[#FAA543] font-semibold rounded-[8px] hover:bg-[#FAA543] hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
