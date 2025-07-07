
import { ContactUs } from "@/components/contactus/Contact";
import Rooms from "@/components/Rooms/Rooms";
import Activities from "@/components/Activities/Activities";
import Testmonilas from "@/components/Testmonilas/Testmonilas";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Video from "@/components/Vedio/Vedio";
import About from "@/components/about/About";


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
