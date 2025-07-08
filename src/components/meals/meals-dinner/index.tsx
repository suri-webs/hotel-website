export default function MealsDinner() {
  const items = [
    { name: "Seasonal Vegetable", emoji: "🥬" },
    { name: "Dal Soup", emoji: "🍲" },
    { name: "Chapati", emoji: "🫓" },
    { name: "Steamed Rice", emoji: "🍚" },
    { name: "Tadka Salad", emoji: "🥗" },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center justify-center gap-14 bg-[#f9f9f9]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <span className="text-white bg-[#FAA543] max-sm:text-lg text-xl px-10 rounded-full py-2">
          Dinner
        </span>
        <h1 className="text-[55px] max-sm:text-[27px] text-center font-bold tracking-wider font-playfair-display">
          Evening Comfort
        </h1>
        <p className="text-2xl max-sm:text-xl text-[#000000cc] text-center">
          Available 8:00 PM – 9:30 PM
        </p>
      </div>

      {/* Menu Card */}
      <div className="bg-white rounded-3xl shadow-lg w-[90%] sm:w-[80%] lg:w-[90%] px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-4">
          {items.map((item, index) => (
            <div key={index}className="border border-amber-400 group text-left text-lg sm:text-xl font-medium flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-[#FAA543] hover:text-white transition duration-300">
              <span className="text-2xl">{item.emoji}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
