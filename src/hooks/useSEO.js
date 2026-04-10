import { useEffect } from "react";

export const useSEO = ({
  title,
  description,
  imageUrl,
  url,
  type = "website"
}) => {
  useEffect(() => {
    // Actualizar title
    document.title = title ? `${title} | Miguel Mondejar - Desarrollador Software` : "Miguel Mondejar - Desarrollador Software";

    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "Desarrollador de Software Full Stack con experiencia en Java, React y Spring Boot.");
    }

    // Open Graph tags
    updateMetaTag("og:title", title || "Miguel Mondejar - Desarrollador Software");
    updateMetaTag("og:description", description || "Desarrollador de Software Full Stack con experiencia en Java, React y Spring Boot.");
    updateMetaTag("og:type", type);
    updateMetaTag("og:url", url || "https://miguelmondejar.dev");
    updateMetaTag("og:image", imageUrl || "https://miguelmondejar.dev/og-image.jpg");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title || "Miguel Mondejar - Desarrollador Software");
    updateMetaTag("twitter:description", description || "Desarrollador de Software Full Stack con experiencia en Java, React y Spring Boot.");
    updateMetaTag("twitter:image", imageUrl || "https://miguelmondejar.dev/og-image.jpg");

  }, [title, description, imageUrl, url, type]);
};

const updateMetaTag = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    if (property.startsWith("og:") || property.startsWith("twitter:")) {
      tag.setAttribute("property", property);
    } else {
      tag.setAttribute("name", property);
    }
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};
