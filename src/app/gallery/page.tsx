import GalleryContact from "@/components/gallery-page/gallery-contact";
import DiscoverAuroville from "@/components/gallery-page/gallery-discover";
import GalleryHeader from "@/components/gallery-page/gallery-header";
import RandomPickGrid from "@/components/gallery-page/gallery-random";

export default function GalleryPage() {
    return (
        <>
            <GalleryHeader />
            <GalleryContact />
            <RandomPickGrid />
            <DiscoverAuroville />
        </>
    )
}