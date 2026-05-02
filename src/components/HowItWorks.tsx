"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";

const steps = [
  { value: "step-1", number: "01", title: "Brief your program", description: "Tell us your brand, your audience, and your goals. We handle the creative strategy, persona direction, and content formats. You approve the direction once — then we build." },
  { value: "step-2", number: "02", title: "We produce the content", description: "AI generates videos matched to what's trending in your niche right now. Every video is platform-optimized, on-brand, and ready to post. No shoots. No talent scheduling. No back and forth." },
  { value: "step-3", number: "03", title: "We distribute it", description: "Content goes live across TikTok, Instagram, and YouTube Shorts simultaneously — on managed, warmed accounts at optimal posting times." },
  { value: "step-4", number: "04", title: "You see the results", description: "Track views, engagement, and performance across every channel in one dashboard. We iterate based on what's working and keep the program improving every week." },
];

function BriefScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <div className="w-full rounded-xl bg-gray-100 border border-gray-200 p-6">
        <p className="mb-4 font-medium text-gray-900">Brand Brief</p>
        <div className="mb-3 h-3 w-full rounded bg-gray-200" />
        <div className="mb-3 h-3 w-full rounded bg-gray-200" />
        <div className="mb-3 h-3 w-3/4 rounded bg-gray-200" />
        <div className="mt-5 h-1.5 w-full rounded-full bg-[#7c3aed]" />
      </div>
    </div>
  );
}

function VideoGridScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <div className="grid w-full grid-cols-2 gap-2">
        <div className="aspect-square rounded-lg bg-gradient-to-br from-pink-300/60 to-purple-300/60" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-300/60 to-yellow-300/60" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-cyan-300/60 to-blue-300/60" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-green-300/60 to-emerald-300/60" />
      </div>
    </div>
  );
}

function DistributionScreen() {
  const channels = [
    { color: "bg-[#ff0050]", label: "TikTok" },
    { color: "bg-gradient-to-br from-[#f58529] to-[#dd2a7b]", label: "Instagram" },
    { color: "bg-[#ff0000]", label: "YouTube" },
  ];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
      {channels.map((ch) => (
        <div key={ch.label} className="flex w-full items-center gap-3">
          <div className={`h-8 w-8 flex-shrink-0 rounded-full ${ch.color}`} />
          <div className="flex-1">
            <div className="h-2.5 w-3/4 rounded bg-gray-200" />
            <p className="mt-1.5 font-mono text-[10px] text-gray-400">{ch.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalyticsScreen() {
  const bars = [35, 55, 80, 60, 95];
  return (
    <div className="flex h-full flex-col items-center justify-center p-6">
      <div className="flex w-full items-end justify-between gap-2" style={{ height: 120 }}>
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-[#7c3aed]" style={{ height: `${h}%` }} />
        ))}
      </div>
      <p className="mt-4 font-mono text-lg font-medium text-gray-900">12.4K views</p>
    </div>
  );
}

const screens: Record<string, React.ReactNode> = {
  "step-1": <BriefScreen />,
  "step-2": <VideoGridScreen />,
  "step-3": <DistributionScreen />,
  "step-4": <AnalyticsScreen />,
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState("step-1");

  return (
    <motion.section
      id="how-it-works"
      className="bg-[#f5f5f7] px-6 py-24"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-full bg-[#7c3aed] px-4 py-1.5 font-mono text-xs text-white">
          How It Works
        </span>

        <h2 className="mt-6 max-w-[500px] font-serif text-5xl leading-tight tracking-[-0.02em] text-gray-900">
          Brief in.
          <br />
          <em className="italic text-gray-400">Viral content</em> out.
        </h2>

        <p className="mt-4 font-sans text-base text-gray-500">
          Four steps. Fully managed. Results in 48 hours.
        </p>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div className="flex items-center justify-center md:sticky md:top-32">
            <div className="relative h-[500px] w-64 overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div key={activeStep} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                  {screens[activeStep]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <Accordion.Root type="single" defaultValue="step-1" collapsible={false} value={activeStep} onValueChange={(v) => { if (v) setActiveStep(v); }}>
            {steps.map((step) => (
              <Accordion.Item key={step.value} value={step.value} className="border-b border-gray-200 border-l-2 border-l-transparent data-[state=open]:border-l-[#7c3aed]">
                <Accordion.Header asChild>
                  <Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between py-5 text-left">
                    <div className="flex items-center">
                      <span className="mr-3 font-mono text-sm text-gray-400">{step.number}</span>
                      <span className="font-sans text-lg font-medium text-gray-900">{step.title}</span>
                    </div>
                    <span className="accordion-chevron relative ml-4 flex h-5 w-5 flex-shrink-0 items-center justify-center text-gray-400 transition-transform duration-200">
                      <span className="absolute h-[2px] w-3.5 rounded bg-current" />
                      <span className="absolute h-3.5 w-[2px] rounded bg-current" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
                  <p className="pb-5 pl-8 font-sans text-sm leading-relaxed text-gray-500">{step.description}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </motion.section>
  );
}
