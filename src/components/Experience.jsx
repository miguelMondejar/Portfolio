import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "../hooks/useLanguage";
import { useSEO } from "../hooks/useSEO";

export default function Experience() {
  const { t } = useTranslation();
  const experienceList = Array.isArray(t("experience")) ? t("experience") : [];

  useSEO({
    title: "Experiencia",
    description: "Mi experiencia profesional como desarrollador de software. Trabaje en CaixaBank Tech y GUADALTEL desarrollando soluciones con Java, Spring Boot y React.",
    url: "https://miguelmondejar.dev/experience",
    imageUrl: "https://miguelmondejar.dev/img/miguel_index.jpg"
  });

  return (
    <section className="container mx-auto px-6 py-8 space-y-8">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("experience-text")}
        </h1>
      </div>

      <div className="relative space-y-8">
        {/* Línea del timeline */}
        <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100 dark:from-blue-400 dark:via-blue-700 dark:to-blue-900 hidden md:block" />

        {experienceList.map((exp, i) => {
          const isCurrent =
            exp.period.toLowerCase().includes("present") ||
            exp.period.toLowerCase().includes("actualidad");

          return (
            <div
              key={i}
              className="relative flex gap-6 md:gap-10"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Dot del timeline */}
              <div className="hidden md:flex flex-col items-center z-10 pt-6 shrink-0">
                <div
                  className={`w-4 h-4 rounded-full border-4 shadow-md transition-all duration-300 ${
                    isCurrent
                      ? "bg-blue-500 border-blue-200 dark:border-blue-900 animate-pulse"
                      : "bg-white dark:bg-gray-900 border-blue-400 dark:border-blue-600"
                  }`}
                />
              </div>

              <article
                className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-l-4 ${
                  isCurrent
                    ? "border-blue-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                {/* Cabecera */}
                <div className="p-6 pb-4 flex flex-col sm:flex-row gap-4 items-start justify-between">
                  <div className="flex gap-4 items-center">
                    <img
                      src={exp.logo}
                      alt={`Logo de ${exp.company}`}
                      className="w-14 h-14 object-contain rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-1 shadow"
                      loading="lazy"
                    />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.company}
                        </h2>
                        {isCurrent && (
                          <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full font-semibold tracking-wide">
                            ● Actual
                          </span>
                        )}
                      </div>
                      <span className="inline-block mt-1.5 bg-blue-600 dark:bg-blue-700 text-white px-3 py-0.5 rounded-full font-medium text-xs shadow">
                        {exp.role}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1.5 sm:text-right shrink-0">
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <FaCalendarAlt className="text-blue-400 shrink-0" size={11} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <FaMapMarkerAlt className="text-blue-400 shrink-0" size={11} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mx-6 border-t border-gray-100 dark:border-gray-700" />

                {/* Cuerpo */}
                <div className="p-6 pt-4 space-y-5">
                  <ul className="space-y-2">
                    {exp.description.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <FaChevronRight
                          className="text-blue-500 shrink-0 mt-1"
                          size={10}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tecnologías */}
                  <div className="flex gap-2 flex-wrap pt-1">
                    {exp.techs.map((tech) => (
                      <div
                        key={tech.alt}
                        className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                        role="img"
                        aria-label={`Tecnología: ${tech.alt}`}
                      >
                        <img
                          src={tech.src}
                          alt={tech.alt}
                          className="w-4 h-4 object-contain"
                          loading="lazy"
                        />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {tech.alt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
