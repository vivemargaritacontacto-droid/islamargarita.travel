"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Phone, Mail, Facebook, Instagram, Youtube, Home, Star } from "lucide-react";

const NAV_KEYS = [
  { id: "alojamiento", key: "alojamiento" },
  { id: "servicios", key: "servicios" },
  { id: "ubicacion", key: "ubicacion" },
  { id: "tarifas", key: "tarifas" },
  { id: "opiniones", key: "opiniones" },
  { id: "reservar", key: "reservar" },
  { id: "faq", key: "faq" },
] as const;

export default function Footer() {
  const t = useTranslations("PlayaElAngel.footer");
  const tNav = useTranslations("PlayaElAngel.nav");

  return (
    <footer className="bg-ink px-6 pb-8 pt-16 text-white/75">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <a href="#hero" className="mb-4">
            <Image
              src="/images/logo-islamargarita.png"
              alt="Isla Margarita Travel"
              width={320}
              height={80}
              className="h-28 w-auto object-contain drop-shadow-sm"
            />
          </a>
          <p className="max-w-[320px] text-sm leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
            {t("contactTitle")}
          </h5>
          <ul className="space-y-1.5 text-[14.5px]">
            <li>
              <a
                href="https://wa.me/584249077879"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-sunshine"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {t("contactPhone")}
              </a>
            </li>
            <li>
              <a
                href="mailto:islamargarita.reserva@gmail.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-sunshine"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="truncate">{t("contactEmail")}</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61570755117625"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-sunshine"
              >
                <Facebook className="h-4 w-4" />
                {t("contactFacebook")}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/islamargarita.travel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-sunshine"
              >
                <Instagram className="h-4 w-4" />
                {t("contactInstagram")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
            {t("navTitle")}
          </h5>
          <ul className="space-y-1.5 text-[14.5px]">
            {NAV_KEYS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-colors hover:text-sunshine"
                >
                  {tNav(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
            {t("platformsTitle")}
          </h5>
          <div className="flex flex-wrap gap-1.5">
            <a
              href="https://es-l.airbnb.com/rooms/1660312372239602072"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-white/10 px-3.5 py-2.5 text-[13.5px] transition-colors hover:bg-white/20 hover:text-white"
            >
              <Home className="h-4 w-4 shrink-0" />
              {t("platformAirbnb")}
            </a>
            <a
              href="https://g.page/r/CSFqdle2A2lBEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-white/10 px-3.5 py-2.5 text-[13.5px] transition-colors hover:bg-white/20 hover:text-white"
            >
              <Star className="h-4 w-4 shrink-0" />
              {t("platformGoogle")}
            </a>
            <a
              href="https://www.youtube.com/@IslaMargarita.travel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-white/10 px-3.5 py-2.5 text-[13.5px] transition-colors hover:bg-white/20 hover:text-white"
            >
              <Youtube className="h-4 w-4 shrink-0" />
              {t("platformYoutube")}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] border-t border-white/10 pt-6 text-center text-[13px]">
        {t("copyright")}
      </div>
    </footer>
  );
}
