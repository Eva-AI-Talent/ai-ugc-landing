"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phones = [
  { label: "Fashion", gradient: "from-pink-400 to-purple-400" },
  { label: "Food", gradient: "from-orange-400 to-amber-300" },
  { label: "Beauty", gradient: "from-rose-400 to-pink-300" },
  { label: "Travel", gradient: "from-cyan-400 to-blue-400" },
  { label: "Fitness", gradient: "from-green-400 to-emerald-400" },
  { label: "Tech", gradient: "from-violet-400 to-indigo-400" },
  { label: "Lifestyle", gradient: "from-amber-400 to-orange-300" },
];

// Generate deterministic star positions
function generateStars(count: number) {
  const stars: { x: number; y: number; size: number; opacity: number; delay: number }[] = [];
  // Use a simple seeded approach for consistency
  for (let i = 0; i < count; i++) {
    const seed = i * 137.508;
    stars.push({
      x: ((seed * 7.31) % 100),
      y: ((seed * 3.14) % 70),
      size: 1.5 + (i % 3),
      opacity: 0.5 + ((i % 5) * 0.1),
      delay: (i % 8) * 0.4,
    });
  }
  return stars;
}

function PhoneFrame({
  gradient,
  label,
  position,
}: {
  gradient: string;
  label: string;
  position: number;
}) {
  const absPos = Math.abs(position);
  const scale = 1 - absPos * 0.08;
  const rotateY = position * 12;
  const translateY = absPos * absPos * 8;
  const opacity = 1 - absPos * 0.15;
  const zIndex = 10 - absPos;

  return (
    <motion.div
      className="absolute left-1/2 flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={{
        x: `calc(-50% + ${position * 175}px)`,
        scale,
        rotateY,
        y: translateY,
        opacity,
        zIndex,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="w-[170px] md:w-[200px]">
        <div className="relative rounded-[2.4rem] border-[3px] border-[#2a2a3a] bg-[#1a1a2a] p-[3px] shadow-2xl">
          <div className="relative overflow-hidden rounded-[2.1rem] bg-[#0a0a1a]">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2.5 z-20 -translate-x-1/2">
              <div className="h-[8px] w-[56px] rounded-full bg-[#0a0a1a]" />
            </div>
            <div className="aspect-[9/19.5] w-full">
              <div
                className={`h-full w-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-3`}
              >
                <div className="mt-auto mb-5 w-full px-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-5 w-5 rounded-full bg-white/30" />
                    <div className="h-2 w-12 rounded-full bg-white/30" />
                  </div>
                  <div className="h-1.5 w-3/4 rounded-full bg-white/20 mb-1" />
                  <div className="h-1.5 w-1/2 rounded-full bg-white/20" />
                  <p className="font-mono text-[7px] text-white/40 mt-1.5">
                    {label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stars = useMemo(() => generateStars(40), []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % phones.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  function getPosition(phoneIndex: number) {
    let diff = phoneIndex - activeIndex;
    const half = Math.floor(phones.length / 2);
    if (diff > half) diff -= phones.length;
    if (diff < -half) diff += phones.length;
    return diff;
  }

  return (
    <section
      className="relative flex min-h-screen flex-col items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 130% 80% at 42% -2%, #08080f 0%, #0f0520 15%, #1e0a4a 28%, #3b1694 40%, #6d28d9 52%, #a78bfa 65%, #ddd6fe 78%, #f3f0ff 88%, #ffffff 100%)",
      }}
    >
      {/* Stars */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-8">
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        >
          <span className="inline-block rounded-full bg-white/10 border border-white/10 px-4 py-1.5 font-mono text-xs text-white/70">
            Fully Managed Service
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="mt-8 text-center font-sans text-5xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Your brand.
          <br />
          <em className="font-serif italic font-normal text-white/70">Everywhere</em>
          <br />
          it should be.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-6 max-w-[520px] text-center font-sans text-lg leading-relaxed text-white/80"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Birby helps you launch viral AI UGC content at scale and
          distributed across every channel your audience lives on.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <a
            href="#get-early-access"
            className="rounded-full bg-white px-5 md:px-7 py-3 font-sans text-sm font-medium text-[#08080f] transition-opacity duration-200 hover:opacity-90 whitespace-nowrap"
          >
            Start a Program &rarr;
          </a>
          <a
            href="#how-it-works"
            className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-5 md:px-7 py-3 font-sans text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/30 whitespace-nowrap"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Phone carousel — curved 2D, only upper half */}
      <motion.div
        className="relative z-10 w-full mt-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <div
          className="relative mx-auto h-[280px] md:h-[350px] overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div className="absolute inset-0 flex items-start justify-center pt-4">
            <AnimatePresence mode="popLayout">
              {phones.map((phone, i) => {
                const pos = getPosition(i);
                if (Math.abs(pos) > 2) return null;
                return (
                  <PhoneFrame
                    key={phone.label}
                    gradient={phone.gradient}
                    label={phone.label}
                    position={pos}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
