"use client";

const productLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Brands", href: "#" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 1 — Brand */}
          <div>
            <p className="font-sans font-bold text-xl text-gray-900">
              birby<span className="text-[#7c3aed]">.</span>
            </p>
            <p className="font-sans text-[13px] text-gray-400 mt-3 leading-relaxed">
              AI UGC programs for brands.
              <br />
              End to end.
            </p>
          </div>

          {/* Col 2 — Product */}
          <div>
            <p className="font-mono text-[11px] text-gray-400 tracking-wider uppercase mb-4">
              PRODUCT
            </p>
            {productLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block font-sans text-sm text-gray-500 hover:text-gray-900 transition py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 3 — Company */}
          <div>
            <p className="font-mono text-[11px] text-gray-400 tracking-wider uppercase mb-4">
              COMPANY
            </p>
            {companyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block font-sans text-sm text-gray-500 hover:text-gray-900 transition py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 4 — Legal */}
          <div>
            <p className="font-mono text-[11px] text-gray-400 tracking-wider uppercase mb-4">
              LEGAL
            </p>
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block font-sans text-sm text-gray-500 hover:text-gray-900 transition py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-mono text-xs text-gray-400">
            &copy; 2025 Birby. All rights reserved.
          </p>
          <p className="font-mono text-xs text-gray-400">
            Built for brands that give a damn.
          </p>
        </div>
      </div>
    </footer>
  );
}
