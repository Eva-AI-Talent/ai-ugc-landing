"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/logos/shopee.svg", alt: "Shopee", height: 28 },
  { src: "/logos/mave.svg", alt: "Mave", height: 26 },
];

export default function LogoBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#f5f5f7] border-y border-gray-200 py-10"
    >
      <p className="mb-8 text-center font-mono text-[11px] text-gray-400 uppercase tracking-wider">
        Delivering AI UGC programs for brands across
      </p>

      <div className="flex items-center justify-center gap-16">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center opacity-40 grayscale">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={0}
              height={logo.height}
              className="h-auto w-auto"
              style={{ height: logo.height, width: "auto" }}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
