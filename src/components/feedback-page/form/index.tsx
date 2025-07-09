"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export default function FeedbackForm() {
    const [rating, setRating] = useState(0);

    return (
        <section className="h-[700px] bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="bg-white border border-[#312e2e4d] rounded-2xl shadow-lg p-8 w-full max-w-3xl">
                <h2 className="text-center text-2xl font-bold mb-8">Share Your Experience</h2>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-1">Your Name <span className="text-red-500">*</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Overall Rating <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm">Poor</span>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <Star key={num} className={`w-6 h-6 cursor-pointer transition-colors ${rating >= num ? "text-yellow-400" : "text-gray-300"}`} onClick={() => setRating(num)} fill={rating >= num ? "currentColor" : "none"} />
                            ))}
                            <span className="text-gray-500 text-sm">Excellent</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Tell us about your experience <span className="text-red-500">*</span>
                        </label>
                        <textarea rows={4} placeholder="Share your thoughts..." className="w-full border rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>

                    <div className="text-center pt-4">
                        <button type="submit" className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                            Submit Feedback 🌟
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
