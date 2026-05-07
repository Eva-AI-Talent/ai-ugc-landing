"use client";

import { motion } from "framer-motion";

const CALENDAR_URL = "https://calendar.app.google/jLbRVksH8HAbnSz18";

const growingBrandsFeatures = [
  "Fully managed program",
  "AI UGC video production",
  "Multi-platform distribution",
  "Trend-matched content",
  "Weekly performance report",
  "Performance incentive model",
  "Multi-account distribution",
];

const enterpriseFeatures = [
  "Everything in Growing Brands",
  "Fully managed program",
  "Cheaper per-video pricing",
  "Multi-geo & market distribution",
  "Spread across more accounts",
  "Dedicated account manager",
  "Performance incentive model",
];

const bonusTiers = [
  { views: "Milestone 1", tier: "tier 1 bonus" },
  { views: "Milestone 2", tier: "tier 2 bonus" },
  { views: "Milestone 3", tier: "tier 3 bonus" },
  { views: "Milestone 4", tier: "tier 4 bonus" },
  { views: "Milestone 5", tier: "tier 5 bonus" },
  { views: "Milestone 6", tier: "tier 6 bonus" },
  { views: "Milestone 7", tier: "tier 7 bonus" },
];

export default function Pricing() {
  const openCalendar = () => window.open(CALENDAR_URL, "_blank");

  return (
    <section id="pricing" className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-gray-400 tracking-wider uppercase text-center"
        >
          Pricing
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.03em] text-gray-900 text-center mt-4 leading-[1.1]"
        >
          Pay{" "}
          <em className="font-serif italic font-normal text-[#7c3aed]">
            per video
          </em>
          <br />
          with performance{" "}
          <em className="font-serif italic font-normal text-[#7c3aed]">
            incentives.
          </em>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-sans text-base text-gray-500 text-center max-w-[480px] mx-auto mt-6 leading-relaxed"
        >
          Every Diffusr program is scoped to your goals, output, and markets.
          Book a 20-min call and we&apos;ll build a custom plan with performance
          incentives baked in.
        </motion.p>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto mt-12">
          {/* Card 1 — Growing Brands */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8"
          >
            <p className="font-mono text-[11px] text-gray-400 tracking-wider">
              GROWING BRANDS
            </p>
            <p className="font-serif text-5xl text-gray-900 mt-3">Custom</p>
            <p className="font-sans text-sm text-gray-600 mt-2">
              Pricing scoped to your campaign goals
            </p>
            <div className="border-t border-gray-200 my-6" />
            <ul className="space-y-3 flex-1">
              {growingBrandsFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#7c3aed] font-bold">&#10003;</span>
                  <span className="font-sans text-sm text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={openCalendar}
              className="mt-8 w-full text-center bg-gray-900 text-white rounded-full py-3 font-sans text-sm font-medium hover:bg-gray-800 transition cursor-pointer"
            >
              Launch Campaign &rarr;
            </button>
          </motion.div>

          {/* Card 2 — Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-2xl p-8"
          >
            <p className="font-mono text-[11px] text-gray-700 tracking-wider">
              ENTERPRISE
            </p>
            <p className="font-serif text-5xl text-gray-900 mt-3">Let&apos;s talk</p>
            <p className="font-sans text-sm text-gray-600 mt-2">
              Built for high-volume, multi-market brands
            </p>
            <div className="border-t border-[#7c3aed]/15 my-6" />
            <ul className="space-y-3 flex-1">
              {enterpriseFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#7c3aed] font-bold">&#10003;</span>
                  <span className="font-sans text-sm text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={openCalendar}
              className="mt-8 w-full text-center bg-[#7c3aed] text-white rounded-full py-3 font-sans text-sm font-medium hover:bg-[#6d28d9] transition cursor-pointer"
            >
              Launch Campaign &rarr;
            </button>
          </motion.div>
          {/* ── Card 3 — Performance Bonuses ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8"
          >
            <p className="font-mono text-[11px] text-gray-400 tracking-wider">
              PERFORMANCE BONUSES
            </p>
            <p className="font-serif text-2xl text-gray-900 mt-3">
              Based on Views
            </p>
            <div className="border-t border-gray-200 my-6" />
            <div className="flex flex-col flex-1">
              {bonusTiers.map((row, i) => {
                const opacity = 0.3 + i * 0.1;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2.5 border-b border-dashed border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: `rgba(124, 58, 237, ${opacity})` }}
                      />
                      <span className="font-sans text-sm text-gray-700">
                        {row.views}
                      </span>
                    </div>
                    <span className="rounded-full bg-gray-50 border border-gray-200 px-3 py-0.5 font-mono text-[10px] text-gray-500">
                      {row.tier}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 font-sans text-[11px] text-gray-400 leading-relaxed">
              * Bonus structure & thresholds shared on your discovery call.
              Bonuses are cumulative — hitting the top tier unlocks all
              previous ones.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
