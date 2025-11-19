import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return context;
};

export const useTranslation = () => {
  const { translations, language } = useLanguage();

  const t = (key, params = {}) => {
    let text = translations[key] || key;

    Object.keys(params).forEach((param) => {
      const regex = new RegExp(`{{\\s*${param}\\s*}}`, "g");
      text = text.replace(regex, params[param]);
    });

    return text;
  };

  return { t, language };
};

