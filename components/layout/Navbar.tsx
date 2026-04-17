"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import LanguageToggle from "@/src/components/language-toggle";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61570755117625",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("home"), href: "#hero" },
    { label: t("about"), href: "#about" },
    { label: t("service"), href: "#services" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b-2 border-[#1B396A]/20 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image src="/images/logo-margarita-travel.png" alt="Margarita Travel" width={140} height={82} />
        </a>

        {/* Center nav links + social icons */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.href === "#hero" ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } : undefined}
              className="text-[#1B396A] font-semibold hover:text-[#C9A84C] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          {/* Divider */}
          <span className="w-px h-5 bg-[#1B396A]/20" />
          {/* Social icons */}
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-[#1B396A] hover:text-[#C9A84C] transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Right: Language Toggle */}
        <div className="hidden md:flex items-center">
          <LanguageToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1B396A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t("toggleMenu")}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#1B396A]/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.href === "#hero" ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); } : () => setMobileOpen(false)}
              className="block text-[#1B396A] font-semibold hover:text-[#C9A84C] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          {/* Social icons mobile */}
          <div className="flex items-center gap-4 pt-2">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-[#1B396A] hover:text-[#C9A84C] transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}
