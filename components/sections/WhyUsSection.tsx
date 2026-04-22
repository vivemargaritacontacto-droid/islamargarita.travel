"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const REASONS = [1, 2, 3] as const;

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
          {REASONS.map((num, index) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border-2 border-slate-200 bg-white px-7 py-9 transition-all hover:-translate-y-1 hover:border-turquoise hover:shadow-tropical-md"
            >
              <div className="absolute -top-5 left-7 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-coral to-sunshine text-xl font-extrabold text-white shadow-coral">
                {num}
              </div>
              <h4 className="mb-2.5 mt-3.5 text-[19px] font-bold text-ink">
                {t(`r${num}Title`)}
              </h4>
              <p className="text-[14.5px] leading-[1.65] text-slate-600">
                {t(`r${num}Desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
