"use client";
export default function FeedbackCta() {
  return (
    <section className="w-full h-[300px] bg-gradient-to-r from-[#6a9dfc] to-[#7e4ffb] flex flex-col items-center justify-center text-white text-center px-4">
      <h2 className="text-4xl font-bold mb-4 max-sm:text-2xl">
        We Value Your Feedback
      </h2>
      <p className="text-lg max-w-xl mx-auto mb-6 max-sm:text-base">
        Your opinion helps us improve! Share your experience and let us know how we did.
      </p>
      <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-[8px] shadow-md hover:scale-105 transition-transform duration-300 max-sm:text-sm"
      >
        Give Feedback ✨
      </button>
    </section>
  );
}
