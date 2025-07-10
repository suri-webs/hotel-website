import About from "@/components/about/About";
import Activities from "@/components/activities/Activities";
import { ContactUs } from "@/components/contactus/Contact";
import Header from "@/components/header/Header";
import Rooms from "@/components/rooms/Rooms";
import Services from "@/components/Services/Services";
import Testmonilas from "@/components/Testmonilas/Testmonilas";
import Video from "@/components/Vedio/Vedio";


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
