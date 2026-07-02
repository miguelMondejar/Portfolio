import React from "react";
import { FaEnvelope, FaExternalLinkAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { EMAIL, EMAIL_LINK, SOCIAL_CONFIG } from "../utils/constants";
import { useTranslation } from "../hooks/useLanguage";
import { useSEO } from "../hooks/useSEO";

const SOCIAL_BORDER = {
  linkedin: "border-blue-600",
  github: "border-gray-600 dark:border-gray-500",
};

const SOCIAL_ICON = {
  linkedin: <FaLinkedin size={20} />,
  github: <FaGithub size={20} />,
};

export default function Contact() {
  const { t } = useTranslation();

  useSEO({
    title: "Contacto",
    description: "Ponte en contacto conmigo a través de email o redes sociales. Disponible para proyectos, consultoría y colaboraciones profesionales.",
    url: "https://miguelmondejar.dev/contact",
    imageUrl: "https://miguelmondejar.dev/img/miguel_index.jpg"
  });

  return (
    <section id="contact" className="container mx-auto py-12 px-6 space-y-8">

      {/* Título */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("contactText")}
        </h1>
      </div>

      {/* Email card */}
      <article
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500 p-6 space-y-4"
        data-aos="fade-up"
      >
        <p className="text-gray-700 dark:text-gray-300">
          {t("contactParagraph1")}
        </p>
        <div className="border-t border-gray-100 dark:border-gray-700" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("contactParagraph2")}
          </p>
          <a
            href={EMAIL_LINK}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-xl shadow transition-colors duration-200 text-sm whitespace-nowrap"
            aria-label={`${t("contactParagraph2")}: ${EMAIL}`}
          >
            <FaEnvelope size={14} />
            {EMAIL}
          </a>
        </div>
      </article>

      {/* Redes sociales */}
      <div className="space-y-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          {t("contactParagraph3")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SOCIAL_CONFIG.map((social, i) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${SOCIAL_BORDER[social.id] ?? "border-blue-500"} p-5`}
              aria-label={social.label}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${social.bgColor} ${social.darkBgColor} text-white shrink-0 shadow`}>
                {SOCIAL_ICON[social.id]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t(social.id === "linkedin" ? "linkedin" : "github")}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {t(social.id === "linkedin" ? "linkedinDescription" : "githubDescription")}
                </p>
              </div>
              <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 transition-colors shrink-0" size={13} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
