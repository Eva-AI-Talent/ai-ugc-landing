"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CALENDAR_URL = "https://calendar.app.google/ac8ZrVyRbGCw87yh7";

const phones = [
  { label: "Beauty", video: "/videos/hero-1.mp4" },
  { label: "Lifestyle", video: "/videos/hero-2.mp4" },
  { label: "Auto", video: "/videos/hero-3.mp4" },
  { label: "Wellness", video: "/videos/hero-4.mp4" },
  { label: "Fashion", video: "/videos/hero-5.mp4" },
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
  video,
  label,
  position,
}: {
  video: string;
  label: string;
  position: number;
}) {
  const absPos = Math.abs(position);
  const scale = 1 - absPos * 0.08;
  const rotateY = position * 12;
  const translateY = absPos * absPos * 8;
  const opacity = 1 - absPos * 0.15;
  const zIndex = 10 - absPos;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const handleTime = () => {
      if (el.currentTime >= 10) {
        el.currentTime = 0;
      }
    };
    el.addEventListener("timeupdate", handleTime);
    return () => el.removeEventListener("timeupdate", handleTime);
  }, []);

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
              <video
                ref={videoRef}
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
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
  const openCalendar = useCallback(() => window.open(CALENDAR_URL, "_blank"), []);

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
      className="relative flex min-h-screen flex-col items-center overflow-hidden border-b border-gray-200"
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
          Diffusr helps you launch viral AI UGC content at scale and
          distributed across every channel your audience lives on.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <button
            onClick={openCalendar}
            className="rounded-full bg-white px-5 md:px-7 py-3 font-sans text-sm font-medium text-[#08080f] transition-opacity duration-200 hover:opacity-90 whitespace-nowrap cursor-pointer"
          >
            Launch Campaign &rarr;
          </button>
          <a
            href="#how-we-do-it"
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
                    video={phone.video}
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
