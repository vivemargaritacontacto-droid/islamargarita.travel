"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useBooking } from "@/components/ui/BookingContext";

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
    <footer id="contact" className="bg-white text-[#0F2347] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Logo + description + social icons + stars + newsletter */}
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 mb-4 cursor-pointer"
            >
              <Image src="/images/logo-margarita-travel.png" alt="Margarita Travel" width={180} height={106} />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {t("description")}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mb-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#C9A84C] flex items-center justify-center text-[#0F2347] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            {/* Decorative gold stars */}
            <div className="flex items-center gap-1 mb-6">
              <span className="text-[#C9A84C] text-lg">★</span>
              <span className="text-[#C9A84C] text-lg">★</span>
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
                className="flex-1 bg-gray-100 text-[#0F2347] placeholder:text-slate-400 text-sm px-4 py-2.5 rounded-l-lg border border-gray-200 outline-none focus:bg-gray-50 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C9A84C] hover:bg-[#b8943d] px-4 py-2.5 rounded-r-lg transition-colors"
                aria-label={t("subscribe")}
              >
                <ArrowRight className="w-4 h-4 text-white" />
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
                    className="text-sm text-slate-500 hover:text-[#0F2347] transition-colors duration-200"
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
                    className="text-sm text-slate-500 hover:text-[#0F2347] transition-colors duration-200"
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
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">📍</span>
                <span>{t("address")}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href="https://wa.me/584249077879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F2347] transition-colors duration-200"
                >
                  {t("phone")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">✉️</span>
                <span>{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Margarita Travel. {t("allRightsReserved")}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#0F2347] transition-colors duration-200">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="hover:text-[#0F2347] transition-colors duration-200">
              {t("termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
