"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";

/* ═══════════════════════════════════════════
   STEP VISUALS (light mode, fit inside preview)
   ═══════════════════════════════════════════ */

function PersonaGrid() {
  const personas = [
    {
      name: "Mia, 21",
      location: "Los Angeles",
      gradient: "from-pink-400 to-rose-300",
      interests: ["Pilates", "Matcha", "Thrifting", "K-beauty"],
      prompt:
        "Wellness girlie with a curated feed — posts matcha, pilates, and outfit grids daily",
      active: false,
    },
    {
      name: "Dave, 44",
      location: "Houston, TX",
      gradient: "from-blue-400 to-slate-400",
      interests: ["Trucks", "BBQ", "Youth sports", "Blue collar"],
      prompt:
        "Dad who loves his F-150, weekend tailgates, and fixing things around the house",
      active: true,
    },
    {
      name: "Zara, 24",
      location: "Atlanta",
      gradient: "from-purple-400 to-fuchsia-400",
      interests: ["Sneakers", "GRWM", "R&B", "Nail art"],
      prompt:
        "Trendy, expressive, always first to try new products — posts fits and lifestyle daily",
      active: false,
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center p-5">
      <div className="space-y-3">
        {personas.map((p, i) => (
          <div
            key={i}
            className={`flex gap-4 rounded-xl border bg-white p-3 ${
              p.active
                ? "border-[#7c3aed] shadow-[0_0_16px_rgba(124,58,237,0.12)]"
                : "border-gray-200"
            }`}
          >
            {/* Large thumbnail avatar */}
            <div
              className={`h-24 w-24 flex-shrink-0 rounded-xl bg-gradient-to-br ${p.gradient}`}
            />

            {/* Info */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{p.name}</p>
              <p className="font-mono text-[10px] text-gray-600">
                {p.location}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {p.interests.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-1.5 font-mono text-[9px] leading-snug text-[#7c3aed]">
                &ldquo;{p.prompt}&rdquo;
              </p>
            </div>
          </div>
        ))}

        {/* +more card */}
        <div className="flex items-center gap-4 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-3">
          <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-gray-200/50">
            <span className="text-2xl text-gray-400">+</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">More personas</p>
            <p className="mt-0.5 text-[11px] text-gray-500">
              Built specifically for your brand and audience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResearchDashboard() {
  const ideas = [
    {
      title: "POV: first time trying [product]",
      format: "TikTok · 15s",
      score: 91,
      tags: ["Mid-action hook", "No voiceover", "Trending sound", "Comment bait ending"],
    },
    {
      title: "Before/after reveal with trending audio",
      format: "Reels · 20s",
      score: 84,
      tags: ["Shock factor open", "Jump cut at 1.2s", "Silence → drop", "Stitch-bait"],
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center p-5">
      <p className="mb-4 font-mono text-[10px] text-gray-500">CONTENT IDEAS</p>
      <div className="space-y-3">
        {ideas.map((idea, i) => (
          <div
            key={i}
            className={`rounded-xl border p-4 ${
              i === 0 ? "border-[#7c3aed]" : "border-gray-200"
            }`}
          >
            <p className="text-sm font-medium text-gray-900">{idea.title}</p>
            <p className="mt-1 font-mono text-[10px] text-gray-500">
              {idea.format}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {idea.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#7c3aed]"
                  style={{ width: `${idea.score}%` }}
                />
              </div>
              <span className="font-mono text-sm font-medium text-[#7c3aed]">
                {idea.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentPipeline() {
  return (
    <div className="flex h-full flex-col justify-center space-y-3 p-5">
      {/* Input brief */}
      <div className="rounded-lg border border-gray-200 bg-white p-3">
        <p className="font-mono text-[9px] text-gray-600">BRIEF</p>
        <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-1 text-[10px] text-gray-700">
          Mia &middot; Morning routine hook &middot; TikTok &middot; 15s
        </span>
      </div>

      {/* Connector */}
      <div className="flex justify-center">
        <div className="h-5 w-px border-l-2 border-dashed border-gray-300" />
      </div>

      {/* Takes */}
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((take) => (
          <div
            key={take}
            className={`rounded-xl border bg-white p-2 ${
              take === 2
                ? "border-[#7c3aed] shadow-[0_0_10px_rgba(124,58,237,0.1)]"
                : "border-gray-200"
            }`}
          >
            <div className="aspect-[9/16] rounded-lg bg-gradient-to-b from-gray-100 to-gray-50" />
            <p className="mt-1.5 text-center font-mono text-[9px] text-gray-600">
              Take 0{take}
            </p>
            {take === 2 && (
              <p className="mt-0.5 text-center font-mono text-[8px] text-[#7c3aed]">
                Selected
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Connector */}
      <div className="flex justify-center">
        <div className="h-5 w-px border-l-2 border-dashed border-gray-300" />
      </div>

      {/* Output */}
      <div className="rounded-lg border border-[#7c3aed]/30 bg-white p-3">
        <p className="font-mono text-[9px] text-[#7c3aed]">READY TO POST</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-7 w-7 rounded bg-[#7c3aed]/10" />
          <div>
            <div className="h-1.5 w-16 rounded bg-gray-200" />
            <div className="mt-1 h-1.5 w-10 rounded bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DistributionVisual() {
  const personas = [
    { name: "Mia", handle: "@mia.wellness.la", platforms: "TikTok + IG" },
    { name: "Dave", handle: "@davefromhouston", platforms: "TikTok + YT" },
    { name: "Zara", handle: "@zaraatl", platforms: "TikTok + IG" },
  ];

  return (
    <div className="flex h-full flex-col justify-center p-5">
      {/* Central brand node */}
      <div className="mb-3 flex justify-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7c3aed]">
          <span className="font-mono text-[10px] font-bold text-white">B</span>
        </div>
      </div>

      {/* Connector */}
      <div className="mb-3 flex justify-center">
        <div className="h-5 w-px border-l-2 border-dashed border-[#7c3aed]/30" />
      </div>

      {/* Persona nodes */}
      <div className="space-y-2">
        {personas.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3"
          >
            <div className="relative">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-gray-200 to-gray-100" />
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-gray-50 bg-green-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-gray-900">{p.name}</p>
              <p className="font-mono text-[9px] text-gray-600">{p.handle}</p>
              <p className="font-mono text-[8px] text-gray-500">
                {p.platforms}
              </p>
            </div>
            <span className="font-mono text-[8px] text-green-600">
              Active
            </span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded bg-gray-100 px-2 py-1 font-mono text-[8px] text-gray-600">
          Shadow ban risk: minimal
        </span>
        <span className="rounded bg-gray-100 px-2 py-1 font-mono text-[8px] text-gray-600">
          Organic reach: maximized
        </span>
      </div>
    </div>
  );
}

function MeasurementDashboard() {
  const metrics = [
    { label: "Views", value: "12.4K", delta: "+38%" },
    { label: "ER%", value: "4.2%", delta: "+0.8%" },
    { label: "Shares", value: "89", delta: "+45%" },
  ];

  return (
    <div className="flex h-full flex-col justify-center p-5">
      <p className="mb-4 font-mono text-[10px] text-gray-500">THIS WEEK</p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-gray-200 bg-white p-3 text-center"
          >
            <p className="font-mono text-lg font-medium text-gray-900">
              {m.value}
            </p>
            <p className="font-mono text-[9px] text-gray-500">{m.label}</p>
            <p className="mt-1 font-mono text-[9px] text-green-600">
              {m.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Simple feedback loop */}
      <div className="mt-4 rounded-xl border border-[#7c3aed]/20 bg-[#7c3aed]/5 p-4">
        <p className="font-mono text-[9px] text-[#7c3aed]">NEXT CYCLE</p>
        <p className="mt-1.5 text-sm leading-snug text-gray-700">
          Shorten hooks to under 1.5s. Switch to trending audio.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   STEP DATA
   ═══════════════════════════════════════════ */

const steps = [
  {
    value: "step-1",
    number: "01",
    title: "We build your personas",
    description:
      "We build full-character personas your audience already trusts. Each one has a unique voice, aesthetic, and posting style.",
  },
  {
    value: "step-2",
    number: "02",
    title: "We ideate content",
    description:
      "We scan what\u2019s trending in your niche and generate content ideas scored by engagement probability. Only the highest-scoring ideas move to production.",
  },
  {
    value: "step-3",
    number: "03",
    title: "We generate content",
    description:
      "AI produces videos that look and feel like real UGC. Platform-optimized, persona-matched, and ready to post at scale.",
  },
  {
    value: "step-4",
    number: "04",
    title: "We distribute content",
    description:
      "Content goes live across TikTok, Instagram, and YouTube Shorts on managed, warmed accounts at optimal posting times.",
  },
  {
    value: "step-5",
    number: "05",
    title: "We measure and iterate",
    description:
      "We track what\u2019s working and feed it back into the next cycle. Every week, the content gets smarter.",
  },
];

const screens: Record<string, React.ReactNode> = {
  "step-1": <PersonaGrid />,
  "step-2": <ResearchDashboard />,
  "step-3": <ContentPipeline />,
  "step-4": <DistributionVisual />,
  "step-5": <MeasurementDashboard />,
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export default function FiveSteps() {
  const [activeStep, setActiveStep] = useState("step-1");

  return (
    <motion.section
      className="bg-white px-6 py-24"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-full border border-gray-200 bg-gray-100 px-4 py-1.5 font-mono text-xs text-gray-600">
            How We Do It
          </span>

          <h2 className="mt-6 max-w-[700px] font-sans text-5xl font-medium leading-[1.1] tracking-[-0.03em] text-gray-900">
            Our fully managed content engine for{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">
              virality.
            </em>
          </h2>

          <p className="mt-4 font-sans text-base text-gray-600">
            Fully managed. Built to compound. Gets better every week.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Preview panel */}
          <div className="flex items-center justify-center md:sticky md:top-32">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {screens[activeStep]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Accordion */}
          <Accordion.Root
            type="single"
            defaultValue="step-1"
            collapsible={false}
            value={activeStep}
            onValueChange={(v) => {
              if (v) setActiveStep(v);
            }}
          >
            {steps.map((step) => (
              <Accordion.Item
                key={step.value}
                value={step.value}
                className="border-b border-gray-200 border-l-2 border-l-transparent data-[state=open]:border-l-[#7c3aed]"
              >
                <Accordion.Header asChild>
                  <Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between py-5 pl-5 text-left">
                    <div className="flex items-center">
                      <span className="mr-3 font-mono text-sm text-gray-500">
                        {step.number}
                      </span>
                      <span className="font-sans text-lg font-medium text-gray-900">
                        {step.title}
                      </span>
                    </div>
                    <span className="accordion-chevron relative ml-4 flex h-5 w-5 flex-shrink-0 items-center justify-center text-gray-400 transition-transform duration-200">
                      <span className="absolute h-[2px] w-3.5 rounded bg-current" />
                      <span className="absolute h-3.5 w-[2px] rounded bg-current" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
                  <p className="pb-5 pl-13 font-sans text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </motion.section>
  );
}
