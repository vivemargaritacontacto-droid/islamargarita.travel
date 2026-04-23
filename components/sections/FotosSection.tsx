"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Lightbox from "@/components/ui/Lightbox";

const PHOTOS = [
  { key: "alt1", src: "/images/services/pool-area.jpg", tall: true },
  { key: "alt2", src: "/images/services/habitacion-principal.jpg" },
  { key: "alt3", src: "/images/services/sala-estar-tv.jpg" },
  { key: "alt4", src: "/images/services/patio-piscina.jpg"},
  { key: "alt5", src: "/images/services/habitacion-secundaria.jpg" },
  { key: "alt6", src: "/images/services/cocina-lavadora.jpg" },
  { key: "alt7", src: "/images/services/sofa-cama.jpg" },
] as const;

export default function FotosSection() {
  const t = useTranslations("PlayaElAngel.fotos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = PHOTOS.map((p) => ({ src: p.src, alt: t(p.key) }));

  return (
    <>
      <section id="fotos" className="bg-white px-6 py-20">
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

          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {PHOTOS.map((p, index) => (
              <motion.button
                key={p.key}
                onClick={() => setLightboxIndex(index)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative cursor-pointer overflow-hidden rounded-[20px] ${
                  "tall" in p && p.tall ? "row-span-2 aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={p.src}
                  alt={t(p.key)}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                  <span className="scale-75 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    Ver foto
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        photos={photos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
