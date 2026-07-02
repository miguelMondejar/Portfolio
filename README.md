# Portfolio — Miguel Mondéjar González

> Full Stack Developer · Java · Spring Boot · React

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Sobre el proyecto

Portfolio profesional interactivo con soporte de idioma dinámico (ES/EN), modo oscuro, navegación SPA y SEO optimizado.

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | UI Framework |
| Vite | 7 | Build tool |
| Tailwind CSS | 3 | Estilos |
| React Router | 6 | Navegación SPA |
| React Icons | 5 | Iconografía |
| AOS | 2.3 | Animaciones scroll |
| React Country Flag | 3.1 | Selector de idioma |

## Características

- **Multidioma** — ES/EN con detección automática de idioma del navegador y persistencia en `localStorage`
- **Modo oscuro** — Toggle persistente con fallback a preferencia del sistema
- **SEO** — Meta tags dinámicos, Open Graph, sitemap.xml, robots.txt y canonical URLs
- **Performance** — Lazy loading, imágenes WebP optimizadas (89% reducción de tamaño)
- **Accesibilidad** — Semántica HTML, `aria-labels` y cumplimiento WCAG

## Estructura

```
src/
├── components/
│   ├── AboutMe.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── common/SocialIcon.jsx
├── context/LanguageContext.jsx
├── hooks/
│   ├── useLanguage.js
│   └── useSEO.js
└── utils/constants.js

public/
├── img/
├── json/
│   ├── es.json
│   └── en.json
└── pdf/
```

## Inicio rápido

```bash
git clone https://github.com/miguelMondejar/portfolio.git
cd portfolio
npm install
npm run dev
```

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run lint` | Linting |

## Changelog

### v2.2.0 — 2026-07-02
- Rediseño completo de todos los componentes con sistema de cards consistente
- Timeline con animación en secciones de Experiencia, Educación y Proyectos
- Tech badges con icono y nombre visible
- Navbar con scroll horizontal en móvil
- Actualización de experiencia en CaixaBank Tech

### v2.1.0 — 2026-04-10
- Optimización de imágenes (89% de reducción, soporte WebP)
- Context API para gestión de idioma (ES/EN)
- Hook `useSEO` para meta tags dinámicos por página
- Selector de idioma con banderas y persistencia

### v2.0.0 — 2025-11-19
- Implementación de React Router con URLs amigables
- Modo oscuro con `localStorage`
- Constantes centralizadas en `constants.js`
- Animaciones personalizadas y mejoras de accesibilidad

### v1.0.0
- Versión inicial

## Autor

**Miguel Mondéjar González**

[![Email](https://img.shields.io/badge/Email-miguebyte01@gmail.com-D14836?logo=gmail&logoColor=white)](mailto:miguebyte01@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-miguelmondejarweb-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/miguelmondejarweb/)
[![GitHub](https://img.shields.io/badge/GitHub-miguelMondejar-181717?logo=github&logoColor=white)](https://github.com/miguelMondejar)

## Licencia

ISC — Uso educativo y personal permitido. Uso comercial requiere permiso del autor.