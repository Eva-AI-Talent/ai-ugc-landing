"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CALENDAR_URL = "https://calendar.app.google/ac8ZrVyRbGCw87yh7";

const tiers = [
  {
    id: "enterprise",
    name: "ENTERPRISE",
    tagline: "Scale without limits.",
    color: "#EDE9FE",
    features: [
      "High-volume AI UGC video production",
      "Multi-geo & multi-platform distribution",
      "Custom AI avatar & brand voice training",
      "Dedicated account manager",
      "Spread across hundreds of creator accounts",
      "Flexible per-video pricing at volume",
    ],
    cta: "Explore Enterprise",
  },
  {
    id: "agencies",
    name: "AGENCIES",
    tagline: "White-label. Zero friction.",
    color: "#DDD6FE",
    features: [
      "Fully white-labelled — your brand, not ours",
      "Manage all client campaigns from one dashboard",
      "Per-client performance & ROI reporting",
      "Reseller pricing with healthy margins",
      "We stay invisible — your clients see only you",
      "Fully managed AI content production end-to-end",
    ],
    cta: "Explore Agency Plans",
  },
  {
    id: "startups",
    name: "STARTUPS",
    tagline: "Growth without the first hire.",
    color: "#C4B5FD",
    features: [
      "30-video minimum — get to market fast",
      "Trend-matched content for your niche",
      "Multi-platform distribution (TikTok, Reels, Shorts)",
      "Pay per video, simple flat rate",
      "Weekly performance reports",
      "Scale up as you grow",
    ],
    cta: "Book a Discovery Call",
  },
];

function CornerDot({ className }: { className: string }) {
  return (
    <span className={`absolute w-2 h-2 rounded-full bg-gray-800 ${className}`} />
  );
}

export default function Pricing() {
  const [openTier, setOpenTier] = useState<string>("enterprise");

  const openCalendar = () => window.open(CALENDAR_URL, "_blank");

  return (
    <section id="pricing" className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — sticky heading */}
          <div className="md:sticky md:top-24">
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
          </div>

          {/* Right — accordion cards */}
          <div className="flex flex-col gap-3">
            {tiers.map((tier) => {
              const isOpen = openTier === tier.id;
              return (
                <div
                  key={tier.id}
                  className="relative border border-gray-300 cursor-pointer transition-colors duration-300"
                  style={{ backgroundColor: isOpen ? tier.color : "#ffffff" }}
                  onClick={() => setOpenTier(isOpen ? "" : tier.id)}
                >
                  <CornerDot className="top-2 left-2" />
                  <CornerDot className="top-2 right-2" />
                  <CornerDot className="bottom-2 left-2" />
                  <CornerDot className="bottom-2 right-2" />

                  <div className="px-8 py-6">
                    {/* Header row */}
                    <div className="grid grid-cols-[auto_1fr] items-baseline gap-6">
                      <span
                        className="text-[72px] font-black leading-none tracking-tight text-gray-900 whitespace-nowrap"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {tier.name}
                      </span>
                      <span className="font-sans text-sm text-gray-500 whitespace-nowrap">
                        {tier.tagline}
                      </span>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-8 space-y-3">
                            {tier.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-3 font-sans text-sm text-gray-800"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openCalendar();
                            }}
                            className="mt-8 mb-2 bg-gray-900 text-white rounded-full px-7 py-3 font-sans text-sm font-semibold hover:bg-gray-700 transition cursor-pointer"
                          >
                            {tier.cta} &rarr;
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
