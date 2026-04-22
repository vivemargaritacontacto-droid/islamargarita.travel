"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

const QUESTIONS = Array.from({ length: 17 }, (_, i) => i + 1) as number[];

export default function FAQ() {
  const t = useTranslations("PlayaElAngel.faq");
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream px-6 py-20">
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

        <div className="mx-auto flex max-w-[880px] flex-col gap-3">
          {QUESTIONS.map((n) => {
            const isOpen = open === n;
            return (
              <div
                key={n}
                className={`overflow-hidden rounded-2xl border-[1.5px] bg-white transition-colors ${
                  isOpen ? "border-turquoise" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : n)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3.5 px-6 py-5 text-left"
                >
                  <span className="text-[15.5px] font-semibold text-ink">
                    {t(`q${n}`)}
                  </span>
                  <span
                    className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-coral text-white"
                        : "bg-turquoise-light text-turquoise-dark"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14.5px] leading-[1.7] text-slate-600">
                        {t(`a${n}`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
