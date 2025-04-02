import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en/translation.json";
import tr from "../locales/tr/translation.json";
import ar from "../locales/ar/translation.json";

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Eğer dil tespit edilemezse veya çeviri bulunamazsa kullanılacak varsayılan dil
    debug: process.env.NODE_ENV === "development", // Geliştirme ortamında hata ayıklama mesajlarını göster
    interpolation: {
      escapeValue: false, // React zaten XSS koruması yaptığı için kaçış devre dışı bırakılabilir
    },
  });

export default i18n;
