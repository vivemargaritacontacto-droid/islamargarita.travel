"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useBooking } from "@/components/ui/BookingContext";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");
  const { openBooking } = useBooking();
  const [footerEmail, setFooterEmail] = useState("");

  const tServices = useTranslations("Services");

  const serviceLinks = [
    tServices("office"),
    tServices("garden"),
    tServices("kitchen"),
    tServices("window"),
    tServices("bathroom"),
    tServices("sofa"),
  ];

  const quickLinks = [
    { label: tNav("home"), href: "#hero" },
    { label: tNav("service"), href: "#services" },
    { label: tNav("reviews"), href: "#reviews" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("faq"), href: "#faq" },
    { label: tNav("contact"), href: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-[#0F2347] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Logo + description + decorative stars + newsletter */}
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <Image src="/images/services/logo_white.png" alt="WEN'S Logo" width={36} height={36} className="brightness-100" />
              <span className="text-2xl font-extrabold text-white">
                WEN&apos;S
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {t("description")}
            </p>
            {/* Decorative gold stars */}
            <div className="flex items-center gap-1 mb-6">
              <span className="text-[#C9A84C] text-lg">★</span>
              <span className="text-[#C9A84C] text-lg">★</span>
              <span className="text-[#C9A84C] text-lg">★</span>
            </div>
            {/* Newsletter → opens booking with email prefilled */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (footerEmail.trim()) {
                  openBooking({ email: footerEmail });
                  setFooterEmail("");
                }
              }}
              className="flex"
            >
              <input
                type="email"
                required
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                className="flex-1 bg-white/10 text-white placeholder:text-slate-400 text-sm px-4 py-2.5 rounded-l-lg border-none outline-none focus:bg-white/15 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C9A84C] hover:bg-[#b8943d] px-4 py-2.5 rounded-r-lg transition-colors"
                aria-label={t("subscribe")}
              >
                <ArrowRight className="w-4 h-4 text-[#0F2347]" />
              </button>
            </form>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-4">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-4">
              {t("quickLinksTitle")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-4">
              {t("findUsTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">📍</span>
                <span>{t("address")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">📞</span>
                <span>{t("phone")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">✉️</span>
                <span>{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} WEN&apos;S Cleaning. {t("allRightsReserved")}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors duration-200">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              {t("termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
