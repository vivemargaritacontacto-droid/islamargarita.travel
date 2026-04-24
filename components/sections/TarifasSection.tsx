"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const BULLETS = [1, 2, 3, 4] as const;
const CARD_FEATURES = [1, 2] as const;

export default function Tarifas() {
  const t = useTranslations("PlayaElAngel.tarifas");

  return (
    <section id="tarifas" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-coral">
            {t("label")}
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.15] text-ink">
            {t("titleLead")}{" "}
            <span className="font-pacifico font-normal text-turquoise">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleTail")}
          </h2>
        </motion.div>

        <div className="max-w-[720px] rounded-xl border-l-4 border-coral bg-cream px-6 py-5 text-[15px] text-ink">
          <strong className="text-turquoise-dark">{t("introLead")}</strong>{" "}
          {t("introText")}
        </div>

        <ul className="mt-8 mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {BULLETS.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[14.5px]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              {t(`bullet${b}`)}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Low season */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] border-2 border-slate-200 bg-white px-8 py-9 transition-all hover:shadow-tropical-md"
          >
            <h3 className="mb-2 text-[22px] font-bold text-ink">
              {t("card1Title")}
            </h3>
            <p className="mb-4 text-[14.5px] text-slate-600">{t("card1Sub")}</p>
            <div className="mb-5">
              <span className="text-[3rem] font-extrabold text-turquoise">
                {t("card1Price")}
              </span>
              <small className="ml-1 text-base font-normal text-slate-600">
                {t("card1Unit")}
              </small>
            </div>
            <ul className="space-y-2">
              {CARD_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-sm text-ink before:font-bold before:text-turquoise before:content-['✓']"
                >
                  {t(`card1Feat${f}`)}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* High season (featured) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-[24px] border-2 border-coral bg-gradient-to-b from-[#FFF7ED] to-white px-8 py-9 transition-all sm:scale-[1.02] hover:shadow-coral"
          >
            <div className="absolute -top-3.5 left-8 rounded-full bg-coral px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              {t("card2Badge")}
            </div>
            <h3 className="mb-2 text-[22px] font-bold text-ink">
              {t("card2Title")}
            </h3>
            <p className="mb-4 text-[14.5px] text-slate-600">{t("card2Sub")}</p>
            <div className="mb-5">
              <span className="text-[3rem] font-extrabold text-turquoise">
                {t("card2Price")}
              </span>
              <small className="ml-1 text-base font-normal text-slate-600">
                {t("card2Unit")}
              </small>
            </div>
            <ul className="space-y-2">
              {CARD_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-sm text-ink before:font-bold before:text-turquoise before:content-['✓']"
                >
                  {t(`card2Feat${f}`)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
