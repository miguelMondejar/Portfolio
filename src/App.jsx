import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { useTranslation } from "./hooks/useLanguage";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
import Footer from "./components/Footer";

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p className="text-xl">{t("loading")}</p></div>}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
