import { FaUser, FaBriefcase, FaGraduationCap, FaEnvelope, FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../data/constants";
import { useLanguage } from "../hooks/useLanguage";
import ReactCountryFlag from "react-country-flag";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();

  // Mapeo de rutas a ids de menú
  const routeToId = {
    "/": "about",
    "/about": "about",
    "/experience": "experience",
    "/education": "education",
    "/contact": "contact",
  };

  const activeId = routeToId[location.pathname] || "about";

  const iconMap = {
    about: <FaUser size={20} />,
    experience: <FaBriefcase size={20} />,
    education: <FaGraduationCap size={20} />,
    contact: <FaEnvelope size={20} />,
  };

  const routeMap = {
    about: "/",
    experience: "/experience",
    education: "/education",
    contact: "/contact",
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md p-3 flex justify-center items-center gap-3 sticky top-0 z-50 flex-wrap">
      {/* Links de navegación */}
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.id}
          to={routeMap[item.id]}
          title={item.label}
          className={`
            p-3 rounded-xl shadow-lg transform transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-400
            ${
              activeId === item.id
                ? "bg-gray-700 shadow-2xl scale-105"
                : "bg-gray-800 hover:-translate-y-1 hover:shadow-2xl"
            }
          `}
          aria-label={item.label}
          aria-current={activeId === item.id ? "page" : undefined}
        >
          {iconMap[item.id]}
        </Link>
      ))}

      {/* Separador visual */}
      <div className="w-px h-8 bg-gray-700 mx-2"></div>

      {/* Botón de modo oscuro */}
      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-xl bg-gray-800 shadow-lg hover:-translate-y-1 hover:shadow-2xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        title={darkMode ? "Modo claro" : "Modo oscuro"}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Selector de idioma */}
      <button
        onClick={() => changeLanguage(language === "es" ? "en" : "es")}
        className="
          p-3 rounded-xl bg-gray-800 shadow-lg hover:-translate-y-1 hover:shadow-2xl
          transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400
        "
        aria-label="Cambiar idioma"
        title={language === "es" ? "Switch to English" : "Cambiar a Español"}
      >
        <div
          key={language} 
          className="transition-all duration-300 ease-in-out opacity-0 scale-75 animate-fadeScale"
        >
          <ReactCountryFlag
            countryCode={language === "es" ? "GB" : "ES"}
            svg
            style={{ width: "1.5em", height: "1.5em" }}
          />
        </div>
      </button>
    </nav>
  );
}
