import React from "react";
import { FaLaptopCode, FaNetworkWired, FaCertificate, FaCar, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "../hooks/useLanguage";
import { useSEO } from "../hooks/useSEO";

export default function Education() {
    const { t } = useTranslation();
    const educacionList = Array.isArray(t("educations")) ? t("educations") : [];
    const certificationsList = Array.isArray(t("certifications")) ? t("certifications") : [];
    const licensesList = Array.isArray(t("licenses")) ? t("licenses") : [];

    useSEO({
        title: "Educación",
        description: "Mi formación académica y certificaciones profesionales. Grado Superior en DAW, múltiples certificaciones en tecnologías web y desarrollo de software.",
        url: "https://miguelmondejar.dev/education",
        imageUrl: "https://miguelmondejar.dev/img/miguel_index.jpg"
    });

    const iconMap = {
        FaLaptopCode: <FaLaptopCode />,
        FaNetworkWired: <FaNetworkWired />,
        FaCertificate: <FaCertificate />,
        FaCar: <FaCar />
    };

    return (
        <div className="container mx-auto px-6 py-8 space-y-16">

            {/* Educación */}
            <div>
                <div className="text-center mb-12" data-aos="fade-down">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {t("study-text")}
                    </h1>
                </div>
                <div className="relative space-y-8">
                    <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100 dark:from-blue-400 dark:via-blue-700 dark:to-blue-900 hidden md:block" />
                    {educacionList.map((edu, i) => (
                        <div key={i} className="relative flex gap-6 md:gap-10" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="hidden md:flex flex-col items-center z-10 pt-6 shrink-0">
                                <div className="w-4 h-4 rounded-full border-4 shadow-md bg-white dark:bg-gray-900 border-blue-400 dark:border-blue-600" />
                            </div>
                            <article className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-l-4 border-blue-500 dark:border-blue-600 p-6 flex gap-4 items-center">
                                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600 dark:bg-blue-700 text-white text-2xl shrink-0 shadow">
                                    {iconMap[edu.icon]}
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg text-gray-900 dark:text-white">{edu.title}</h2>
                                    {edu.subtitle && (
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{edu.subtitle}</p>
                                    )}
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificaciones */}
            <div>
                <div className="text-center mb-12" data-aos="fade-down">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {t("certifications-text")}
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certificationsList.map((cert, i) => (
                        <a
                            key={i}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 flex gap-3 items-center"
                            data-aos="fade-up"
                            data-aos-delay={i * 50}
                            aria-label={`Ver certificado: ${cert.title}`}
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-500 dark:bg-yellow-600 text-white text-lg shrink-0 shadow">
                                <FaCertificate />
                            </div>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1 leading-snug">
                                {cert.title}
                            </span>
                            <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 shrink-0 transition-colors" size={12} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Carnets / Licencias */}
            <div>
                <div className="text-center mb-12" data-aos="fade-down">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {t("licensesText")}
                    </h1>
                </div>
                <div className="space-y-4">
                    {licensesList.map((lic, i) => (
                        <article
                            key={i}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-l-4 border-green-500 dark:border-green-600 p-6 flex gap-4 items-center"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-600 dark:bg-green-700 text-white text-2xl shrink-0 shadow">
                                {iconMap[lic.icon]}
                            </div>
                            <div>
                                <h2 className="font-bold text-lg text-gray-900 dark:text-white">{lic.title}</h2>
                                {lic.hasOwnCar && (
                                    <span className="inline-block mt-1.5 px-3 py-0.5 text-xs font-semibold bg-blue-600 dark:bg-blue-700 text-white rounded-full">
                                        {lic.detail}
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
