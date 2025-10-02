import React from "react";
import educationData from "../data/education.json";
import { FaLaptopCode, FaNetworkWired, FaCertificate, FaCar } from "react-icons/fa";

export default function Education() {
    // Mapa de iconos
    const iconMap = {
        FaLaptopCode: <FaLaptopCode />,
        FaNetworkWired: <FaNetworkWired />,
        FaCertificate: <FaCertificate />,
        FaCar: <FaCar />
    };

    const { educations, certifications, licenses } = educationData;

    return (
        <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold mb-4">Educación</h1>
            {educations.map((edu, i) => (
                <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded shadow p-4 flex gap-4 items-center hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white text-2xl">
                        {iconMap[edu.icon]}
                    </div>
                    <div>
                        <h2 className="font-bold text-lg dark:text-white">{edu.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300">{edu.subtitle}</p>
                    </div>
                </div>
            ))}

            <h1 className="text-3xl font-bold mt-6 mb-4">Certificaciones</h1>
            {certifications.map((cert, i) => (
                <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded shadow p-4 flex gap-4 items-center hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-500 text-white text-2xl">
                        <FaCertificate />
                    </div>
                    <div>
                        <h2 className="font-bold text-lg dark:text-white">
                            <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline dark:text-blue-400"
                            >
                                {cert.title}
                            </a>
                        </h2>
                    </div>
                </div>
            ))}

            <h1 className="text-3xl font-bold mt-6 mb-4">Carnets</h1>
            {licenses.map((lic, i) => (
                <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col md:flex-row gap-4 items-center hover:shadow-lg transition-shadow duration-300"
                >
                    {/* Icono */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white text-2xl">
                        {iconMap[lic.icon]}
                    </div>

                    {/* Información */}
                    <div className="flex-1">
                        <h2 className="font-bold text-lg dark:text-white">{lic.title}</h2>
                        {/* Indicación de coche propio */}
                        {lic.hasOwnCar && (
                            <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                                Coche propio
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
