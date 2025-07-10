import FeedbackCta from "@/components/feedback-page/feedback-cta";
import FeedbackForm from "@/components/feedback-page/form";
import FeedbackHeader from "@/components/feedback-page/Header";
import Testimonials from "@/components/Testmonilas";

export default function Feedback() {
    return (
        <>
            <FeedbackHeader />
            <FeedbackForm />
            <Testimonials />
            <FeedbackCta />
        </>
    )
}