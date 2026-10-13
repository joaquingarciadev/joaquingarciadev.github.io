import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

function getLangFromURL(): string {
  // En el prerender (Node) no hay window: se genera en español
  if (typeof window === "undefined") return "es";
  const path = window.location.pathname;
  if (path.startsWith("/en")) return "en";
  return "es";
}

// Mantiene <html lang>, el título y la meta description en el idioma activo (SEO)
i18n.on("languageChanged", (lng) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lng;
  document.title = i18n.t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("meta.description"));
});

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: getLangFromURL(),
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
