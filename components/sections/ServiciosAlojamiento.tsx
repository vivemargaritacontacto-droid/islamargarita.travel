"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BedDouble, Bath, Sofa, Tv, ChefHat, Waves } from "lucide-react";
import { useTranslations } from "next-intl";

const servicios = [
  {
    titleKey: "accommodation.room1Title",
    descKey: "accommodation.room1Desc",
    icon: BedDouble,
    image: "/images/services/habitacion-principal.jpg",
  },
  {
    titleKey: "accommodation.room2Title",
    descKey: "accommodation.room2Desc",
    icon: Bath,
    image: "/images/services/habitacion-secundaria.jpg",
  },
  {
    titleKey: "accommodation.sofaTitle",
    descKey: "accommodation.sofaDesc",
    icon: Sofa,
    image: "/images/services/sofa-cama.jpg",
  },
  {
    titleKey: "accommodation.livingTitle",
    descKey: "accommodation.livingDesc",
    icon: Tv,
    image: "/images/services/sala-estar-tv.jpg",
  },
  {
    titleKey: "accommodation.kitchenTitle",
    descKey: "accommodation.kitchenDesc",
    icon: ChefHat,
    image: "/images/services/cocina-lavadora.jpg",
  },
  {
    titleKey: "accommodation.poolTitle",
    descKey: "accommodation.poolDesc",
    icon: Waves,
    image: "/images/services/pool-area.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServiciosAlojamiento() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t("title")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("homeSubtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;

            return (
              <motion.article
                key={index}
                variants={cardVariants}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={servicio.image}
                    alt={t(servicio.titleKey)}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 shadow-md">
                    <Icon className="h-6 w-6 text-slate-900" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {t(servicio.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {t(servicio.descKey)}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
