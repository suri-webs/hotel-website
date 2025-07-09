import AboutUser from "@/components/contact-page/AboutUser/AboutUser";
import ContactHeader from "@/components/contact-page/ContactHeader/ContactHeader";
import Location from "@/components/contact-page/LocationCard/Location";



export default function ContactPage() {
    return (
        <section className="w-full h-full gap-[40px] flex flex-col ">
            <ContactHeader />
            <AboutUser />
            <Location />
        </section>
    )
}