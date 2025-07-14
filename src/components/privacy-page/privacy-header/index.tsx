export default function PrivacyHeader() {
    return (
        <header className="w-full h-[730px] flex justify-center items-center relative bg-[url('/images/privacy-bg.jpg')] bg-cover bg-center bg-no-repeat border ">
            <div className="w-full h-full absolute inset-0 bg-[#000000d0]"></div>
            <div className="relative flex flex-col max-sm:w-full gap-5 justify-center items-center">
                <h1 className="text-[55px] max-sm:w-[100%] max-sm:text-[27px] leading-[1.1] max-sm:text-center font text-white tracking-wider font-playfair-display">
                    Privacy Policy
                </h1>
                <p className="text-[#ffffffd3] max-sm:w-[95%] max-sm:text-lg text-lg w-[70%] text-center">
                    Your privacy is important to us
                </p>
                <p className="text-[#ffffffd3] text-sm text-center">
                    Last updated: December 2025
                </p>
            </div>


        </header>
    )
}