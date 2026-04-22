"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Waves,
  ShoppingBag,
  Building2,
  Sunrise,
  Store,
  Plane,
  type LucideIcon,
} from "lucide-react";

const PLACES: { id: number; Icon: LucideIcon }[] = [
  { id: 1, Icon: Waves },
  { id: 2, Icon: ShoppingBag },
  { id: 3, Icon: Building2 },
  { id: 4, Icon: Sunrise },
  { id: 5, Icon: Store },
  { id: 6, Icon: Plane },
];

const MAP_SRC =
  "https://www.google.com/maps?q=Av.%20Aldonza%20Manrique%2C%20Playa%20el%20Angel%2C%20Isla%20de%20Margarita%2C%20Venezuela&output=embed";

export default function Location() {
  const t = useTranslations("PlayaElAngel.location");

  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-ink px-6 py-20 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <div className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-sunshine">
            {t("label")}
          </div>
          <h2 className="mb-4 text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.15]">
            {t("titleLead")}{" "}
            <span className="font-pacifico font-normal text-sunshine">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-[17px] text-white/85">{t("sub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="min-h-[340px] overflow-hidden rounded-[20px] border-[3px] border-white/10 shadow-tropical-lg"
          >
            <iframe
              src={MAP_SRC}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapTitle")}
              className="h-full min-h-[340px] w-full border-0"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-3">
            {PLACES.map(({ id, Icon }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md"
              >
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-coral to-sunshine text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-[15px] font-bold">{t(`i${id}Title`)}</h4>
                  <p className="text-[13px] opacity-85">{t(`i${id}Desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
