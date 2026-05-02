"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        className="max-w-[1100px] mx-auto bg-gray-50 border border-gray-200 rounded-3xl p-12 md:p-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Grid line overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Headline */}
          <motion.h2
            className="font-sans text-5xl md:text-6xl font-medium tracking-[-0.03em] text-gray-900 text-center leading-tight max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Launch your{" "}
            <em className="font-serif italic font-normal text-[#7c3aed]">
              next AI UGC campaign
            </em>{" "}
            now
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-sans text-xl text-gray-700 text-center mt-6 max-w-[560px] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Join brands already using Birby to generate 173m+ impressions at
            scale
          </motion.p>

          {/* Email form */}
          <motion.div
            className="max-w-[480px] mx-auto mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  required
                  className="flex-1 bg-transparent px-5 py-3 text-gray-900 placeholder:text-gray-400 font-sans text-sm outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#7c3aed] text-white font-sans text-sm font-medium px-6 py-3 rounded-full m-1 whitespace-nowrap hover:bg-[#6d28d9] transition"
                >
                  Start a Program
                </button>
              </form>
            ) : (
              <p className="text-[#7c3aed] font-sans text-base font-medium">
                You&apos;re on the list. We&apos;ll be in touch within 24
                hours.
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
