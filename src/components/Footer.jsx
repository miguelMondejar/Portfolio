import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center py-8 shadow-inner">
      <h2 className="text-xl font-bold mb-1">Miguel Mondéjar González</h2>
      <p className="italic mb-4">Software Developer</p>

      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/miguelMondejar"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 text-gray-200 hover:text-white"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/miguelmondejarweb/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 text-gray-200 hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="mailto:miguebyte01@gmail.com"
          className="transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 text-gray-200 hover:text-white"
          aria-label="Email"
        >
          <FaEnvelope size={28} />
        </a>
      </div>

      <p className="text-sm opacity-80">&copy; {year} Todos los derechos reservados.</p>
    </footer>
  );
}
