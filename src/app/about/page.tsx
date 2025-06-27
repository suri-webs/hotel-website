import Aboutheader from "@/components/Aboutpage/Aboutheader";
import Abouthotel from "@/components/Aboutpage/Abouthotel";
import Aboutteam from "@/components/Aboutpage/Aboutteam";


export default function AboutPage() {
    return (
        <section className="w-full h-full gap-[40px] flex flex-col ">
          <Aboutheader/>
          <Abouthotel/>
          <Aboutteam/>
        </section>
    )
}