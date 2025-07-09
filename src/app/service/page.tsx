import PerfectLocation from "@/components/service-page/perfect-location";
import SeviceCards from "@/components/service-page/service-card";
import BookNowCTA from "@/components/service-page/service-cta";
import ServiceHeader from "@/components/service-page/service-header";

export default function ServicePage() {
    return (
        <>
            <ServiceHeader />
            <SeviceCards />
            <PerfectLocation />
            <BookNowCTA />
        </>
    )
}