import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Recuperar del localStorage o usar idioma del sistema
    const saved = localStorage.getItem("language");
    if (saved) return saved;

    // Detectar idioma del navegador
    const browserLanguage = navigator.language || navigator.userLanguage;
    return browserLanguage.startsWith("es") ? "es" : "en";
  });

  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  // Cargar traducciones cuando cambia el idioma
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/json/${language}.json`);
        if (!response.ok) throw new Error("Error cargando traducciones");
        const data = await response.json();
        setTranslations(data);
        localStorage.setItem("language", language);
      } catch (error) {
        console.error("Error al cargar traducciones:", error);
        setTranslations({});
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const changeLanguage = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};
