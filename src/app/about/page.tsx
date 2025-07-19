import Aboutheader from "@/components/about-page/about-header";
import Aboutteam from "@/components/about-page/about-team";
import About from "@/components/about";


export default function AboutPage() {
  return (
    <section className="w-full h-full gap-[40px] flex flex-col ">
      <Aboutheader />
      <About />
      <Aboutteam />
    </section>
  )
}