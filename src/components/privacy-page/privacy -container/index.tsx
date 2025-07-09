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
      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">Introduction</h2>
        <p className="text-gray-700 text-xl max-sm:text-sm">
          Welcome to our hotel. We are committed to protecting your personal
          information and your right to privacy. This Privacy Policy explains
          what data we collect, how we use it, and safeguard your information
          when you visit our website, make a reservation, or stay at our hotel.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">
          Information We Collect
        </h2>
        {infoWeCollect.map((info, index) => (
          <div
            key={index}
            className={`border-l-4 ${info.color} pl-4 text-gray-700`}
          >
            <h3 className="font-semibold mb-2 text-2xl">{info.title}</h3>
            <ul className="list-disc pl-5  text-lg max-sm:text-sm">
              {info.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">
          How We Use Your Information
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {usageInfo.map((use, index) => (
            <div
              key={index}
              className={`p-4 rounded-md ${use.color} text-gray-800`}
            >
              <h3 className="font-semibold text-xl mb-1">{use.title}</h3>
              <p className="text-lg max-sm:text-sm">{use.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">Information Sharing</h2>
        <div className="border border-yellow-300 bg-yellow-50 p-4 text-gray-800">
          <p className="font-semibold text-2xl mb-2">
            We do not sell your personal information.
          </p>
          <p className="mb-2 text-lg">We may share your information only in these cases:</p>
          <ul className="list-disc pl-5">
            <li>With service providers who help us operate our business</li>
            <li>When legally required by law or legal request</li>
            <li>With your explicit consent for specific purposes</li>
            <li>In case of a business transfer or merger</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">Data Security</h2>
        <p className="text-gray-700 text-xl max-sm:text-lg">
          We implement appropriate technical and organizational security
          measures to protect your personal information against unauthorized
          access, disclosure, alteration, or destruction.
        </p>
        <ul className="list-disc pl-5 text-lg max-sm:text-sm text-gray-700">
          <li>Data encryption</li>
          <li>Secure servers</li>
          <li>Regular audits</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">Your Rights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {rights.map((right, index) => (
            <div
              key={index}
              className="border p-4 text-xl max-sm:text-lg rounded-md shadow-sm bg-white text-gray-800"
            >
              {right.title}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or our data
          practices, please contact us:
        </p>
        <p className="text-gray-700">
          Email: privacy@ourhotel.com <br />
          Phone: +1 (555) 123-9876 <br />
          Address: 123 Street Street, City, State 12345
        </p>
      </section>

      <div className="pt-6 text-center">
        <Link href={"/"} className="bg-[#FAA543] text-white px-5 py-2 rounded-md transition">
          ← Back to HomePage
        </Link>
      </div>
    </div>
  );
}
