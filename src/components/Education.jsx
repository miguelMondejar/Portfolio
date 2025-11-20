import React from "react";
import { FaLaptopCode, FaNetworkWired, FaCertificate, FaCar } from "react-icons/fa";
import { useTranslation } from "../hooks/useLanguage";

export default function Education() {
    const { t } = useTranslation();
    const educacionList = Array.isArray(t("educations")) ? t("educations") : [];
    const certificationsList = Array.isArray(t("certifications")) ? t("certifications") : [];
    const licensesList = Array.isArray(t("licenses")) ? t("licenses") : [];

    // Mapa de iconos
    const iconMap = {
        FaLaptopCode: <FaLaptopCode />,
        FaNetworkWired: <FaNetworkWired />,
        FaCertificate: <FaCertificate />,
        FaCar: <FaCar />
    };

    const EducationCard = ({ icon, title, subtitle, color = "blue" }) => (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex gap-4 items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-${color}-600 dark:bg-${color}-700 text-white text-2xl flex-shrink-0`}>
                {icon}
            </div>
            <div className="flex-1">
                <h2 className="font-bold text-lg dark:text-white text-gray-900">{title}</h2>
                {subtitle && <p className="text-gray-700 dark:text-gray-300 text-sm">{subtitle}</p>}
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-4 space-y-8">
            {/* Educación */}
            <div>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {t("study-text")}
                    </h1>
                </div>
                <div className="space-y-4">
                    {educacionList.map((edu, i) => (
                        <EducationCard
                            key={i}
                            icon={iconMap[edu.icon]}
                            title={edu.title}
                            subtitle={edu.subtitle}
                            color="blue"
                        />
                    ))}
                </div>
            </div>

            {/* Certificaciones */}
            <div>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {t("certifications-text")}
                    </h1>
                </div>
                <div className="space-y-4">
                    {certificationsList.map((cert, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex gap-4 items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 dark:bg-yellow-600 text-white text-2xl flex-shrink-0">
                                <FaCertificate />
                            </div>
                            <div className="flex-1">
                                <h2 className="font-bold text-lg dark:text-white">
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline dark:text-blue-400"
                                        aria-label={`Ver certificado: ${cert.title}`}
                                    >
                                        {cert.title}
                                    </a>
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Carnets / Licencias */}
            <div>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {t("licensesText")}
                    </h1>
                </div>
                <div className="space-y-4">
                    {licensesList.map((lic, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex gap-4 items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Icono */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 dark:bg-green-700 text-white text-2xl flex-shrink-0">
                                {iconMap[lic.icon]}
                            </div>

                            {/* Información */}
                            <div className="flex-1">
                                <h2 className="font-bold text-lg dark:text-white text-gray-900">{lic.title}</h2>
                                {/* Indicación de coche propio */}
                                {lic.hasOwnCar && (
                                    <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-blue-600 dark:bg-blue-700 text-white rounded-full">
                                        {lic.detail}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
