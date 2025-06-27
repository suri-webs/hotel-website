import RoomsContainer from "@/components/RoomPage/RoomsContainer";
import RoomsHeader from "@/components/RoomPage/RoomsHeader";

export default function RoomsPage() {
    return(
        <>
        <section className="w-full h-full gap-[40px] flex flex-col ">
        <RoomsHeader/>
        <RoomsContainer/>
        </section>
        </>
    )
}