"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Tv,
  WashingMachine,
  Flame,
  UtensilsCrossed,
  Waves,
  Snowflake,
  Wifi,
  Droplets,
  ChefHat,
  Camera,
  Car,
  Trees,
  type LucideIcon,
} from "lucide-react";

const SERVICES: { id: number; Icon: LucideIcon }[] = [
  { id: 7, Icon: Wifi },
  { id: 2, Icon: WashingMachine },
  { id: 3, Icon: Flame },
  { id: 4, Icon: UtensilsCrossed },
  { id: 5, Icon: Waves },
  { id: 6, Icon: Snowflake },
  { id: 1, Icon: Tv },
  { id: 8, Icon: Droplets },
  { id: 9, Icon: ChefHat },
  { id: 10, Icon: Camera },
  { id: 11, Icon: Car },
  { id: 12, Icon: Trees },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Servicios() {
  const t = useTranslations("PlayaElAngel.servicios");

  return (
    <section id="servicios" className="bg-turquoise-light px-6 py-20">
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {SERVICES.map(({ id, Icon }) => (
            <motion.div
              key={id}
              variants={item}
              className="rounded-[20px] bg-white px-6 py-7 text-center shadow-tropical-sm transition-all hover:-translate-y-1.5 hover:shadow-tropical-md"
            >
              <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-gradient-to-br from-turquoise to-coral text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mb-1 text-base font-semibold text-ink">
                {t(`s${id}Title`)}
              </h4>
              <p className="text-[13.5px] text-slate-600">{t(`s${id}Desc`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
