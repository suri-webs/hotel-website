import Aboutheader from "@/components/about-page/about-header/Aboutheader";
import AboutUser from "@/components/contact-page/AboutUser/AboutUser";
import Aboutteam from "@/components/about-page/about-team/Aboutteam";


export default function AboutPage() {
  return (
    <section className="w-full h-full gap-[40px] flex flex-col ">
      <Aboutheader />
      <AboutUser />
      <Aboutteam />
    </section>
  )
}