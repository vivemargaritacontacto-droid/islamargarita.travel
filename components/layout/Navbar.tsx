"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LanguageToggle from "@/src/components/language-toggle";

const SECTIONS = [
  { id: "alojamiento", key: "alojamiento" },
  { id: "servicios", key: "servicios" },
  { id: "ubicacion", key: "ubicacion" },
  { id: "tarifas", key: "tarifas" },
  { id: "opiniones", key: "opiniones" },
  { id: "reservar", key: "reservar" },
  { id: "faq", key: "faq" },
] as const;

export default function Navbar() {
  const t = useTranslations("PlayaElAngel.nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-shadow ${
        scrolled
          ? "bg-white/95 shadow-tropical-sm"
          : "bg-white/80"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-2">
        <a href="#hero" className="flex items-center">
          <Image
            src="/images/logo-islamargarita.png"
            alt="Isla Margarita Travel"
            width={320}
            height={80}
            className="h-16 w-auto object-contain drop-shadow-sm"
            priority
          />
        </a>

        <div className="hidden items-center gap-6 text-[14.5px] font-medium lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-ink/80 transition-colors hover:text-turquoise"
            >
              {t(s.key)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href="#reservar"
            className="whitespace-nowrap rounded-full bg-gradient-to-br from-coral to-coral-dark px-[18px] py-2.5 text-[13.5px] font-semibold text-white shadow-coral transition-transform hover:-translate-y-0.5"
          >
            {t("reservarCta")}
          </a>
        </div>

        <button
          className="flex flex-col gap-1 p-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("menuLabel")}
        >
          {open ? (
            <X className="h-6 w-6 text-ink" />
          ) : (
            <Menu className="h-6 w-6 text-ink" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/5 bg-white px-6 py-5 shadow-tropical-md lg:hidden">
          <div className="flex flex-col gap-4 text-[15px] font-medium">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="text-ink/80 hover:text-turquoise"
              >
                {t(s.key)}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-coral to-coral-dark px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-coral"
            >
              {t("reservarCta")}
            </a>
            <div className="pt-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
