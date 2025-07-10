import About from "@/components/about";
import Activities from "@/components/activities";
import { ContactUs } from "@/components/contactus";
import Header from "@/components/header";
import Rooms from "@/components/rooms";
import Services from "@/components/Services";
import Testmonilas from "@/components/Testmonilas";
import Video from "@/components/Vedio";


export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <About />
        <Services />
        <Rooms />
        <Video />
        <Activities />
        <Testmonilas />
        <ContactUs />
      </div>

    </>

  );
}
