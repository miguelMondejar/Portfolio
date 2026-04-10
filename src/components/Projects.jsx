import React from "react";
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
    <section className="container mx-auto p-6 space-y-8">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("projects-text")}
        </h1>
      </div>

      <div className="space-y-6">
        {projectsList.map((project, i) => (
          <article
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {/* Imagen/Logo del proyecto */}
            <div className="md:w-1/6 flex justify-center md:justify-start items-center flex-shrink-0">
              <img
                src={project.image}
                alt={`Logo de ${project.name}`}
                className="w-28 h-28 object-contain rounded-full border-4 border-blue-200 dark:border-blue-400 p-2 shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Información del proyecto */}
            <div className="md:w-5/6 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {project.name}
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                    {project.url}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors whitespace-nowrap"
                >
                  Visitar
                </a>
              </div>

              {/* Descripción */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Logos tecnologías */}
              <div className="flex gap-3 mt-6 flex-wrap">
                {project.techs.map((tech) => (
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
