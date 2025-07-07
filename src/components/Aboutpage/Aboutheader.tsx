export default function Aboutheader() {
    return (
      <header className="h-[650px] max-sm:h-[730px] w-full relative flex justify-center items-center">
        {/* Background image */}
        <div className="absolute h-[100%]  inset-0 bg-[url('/images/about-header-bg.webp')] bg-cover bg-center bg-fixed "></div>
  
        {/* Dark overlay on top */}
        <div className="absolute  h-[100%] inset-0 bg-[#0000009f] z-20"></div>
  
        {/* Content */}
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center px-4 text-center text-white">
          <h1 className="font-playfair-display text-3xl md:text-5xl">About Us</h1>
          <p className="text-lg md:text-2xl mt-4">
            Welcome to Booking, where luxury meets comfort in the heart of Canada.
          </p>
        </div>
      </header>
    );
  }
  