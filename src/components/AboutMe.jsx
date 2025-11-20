import React from "react";
import { FaDownload } from "react-icons/fa";
import { TECH_STACK, TITLE, calculateAge, calculateExperience, getYearsText } from "../data/constants";
import { useTranslation } from "../hooks/useLanguage";

export default function AboutMe() {
    const { t } = useTranslation();
    const age = calculateAge();
    const experienceYears = calculateExperience();

    return (
        <section
            id="aboutMe"
            className="min-h-screen flex flex-col justify-center px-6 md:px-20 bg-white dark:bg-gray-800 space-y-12 transition-colors duration-300"
        >
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left space-y-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white animate-fadeIn">
                        {t("greeting")} <strong>{t("name")}</strong>
                    </h1>
                    <h2 className="text-4xl font-semibold text-blue-600 dark:text-blue-400 animate-fadeIn delay-100">
                        {t("developer")}
                    </h2>
                </div>

                {/* Imagen + logos tecnologías */}
                <div className="md:w-1/2 text-center space-y-4">
                    <div className="relative inline-block animate-fadeIn">
                        <img
                            src="/img/miguel_index.jpg"
                            alt="Miguel - Ingeniero de Software Full Stack"
                            className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-blue-300 dark:border-blue-600 mx-auto transform hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                        {TECH_STACK.map((tech) => (
                            <div
                                key={tech.alt}
                                className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                title={tech.alt}
                            >
                                <img src={tech.src} alt={tech.alt} className="w-7 h-7" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Descripción */}
            <div className="space-y-6 md:max-w-3xl mx-auto text-center md:text-left bg-gray-800 dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
                <p className="text-gray-100 leading-relaxed animate-fadeIn">
                    {t("ageText", { age })} — {t("experienceText", { years: experienceYears })}
                </p>
                <p className="text-gray-100 leading-relaxed animate-fadeIn">
                    {t("aboutMeParagraph1")}
                </p>
                <p className="text-gray-100 leading-relaxed animate-fadeIn">
                    {t("aboutMeParagraph2")}
                </p>
            </div>

            {/* Botón CV centrado */}
            <div className="text-center mt-6">
                <a
                    href="/pdf/CV_MiguelMondejar.pdf"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg animate-fadeIn delay-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    download
                    aria-label={t("downloadCV")}
                >
                    <FaDownload /> {t("downloadCV")}
                </a>
            </div>
        </section>
    );
}