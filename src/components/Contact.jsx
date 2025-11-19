import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { EMAIL, EMAIL_LINK, SOCIAL_CONFIG } from "../data/constants";
import { useTranslation } from "../hooks/useLanguage";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="container mx-auto py-12 px-4 space-y-8">
      {/* Card principal */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("contactText")}
        </h1>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("contactParagraph1")}
        </p>
        <p className="flex items-center gap-4 text-lg">
          <span className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-2xl">
            <FaEnvelope />
          </span>
          <a
            href={EMAIL_LINK}
            className="text-blue-600 dark:text-blue-400 hover:underline"
            aria-label={`${t("contactParagraph2")}: ${EMAIL}`}
          >
            {EMAIL}
          </a>
        </p>
      </div>

      {/* Enlaces a redes sociales */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {SOCIAL_CONFIG.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 ${social.bgColor} ${social.hoverColor} ${social.darkBgColor} ${social.darkHoverColor} text-white rounded-lg shadow-lg p-4 transition-colors duration-300`}
            aria-label={`${t("contactParagraph3")} - ${social.label}`}
          >
            <span className="flex items-center justify-center w-12 h-12 bg-white text-gray-800 rounded-full text-2xl flex-shrink-0">
              {social.id === "linkedin" ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )}
            </span>
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
