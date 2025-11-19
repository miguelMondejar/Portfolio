// Personal Information
export const NAME = "Miguel";
export const FULL_NAME = "Miguel Mondéjar González";
export const TITLE = "Software Engineer Full Stack";
export const BIRTH_DATE = new Date("2001-10-05");
export const START_DEV_DATE = new Date("2023-03-01");

// Contact Information
export const EMAIL = "miguebyte01@gmail.com";
export const EMAIL_LINK = "mailto:miguebyte01@gmail.com";

// Social Links
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/miguelmondejarweb/",
  github: "https://github.com/miguelMondejar",
  email: "mailto:miguebyte01@gmail.com",
};

// About Me
export const ABOUT_DESCRIPTION = [
  "Me llamo Miguel, tengo {age} años y {experienceYears} {yearsText} de experiencia en el desarrollo de software.",
  "Desde pequeño me apasiona el mundo de la informática. Me encanta el desarrollo de software, tanto Frontend como Backend; mi aspiración es ser Full Stack.",
  "Me considero creativo, responsable y positivo, capaz de adaptarme a diversas situaciones, resolver problemas y trabajar en equipo.",
];

// Navigation Menu
export const MENU_ITEMS = [
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "education", label: "Educación" },
  { id: "contact", label: "Contacto" },
];

// Technologies
export const TECH_STACK = [
  { src: "/img/java-logo.png", alt: "Java" },
  { src: "/img/springboot_logo.png", alt: "Spring Boot" },
  { src: "/img/js-logo.png", alt: "JavaScript" },
  { src: "/img/react_logo.webp", alt: "React" },
];

// Site Configuration
export const SITE_TITLE = "Miguel Mondéjar - Full Stack Developer";
export const SITE_DESCRIPTION = "Portfolio profesional de Miguel Mondéjar, ingeniero de software Full Stack especializado en Java, Spring Boot, React y JavaScript.";
export const SITE_URL = "https://miguelmondejar.dev";
export const SITE_LANGUAGE = "es";

// Colors (Tailwind compatible)
export const COLORS = {
  primary: "blue-600",
  primaryHover: "blue-700",
  secondary: "gray-800",
  accent: "yellow-500",
  background: "gray-50",
  darkBackground: "gray-900",
};

// Animation timings (ms)
export const ANIMATION_DURATION = 300;
export const FADE_IN_DURATION = 500;

// Social Icons Configuration
export const SOCIAL_CONFIG = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/miguelmondejarweb/",
    icon: "FaLinkedin",
    bgColor: "bg-blue-700",
    hoverColor: "hover:bg-blue-800",
    darkBgColor: "dark:bg-blue-900",
    darkHoverColor: "dark:hover:bg-blue-700",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/miguelMondejar",
    icon: "FaGithub",
    bgColor: "bg-gray-800",
    hoverColor: "hover:bg-gray-700",
    darkBgColor: "dark:bg-gray-900",
    darkHoverColor: "dark:hover:bg-gray-800",
  },
];

// Utility Functions
export const calculateAge = (birthDate = BIRTH_DATE) => {
  const today = new Date();
  return (
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0)
  );
};

export const calculateExperience = (startDate = START_DEV_DATE) => {
  const today = new Date();
  return (
    today.getFullYear() -
    startDate.getFullYear() -
    (today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() &&
      today.getDate() < startDate.getDate())
      ? 1
      : 0)
  );
};

export const getYearsText = (years) => {
  return years === 1 ? "año" : "años";
};
