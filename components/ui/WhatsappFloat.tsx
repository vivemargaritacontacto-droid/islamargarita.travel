"use client";

import { useTranslations } from "next-intl";

export default function WhatsappFloat() {
  const t = useTranslations("PlayaElAngel.whatsapp");
  const href = `https://wa.me/584249077879?text=${encodeURIComponent(t("message"))}`;

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("aria")}
        className="wa-float fixed bottom-6 right-6 z-40 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#25D366] text-[32px] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
      >
        💬
      </a>
      <style jsx>{`
        .wa-float {
          animation: wa-pulse 2.2s infinite;
        }
        @keyframes wa-pulse {
          0%,
          100% {
            box-shadow:
              0 10px 30px rgba(37, 211, 102, 0.45),
              0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          50% {
            box-shadow:
              0 10px 30px rgba(37, 211, 102, 0.45),
              0 0 0 16px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
}
