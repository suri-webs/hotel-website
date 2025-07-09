import RoomsContainer from "@/components/RoomPage/rooms-container/RoomsContainer";
import RoomsHeader from "@/components/RoomPage/rooms-header/RoomsHeader";

export default function RoomsPage() {
    return (
        <>
            <section className="w-full h-full gap-[40px] flex flex-col ">
                <RoomsHeader />
                <RoomsContainer />
            </section>
        </>
    )
}