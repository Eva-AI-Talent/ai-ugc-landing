"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <a
          href="/"
          className={`font-serif text-xl transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          birby
          <span className="text-[#7c3aed]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex mx-auto">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "For Brands", href: "#brands" },
            { label: "Results", href: "#results" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sans text-sm transition-colors duration-300 ${
                scrolled
                  ? "text-gray-500 hover:text-gray-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#get-early-access"
          className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-white text-[#08080f] hover:opacity-90"
          }`}
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
