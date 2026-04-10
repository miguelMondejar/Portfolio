# 🎨 Portfolio profesional - Miguel Mondéjar González

Portfolio profesional interactivo construido con **React**, **Vite** y **Tailwind CSS**.

## 🌟 Características

- ✨ **Diseño Responsivo**: Adaptado para móvil, tablet y desktop
- 🌓 **Modo Oscuro**: Toggle persistente con `localStorage`
- 📚 **Multidioma**: Disponible en español e inglés.
- 📱 **Navegación con React Router**: URLs dinámicas y compartibles
- ♿ **Accesibilidad**: Cumple con WCAG, aria-labels y semántica HTML
- ⚡ **Performance**: Lazy loading de imágenes, optimización de assets
- 🔍 **SEO Optimizado**: Meta tags, Open Graph, sitemap.xml, robots.txt
- 🎬 **Animaciones Suaves**: Transiciones y keyframes personalizadas
- 📊 **Datos Centralizados**: Constantes en archivo único (constants.js)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/
│   │   └── SocialIcon.jsx     # Componente reutilizable para iconos
│   ├── AboutMe.jsx            # Sección sobre mí con estadísticas dinámicas
│   ├── Experience.jsx         # Historial profesional
│   ├── Education.jsx          # Educación, certificaciones y carnets
│   ├── Projects.jsx           # Portafolio de proyectos
│   ├── Contact.jsx            # Formulario de contacto y redes sociales
│   ├── Navbar.jsx             # Navegación con React Router y language switcher
│   └── Footer.jsx             # Pie de página con links y scroll to top
├── context/
│   └── LanguageContext.jsx    # Context para gestión de idiomas (es/en)
├── hooks/
│   ├── useLanguage.js         # Hook para acceder a idioma y traducciones
│   └── useSEO.js              # Hook para meta tags dinámicos
├── utils/
│   └── constants.js           # Configuración centralizada
├── App.jsx                    # Router y gestión de modo oscuro
├── App.css                    # Estilos globales
├── index.css                  # Tailwind y animaciones personalizadas
└── main.jsx                   # Punto de entrada

public/
├── img/                       # Imágenes optimizadas (PNG/JPG + WebP)
├── json/
│   ├── es.json               # Traducciones en español
│   └── en.json               # Traducciones en inglés
├── pdf/                       # Documentos descargables
├── robots.txt                 # Configuración para buscadores
└── sitemap.xml                # Mapa del sitio
```

## 🚀 Inicio Rápido

### Requisitos
- Node.js >= 16
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/miguelMondejar/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

## 🔧 Tecnologías

- **React 19** - Framework UI
- **Vite 7** - Build tool
- **Tailwind CSS 3** - Estilos
- **React Router v6** - Enrutamiento
- **React Icons 5** - Iconografía
- **AOS 2.3** - Animaciones en scroll
- **React Country Flag 3.1** - Banderas para selector de idioma
- **Vite SWC** - Compilación rápida

## 📦 Dependencias Principales

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^6.28.0",
  "react-icons": "^5.5.0",
  "aos": "^2.3.4",
  "react-country-flag": "^3.1.0"
}
```

## 🎯 Características Destacadas

### Modo Oscuro Persistente
- Toggle en navbar
- Guardado en localStorage
- Fallback a preferencia del sistema
- Transiciones suaves

### Sistema de Multidioma (I18n)
- Lenguajes soportados: Español e Inglés
- Context API para gestión de estado
- Carga dinámica de traducciones desde JSON
- Selector de idioma con banderas en navbar
- Persistencia de idioma en localStorage
- Auto-detección del idioma del navegador

**Archivos de traducciones:**
- `public/json/es.json` - Traducciones en español
- `public/json/en.json` - Traducciones en inglés

**Uso en componentes:**
```javascript
import { useLanguage } from "../hooks/useLanguage";

export default function MyComponent() {
  const { t, language, changeLanguage } = useLanguage();

  return (
    <div>
      <p>{t("someKey")}</p>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
}
```

### Hook useSEO para Meta Tags Dinámicos
Cada página puede tener meta tags específicos:

```javascript
import { useSEO } from "../hooks/useSEO";

export default function Projects() {
  useSEO({
    title: "Proyectos",
    description: "Mis proyectos destacados",
    url: "https://miguelmondejar.dev/projects",
    imageUrl: "https://miguelmondejar.dev/img/miguel_index.jpg"
  });
}
```

### Navegación con React Router
- URLs amigables: `/`, `/about`, `/experience`, `/projects`, `/education`, `/contact`
- Links compartibles a secciones específicas
- Gestión de redirecciones
- Soporte para bookmarks internos

### Constantes Centralizadas
```javascript
// src/utils/constants.js
export const EMAIL = "miguebyte01@gmail.com";
export const SOCIAL_LINKS = {...};
export const calculateAge = () => {...};
export const calculateExperience = () => {...};
```

