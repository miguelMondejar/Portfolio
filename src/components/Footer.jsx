import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FULL_NAME, TITLE, SOCIAL_CONFIG, EMAIL_LINK } from "../utils/constants";
import { useLocation } from "react-router-dom";
import { useTranslation } from "../hooks/useLanguage";

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 shadow-inner border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sección info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-1">{FULL_NAME}</h2>
            <p className="italic text-gray-400 mb-4">{TITLE}</p>
          </div>

          {/* Sección links rápidos */}
          <div className="text-center">
            <h3 className="font-semibold mb-3 text-gray-300">{t("linkText")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t("greeting")}
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t("me-text")}
                </a>
              </li>
              <li>
                <a href="/experience" className="text-gray-400 hover:text-white transition-colors">
                  {t("experience-text")}
                </a>
              </li>
              <li>
                <a href="/education" className="text-gray-400 hover:text-white transition-colors">
                  {t("study-text")}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("contactText")}
                </a>
              </li>
            </ul>
          </div>

          {/* Sección redes sociales */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-3 text-gray-300">{t("rrssText")}</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {SOCIAL_CONFIG.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={`Visitar ${social.label}`}
                  title={social.label}
                >
                  {social.id === "linkedin" ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                </a>
              ))}
              <a
                href={EMAIL_LINK}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label={t("contactText")}
                title={t("contactText")}
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {year} {FULL_NAME}. {t("rightsReserved")}
          </p>

          {/* Botón scroll to top */}
          {location.pathname !== "/" && (
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm"
              aria-label="Volver al inicio"
              title="Volver al inicio"
            >
              <FaArrowUp /> Arriba
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
