import AboutUser from "../../components/AboutUser/AboutUser";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import Location from "../../components/LocationCard/Location";

export default function ContactPage() {
    return (
        <section className="w-full h-full gap-[40px] flex flex-col ">
            <ContactHeader />
            <AboutUser />
            <Location />
        </section>
    )
}