### Animaciones Personalizadas
- `fadeIn`: Desvanecimiento suave
- `slideInUp`: Deslizamiento hacia arriba
- `slideInDown`: Deslizamiento hacia abajo
- `pulse-glow`: Efecto de brillo
- Integración con AOS para scroll animations

### SEO Optimizado
- Meta tags descriptivos dinámicos
- Open Graph para redes sociales
- Twitter Card
- Sitemap XML
- Robots.txt
- Canonical URL
- JSON-LD Schema (si aplica)
- Hook `useSEO` para actualización de meta tags por página

## 🎨 Paleta de Colores

- **Primario**: `blue-600` (#2563eb)
- **Secundario**: `gray-800` (#1f2937)
- **Fondo Claro**: `white` (#ffffff)
- **Fondo Oscuro**: `gray-900` (#111827)

## 📈 Optimizaciones

- ✅ Lazy loading de imágenes con React
- ✅ Compresión de imágenes (78-97% reducción de tamaño)
- ✅ Soporte WebP para navegadores modernos
- ✅ Compresión GZIP habilitada
- ✅ Cache de assets con Vite
- ✅ Minificación de código
- ✅ Code splitting automático con Vite
- ✅ Carga dinámica de componentes con React.lazy()

### Métricas de Performance

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| **Bundle Assets** | 1.1 MB | 140 KB | ↓ 89% |
| **LCP (Largest Contentful Paint)** | ~8-10s | ~1-2s | ↑ 4-5x |
| **Consumo datos (móvil)** | 1.1 MB | 140 KB | ↓ 89% |
| **JS Bundle (gzip)** | 82.83 KB | 82.83 KB | - |

**Últimas optimizaciones (v2.1.0)**:
- mondejartaxi_logo: 889 KB → 21 KB (97.6%)
- miguel_index: 114.61 KB → 42.68 KB (WebP)
- Resto de PNGs/JPGs: reducción 70-91%

## 🔐 Headers de Seguridad

- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing

```bash
# Lint
npm run lint

# Build test
npm run build && npm run preview
```

## 📄 Licencia

Este proyecto está bajo licencia ISC.

## 👤 Autor

**Miguel Mondéjar González**
- 📧 Email: miguebyte01@gmail.com
- 🔗 LinkedIn: [linkedin.com/in/miguelmondejarweb](https://www.linkedin.com/in/miguelmondejarweb/)
- 💻 GitHub: [github.com/miguelMondejar](https://github.com/miguelMondejar)

## 🤝 Contribuciones

Si encuentras bugs o tienes sugerencias, siéntete libre de abrir un issue o pull request.

## 📝 Changelog

### v2.1.0 (2025-04-10)
- 🖼️ Image optimization: compressed assets 89% (989 KB saved)
- 📦 WebP format support for modern browsers with PNG/JPG fallback
- ⚡ Improved performance metrics (LCP: 8-10s → 1-2s)
- 🎨 Context API for language management (es/en)
- 🌐 Dynamic language switching with country flag selector
- 🔄 Auto-detection of browser language preference
- 🎯 useSEO hook for dynamic meta tags per page

### v2.0.0 (2025-11-19)
- ✨ React Router implementado
- 🌓 Modo oscuro funcional con localStorage
- 📊 Constantes centralizadas
- ♿ Mejoras de accesibilidad (WCAG)
- 🔍 SEO optimizado (meta tags, sitemap, robots.txt)
- 🎬 Animaciones personalizadas añadidas
- 💾 Lazy loading de imágenes
- 🎨 Consistencia visual mejorada
- 🚀 Performance optimizado

### v1.0.0
- Versión inicial con estructura base

---

⭐ Si te gusta este proyecto, ¡considera darle una estrella en GitHub!

## Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|--------------|
| [React](https://react.dev/) | Librería principal para la construcción de la interfaz. |
| [Vite](https://vitejs.dev/) | Bundler rápido para desarrollo con React. |
| [Tailwind CSS](https://tailwindcss.com/) | Framework de estilos utilitario para un diseño moderno y responsive. |
| [React Router](https://reactrouter.com/) | Enrutamiento para navegación SPA con URLs dinámicas. |
| [React Icons](https://react-icons.github.io/react-icons/) | Librería de iconos SVG para redes sociales y componentes. |
| [AOS](https://michalsnik.github.io/aos/) | Animaciones en scroll para elementos de la página. |
| [React Country Flag](https://www.npmjs.com/package/react-country-flag) | Componente para mostrar banderas de países. |

## Licencia

Este proyecto es propiedad de Miguel Mondéjar González.
El código puede ser reutilizado con fines educativos o personales, pero no para uso comercial sin permiso.