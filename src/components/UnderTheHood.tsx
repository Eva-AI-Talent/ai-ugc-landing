"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const formats = [
  {
    title: "POV: first time trying",
    description: "Mid-action open, no context, raw reaction sells the product.",
    avgViews: "4.2M",
    avgER: "6.8%",
    avgShares: "12K",
    images: [
      "/images/pov-1.jpeg",
      "/images/pov-2.jpeg",
      "/images/pov-3.jpeg",
    ],
  },
  {
    title: "Before / after reveal",
    description: "Silence then audio drop at the transformation moment.",
    avgViews: "8.1M",
    avgER: "7.2%",
    avgShares: "24K",
    images: [
      "/images/ba-1.jpeg",
      "/images/ba-2.jpeg",
      "/images/ba-3.jpeg",
    ],
  },
  {
    title: "We can stay here or go up",
    description: "Glow-up trend that contrasts where they started with where they are now — raw nostalgia into aspirational transformation.",
    avgViews: "6.4M",
    avgER: "8.1%",
    avgShares: "18K",
    images: [
      "/images/glow-1.jpeg",
      "/images/glow-2.jpeg",
      "/images/glow-3.jpeg",
    ],
  },
];

type Format = {
  title: string;
  description: string;
  avgViews: string;
  avgER: string;
  avgShares: string;
  images?: string[];
  thumbnails?: string[];
};

function FormatCard({
  format,
  index,
}: {
  format: Format;
  index: number;
}) {
  const rotations = [-3, 0, 3];
  const offsets = [8, 0, 8];

  return (
    <div
      className="w-[280px] flex-shrink-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
      style={{
        transform: `rotate(${rotations[index]}deg)`,
        marginTop: `${offsets[index]}px`,
      }}
    >
      {/* Thumbnails row */}
      <div className="flex gap-1.5 mb-4">
        {"images" in format && format.images
          ? format.images.map((src, i) => (
              <div key={i} className="aspect-[9/16] flex-1 rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`${format.title} ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))
          : format.thumbnails?.map((gradient, i) => (
              <div
                key={i}
                className={`aspect-[9/16] flex-1 rounded-lg bg-gradient-to-br ${gradient}`}
              />
            ))}
      </div>

      {/* Title */}
      <p className="font-sans text-sm font-medium text-gray-900">
        {format.title}
      </p>

      {/* Description */}
      <p className="mt-1 font-sans text-[12px] text-gray-500 leading-snug">
        {format.description}
      </p>

      {/* Metrics row */}
      <div className="mt-3 flex items-center gap-3 border-t border-gray-100 pt-3">
        <div className="text-center">
          <p className="font-mono text-sm font-medium text-gray-900">
            {format.avgViews}
          </p>
          <p className="font-mono text-[8px] text-gray-400">avg views</p>
        </div>
        <div className="h-5 w-px bg-gray-100" />
        <div className="text-center">
          <p className="font-mono text-sm font-medium text-[#7c3aed]">
            {format.avgER}
          </p>
          <p className="font-mono text-[8px] text-gray-400">avg ER</p>
        </div>
        <div className="h-5 w-px bg-gray-100" />
        <div className="text-center">
          <p className="font-mono text-sm font-medium text-gray-900">
            {format.avgShares}
          </p>
          <p className="font-mono text-[8px] text-gray-400">avg shares</p>
        </div>
      </div>
    </div>
  );
}

export default function UnderTheHood() {
  return (
    <section className="bg-[#f5f5f7] px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row md:items-center md:gap-16">
        {/* ── Left: Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="flex flex-col items-start md:w-[400px] flex-shrink-0 mb-12 md:mb-0"
        >
          <span className="inline-block rounded-full border border-gray-200 bg-gray-100 px-4 py-1.5 font-mono text-xs text-gray-600">
            Under the Hood
          </span>

          <h2 className="mt-6 max-w-[400px] font-sans text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.03em] text-gray-900">
            We know what content{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">
              goes viral.
            </em>
          </h2>

          <p className="mt-4 max-w-[380px] font-sans text-base text-gray-600">
            Our research agent scans platforms continuously, extracting
            patterns and finding gaps before anyone else does.
          </p>
        </motion.div>

        {/* ── Right: Format Cards (card deck) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUp}
          className="relative flex-1 min-w-0"
        >
          <div className="flex items-start justify-center gap-[-8px] md:gap-0">
            {formats.map((format, i) => (
              <div
                key={format.title}
                className={`${i === 1 ? "z-10" : "z-0"} ${
                  i === 0 ? "-mr-4" : i === 2 ? "-ml-4" : ""
                }`}
              >
                <FormatCard format={format} index={i} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
