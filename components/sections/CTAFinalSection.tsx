"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WA_URL =
  "https://wa.me/584249077879?text=%C2%A1Hola%21%20Quiero%20informaci%C3%B3n%20del%20townhouse%20en%20Playa%20El%20%C3%81ngel";

export default function CTAFinal() {
  const t = useTranslations("PlayaElAngel.finalCta");

  return (
    <section
      className="bg-cover bg-center px-6 py-20 text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(8,145,178,0.92), rgba(249,115,22,0.82)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[clamp(1.8rem,5vw,3rem)] font-extrabold leading-[1.2]"
        >
          {t("titleLead")}{" "}
          <span className="font-pacifico font-normal text-sunshine">
            {t("titleHighlight")}
          </span>
          {t("titleTail")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-9 max-w-[700px] text-lg opacity-95"
        >
          {t("sub")}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-[17px] font-bold text-coral shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1"
        >
          {t("cta")}
        </motion.a>
      </div>
    </section>
  );
}
