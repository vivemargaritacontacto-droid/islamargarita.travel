"use client";

import { FormEvent, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
// eslint-disable-next-line @typescript-eslint/no-deprecated
import { Phone, Mail, Facebook, Send, Moon } from "lucide-react";

const WHATSAPP_NUMBER = "584249077879";
const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8] as const;
const PAYMENT_OPTIONS = [1, 2, 3, 4, 5] as const;

function calcNights(arrival: string, departure: string): number | null {
  if (!arrival || !departure) return null;
  const diff = new Date(departure).getTime() - new Date(arrival).getTime();
  const n = Math.round(diff / 86_400_000);
  return n >= 1 ? n : null;
}


export default function Reservar() {
  const t = useTranslations("PlayaElAngel.reservar");

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    arrival: "",
    departure: "",
    guests: "",
    payment: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "arrival" && prev.departure && value >= prev.departure)
        next.departure = "";
      return next;
    });
  }

  const nights = useMemo(
    () => calcNights(form.arrival, form.departure),
    [form.arrival, form.departure]
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      t("waHeading"),
      "",
      `${t("waLabelName")}: ${form.name}`,
      `${t("waLabelPhone")}: ${form.phone}`,
      form.email ? `${t("waLabelEmail")}: ${form.email}` : "",
      `${t("waLabelArrival")}: ${form.arrival}`,
      `${t("waLabelDeparture")}: ${form.departure}`,
      nights ? `${t("waLabelNights")}: ${nights}` : "",
      `${t("waLabelGuests")}: ${form.guests}`,
    ].filter(Boolean);
    if (form.payment) lines.push(`${t("waLabelPayment")}: ${form.payment}`);
    if (form.message) lines.push(`${t("waLabelMessage")}: ${form.message}`);
    lines.push("", t("waClosing"));

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener"
    );
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13.5px] text-ink outline-none transition focus:border-turquoise focus:ring-2 focus:ring-turquoise/15";

  const labelClass =
    "mb-1 block text-[11.5px] font-semibold uppercase tracking-[0.5px] text-slate-400";

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
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="pt-2"
          >
            <h3 className="mb-3 text-[22px] font-bold text-ink">
              {t("sideHeading")}
            </h3>
            <p className="mb-4 text-[15px] text-slate-600">{t("sideText")}</p>

            {[
              {
                href: `https://wa.me/${WHATSAPP_NUMBER}`,
                icon: <Phone className="h-4 w-4" />,
                label: t("contactPhone"),
                sub: t("contactPhoneCaption"),
                external: true,
              },
              {
                href: `mailto:${t("contactEmail")}`,
                icon: <Mail className="h-4 w-4" />,
                label: t("contactEmail"),
                external: false,
              },
              {
                href: "https://www.facebook.com/profile.php?id=61570755117625",
                icon: <Facebook className="h-4 w-4" />,
                label: t("contactFacebook"),
                external: true,
              },
            ].map(({ href, icon, label, sub, external }) => (
              <a
                key={href}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mb-2.5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[14px] transition-colors hover:border-turquoise"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-turquoise-light text-turquoise-dark">
                  {icon}
                </span>
                <span className="min-w-0">
                  <strong className="block truncate">{label}</strong>
                  {sub && (
                    <span className="text-[12px] text-slate-500">{sub}</span>
                  )}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[24px] border border-slate-200 bg-white px-6 py-7 shadow-tropical-lg"
          >
            {/* Row 1: Name + Phone */}
            <div className="mb-3 grid grid-cols-2 gap-3">
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

            {/* Row 2: Arrival + Departure */}
            <div className="mb-1 grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="pa-arrival" className={labelClass}>
                  {t("labelArrival")}
                </label>
                <input
                  id="pa-arrival"
                  type="date"
                  required
                  min={today}
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
                  min={form.arrival || today}
                  value={form.departure}
                  onChange={(e) => update("departure", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Dynamic nights badge */}
            <AnimatePresence>
              {nights !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 12 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-2.5 rounded-xl bg-turquoise/10 px-3.5 py-2">
                    <Moon className="h-3.5 w-3.5 text-turquoise-dark" />
                    <span className="text-[13px] font-semibold text-turquoise-dark">
                      {nights} {nights === 1 ? "noche" : "noches"}
                    </span>
                   
                      <span className={`ml-auto rounded-full px-2 py-0.5 text-[11px] font-semibold ${nights < 3 ? "bg-coral/10 text-coral" : "bg-turquoise/10 text-turquoise-dark"}`}>
                      {nights < 3 ? "Mín. 3 noches" : "Es hora de disfrutar"}
                      </span>
                    
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Row 3: Guests + Payment */}
            <div className="mb-3 grid grid-cols-2 gap-3">
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

            {/* Row 4: Email (optional) */}
            <div className="mb-3">
              <label htmlFor="pa-email" className={labelClass}>
                {t("labelEmail")}{" "}
                <span className="font-normal text-slate-400">(opcional)</span>
              </label>
              <input
                id="pa-email"
                type="email"
                placeholder={t("placeholderEmail")}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Row 5: Message (optional) */}
            <div className="mb-2">
              <label htmlFor="pa-message" className={labelClass}>
                {t("labelMessage")}
              </label>
              <textarea
                id="pa-message"
                placeholder={t("placeholderMessage")}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={`${inputClass} min-h-[60px] resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-coral to-coral-dark px-6 py-3.5 text-base font-bold text-white shadow-coral transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              {t("submit")}
            </button>
            <p className="mt-3 text-center text-[12px] text-slate-400">
              {t("note")}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
