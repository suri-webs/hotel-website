import { Mail, Phone, FileSliders } from 'lucide-react';
import Heading from "../Heading/Heading";

export function ContactUs() {
    return (
        <section className="flex w-full max-md:flex-col max-md:my-20 max-md:h-full h-[600px] justify-center bg-[#f6e7e724] text-gray-800 items-center gap-20">
            <div className="w-[40%] max-md:w-[85%]  flex flex-col gap-5">
                <Heading text="CONTACT US" />
                <h2 className="max-md:text-4xl text-5xl font-playfair-display">Where we are</h2>
                <div className="w-95 h-0.5 max-sm:w-70 bg-[#f39c39fc] mt-2" />
                <p className="text-lg font-semibold">Location in Rishikesh</p>
                <p className="text-base text-gray-600">
                    123 Himalayan Retreat Rd, Tapovan, Rishikesh, Uttarakhand, 990082 India
                </p>

                <div className="flex flex-col gap-3 text-base text-gray-600">
                    <p className="flex items-center gap-2 ">
                        <Mail className="w-5 text-[#f39c39fc]" /> admin@hotelrishikesh.com
                    </p>
                    <p className="flex items-center gap-2">
                        <Phone className="w-5 text-[#f39c39fc]" /> +91 9876543210
                    </p>
                    <p className="flex items-center gap-2">
                        <FileSliders className="w-5 text-[#f39c39fc]" /> +91 1234567890
                    </p>
                </div>

                <button className="w-fit px-12 py-3 bg-[#fb9118f9] text-sm text-white rounded hover:bg-[#ffa844f9] transition">
                    Get Direction
                </button>
            </div>

            <div className="w-[40%] max-sm:w-[90%] max-sm:h-[350px] max-md:w-[85%] h-[400px] shadow-2xl rounded-2xl overflow-hidden">
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
        </section>
    );
}
