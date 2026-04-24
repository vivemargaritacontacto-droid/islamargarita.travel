"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const CARDS = [
  { num: 1, icon: "📍" },
  { num: 2, icon: "🛏️" },
  { num: 3, icon: "🤝" },
] as const;

export default function WhyUs() {
  const t = useTranslations("PlayaElAngel.whyUs");

  return (
    <section className="bg-gradient-to-b from-white to-cream px-6 py-20">
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
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.15] text-ink">
            {t("titleLead")}{" "}
            <span className="font-pacifico font-normal text-turquoise">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleTail")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ num, icon }, index) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl border-2 border-slate-200 bg-white px-7 py-8 transition-all hover:-translate-y-1 hover:border-turquoise hover:shadow-tropical-md"
            >
              <div className="absolute -top-5 left-7 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-coral to-sunshine text-base font-extrabold text-white shadow-coral">
                {num}
              </div>

              <div className="mb-4 mt-3 text-4xl leading-none">{icon}</div>

              <h4 className="mb-2.5 text-[19px] font-bold leading-[1.25] text-ink">
                {t(`r${num}Title`)}
              </h4>

              <p className="flex-1 text-[14.5px] leading-[1.65] text-slate-600">
                {t(`r${num}Desc`)}
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-turquoise/15 text-turquoise-dark">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-[13px] font-medium text-turquoise-dark">
                  {t(`r${num}Check`)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
