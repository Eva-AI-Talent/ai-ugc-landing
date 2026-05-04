"use client";

import { motion } from "framer-motion";

const CALENDAR_URL = "https://calendar.app.google/jLbRVksH8HAbnSz18";

export default function WaitlistCTA() {
  const openCalendar = () => window.open(CALENDAR_URL, "_blank");

  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        className="max-w-[1100px] mx-auto bg-gray-50 border border-gray-200 rounded-3xl p-12 md:p-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Grid line overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Headline */}
          <motion.h2
            className="font-sans text-5xl md:text-6xl font-medium tracking-[-0.03em] text-gray-900 text-center leading-tight max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Launch your{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">
              next AI UGC campaign
            </em>{" "}
            now
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-sans text-xl text-gray-700 text-center mt-6 max-w-[560px] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Join brands already using Diffusr to generate 173m+ impressions at
            scale
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <button
              onClick={openCalendar}
              className="rounded-full bg-gray-900 text-white font-sans text-sm font-medium px-8 py-3.5 hover:bg-gray-800 transition cursor-pointer"
            >
              Launch Campaign &rarr;
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
