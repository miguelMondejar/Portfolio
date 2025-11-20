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
    let value = translations[key] ?? key;

    if (typeof value !== "string") {
      return value;
    }

    Object.keys(params).forEach((param) => {
      const regex = new RegExp(`{{\\s*${param}\\s*}}`, "g");
      value = value.replace(regex, params[param]);
    });

    return value;
  };

  return { t, language };
};
