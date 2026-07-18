import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Send, CheckCircle2, Search, ArrowDown, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import RevealText from "./RevealText";
import FlipText from "./FlipText";

interface ContactFormProps {
  onViewExamples: (webType: string) => void;
}

interface Inquiry {
  id: string;
  name: string;
  email: string;
  webType: string;
  message: string;
  date: string;
}

export default function ContactForm({ onViewExamples }: ContactFormProps) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    webType: "",
    message: "",
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [validationError, setValidationError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const locale = i18n.language === "es" ? "es-AR" : "en-US";

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("joaquin_portfolio_inquiries");
    if (stored) {
      try {
        setInquiries(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse inquiries", e);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError(t("contact.validation_error"));
      return;
    }

    setIsSending(true);
    setSendError("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!
      );

      const newInquiry: Inquiry = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        webType: formData.webType || "No especificado",
        message: formData.message,
        date: new Date().toLocaleDateString(locale, {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updatedInquiries = [newInquiry, ...inquiries];
      setInquiries(updatedInquiries);
      localStorage.setItem("joaquin_portfolio_inquiries", JSON.stringify(updatedInquiries));

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        webType: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Email send failed:", error);
      setSendError(t("contact.send_error"));
    } finally {
      setIsSending(false);
    }
  };

  const handleClearHistory = () => {
    setInquiries([]);
    localStorage.removeItem("joaquin_portfolio_inquiries");
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-off-white-canvas dark:bg-deep-charcoal transition-colors duration-300 relative overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-display font-medium text-graphite dark:text-ash uppercase tracking-[0.15em] mb-3">
            {t("contact.eyebrow")}
          </span>
          <RevealText
            as="h2"
            text={t("contact.title")}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-black-ink dark:text-off-white-canvas"
          />
          <div className="h-1 w-16 bg-electric-lime mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-2xl text-off-black-ink dark:text-off-white-canvas mb-4">
                {t("contact.subtitle")}
              </h3>
              <p className="font-sans text-base text-graphite dark:text-ash leading-relaxed mb-8">
                {t("contact.desc")}
              </p>

              {/* Direct Info list */}
              <div className="flex flex-col gap-5">
                {/* Email Item */}
                <a
                  href="mailto:djoako22@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-pure-white dark:bg-off-black-ink border border-ash/35 dark:border-graphite/20 hover:border-electric-lime transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-3 bg-electric-lime text-off-black-ink rounded-xl group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-stone block font-bold">
                      {t("contact.email_label")}
                    </span>
                    <span className="font-sans text-sm md:text-base font-semibold text-off-black-ink dark:text-off-white-canvas">
                      <FlipText>djoako22@gmail.com</FlipText>
                    </span>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href="https://wa.me/5493515995198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-pure-white dark:bg-off-black-ink border border-ash/35 dark:border-graphite/20 hover:border-electric-lime transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-3 bg-electric-lime text-off-black-ink rounded-xl group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-stone block font-bold">
                      {t("contact.phone_label")}
                    </span>
                    <span className="font-sans text-sm md:text-base font-semibold text-off-black-ink dark:text-off-white-canvas">
                      <FlipText>+54 9 351 599 5198</FlipText>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Inquiries sent history dashboard */}
            {inquiries.length > 0 && (
              <div className="mt-12 p-5 bg-pure-white dark:bg-off-black-ink rounded-2xl border border-ash/30 dark:border-graphite/20">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-off-black-ink dark:text-off-white-canvas flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    {t("contact.history_title")}
                  </h4>
                  <button
                    onClick={handleClearHistory}
                    className="font-sans text-[10px] text-rose-500 hover:underline cursor-pointer"
                  >
                    <FlipText>{t("contact.clear_history")}</FlipText>
                  </button>
                </div>
                <div className="max-h-44 overflow-y-auto pr-1 flex flex-col gap-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-3 bg-off-white-canvas dark:bg-deep-charcoal rounded-xl border border-ash/20 text-xs flex flex-col gap-1"
                    >
                      <div className="flex justify-between font-semibold text-off-black-ink dark:text-off-white-canvas">
                        <span>{inq.name}</span>
                        <span className="text-[9px] bg-electric-lime text-off-black-ink px-2 py-0.5 rounded-full font-mono">
                          {t(`projects.filters.${inq.webType}`, { defaultValue: inq.webType })}
                        </span>
                      </div>
                      <p className="text-graphite dark:text-ash italic">"{inq.message}"</p>
                      <span className="text-[9px] text-stone font-mono self-end mt-1">{inq.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-pure-white dark:bg-off-black-ink rounded-[28px] p-6 md:p-10 border border-ash/30 dark:border-graphite/20 shadow-sm relative">
              {/* Success Banner */}
              {isSuccess && (
                <div className="absolute inset-0 bg-pure-white/95 dark:bg-off-black-ink/95 backdrop-blur-md rounded-[28px] flex flex-col items-center justify-center p-8 text-center z-30 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                  <h3 className="font-display font-bold text-2xl text-off-black-ink dark:text-off-white-canvas mb-2">
                    {t("contact.success_title")}
                  </h3>
                  <p className="font-sans text-sm text-graphite dark:text-ash max-w-sm mb-6">
                    {t("contact.success_desc")}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-electric-lime text-off-black-ink rounded-full font-display font-medium text-xs uppercase tracking-wider cursor-pointer transition-all active:scale-95 hover:opacity-90"
                  >
                    <FlipText>{t("contact.send_another")}</FlipText>
                  </button>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas uppercase tracking-wider">
                    {t("contact.label_name")}{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.placeholder_name")}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-off-white-canvas dark:bg-deep-charcoal border border-ash/40 dark:border-graphite/20 focus:border-electric-lime dark:focus:border-electric-lime outline-none text-sm text-off-black-ink dark:text-off-white-canvas placeholder-stone transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas uppercase tracking-wider">
                    {t("contact.label_email")}{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.placeholder_email")}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-off-white-canvas dark:bg-deep-charcoal border border-ash/40 dark:border-graphite/20 focus:border-electric-lime dark:focus:border-electric-lime outline-none text-sm text-off-black-ink dark:text-off-white-canvas placeholder-stone transition-all"
                  />
                </div>

                {/* Web Type Selector */}
                <div className="flex flex-col gap-1.5 text-left relative">
                  <label className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas uppercase tracking-wider">
                    {t("contact.label_webType")}
                  </label>
                  <select
                    name="webType"
                    value={formData.webType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-off-white-canvas dark:bg-deep-charcoal border border-ash/40 dark:border-graphite/20 focus:border-electric-lime dark:focus:border-electric-lime outline-none text-sm text-off-black-ink dark:text-off-white-canvas placeholder-stone transition-all cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1em",
                    }}
                  >
                    <option value="">
                      {t("contact.placeholder_webType")}
                    </option>
                    <option value="Landing page">{t("projects.filters.Landing page")}</option>
                    <option value="Institucional">{t("projects.filters.Institucional")}</option>
                    <option value="Catálogo">{t("projects.filters.Catálogo")}</option>
                    <option value="Ecommerce">{t("projects.filters.Ecommerce")}</option>
                    <option value="Otros">{t("projects.filters.Otros")}</option>
                  </select>

                  {/* "Ver ejemplos" link */}
                  {formData.webType && (
                    <div className="mt-2.5 flex items-center gap-1 animate-in fade-in slide-in-from-top-1.5 duration-200">
                      <button
                        type="button"
                        onClick={() => onViewExamples(formData.webType)}
                        className="font-sans text-xs font-semibold text-off-black-ink dark:text-electric-lime hover:underline flex items-center gap-1.5 cursor-pointer py-1"
                      >
                        <Search className="w-3.5 h-3.5" />
                        <FlipText>
                          {`${t("contact.see_examples_prefix")}${t(`projects.filters.${formData.webType}`)}${t("contact.see_examples_suffix")}`}
                        </FlipText>
                        <ArrowDown className="w-3 h-3 text-stone animate-bounce" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas uppercase tracking-wider">
                    {t("contact.label_message")}{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t("contact.placeholder_message")}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-off-white-canvas dark:bg-deep-charcoal border border-ash/40 dark:border-graphite/20 focus:border-electric-lime dark:focus:border-electric-lime outline-none text-sm text-off-black-ink dark:text-off-white-canvas placeholder-stone transition-all resize-none"
                  />
                </div>

                {/* Error Box */}
                {validationError && (
                  <p className="text-xs text-rose-500 font-sans text-left mt-1">{validationError}</p>
                )}

                {/* Send Error Box */}
                {sendError && (
                  <p className="text-xs text-rose-500 font-sans text-left mt-1">{sendError}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full mt-3 py-4 bg-electric-lime text-off-black-ink rounded-full font-display font-bold text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md hover:shadow-lg hover:shadow-electric-lime/10 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  )}
                  <FlipText>{isSending ? t("contact.sending") : t("contact.btn_submit")}</FlipText>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}