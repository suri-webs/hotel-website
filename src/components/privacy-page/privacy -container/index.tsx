import Link from "next/link";

export default function PrivacyContainer() {
  const infoWeCollect = [
    {
      title: "Personal Information",
      color: "border-l-blue-500",
      items: [
        "Name, email address, and phone number",
        "Billing and payment information",
        "Government-issued ID for registration",
        "Special requests and preferences",
      ],
    },
    {
      title: "Reservation Information",
      color: "border-l-green-500",
      items: [
        "Check-in and check-out dates",
        "Room choices and booking requests",
        "Guest names and occupancy party details",
      ],
    },
    {
      title: "Website Usage Data",
      color: "border-l-purple-500",
      items: [
        "IP address and browser information",
        "Pages visited and time spent",
        "Cookies and similar tracking technologies",
      ],
    },
  ];

  const usageInfo = [
    {
      title: "Service Delivery",
      description:
        "Process reservations, provide room service, and enhance overall guest experience.",
      color: "bg-blue-100",
    },
    {
      title: "Communication",
      description:
        "Sending booking confirmations, updates, and responding to inquiries.",
      color: "bg-green-100",
    },
    {
      title: "Improvement",
      description:
        "Analyze website usage data to improve functionality, speed, and experience.",
      color: "bg-purple-100",
    },
    {
      title: "Marketing",
      description:
        "Share hotel news, deals, and updates about our services (with your consent).",
      color: "bg-orange-100",
    },
  ];

  const rights = [
    { title: "Access your data" },
    { title: "Request correction of information" },
    { title: "Request deletion of your data" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* ...Intro + Info Sections (unchanged)... */}
      
      {/* 🔐 Security Deposit Policy */}
      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">
          Security Deposit Policy – Jungle Retreat Tapovan 🔐
        </h2>
        <p className="text-gray-700 text-lg max-sm:text-sm">
          To ensure a safe and respectful environment for all guests, we may collect a refundable security deposit at the time of check-in.
        </p>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">💰 Deposit Amount</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>A security deposit of ₹1000–₹2000 per guest (depending on room or dorm type) may be required at check-in.</li>
            <li>The exact amount will be communicated at the time of booking or arrival.</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">📋 Purpose</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>Any accidental damage to property, furnishings, or linens</li>
            <li>Loss of keys or items belonging to the guest house</li>
            <li>Unusual cleaning costs due to misuse of the room or dorm</li>
          </ul>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">💵 Refund Terms</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>The full deposit will be refunded at check-out, provided:
              <ul className="list-disc pl-5">
                <li>No damage has occurred</li>
                <li>All items are accounted for</li>
                <li>Room/dorm is left in clean condition</li>
              </ul>
            </li>
            <li>Refunds are made in cash or by transfer, depending on how it was paid.</li>
          </ul>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">❗ Non-Refundable Situations May Include:</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>Smoking or alcohol use in non-designated areas</li>
            <li>Loss of key or towel/blanket</li>
            <li>Property damage (intentional or accidental)</li>
            <li>Violation of guest house policies</li>
          </ul>
        </div>

        <p className="text-gray-700 text-lg max-sm:text-sm">
          This policy helps us maintain a clean, safe, and peaceful environment for all guests. We appreciate your understanding and cooperation.
        </p>
      </section>

      {/* 🐾 Pet Policy Section */}
      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">
          Pet Policy – Jungle Retreat Tapovan 🐾
        </h2>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">✅ Pets Allowed (If Applicable)</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>Well-behaved small pets (dogs or cats) are welcome in private rooms only, not in dormitories or shared spaces.</li>
            <li>Guests must inform us in advance at the time of booking if bringing a pet.</li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">🐶 Pet Owner Responsibilities</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>Pets must be supervised at all times and not left alone in rooms.</li>
            <li>Ensure your pet does not disturb other guests (no excessive barking, etc.).</li>
            <li>Guests must clean up after their pets—waste bags are appreciated.</li>
          </ul>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">🛏️ Restrictions</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>Pets are not allowed on beds or furniture.</li>
            <li>Aggressive or untrained animals may be denied stay for the safety of others.</li>
            <li>Pet owners will be responsible for any damage caused by their pet.</li>
          </ul>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">💰 Pet Fee / Deposit</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>A refundable pet deposit of ₹2000 may be required to cover accidental damage or cleaning.</li>
          </ul>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-semibold text-xl mb-1 text-gray-800">❌ Not Allowed</h3>
          <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
            <li>Pets are not permitted in shared dormitories, kitchen, or dining area.</li>
            <li>No exotic pets or large animals, for safety and comfort of all guests.</li>
          </ul>
        </div>

        <p className="text-gray-700 text-lg max-sm:text-sm">
          We appreciate your cooperation in creating a friendly, pet-inclusive environment that respects all guests.
        </p>
      </section>

      {/* Back Link */}
      <div className="pt-6 text-center">
        <Link href={"/"} className="bg-[#FAA543] text-white px-5 py-2 rounded-md transition">
          ← Back to HomePage
        </Link>
      </div>
    </div>
  );
}
