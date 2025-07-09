export default function BookNowCTA() {
  return (
    <section className="w-full py-16 bg-[#FAA543] flex flex-col items-center justify-center text-white text-center px-4">
      <h2 className="text-4xl font-bold mb-4 max-sm:text-2xl">
        Ready for Your Rishikesh Experience?
      </h2>
      <p className="text-xl mb-8 max-w-xl max-sm:text-base max-sm:mb-6">
        Book now and enjoy our premium services with a special 10% discount on your stay!
      </p>
      <button className="bg-white text-[#FAA543] font-semibold text-lg py-3 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300 max-sm:text-sm max-sm:px-4 max-sm:py-2">
        Book Now - Get 10% OFF! 🎉
      </button>
    </section>
  );
}
