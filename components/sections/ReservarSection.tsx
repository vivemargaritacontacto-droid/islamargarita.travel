"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Phone, Mail, Facebook, Send } from "lucide-react";

const WHATSAPP_NUMBER = "584249077879";
const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8] as const;
const PAYMENT_OPTIONS = [1, 2, 3, 4, 5] as const;

export default function Reservar() {
  const t = useTranslations("PlayaElAngel.reservar");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    arrival: "",
    departure: "",
    nights: "",
    guests: "",
    payment: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      t("waHeading"),
      "",
      `${t("waLabelName")}: ${form.name}`,
      `${t("waLabelPhone")}: ${form.phone}`,
      `${t("waLabelEmail")}: ${form.email}`,
      `${t("waLabelArrival")}: ${form.arrival}`,
      `${t("waLabelDeparture")}: ${form.departure}`,
      `${t("waLabelNights")}: ${form.nights}`,
      `${t("waLabelGuests")}: ${form.guests}`,
    ];
    if (form.payment) lines.push(`${t("waLabelPayment")}: ${form.payment}`);
    if (form.message) lines.push(`${t("waLabelMessage")}: ${form.message}`);
    lines.push("", t("waClosing"));

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  }

  const inputClass =
    "w-full rounded-xl border-[1.5px] border-slate-200 bg-white px-3.5 py-3 text-[14.5px] text-ink outline-none transition focus:border-turquoise focus:ring-[3px] focus:ring-turquoise/15";

  const labelClass =
    "mb-1.5 block text-[13px] font-semibold tracking-[0.3px] text-ink";

  return (
    <section
      id="reservar"
      className="bg-gradient-to-b from-cream to-white px-6 py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center"
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

        <div className="grid items-start gap-9 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="pt-2"
          >
            <h3 className="mb-3.5 text-[22px] font-bold text-ink">
              {t("sideHeading")}
            </h3>
            <p className="mb-4 text-[15px] text-slate-600">{t("sideText")}</p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2.5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[14.5px] transition-colors hover:border-turquoise"
            >
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-turquoise-light text-turquoise-dark">
                <Phone className="h-4 w-4" />
              </span>
              <span>
                <strong className="block">{t("contactPhone")}</strong>
                <span className="text-[12.5px] text-slate-500">
                  {t("contactPhoneCaption")}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${t("contactEmail")}`}
              className="mb-2.5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[14.5px] transition-colors hover:border-turquoise"
            >
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-turquoise-light text-turquoise-dark">
                <Mail className="h-4 w-4" />
              </span>
              <strong className="text-[13.5px]">{t("contactEmail")}</strong>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61570755117625"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2.5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[14.5px] transition-colors hover:border-turquoise"
            >
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-turquoise-light text-turquoise-dark">
                <Facebook className="h-4 w-4" />
              </span>
              <strong>{t("contactFacebook")}</strong>
            </a>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[28px] border border-slate-200 bg-white px-8 py-9 shadow-tropical-lg"
          >
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="pa-name" className={labelClass}>
                  {t("labelName")}
                </label>
                <input
                  id="pa-name"
                  type="text"
                  required
                  placeholder={t("placeholderName")}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="pa-phone" className={labelClass}>
                  {t("labelPhone")}
                </label>
                <input
                  id="pa-phone"
                  type="tel"
                  required
                  placeholder={t("placeholderPhone")}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="pa-email" className={labelClass}>
                {t("labelEmail")}
              </label>
              <input
                id="pa-email"
                type="email"
                required
                placeholder={t("placeholderEmail")}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="pa-arrival" className={labelClass}>
                  {t("labelArrival")}
                </label>
                <input
                  id="pa-arrival"
                  type="date"
                  required
                  value={form.arrival}
                  onChange={(e) => update("arrival", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="pa-departure" className={labelClass}>
                  {t("labelDeparture")}
                </label>
                <input
                  id="pa-departure"
                  type="date"
                  required
                  value={form.departure}
                  onChange={(e) => update("departure", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="pa-nights" className={labelClass}>
                {t("labelNights")}
              </label>
              <input
                id="pa-nights"
                type="number"
                min="3"
                required
                placeholder="3"
                value={form.nights}
                onChange={(e) => update("nights", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="pa-guests" className={labelClass}>
                  {t("labelGuests")}
                </label>
                <select
                  id="pa-guests"
                  required
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("guestsPlaceholder")}</option>
                  {GUEST_OPTIONS.map((n) => (
                    <option key={n} value={t(`guestsOption${n}`)}>
                      {t(`guestsOption${n}`)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="pa-payment" className={labelClass}>
                  {t("labelPayment")}
                </label>
                <select
                  id="pa-payment"
                  value={form.payment}
                  onChange={(e) => update("payment", e.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("paymentPlaceholder")}</option>
                  {PAYMENT_OPTIONS.map((n) => (
                    <option key={n} value={t(`payment${n}`)}>
                      {t(`payment${n}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="pa-message" className={labelClass}>
                {t("labelMessage")}
              </label>
              <textarea
                id="pa-message"
                placeholder={t("placeholderMessage")}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={`${inputClass} min-h-[90px] resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-coral to-coral-dark px-6 py-4 text-base font-bold text-white shadow-coral transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              {t("submit")}
            </button>
            <p className="mt-3.5 text-center text-[12.5px] text-slate-500">
              {t("note")}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
