export default function Location() {
    const data =
    {
        location:
            "Sanskrutam Guest House , Next to Tulsi Restaurant, Tapovan, Rishikesh - 249192",
        Phoneno: "+91 9536749558 / +91 8130864243 ",
        Email: " skillsYardinfo@moonlit.com"
    };

    return (
        <section className="w-full relative h-[600px] bg-white  flex justify-center items-center gap-[40px] max-md:flex-col max-md:h-full max-md:gap-[10px] ">
            <div className="w-[40%] z-99 h-[65%] rounded-[10px] overflow-hidden shadow-[0_0_1px_#2a2a2a]
             max-md:w-[85%] max-md:h-[50%]">
                <iframe
                    className="w-full h-full max-sm:w-full max-md:h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8334727226056!2d77.2167017752892!3d28.63475267566346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce273c8b08e31%3A0x4b9315d64e4d31b8!2sSkillCircle%20-%20Best%20Digital%20Marketing%20%26%20Data%20Science%20Institute!5e0!3m2!1sen!2sin!4v1745066672413!5m2!1sen!2sin"
                    loading="lazy"
                ></iframe>
            </div>
            <div className="w-[45%] h-[95%] max-md:w-[85%]  flex flex-col justify-start mt-[150px] max-md:mt-[0px] gap-[40px] z-99 p-[22px] max-sm:p-[0px] max-sm:py-[25px]">
                <div className="flex flex-col gap-[45px] max-sm:gap-[20px]  max-md:justify-center max-md:items-center max-md:h-fit">
                    <span className="text-5xl font-playfair-display tracking-widest text-black max-md:w-full max-sm:text-3xl">
                        Hotel Location
                    </span>
                    <span className="text-[17px] flex flex-col gap-[11px] text-[#211e1eda]">
                        <p><strong>Address :</strong> <span className="!w-[60%]">{data.location}</span></p>
                        <p><strong>Phone No :</strong> {data.Phoneno} </p>
                        <p><strong>Email :</strong> {data.Email}</p>
                    </span>
                </div>


            </div>
        </section>
    );
}
