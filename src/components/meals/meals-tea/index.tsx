export default function TeaAndBeverages() {
  const items = [
    { name: "Masala Chai", emoji: "🍵" },
    { name: "Honey Ginger Lemon Tea", emoji: "🍯" },
    { name: "Green Tea", emoji: "🌿" },
    { name: "Herbal Tea", emoji: "🫖" },
    { name: "Hot Coffee / Cold Coffee", emoji: "☕" },
    { name: "Nimbu Pani (Lemon Water)", emoji: "🍋" },
    { name: "Plain Lassi", emoji: "🥛" },
    { name: "Banana Lassi", emoji: "🍌" },
    { name: "Dry Fruit Lassi", emoji: "🥜" },
  ];

  return (
    <section className="w-full py-20 flex flex-col gap-14 justify-center items-center">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-white bg-[#FAA543] max-sm:text-lg text-xl px-10 rounded-full py-2 flex justify-center items-center w-fit">
          Tea & Beverages
        </span>
        <h1 className="text-[55px] max-sm:text-[27px] leading-[1.1] max-sm:text-center font-bold tracking-wider font-playfair-display">
          Refresh  Recharge
        </h1>
        <p className="text-2xl max-sm:text-xl text-[#000000cc]">
          Served Throughout the Day
        </p>
      </div>

      {/* Menu */}
      <div className="w-full flex justify-center items-center flex-col gap-10">
     
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
