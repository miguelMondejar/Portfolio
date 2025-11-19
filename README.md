# 🎨 Portfolio profesional - Miguel Mondéjar González

Portfolio profesional interactivo construido con **React**, **Vite** y **Tailwind CSS**.

## 🌟 Características

- ✨ **Diseño Responsivo**: Adaptado para móvil, tablet y desktop
- 🌓 **Modo Oscuro**: Toggle persistente con `localStorage`
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
│   ├── AboutMe.jsx       # Sección sobre mí con estadísticas dinámicas
│   ├── Experience.jsx    # Historial profesional
│   ├── Education.jsx     # Educación, certificaciones y carnets
│   ├── Contact.jsx       # Formulario de contacto y redes sociales
│   ├── Navbar.jsx        # Navegación con React Router
│   └── Footer.jsx        # Pie de página con links y scroll to top
├── data/
│   ├── constants.js      # Configuración centralizada
│   ├── experience.json   # Datos de experiencia profesional
│   └── education.json    # Datos de educación
├── App.jsx               # Router y gestión de modo oscuro
├── App.css               # Estilos globales
├── index.css             # Tailwind y animaciones
└── main.jsx              # Punto de entrada

public/
├── robots.txt            # Configuración para buscadores
├── sitemap.xml           # Mapa del sitio
└── .htaccess             # Configuración del servidor Apache
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
- **Vite SWC** - Compilación rápida

## 📦 Dependencias Principales

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^6.28.0",
  "react-icons": "^5.5.0"
}
```

## 🎯 Características Destacadas

### Modo Oscuro Persistente
- Toggle en navbar
- Guardado en localStorage
- Fallback a preferencia del sistema
- Transiciones suaves

### Navegación con React Router
- URLs amigables: `/`, `/about`, `/experience`, `/education`, `/contact`
- Links compartibles a secciones específicas
- Gestión de redirecciones

### Constantes Centralizadas
```javascript
// src/data/constants.js
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

### SEO Optimizado
- Meta tags descriptivos
- Open Graph para redes sociales
- Twitter Card
- Sitemap XML
- Robots.txt
- Canonical URL

## 🎨 Paleta de Colores

- **Primario**: `blue-600` (#2563eb)
- **Secundario**: `gray-800` (#1f2937)
- **Fondo Claro**: `white` (#ffffff)
- **Fondo Oscuro**: `gray-900` (#111827)

## 📈 Optimizaciones

- ✅ Lazy loading de imágenes
- ✅ Compresión GZIP habilitada
- ✅ Cache de assets
- ✅ Minificación de código
- ✅ Code splitting automático con Vite

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
| [Font Awesome](https://fontawesome.com/) | Iconos de redes sociales y servicios. |

## Licencia

Este proyecto es propiedad de Miguel Mondéjar González.
El código puede ser reutilizado con fines educativos o personales, pero no para uso comercial sin permiso.