"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ── Illustration: Content Calendar ── */
function CalendarIllustration() {
  const filled = new Set([3, 9, 17, 24]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="grid grid-cols-6 gap-1.5">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`relative h-7 w-7 rounded-[5px] ${
              filled.has(i)
                ? "bg-[#7c3aed]/90"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            {i === 9 && (
              <svg
                viewBox="0 0 16 16"
                className="absolute inset-0 m-auto h-3.5 w-3.5 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <circle cx="8" cy="8" r="6" />
                <path d="M8 5v3l2 1.5" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <span className="font-mono text-[10px] text-gray-400">
        your weekly content calendar
      </span>
    </div>
  );
}

/* ── Illustration: Phone Feed ── */
function FeedIllustration() {
  const cards = [
    { label: "competitor", accent: false },
    { label: "trending", accent: false },
    { label: "your brand", accent: true },
    { label: "influencer", accent: false },
    { label: "competitor", accent: false },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative mx-auto w-[140px] rounded-2xl border border-white/10 bg-white/5 p-2">
        {/* scroll indicator */}
        <div className="absolute right-0.5 top-3 bottom-3 w-[3px] rounded-full bg-white/10">
          <div className="absolute top-[30%] h-[20%] w-full rounded-full bg-white/20" />
        </div>

        <div className="flex flex-col gap-1.5 pr-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-lg px-2.5 py-2 ${
                card.accent
                  ? "bg-[#7c3aed]/80 border border-[#7c3aed]"
                  : "bg-white/[0.06] border border-white/10"
              }`}
            >
              <div
                className={`h-1 w-10 rounded-full ${
                  card.accent ? "bg-white/60" : "bg-white/15"
                }`}
              />
              <div
                className={`mt-1 h-1 w-6 rounded-full ${
                  card.accent ? "bg-white/40" : "bg-white/10"
                }`}
              />
              <span
                className={`mt-1.5 block font-mono text-[7px] ${
                  card.accent ? "text-white/70" : "text-white/25"
                }`}
              >
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <span className="font-mono text-[10px] text-gray-400">
        your brand in the feed
      </span>
    </div>
  );
}

/* ── Main Section ── */
export default function Problem() {
  return (
    <section className="bg-white px-6 py-24">
      {/* ── Header ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
        className="flex flex-col items-center"
      >
        <span className="inline-block rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 font-mono text-xs text-gray-500">
          The Reality
        </span>

        <h2 className="mx-auto mt-6 max-w-[640px] text-center font-sans text-5xl font-medium leading-[1.1] tracking-[-0.03em] text-gray-900">
          How brands win on social is{" "}
          <em className="font-serif italic font-normal text-[#7c3aed]">evolving fast.</em>
        </h2>
      </motion.div>

      {/* ── Two Problem Cards ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        className="mx-auto mt-14 grid max-w-[960px] grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* ━━ Card 1 — Light ━━ */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-10"
        >
          <div className="mb-8 flex h-[180px] items-center justify-center">
            <CalendarIllustration />
          </div>

          <span className="font-mono text-xs text-gray-400 tracking-wide">
            PROBLEM 01
          </span>

          <h3 className="mt-3 font-serif text-3xl leading-snug text-gray-900">
            Human content
            <br />
            doesn&rsquo;t scale.
          </h3>

          <p className="mt-4 font-sans text-[15px] leading-relaxed text-gray-500">
            One shoot. One editor. One week for a single post. The feed
            demands volume, variety, and velocity. Those are machine-scale
            commands, not human ones.
          </p>
        </motion.div>

        {/* ━━ Card 2 — Dark ━━ */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col rounded-2xl border border-gray-800 bg-gray-950 p-10"
        >
          <div className="mb-8 flex h-[180px] items-center justify-center">
            <FeedIllustration />
          </div>

          <span className="font-mono text-xs text-[#7c3aed] tracking-wide">
            PROBLEM 02
          </span>

          <h3 className="mt-3 font-serif text-3xl leading-snug text-white">
            Attention is harder
            <br />
            to earn than ever.
          </h3>

          <p className="mt-4 font-sans text-[15px] leading-relaxed text-gray-400">
            The feed is infinite. The scroll never stops. Brands that don&rsquo;t
            post content that looks native, feels real, and hits at the right
            moment get buried by brands that have huge production budgets.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
