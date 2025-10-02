import React from "react";
import experiences from "../data/experience.json";

export default function Experience() {
  return (
    <section className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Experiencia Profesional
      </h1>

      {experiences.map((exp, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Logo empresa */}
          <div className="md:w-1/6 flex justify-center md:justify-start items-center">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-28 h-28 object-contain rounded-full border-4 border-blue-200 dark:border-blue-400 p-2 shadow-lg"
            />
          </div>

          {/* Información */}
          <div className="md:w-5/6 space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {exp.company}
              </h2>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-medium text-sm shadow">
                {exp.role}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              {exp.period} · {exp.location}
            </p>

            {/* Lista de logros */}
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 dark:text-gray-300">
              {exp.description.map((item, index) => (
                <li key={index} className="ml-2">
                  {item}
                </li>
              ))}
            </ul>

            {/* Logos tecnologías */}
            <div className="flex gap-4 mt-4 flex-wrap">
              {exp.techs.map((tech) => (
                <div
                  key={tech.alt}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
                  title={tech.alt}
                >
                  <img src={tech.src} alt={tech.alt} className="w-7 h-7" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
