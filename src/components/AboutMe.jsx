import React from "react";
import { FaDownload, FaBriefcase, FaBirthdayCake } from "react-icons/fa";
import { TECH_STACK, calculateAge, calculateExperience } from "../utils/constants";
import { useTranslation } from "../hooks/useLanguage";
import { useSEO } from "../hooks/useSEO";

export default function AboutMe() {
    const { t } = useTranslation();
    const age = calculateAge();
    const experienceYears = calculateExperience();

    useSEO({
        title: "Sobre Mí",
        description: "Desarrollador Full Stack con experiencia en Java, Spring Boot, React y JavaScript. Especialista en desarrollo de aplicaciones web modernas y escalables.",
        url: "https://miguelmondejar.dev/about",
        imageUrl: "https://miguelmondejar.dev/img/miguel_index.jpg"
    });

    return (
        <section
            id="aboutMe"
            className="min-h-screen flex flex-col justify-center px-6 md:px-20 bg-white dark:bg-gray-800 space-y-12 transition-colors duration-300"
        >
            {/* Hero */}
            <div className="flex flex-col md:flex-row items-center gap-6">

                {/* Texto izquierda */}
                <div className="md:w-1/2 text-center md:text-left space-y-5" data-aos="fade-right">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                        {t("greeting")} <span className="text-blue-600 dark:text-blue-400">{t("name")}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                        {t("developer")}
                    </h2>

                    {/* Badges de estadísticas */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <span className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
                            <FaBirthdayCake size={13} />
                            {t("ageText", { age })}
                        </span>
                        <span className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
                            <FaBriefcase size={13} />
                            {t("experienceText", { years: experienceYears })}
                        </span>
                    </div>

                    {/* Botón CV */}
                    <div className="pt-1">
                        <a
                            href="/pdf/CV_MiguelMondejar.pdf"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            download
                            aria-label={t("downloadCV")}
                        >
                            <FaDownload /> {t("downloadCV")}
                        </a>
                    </div>
                </div>

                {/* Imagen + tech stack derecha */}
                <div className="md:w-1/2 text-center space-y-6" data-aos="fade-left">
                    <img
                        src="/img/miguel_index.jpg"
                        alt="Miguel - Ingeniero de Software Full Stack"
                        className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-blue-300 dark:border-blue-600 mx-auto hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                    <div className="flex justify-center gap-2 flex-wrap">
                        {TECH_STACK.map((tech) => (
                            <div
                                key={tech.alt}
                                className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                                role="img"
                                aria-label={`Tecnología: ${tech.alt}`}
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <img src={tech.src} alt={tech.alt} className="w-5 h-5 object-contain" loading="lazy" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.alt}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Descripción */}
            <div
                className="md:max-w-3xl mx-auto w-full bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md border-l-4 border-blue-500 p-8 space-y-4"
                data-aos="fade-up"
            >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t("aboutMeParagraph1")}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t("aboutMeParagraph2")}
                </p>
            </div>
        </section>
    );
}