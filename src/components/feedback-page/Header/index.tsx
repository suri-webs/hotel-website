export default function FeedbackHeader() {
    return (
        <header className="w-full h-[730px] flex justify-center items-center relative bg-[url('/images/feedback-bg.jpg')] bg-cover bg-center bg-no-repeat border ">
            <div className="w-full h-full absolute inset-0 bg-[#000000d0]"></div>
            <div className="relative flex flex-col gap-5 justify-center items-center">
                <h1 className="text-[55px]  max-sm:w-[100%] max-sm:text-[27px] leading-[1.1] max-sm:text-center   font text-white  tracking-wider font-playfair-display">
                    We Value Your Feedback
                </h1>
                <p className="text-[#ffffffd3] max-sm:w-[95%] max-sm:text-sm text-lg w-[70%] text-center"> Your experience matters to us. Help us improve and share your
                    wonderful moments at our hotel in Rishikesh.</p>
                <button className="px-10 py-2 cursor-pointer text-white text-[18px] rounded-[5px] bg-gradient-to-r from-purple-500 to-indigo-500">Explore Now</button>
            </div>
        </header>
    )
}