export default function MealsLunch() {
  const items = [
    { name: "Steamed Rice with Dal", emoji: "🍛" },
    { name: "Boondi Raita", emoji: "🥣" },
    { name: "Chapati", emoji: "🫓" },
    { name: "Fresh Salad", emoji: "🥗" },
  ];

  return (
    <section className="w-full py-20 flex flex-col gap-14 justify-center items-center">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-white bg-[#FAA543] max-sm:text-lg text-xl px-10 rounded-full py-2 flex justify-center items-center w-fit">
          Lunch
        </span>
        <h1 className="text-[55px] max-sm:w-[100%] max-sm:text-[27px] leading-[1.1] max-sm:text-center font-bold tracking-wider font-playfair-display">
          Jungle Retreat Thali
        </h1>
        <p className="text-2xl max-sm:text-xl text-[#000000cc]">
          Available 1:30 PM - 3:00 PM
        </p>
      </div>

      {/* Menu */}
      <div className="w-full flex justify-center items-center flex-col gap-10">
        <h2 className="text-3xl w-[40%] max-lg:w-[50%] max-sm:w-[90%] pb-2 border-[#FAA543] border-b-2 text-center">
          Complete Thali Experience
        </h2>
        <div className="bg-white rounded-3xl shadow-lg w-[90%] sm:w-[80%] lg:w-[90%] px-10 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="border border-amber-400 group text-left text-lg sm:text-xl font-medium flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-[#FAA543] hover:text-white transition duration-300"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
