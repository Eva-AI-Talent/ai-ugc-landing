"use client";

import { motion } from "framer-motion";

const supportingStats = [
  "2 enterprise programs",
  "5 markets",
  "48hr turnaround",
  "$0 shoot costs",
];

const shopeeStats = ["500 videos", "PH market", "2 months", "$12/video"];

export default function Results() {
  return (
    <section id="results" className="bg-white py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#7c3aed] tracking-wider text-center"
        >
          {"// Real Results //"}
        </motion.p>

        {/* Big Stat */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-[120px] md:text-[150px] tracking-[-0.03em] text-gray-900 text-center leading-none mt-8"
        >
          500+
        </motion.h2>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-gray-400 text-center mt-4"
        >
          AI videos delivered · across Southeast Asia and the US
        </motion.p>

        {/* Supporting Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-2 mt-6 font-mono text-[13px] text-gray-400"
        >
          {supportingStats.map((stat, i) => (
            <span key={i} className="flex items-center gap-x-10">
              {i > 0 && <span className="mr-10">·</span>}
              {stat}
            </span>
          ))}
        </motion.div>

        {/* Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto mt-12">
          {/* Card 1 — Shopee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f7] border border-gray-200 rounded-[20px] p-8"
          >
            <p className="text-gray-700 font-bold text-lg">Shopee</p>
            <p className="font-mono text-[11px] text-gray-400 mt-1 tracking-wider">
              ENTERPRISE · AI UGC PROGRAM
            </p>
            <h3 className="font-serif text-[26px] text-gray-900 mt-4 leading-snug">
              500 videos. 2 months.
              <br />
              Zero shoots.
            </h3>
            <p className="font-sans text-sm text-gray-500 mt-3 leading-relaxed">
              Birby delivered a full AI UGC content program for Shopee
              Philippines — 500 videos produced and distributed across social
              channels with no talent, no production costs, and no delays.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 font-mono text-xs text-gray-400">
              {shopeeStats.map((stat, i) => (
                <span key={i}>{stat}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 — Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#7c3aed] rounded-[20px] p-8"
          >
            <span className="bg-white/20 text-white font-mono text-[11px] px-3 py-1 rounded-full inline-block tracking-wider">
              COMING SOON
            </span>
            <h3 className="font-serif text-[26px] text-white mt-4 leading-snug">
              US DTC brands.
              <br />
              Starting Q3 2025.
            </h3>
            <p className="font-sans text-sm text-white/70 mt-3 leading-relaxed">
              We&apos;re onboarding our first cohort of US DTC brands — apparel,
              beauty, and lifestyle. Early access includes founding member
              pricing locked in for life.
            </p>
            <a
              href="#"
              className="mt-6 bg-white text-[#7c3aed] rounded-full px-6 py-3 font-sans text-sm font-medium inline-block"
            >
              Apply for Early Access &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
