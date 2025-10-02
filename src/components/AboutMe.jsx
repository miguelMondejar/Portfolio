import React from "react";
import { FaDownload } from "react-icons/fa";

export default function AboutMe() {
    const techs = [
        { src: "/img/java-logo.png", alt: "Java" },
        { src: "/img/springboot_logo.png", alt: "Spring Boot" },
        { src: "/img/js-logo.png", alt: "JavaScript" },
        { src: "/img/react_logo.webp", alt: "React" },
    ];

    // Datos dinámicos
    const birthDate = new Date("2001-10-05");
    const startDevDate = new Date("2023-03-01");
    const today = new Date();

    const age = today.getFullYear() - birthDate.getFullYear() - 
        (today.getMonth() < birthDate.getMonth() || 
         (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0);

    const experienceYears = today.getFullYear() - startDevDate.getFullYear() - 
        (today.getMonth() < startDevDate.getMonth() || 
         (today.getMonth() === startDevDate.getMonth() && today.getDate() < startDevDate.getDate()) ? 1 : 0);

    return (
        <section
            id="aboutMe"
            className="min-h-screen flex flex-col justify-center px-6 md:px-20 bg-gray-50 space-y-12"
        >
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left space-y-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 animate-fadeIn">
                        ¡Hola! Soy <strong>Miguel</strong>
                    </h1>
                    <h2 className="text-4xl font-semibold text-blue-600 animate-fadeIn delay-100">
                        Software Engineer Full Stack
                    </h2>
                </div>

                {/* Imagen + logos tecnologías */}
                <div className="md:w-1/2 text-center space-y-4">
                    <div className="relative inline-block animate-fadeIn">
                        <img
                            src="/img/miguel_index.jpg"
                            alt="Miguel"
                            className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-blue-300 mx-auto transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                        {techs.map((tech) => (
                            <div
                                key={tech.alt}
                                className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <img src={tech.src} alt={tech.alt} className="w-7 h-7" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Descripción */}
            <div className="space-y-6 md:max-w-3xl mx-auto text-center md:text-left bg-gray-800 dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
                <p className="text-gray-100 leading-relaxed animate-fadeIn">
                    Me llamo Miguel, tengo {age} años y {experienceYears} {experienceYears === 1 ? "año" : "años"} de experiencia en el desarrollo de software. 
                </p>
                <p className="text-gray-100 leading-relaxed animate-fadeIn">
                    Desde pequeño me apasiona el mundo de la informática. Me encanta el desarrollo de software, tanto Frontend como Backend; mi aspiración es ser Full Stack.
                </p>
                <p className="text-gray-100 leading-relaxed animate-fadeIn delay-100">
                    Me considero creativo, responsable y positivo, capaz de adaptarme a diversas situaciones, resolver problemas y trabajar en equipo.
                </p>
            </div>

            {/* Botón CV centrado */}
            <div className="text-center mt-6">
                <a
                    href="/pdf/CV_MiguelMondejar.pdf"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg animate-fadeIn delay-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaDownload /> Descargar CV
                </a>
            </div>
        </section>
    );
}