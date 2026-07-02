import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "../hooks/useLanguage";
import { useSEO } from "../hooks/useSEO";

export default function Projects() {
  const { t } = useTranslation();
  const projectsList = Array.isArray(t("projects")) ? t("projects") : [];

  useSEO({
    title: "Proyectos",
    description: "Proyectos destacados que he desarrollado. Incluye Mondéjar Taxi SL, un sitio web moderno y responsive para servicios de taxi en Ciudad Real.",
    url: "https://miguelmondejar.dev/projects",
    imageUrl: "https://miguelmondejar.dev/img/miguel_index.jpg"
  });

  return (
    <section className="container mx-auto px-6 py-8 space-y-8">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("projects-text")}
        </h1>
      </div>

      <div className="relative space-y-8">
        {/* Línea del timeline */}
        <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100 dark:from-blue-400 dark:via-blue-700 dark:to-blue-900 hidden md:block" />

        {projectsList.map((project, i) => (
          <div
            key={i}
            className="relative flex gap-6 md:gap-10"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {/* Dot del timeline */}
            <div className="hidden md:flex flex-col items-center z-10 pt-6 shrink-0">
              <div className="w-4 h-4 rounded-full border-4 shadow-md bg-white dark:bg-gray-900 border-blue-400 dark:border-blue-600" />
            </div>

            <article className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-l-4 border-blue-500">
              {/* Cabecera */}
              <div className="p-6 pb-4 flex flex-col sm:flex-row gap-4 items-start justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src={project.image}
                    alt={`Logo de ${project.name}`}
                    className="w-14 h-14 object-contain rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-1 shadow"
                    loading="lazy"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.name}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {project.url}
                    </p>
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors whitespace-nowrap shrink-0"
                >
                  <FaExternalLinkAlt size={11} />
                  Visitar
                </a>
              </div>

              <div className="mx-6 border-t border-gray-100 dark:border-gray-700" />

              {/* Cuerpo */}
              <div className="p-6 pt-4 space-y-4">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex gap-2 flex-wrap pt-1">
                  {project.techs.map((tech) => (
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
        ))}
      </div>
    </section>
  );
}
