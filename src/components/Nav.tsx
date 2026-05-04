"use client";

import { useState, useEffect } from "react";

const CALENDAR_URL = "https://calendar.app.google/jLbRVksH8HAbnSz18";

const navLinks = [
  { label: "How It Works", href: "#how-we-do-it" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        {/* Logo */}
        <a
          href="/"
          className={`font-serif text-xl transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          diffusr
          <span className="text-[#7c3aed]">.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex mx-auto">
          {navLinks.map((link) => (
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

        {/* Desktop CTA */}
        <button
          onClick={() => window.open(CALENDAR_URL, "_blank")}
          className={`hidden md:block rounded-full px-5 py-2 font-sans text-sm font-medium transition-all duration-300 cursor-pointer ${
            scrolled
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-white text-[#08080f] hover:opacity-90"
          }`}
        >
          Launch Campaign
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto md:hidden flex flex-col justify-center gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 transition-all duration-200 ${
              scrolled ? "bg-gray-900" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 transition-all duration-200 ${
              scrolled ? "bg-gray-900" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 transition-all duration-200 ${
              scrolled ? "bg-gray-900" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t px-6 py-4 ${
            scrolled
              ? "border-gray-200 bg-white/95 backdrop-blur-md"
              : "border-white/10 bg-[#08080f]/95 backdrop-blur-md"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-sans text-sm ${
                scrolled ? "text-gray-700" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
