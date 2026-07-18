import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

function getLangFromURL(): string {
  const path = window.location.pathname;
  if (path.startsWith("/en")) return "en";
  return "es";
}

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