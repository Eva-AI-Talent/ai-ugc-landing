"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ── TikTok Video Card ── */
function TikTokCard({
  handle,
  caption,
  hearts,
  comments,
  shares,
  sound,
  thumbnailGradient,
  video,
  avatar,
  partial,
}: {
  handle: string;
  caption: string;
  hearts: string;
  comments: string;
  shares: string;
  sound: string;
  thumbnailGradient?: string;
  video?: string;
  avatar?: string;
  partial?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const handleTime = () => {
      if (el.currentTime >= 10) el.currentTime = 0;
    };
    el.addEventListener("timeupdate", handleTime);
    return () => el.removeEventListener("timeupdate", handleTime);
  }, []);

  return (
    <div
      className={`relative aspect-[9/16] w-full rounded-lg overflow-hidden ${
        !video ? `bg-gradient-to-br ${thumbnailGradient}` : "bg-black"
      } ${partial ? "opacity-50" : ""}`}
    >
      {video && (
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Right side action buttons */}
      <div className="absolute right-2 bottom-20 flex flex-col items-center gap-3">
        <div className="flex flex-col items-center">
          {avatar ? (
            <img src={avatar} alt="" className="h-5 w-5 rounded-full object-cover" />
          ) : (
            <div className="h-5 w-5 rounded-full bg-white/20" />
          )}
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/80" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-sans text-[7px] text-white/70">{hearts}</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/80" fill="currentColor">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="font-sans text-[7px] text-white/70">{comments}</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/80" fill="currentColor">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
          </svg>
          <span className="font-sans text-[7px] text-white/70">{shares}</span>
        </div>
      </div>

      {/* Bottom overlay — handle, caption, sound */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-10">
        <div className="flex items-center gap-1.5">
          {avatar ? (
            <img src={avatar} alt="" className="h-4 w-4 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="h-4 w-4 rounded-full bg-white/30 flex-shrink-0" />
          )}
          <span className="font-sans text-[8px] font-semibold text-white">
            {handle}
          </span>
        </div>
        <p className="mt-1 font-sans text-[7px] text-white/80 leading-snug line-clamp-2">
          {caption}
        </p>
        <div className="mt-1.5 flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-white/50" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          <span className="font-sans text-[6px] text-white/50 truncate">
            {sound}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Phone Mockup ── */
function PhoneMockup({
  children,
  className = "",
  scrollDuration,
}: {
  children: React.ReactNode;
  className?: string;
  scrollDuration: number;
}) {
  return (
    <div className={`w-[180px] md:w-[220px] flex-shrink-0 ${className}`}>
      <div className="rounded-[2rem] border-[3px] border-gray-800 bg-gray-950 p-[3px] shadow-2xl">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-black">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2 z-0 -translate-x-1/2">
            <div className="h-[6px] w-[44px] rounded-full bg-black" />
          </div>
          {/* Scrolling feed container */}
          <div className="h-[380px] md:h-[440px] overflow-hidden">
            <div
              className="feed-scroll flex flex-col gap-1 pt-1"
              style={{ animationDuration: `${scrollDuration}s` }}
            >
              {children}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Creator Profile Card ── */
function CreatorCard({
  name,
  handle,
  videosPosted,
  impressions,
  avatar,
  className = "",
}: {
  name: string;
  handle: string;
  videosPosted: number;
  impressions: string;
  avatar?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`z-20 rounded-xl border border-white/20 bg-white/80 backdrop-blur-xl px-4 py-3 shadow-lg ${className}`}
    >
      <div className="flex items-center gap-2">
        {avatar ? (
          <img src={avatar} alt="" className="h-6 w-6 rounded-full object-cover flex-shrink-0" />
        ) : (
          <div className="h-6 w-6 rounded-full bg-gray-200 flex-shrink-0" />
        )}
        <div>
          <span className="block font-sans text-[11px] font-medium text-gray-900 leading-none">
            {name}
          </span>
          <span className="block font-mono text-[9px] text-gray-400 leading-none mt-0.5">
            {handle}
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-sans text-[11px] text-gray-600">
          posted <span className="font-semibold text-gray-900">{videosPosted}</span> videos
        </span>
      </div>
      <div className="mt-1 flex items-center gap-1">
        <span className="font-serif text-lg text-[#7c3aed] leading-none">{impressions}</span>
        <span className="font-mono text-[8px] text-gray-400">impressions</span>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export default function LiveFeed() {
  return (
    <section className="bg-white px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row md:items-center md:gap-16">
        {/* ── Left: Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="flex flex-col items-start md:w-[420px] flex-shrink-0 mb-12 md:mb-0"
        >
          <span className="inline-block rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 font-mono text-xs text-gray-500">
            What It Looks Like
          </span>

          <h2 className="mt-6 max-w-[420px] font-sans text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.03em] text-gray-900">
            We create{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">waves of UGC</em>{" "}
            spread across{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">multiple personas</em>{" "}
            to create a{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">viral effect</em>{" "}
            <span className="font-sans not-italic">within your audience</span>
          </h2>
        </motion.div>

        {/* ── Right: Phone Mockups with Creator Cards ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUp}
          className="relative flex-1 min-w-0"
        >
          <div className="flex items-start justify-center pt-16">
            {/* ── Phone 1 — Left ── */}
            <div className="relative -rotate-3 -mr-4 md:-mr-6 mt-3 z-0">
              <CreatorCard
                name="Mia"
                handle="@mia.wellness.la"
                videosPosted={34}
                impressions="284K"
                avatar="/videos/avatar-mia.jpeg"
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-[160px] md:w-[200px]"
              />
              <PhoneMockup scrollDuration={18} className="">
                <TikTokCard
                  handle="@mia.wellness.la"
                  caption="my morning routine ft. [brand] 🍵"
                  hearts="4.2K"
                  comments="89"
                  shares="341"
                  sound="original sound - mia"
                  video="/videos/livefeed-mia-1.mp4"
                  avatar="/videos/avatar-mia.jpeg"
                />
                <TikTokCard
                  handle="@mia.wellness.la"
                  caption="the product everyone's talking about rn"
                  hearts="1.8K"
                  comments="52"
                  shares="210"
                  sound="trending audio"
                  video="/videos/livefeed-mia-2.mp4"
                  avatar="/videos/avatar-mia.jpeg"
                />
              </PhoneMockup>
            </div>

            {/* ── Phone 2 — Center ── */}
            <div className="relative z-10 -mt-3">
              <CreatorCard
                name="Dave"
                handle="@davefromhouston"
                videosPosted={61}
                impressions="892K"
                avatar="/videos/avatar-dave.png"
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-[160px] md:w-[200px]"
              />
              <PhoneMockup scrollDuration={22} className="">
                <TikTokCard
                  handle="@davefromhouston"
                  caption="didn't expect to be obsessed with this tbh"
                  hearts="8.7K"
                  comments="203"
                  shares="891"
                  sound="original sound - dave"
                  video="/videos/livefeed-dave-1.mp4"
                  avatar="/videos/avatar-dave.png"
                />
                <TikTokCard
                  handle="@davefromhouston"
                  caption="okay but this actually changed my routine"
                  hearts="5.1K"
                  comments="147"
                  shares="520"
                  sound="trending audio"
                  video="/videos/livefeed-dave-2.mp4"
                  avatar="/videos/avatar-dave.png"
                />
              </PhoneMockup>
            </div>

            {/* ── Phone 3 — Right ── */}
            <div className="relative rotate-3 -ml-4 md:-ml-6 mt-3 z-0">
              <CreatorCard
                name="Macy"
                handle="@macy.lee"
                videosPosted={28}
                impressions="156K"
                avatar="/videos/avatar-macy.jpeg"
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-[160px] md:w-[200px]"
              />
              <PhoneMockup scrollDuration={15} className="">
                <TikTokCard
                  handle="@macy.lee"
                  caption="POV: you finally tried it"
                  hearts="2.1K"
                  comments="44"
                  shares="187"
                  sound="original sound - macy.lee"
                  video="/videos/livefeed-macy-1.mp4"
                  avatar="/videos/avatar-macy.jpeg"
                />
                <TikTokCard
                  handle="@macy.lee"
                  caption="this was not on my 2025 bingo card"
                  hearts="980"
                  comments="31"
                  shares="128"
                  sound="trending audio"
                  video="/videos/livefeed-macy-2.mp4"
                  avatar="/videos/avatar-macy.jpeg"
                />
              </PhoneMockup>
            </div>
          </div>

          {/* Bottom center pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
          >
            <span className="inline-block whitespace-nowrap rounded-full bg-[#7c3aed] px-5 py-2 font-mono text-[10px] md:text-xs text-white shadow-lg">
              up to 87% lower CPM · higher ER%
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
