import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-12 px-4 space-y-8">
      {/* Card principal */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-3xl font-bold dark:text-white mb-2">Contacto</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          ¿Quieres consultarme algo? Contáctame por correo:
        </p>
        <p className="flex items-center gap-4 text-lg">
          <span className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-2xl">
            <FaEnvelope />
          </span>
          <a
            href="mailto:miguebyte01@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            miguebyte01@gmail.com
          </a>
        </p>
      </div>

      {/* Enlaces a LinkedIn y GitHub */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <a
          href="https://www.linkedin.com/in/miguelmondejarweb/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-blue-700 dark:bg-blue-900 hover:bg-blue-800 dark:hover:bg-blue-700 text-white rounded-lg shadow-lg p-4 transition-colors duration-300"
        >
          <span className="flex items-center justify-center w-12 h-12 bg-white text-blue-700 rounded-full text-2xl">
            <FaLinkedin />
          </span>
          LinkedIn
        </a>

        <a
          href="https://github.com/miguelMondejar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 text-white rounded-lg shadow-lg p-4 transition-colors duration-300"
        >
          <span className="flex items-center justify-center w-12 h-12 bg-white text-gray-800 rounded-full text-2xl">
            <FaGithub />
          </span>
          GitHub
        </a>
      </div>
    </section>
  );
}
