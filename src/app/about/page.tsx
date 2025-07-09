import Aboutheader from "@/components/Aboutpage/about-header/Aboutheader";
import Aboutteam from "@/components/Aboutpage/about-team/Aboutteam";
import AboutUser from "@/components/contact-page/AboutUser/AboutUser";


export default function AboutPage() {
  return (
    <section className="w-full h-full gap-[40px] flex flex-col ">
      <Aboutheader />
      <AboutUser />
      <Aboutteam />
    </section>
  )
}