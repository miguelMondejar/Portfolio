import React from "react";
import experiences from "../data/experience.json";
import { useTranslation } from "../hooks/useLanguage";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("experience-text")}
        </h1>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <article
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Logo empresa */}
            <div className="md:w-1/6 flex justify-center md:justify-start items-center flex-shrink-0">
              <img
                src={exp.logo}
                alt={`Logo de ${exp.company}`}
                className="w-28 h-28 object-contain rounded-full border-4 border-blue-200 dark:border-blue-400 p-2 shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Información */}
            <div className="md:w-5/6 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.company}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                    {exp.period} · {exp.location}
                  </p>
                </div>
                <span className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm shadow whitespace-nowrap">
                  {exp.role}
                </span>
              </div>

              {/* Lista de logros */}
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((item, index) => (
                  <li key={index} className="ml-2 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Logos tecnologías */}
              <div className="flex gap-3 mt-6 flex-wrap">
                {exp.techs.map((tech) => (
                  <div
                    key={tech.alt}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                    title={tech.alt}
                    role="img"
                    aria-label={`Tecnología: ${tech.alt}`}
                  >
                    <img src={tech.src} alt={tech.alt} className="w-7 h-7" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
