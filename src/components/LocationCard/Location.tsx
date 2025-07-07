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
                    title="Hotel Location"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d204.9913741944246!2d78.32021521125125!3d30.13441395225515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA4JzAzLjgiTiA3OMKwMTknMTMuMSJF!5e1!3m2!1sen!2sin!4v1751015409177!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
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
