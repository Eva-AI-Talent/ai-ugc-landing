"use client";

import { motion } from "framer-motion";

const CALENDAR_URL = "https://calendar.app.google/ac8ZrVyRbGCw87yh7";

const tiers = [
  {
    id: "startups",
    label: "Startups",
    headline: "Get to market fast.",
    descriptor: "For brands launching their first AI UGC motion.",
    cta: "Book a Discovery Call",
    featured: false,
    features: [
      "30-video minimum",
      "Single market targeting",
      "Shared distribution pool",
      "Monthly optimization cadence",
      "Simple entry pricing",
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    headline: "Scale without limits.",
    descriptor: "For high-volume brands scaling across markets.",
    cta: "Explore Enterprise",
    featured: true,
    features: [
      "High volume production",
      "Multi-geo targeting",
      "Custom AI avatar & voice",
      "Weekly optimization cadence",
      "Dedicated account manager",
      "Flexible per-video at volume",
    ],
  },
  {
    id: "agencies",
    label: "Agencies",
    headline: "White-label ready.",
    descriptor: "For agencies reselling AI UGC to their clients.",
    cta: "Explore Agency Plans",
    featured: false,
    features: [
      "High volume, multi-client",
      "Multi-geo per client",
      "Custom AI avatar & voice",
      "Weekly cadence, per client",
      "Dedicated partner manager",
      "White-label — your brand, not ours",
      "Reseller pricing + margins",
    ],
  },
];

function Check() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M3 7.5L6.5 11L12 4"
        stroke="#7c3aed"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  const openCalendar = () => window.open(CALENDAR_URL, "_blank");

  return (
    <section id="pricing" className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-[1000px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-flex items-center bg-gray-900 text-white text-xs font-sans font-medium px-4 py-2 rounded-full">
            Who&apos;s Diffusr for?
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            For brands that{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">
              scale,
            </em>{" "}
            convert,
            <br />
            and dominate.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`flex flex-col rounded-2xl p-7 ${
                tier.featured
                  ? "bg-white border border-[#c4b5fd] shadow-md"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              {/* Tier label */}
              <p className="font-sans text-sm font-medium text-gray-400">
                {tier.label}
              </p>

              {/* Headline */}
              <p className="mt-2 font-sans text-[26px] font-bold text-gray-900 leading-snug">
                {tier.headline}
              </p>

              {/* CTA button */}
              <button
                onClick={openCalendar}
                className={`mt-5 w-full rounded-xl py-3 font-sans text-sm font-semibold transition cursor-pointer ${
                  tier.featured
                    ? "bg-gray-900 text-white hover:bg-gray-700"
                    : "bg-gray-900 text-white hover:bg-gray-700"
                }`}
              >
                {tier.cta} &rarr;
              </button>

              {/* Descriptor */}
              <p className="mt-3 font-sans text-xs text-gray-400 leading-relaxed">
                {tier.descriptor}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 my-6" />

              {/* Feature list */}
              <ul className="space-y-3 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check />
                    <span className="font-sans text-sm text-gray-600 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
