"use client";

import { motion } from "framer-motion";

export default function FeaturesBento() {
  const cells = [
    // CELL 1 — Fully managed
    {
      key: "fully-managed",
      className:
        "md:col-span-7 bg-white border border-gray-200 rounded-2xl p-8 min-h-[280px] flex flex-col justify-between",
      content: (
        <>
          <div>
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1L1 8V20C1 25.5 6.5 30 14 31C21.5 30 27 25.5 27 20V8L14 1Z"
                stroke="#1a1a2e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 16L12.5 19.5L19 13"
                stroke="#1a1a2e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="font-sans text-[32px] font-medium tracking-[-0.02em] text-gray-900 mt-3">
              Fully managed
            </h3>
            <p className="font-sans text-base text-gray-600 mt-3 max-w-sm leading-relaxed">
              We handle everything &mdash; creative strategy, persona building,
              content production, distribution, and performance reporting. Your
              team approves the direction. We execute it end to end.
            </p>
          </div>
          <div className="self-end mt-4">
            <span className="bg-[#7c3aed]/10 text-[#7c3aed] font-mono text-xs px-3 py-1 rounded-full">
              Zero internal resources needed
            </span>
          </div>
        </>
      ),
    },

    // CELL 2 — 18x Stat
    {
      key: "stat-18x",
      className:
        "md:col-span-5 bg-[#7c3aed] rounded-2xl p-8 flex flex-col justify-center",
      content: (
        <>
          <p className="font-serif text-8xl text-white">18&times;</p>
          <p className="font-mono text-[13px] text-white/60 mt-2">
            more impressions vs
            <br />
            traditional production
          </p>
        </>
      ),
    },

    // CELL 3 — Multi-channel distribution
    {
      key: "multi-channel",
      className:
        "md:col-span-4 bg-white border border-gray-200 rounded-2xl p-6",
      content: (
        <>
          <div className="flex gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-[#0D0D0D]" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            <div className="w-6 h-6 rounded-full bg-red-500" />
          </div>
          <h3 className="font-sans text-[26px] font-medium tracking-[-0.02em] text-gray-900">
            Multi-channel distribution
          </h3>
          <p className="font-sans text-base text-gray-600 mt-2 leading-relaxed">
            Every video posted simultaneously across TikTok, Instagram Reels,
            and YouTube Shorts &mdash; on warmed, managed accounts optimized for
            each platform.
          </p>
        </>
      ),
    },

    // CELL 4 — Live trend intelligence
    {
      key: "trend-intelligence",
      className:
        "md:col-span-4 bg-white border border-gray-200 rounded-2xl p-6",
      content: (
        <>
          <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 14L14 4M14 4H6M14 4V12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="font-sans text-[26px] font-medium tracking-[-0.02em] text-gray-900 mt-3">
            Live trend intelligence
          </h3>
          <p className="font-sans text-base text-gray-600 mt-2 leading-relaxed">
            We watch what&apos;s performing in your niche in real time and build
            content around it before it peaks &mdash; so you&apos;re always
            ahead of the curve.
          </p>
        </>
      ),
    },

    // CELL 5 — 87% lower CPM
    {
      key: "stat-cpm",
      className:
        "md:col-span-4 bg-[#7c3aed] rounded-2xl p-8 flex flex-col justify-center",
      content: (
        <>
          <p className="font-serif text-[64px] text-white">87%</p>
          <p className="font-mono text-xs text-white/60 mt-1">
            lower CPM vs
            <br />
            traditional content
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-gray-500 tracking-wider uppercase">
          What&apos;s Included
        </p>

        <h2 className="font-sans text-5xl font-medium tracking-[-0.03em] text-gray-900 max-w-[700px] mt-4 leading-[1.1]">
          Everything your brand{" "}
          <em className="font-serif italic font-normal text-[#7c3aed]">
            needs to win
          </em>{" "}
          on social. Nothing{" "}
          <em className="font-serif italic font-normal text-[#7c3aed]">
            you don&apos;t.
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 mt-12">
          {cells.map((cell, index) => (
            <motion.div
              key={cell.key}
              className={cell.className}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {cell.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
