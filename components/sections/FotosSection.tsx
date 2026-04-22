"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PHOTOS = [
  {
    key: "alt1",
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&auto=format&fit=crop",
    tall: true,
  },
  {
    key: "alt2",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
  },
  {
    key: "alt3",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop",
  },
  {
    key: "alt4",
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&auto=format&fit=crop",
  },
  {
    key: "alt5",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
  },
  {
    key: "alt6",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
  },
  {
    key: "alt7",
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop",
  },
] as const;

export default function Fotos() {
  const t = useTranslations("PlayaElAngel.fotos");

  return (
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
            <motion.div
              key={p.key}
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
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
