export default function AboutUser() {
    return(
        <section className=" w-full h-[700px] max-md:h-[500px] p-10 flex justify-center items-center gap-[40px] bg-[#F8F7F7] max-sm:flex-col max-sm:p-[0px] max-lg:gap-[100px] max-sm:min-h-[100vh] max-sm:gap-[10px] ">
            <div className="w-[45%] max-lg:w-[40%]   h-[100%] p-[10px] flex flex-col justify-evenly max-lg:justify-center gap-[10px] max-sm:h-[50%] max-sm:w-full max-sm:items-center max-sm:gap-[10px] " >
                <span className="text-[38px] max-lg:text-2xl max-lg:w-[300px] text-[#222222cd] playfair-display w-[550px] max-md:text-3xl max-sm:w-[85%] max-sm:text-[20px] max-sm:text-center">Love to hear from you! Get in touch with us today</span>
                <input type="text" placeholder="Your Name" className="w-full pl-[20px] bg-white border-2 h-[55px] rounded-[10px] border-[#2222] max-sm:w-[85%]"/>
                <input type="text" placeholder="Your Email" className="w-full pl-[20px] bg-white border-2 h-[55px] rounded-[10px] border-[#2222]  max-sm:w-[85%]" />
                <textarea name="" id="" placeholder="Enter Your Message" className="w-full bg-white h-[150px] p-[20px] border-2 border-[#2222] rounded-[10px]  max-sm:w-[85%]"></textarea>
                <button type="submit" className="w-full  bg-gradient-to-r from-blue-500 to-teal-400 hover:scale-103 transition-all ease-in duration-200   hover:shadow-[0_0_20px_rgba(13,148,136,0.5)] h-[50px] text-[17px] rounded-[10px] text-white  max-sm:w-[85%]" >Send Message</button>
            </div>
            <div className="w-[45%] h-[90%] max-lg:w-[40%] max-lg:h-[70%]  max-md:h-[95%] rounded-2xl overflow-hidden flex justify-center items-center max-sm:w-[90%] max-sm:h-full  ">
            <div className="w-full h-full max-sm:h-[70%] rounded-2xl bg-fixed inset-0 bg-center bg-cover bg-no-repeat overflow-hidden bg-[url(/images/details.webp)]  transition-all ease-in duration-300 " >
            </div>
            </div>
        </section>
    )

}