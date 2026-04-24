"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BedDouble, Sofa, Bath, UtensilsCrossed, Car, Flame } from "lucide-react";

const FEATURES = [
  { key: "feat1", Icon: BedDouble },
  { key: "feat2", Icon: Sofa },
  { key: "feat3", Icon: Bath },
  { key: "feat4", Icon: UtensilsCrossed },
  { key: "feat5", Icon: Car },
  { key: "feat6", Icon: Flame },
] as const;

export default function Alojamiento() {
  const t = useTranslations("PlayaElAngel.alojamiento");

  return (
    <section
      id="alojamiento"
      className="bg-gradient-to-b from-cream to-white px-6 py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-coral">
            {t("label")}
          </div>
          <h2 className="mb-4 text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.15] text-ink">
            {t("titleLead")}{" "}
            <span className="font-pacifico font-normal text-turquoise">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-[17px] text-slate-600">{t("sub")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 overflow-hidden rounded-[28px] bg-white shadow-tropical-lg lg:grid-cols-2"
        >
          <div className="relative h-80 lg:h-auto lg:min-h-[460px]">
            <Image
              src="/images/services/residencia.jpeg"
              alt={t("cardTitle")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute left-5 top-5 rounded-full bg-coral px-4 py-2 text-[13px] font-semibold text-white shadow-coral">
              {t("tag")}
            </div>
          </div>

          <div className="px-8 py-9 md:px-10">
            <h3 className="mb-2 text-[1.7rem] font-bold text-ink">
              {t("cardTitle")}
            </h3>
            <div className="mb-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>{t("metaArea")}</span>
              <span className="before:font-extrabold before:text-turquoise before:content-['•_']">
                {t("metaPeople")}
              </span>
              {/* metaPool hidden */}
            </div>

            {/* <div className="mb-6 grid grid-cols-2 gap-3 border-b border-dashed border-slate-200 pb-5">
              <div className="rounded-2xl bg-sky-50 px-4 py-3">
                <div className="mb-0.5 text-[11px] font-semibold uppercase tracking-widest text-sky-500">
                  {t("priceLowLabel")}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[1.9rem] font-extrabold text-sky-500">
                    {t("priceLow")}
                  </span>
                  <span className="text-[13px] text-slate-500">{t("priceLowUnit")}</span>
                </div>
              </div>
              <div className="rounded-2xl bg-coral/10 px-4 py-3">
                <div className="mb-0.5 text-[11px] font-semibold uppercase tracking-widest text-coral">
                  {t("priceHighLabel")}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[1.9rem] font-extrabold text-coral">
                    {t("priceHigh")}
                  </span>
                  <span className="text-[13px] text-slate-500">{t("priceHighUnit")}</span>
                </div>
              </div>
              <p className="col-span-2 text-[13px] text-slate-500">{t("priceExtra")}</p>
            </div> */}

            <div className="mb-3.5 text-[15px] font-bold text-ink">
              {t("distribucionTitle")}
            </div>

            <ul className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {FEATURES.map(({ key, Icon }) => (
                <li key={key} className="flex items-start gap-3 text-[14.5px] leading-relaxed">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-turquoise-light text-turquoise-dark">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>

            <a
              href="#reservar"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-base font-semibold text-white shadow-coral transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              {t("reservarCta")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
