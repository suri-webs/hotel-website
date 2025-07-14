import { petPolicyData, securityPolicyData } from "@/lib/privacy";
import Link from "next/link";
export default function PrivacyContainer() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">
          Security Deposit Policy – Jungle Retreat Tapovan 🔐
        </h2>
        <p className="text-gray-700 text-lg max-sm:text-sm">
          To ensure a safe and respectful environment for all guests, we may collect a refundable security deposit at the time of check-in.
        </p>

        {securityPolicyData.map((item, idx) => (
          <div key={idx} className={`border-l-4 ${item.color} pl-4`}>
            <h3 className="font-semibold text-xl mb-1 text-gray-800">{item.title}</h3>
            <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
              {item.points.map((point, i) =>
                Array.isArray(point) ? (
                  <li key={i}>
                    {item.points[i - 1] || ""}
                    <ul className="list-disc pl-5">
                      {point.map((subPoint, subIdx) => (
                        <li key={subIdx}>{subPoint}</li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={i}>{point}</li>
                )
              )}
            </ul>
          </div>
        ))}

        <p className="text-gray-700 text-lg max-sm:text-sm">
          This policy helps us maintain a clean, safe, and peaceful environment for all guests. We appreciate your understanding and cooperation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">
          Pet Policy – Jungle Retreat Tapovan 🐾
        </h2>

        {petPolicyData.map((item, idx) => (
          <div key={idx} className={`border-l-4 ${item.color} pl-4`}>
            <h3 className="font-semibold text-xl mb-1 text-gray-800">{item.title}</h3>
            <ul className="list-disc pl-5 text-gray-700 text-base max-sm:text-sm">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-gray-700 text-lg max-sm:text-sm">
          We appreciate your cooperation in creating a friendly, pet-inclusive environment that respects all guests.
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
