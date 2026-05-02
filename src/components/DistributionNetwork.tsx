"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const accounts = [
  {
    name: "Mia",
    handle: "@mia.wellness.la",
    location: "Los Angeles",
    gradient: "from-pink-400 to-rose-300",
    posts: 34,
    followers: "2.1K",
  },
  {
    name: "Dave",
    handle: "@davefromhouston",
    location: "Houston",
    gradient: "from-blue-400 to-slate-400",
    posts: 61,
    followers: "4.8K",
  },
  {
    name: "Zara",
    handle: "@zaraatl",
    location: "Atlanta",
    gradient: "from-purple-400 to-fuchsia-400",
    posts: 28,
    followers: "1.6K",
  },
  {
    name: "wellness.finds",
    handle: "@wellness.finds.sg",
    location: "Singapore",
    gradient: "from-emerald-400 to-teal-300",
    posts: 42,
    followers: "3.2K",
  },
];

const activityFeed = [
  { time: "2m", action: "Scrolled feed", highlight: false },
  { time: "8m", action: "Liked 3 posts", highlight: false },
  { time: "14m", action: "Posted video", highlight: true },
  { time: "22m", action: "Followed 1", highlight: false },
  { time: "35m", action: "Commented", highlight: false },
];

/* Dot-matrix world map grid (45 cols × 23 rows, equirectangular projection) */
const worldMapGrid = [
  "000000000000000000000000000000000000000000000",
  "000000000000000011110000000000000000000000000",
  "000000001010000011111001000001100011111111110",
  "001100011111100001100010001111011111111111111",
  "000000011111111100010011111111111111111111110",
  "000000001111111100000111111101111111111111110",
  "000000001111111110000001111100111111111111100",
  "000000001111111100000001111100011111011111100",
  "000000000111111100000011111110011110011111000",
  "000000000001111000000011111111011110001110000",
  "000000000000111000000011111111011100001100000",
  "000000000000110000000011111100001110011100000",
  "000000000000010000000011111100001110011110000",
  "000000000000001110000001111110001111000111000",
  "000000000000011111000001111100001110000101000",
  "000000000000011111100000111100001100000000000",
  "000000000000011111110000111000000000011110000",
  "000000000000011111110000011100100000111111000",
  "000000000000001111100000011000000000111111100",
  "000000000000000111100000011000000000011111100",
  "000000000000000110000000000000000000000001010",
  "000000000000000110000000000000000000000000000",
  "000000000000000100000000000000000000000000000",
];

/* City markers positioned on the dot grid */
const mapDots = [
  { cx: 18.3, cy: 19.4, label: "LA" },
  { cx: 24.7, cy: 20.9, label: "HOU" },
  { cx: 27.8, cy: 19.4, label: "ATL" },
  { cx: 30.6, cy: 16.9, label: "NYC" },
  { cx: 80.0, cy: 31.3, label: "SG" },
];

export default function DistributionNetwork() {
  return (
    <section className="bg-white px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row md:items-start md:gap-16">
        {/* ── Left: Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="flex flex-col items-start md:w-[380px] flex-shrink-0 mb-12 md:mb-0 md:sticky md:top-32"
        >
          <span className="inline-block rounded-full border border-gray-200 bg-gray-100 px-4 py-1.5 font-mono text-xs text-gray-600">
            Distribution
          </span>

          <h2 className="mt-6 max-w-[380px] font-sans text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.03em] text-gray-900">
            A network of{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">
              real accounts
            </em>{" "}
            that behave like real people.
          </h2>

          <p className="mt-4 max-w-[360px] font-sans text-base text-gray-500">
            Every account scrolls, likes, comments, and follows before it
            ever posts. The algorithm treats them like real users, because
            they act like real users.
          </p>
        </motion.div>

        {/* ── Right: Visuals ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUp}
          className="relative flex-1 min-w-0 space-y-5"
        >
          {/* ── Map + Live Activity (side by side) ── */}
          <div className="flex gap-4">
            {/* World Map */}
            <div className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 p-4 overflow-hidden">
              <p className="mb-2 font-mono text-[10px] text-gray-500">
                ACCOUNT LOCATIONS
              </p>
              <svg
                viewBox="0 0 100 52"
                className="h-auto w-full"
                fill="none"
              >
                {/* Dot-matrix land */}
                {worldMapGrid.map((row, y) =>
                  row.split("").map((cell, x) =>
                    cell === "1" ? (
                      <circle
                        key={`${x}-${y}`}
                        cx={(x + 0.5) * (100 / 45)}
                        cy={(y + 0.5) * (52 / 23)}
                        r={0.55}
                        fill="rgba(0,0,0,0.1)"
                      />
                    ) : null
                  )
                )}

                {/* City markers */}
                {mapDots.map((dot) => (
                  <g key={dot.label}>
                    <circle
                      cx={dot.cx}
                      cy={dot.cy}
                      r="2.2"
                      fill="rgba(124,58,237,0.12)"
                      className="animate-pulse"
                    />
                    <circle cx={dot.cx} cy={dot.cy} r="1" fill="#7c3aed" />
                    <text
                      x={dot.cx}
                      y={dot.cy - 3}
                      textAnchor="middle"
                      className="fill-gray-500 font-mono"
                      style={{ fontSize: "2.8px" }}
                    >
                      {dot.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Live Activity (compact) */}
            <div className="w-[180px] flex-shrink-0 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="mb-3 flex items-center gap-1.5">
                <p className="font-mono text-[9px] text-gray-500">
                  LIVE ACTIVITY
                </p>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>
              </div>
              <div className="space-y-2">
                {activityFeed.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-7 flex-shrink-0 font-mono text-[8px] text-gray-400 pt-px">
                      {item.time}
                    </span>
                    <div
                      className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                        item.highlight ? "bg-[#7c3aed]" : "bg-gray-300"
                      }`}
                    />
                    <span
                      className={`font-sans text-[11px] leading-tight ${
                        item.highlight
                          ? "font-medium text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {item.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Account Snapshots (single row) ── */}
          <div className="flex gap-3 overflow-x-auto">
            {accounts.map((acc) => (
              <div
                key={acc.handle}
                className="min-w-[160px] flex-1 rounded-xl border border-gray-200 bg-white p-3"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-7 w-7 rounded-full bg-gradient-to-br ${acc.gradient} flex-shrink-0`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-gray-900 truncate">
                      {acc.name}
                    </p>
                    <p className="font-mono text-[8px] text-gray-500 truncate">
                      {acc.handle}
                    </p>
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                </div>
                <div className="mt-2 flex items-center gap-3 font-mono text-[9px] text-gray-500">
                  <span>{acc.posts} posts</span>
                  <span>{acc.followers}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
