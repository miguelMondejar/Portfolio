import React from "react";
import { FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FULL_NAME, TITLE, SOCIAL_CONFIG, EMAIL_LINK } from "../utils/constants";
import { useLocation } from "react-router-dom";
import { useTranslation } from "../hooks/useLanguage";
import SocialIcon from "./common/SocialIcon";

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
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  {t("projects-text")}
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
                <SocialIcon key={social.id} social={social} size="10" />
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
              aria-label={t("backToTop")}
              title={t("backToTop")}
            >
              <FaArrowUp /> {t("backToTop")}
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
