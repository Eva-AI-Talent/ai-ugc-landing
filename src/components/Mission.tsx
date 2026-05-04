"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Quality at scale",
    body: "Every video is matched to a live trend and optimized for its platform before it goes out. Volume doesn\u2019t mean compromise.",
  },
  {
    number: "02",
    title: "Fully managed, fully transparent",
    body: "You brief us once and see everything \u2014 what we\u2019re making, where it\u2019s going, and how it\u2019s performing. No black boxes.",
  },
  {
    number: "03",
    title: "Built for the long game",
    body: "The brands winning on social in 2026 are the ones building systematic content operations \u2014 not scrambling for the next shoot. Diffusr is that system.",
  },
];

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="relative z-10 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-xs uppercase tracking-wider text-gray-400"
        >
          Our Belief
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-6 max-w-[800px] font-serif text-6xl leading-tight tracking-[-0.02em] text-gray-900 md:text-7xl"
        >
          The internet is drowning
          <br />
          in <em className="font-serif italic text-gray-400">AI slop.</em>
          <br />
          We&rsquo;re not adding to it.
        </motion.h2>

        {/* Purple divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-8 h-px w-[60px] bg-[#7c3aed]"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-8 max-w-[560px] font-sans text-lg leading-relaxed text-gray-500"
        >
          Diffusr builds AI content programs that are designed to actually perform
          &mdash; trend-matched, platform-native, and built around what your
          audience genuinely responds to. Volume without quality is just noise.
          We do both.
        </motion.p>

        {/* Pillars */}
        <div className="mx-auto mt-16 max-w-[700px] space-y-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 * i,
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="border-t border-[#7c3aed]/20 pb-8 pt-5 text-left"
            >
              <p className="font-mono text-sm text-gray-700">
                {pillar.number} &middot; {pillar.title}
              </p>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-gray-500">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
