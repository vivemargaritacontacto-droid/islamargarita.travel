"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const t = useTranslations("PlayaElAngel.hero");

  const quickfacts = [1, 2, 3, 4] as const;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-6 pb-20 pt-[120px] text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(8,145,178,0.6), rgba(249,115,22,0.35)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="mx-auto max-w-[900px]">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 inline-block rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur-md"
        >
          {t("badge")}
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-5 text-[clamp(2rem,6vw,4.2rem)] font-extrabold leading-[1.1] drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
        >
          {t("titleLead")}{" "}
          <span className="font-pacifico text-sunshine font-normal">
            {t("titleHighlight")}
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-3 text-[clamp(1.05rem,2.2vw,1.35rem)] font-medium opacity-95"
        >
          {t("sub")}
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mb-10 max-w-[720px] text-[clamp(0.95rem,1.8vw,1.1rem)] opacity-90"
        >
          {t("description")}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#reservar"
            className="inline-flex items-center gap-2.5 rounded-full bg-coral px-8 py-4 text-base font-semibold text-white shadow-coral transition-all hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-coral-lg"
          >
            {t("ctaPrimary")}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#alojamiento"
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/40 bg-white/15 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/25"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-14 grid max-w-[720px] grid-cols-2 gap-3.5 sm:grid-cols-4"
        >
          {quickfacts.map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/20 bg-white/10 px-3.5 py-4 text-center backdrop-blur-lg"
            >
              <span className="mb-1 block text-2xl font-extrabold leading-none text-sunshine">
                {t(`qf${i}Value`)}
              </span>
              <span className="text-[13px] font-medium opacity-95">
                {t(`qf${i}Label`)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
