"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

export default function Reviews() {
  const t = useTranslations("PlayaElAngel.reviews");

  return (
    <section id="opiniones" className="bg-white px-6 py-20">
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

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-3.5 rounded-3xl bg-gradient-to-br from-turquoise to-turquoise-dark p-10 text-white"
          >
            <div className="flex gap-1 text-sunshine">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <h3 className="text-[26px] font-bold leading-tight">
              {t("ctaHeading")}
            </h3>
            <p className="text-[15px] opacity-95">{t("ctaText")}</p>
            <a
              href="https://g.page/r/CSFqdle2A2lBEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-turquoise-dark transition-transform hover:-translate-y-0.5"
            >
              {t("ctaLink")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl border border-slate-200 bg-cream px-8 py-9"
          >
            <span
              aria-hidden
              className="absolute left-6 top-7 font-pacifico text-[80px] leading-[0.6] text-coral opacity-25"
            >
              &ldquo;
            </span>
            <div className="relative z-10">
              <div className="mb-2.5 flex gap-1 text-coral">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-base italic leading-[1.65] text-ink">
                {t("quote")}
              </p>
              <p className="text-[14.5px] font-semibold text-turquoise-dark">
                {t("quoteAuthor")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
