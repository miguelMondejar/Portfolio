import { FaUser, FaBriefcase, FaGraduationCap, FaEnvelope, FaMoon } from "react-icons/fa";

export default function Navbar({ setActiveSection, activeSection, toggleDarkMode }) {
  const navItems = [
    { id: "about", icon: <FaUser size={20} />, label: "Sobre mí" },
    { id: "experience", icon: <FaBriefcase size={20} />, label: "Experiencia" },
    { id: "education", icon: <FaGraduationCap size={20} />, label: "Educación" },
    { id: "contact", icon: <FaEnvelope size={20} />, label: "Contacto" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md p-3 flex justify-center items-center gap-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          title={item.label}
          className={`
            p-3 rounded-xl bg-gray-800 shadow-lg transform transition-all duration-300
            ${activeSection === item.id ? "bg-gray-700 shadow-2xl scale-105" : "hover:-translate-y-1 hover:shadow-2xl"}
            focus:outline-none focus:ring-2 focus:ring-blue-400
          `}
          aria-label={item.label}
        >
          {item.icon}
        </button>
      ))}

      {/* Botón de modo oscuro */}
      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-xl bg-gray-800 shadow-lg hover:-translate-y-1 hover:shadow-2xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Cambiar modo oscuro"
      >
        <FaMoon size={20} />
      </button>
    </nav>
  );
}
