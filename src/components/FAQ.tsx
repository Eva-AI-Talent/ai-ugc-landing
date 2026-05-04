"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  {
    question: "What exactly does Diffusr build for my brand?",
    answer:
      "Diffusr builds and runs a fully managed AI UGC content program. We handle creative strategy, video production using AI, distribution across multiple personas on TikTok, Instagram, and YouTube Shorts, and weekly performance reporting.",
  },
  {
    question: "How is this different from using an AI video tool ourselves?",
    answer:
      "AI video tools give you the ability to make content. Diffusr gives you the results. We don\u2019t just generate videos \u2014 we research what\u2019s trending, build the personas, create the content, post it from managed accounts, and optimize it every week. You\u2019re not operating a tool. You\u2019re getting a full content engine that runs without your team lifting a finger.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Depending on volume, as soon as 1 week.",
  },
  {
    question: "What platforms do you distribute to?",
    answer:
      "TikTok, Instagram Reels, and YouTube Shorts. By default you get to choose 1 platform. Adding other platforms is an additional cost.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "Minimum of 30 videos.",
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section id="faq" className="bg-[#f5f5f7] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <h2 className="text-center font-sans text-5xl font-medium tracking-[-0.03em] text-gray-900">
          Everything you{" "}
          <em className="font-serif italic font-normal text-[#7c3aed]">
            need to know
          </em>
        </h2>

        {/* Subheadline */}
        <p className="mt-4 text-center font-sans text-[15px] text-gray-500">
          Still have questions? We&rsquo;ll answer all of them.
        </p>

        {/* Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="mx-auto mt-12 max-w-[800px]"
        >
          {faqs.map((faq, i) => {
            const value = `faq-${i}`;
            const isOpen = openItem === value;

            return (
              <Accordion.Item
                key={value}
                value={value}
                className="border-b border-gray-200"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left">
                    <span className="font-sans text-base font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span
                      className="ml-4 flex-shrink-0 text-xl text-gray-400 transition-transform duration-200"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-5 font-sans text-base leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </motion.div>
    </section>
  );
}
