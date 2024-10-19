
const PATH_JSON = 'assets/json';

// Función para cambiar entre modos de día y noche
function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

// Supongamos que tienes un botón para alternar el modo
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.addEventListener('click', toggleDarkMode);

// Función para cambiar entre lenguajes (ES y EN)
function toggleLang() {
    const toggleButton = document.getElementById('toggleLangButton');
    const currentLang = toggleButton.innerText === 'EN' ? 'en' : 'es';

    // Cambia el idioma y ajusta el texto del botón
    loadLanguageStrings(currentLang);

    // Cambiar el texto del botón
    toggleButton.innerText = currentLang === 'en' ? 'ES' : 'EN';
}

function loadLanguageStrings(lang) {
    // Lógica para cargar las cadenas de texto según el idioma seleccionado
    fetch(`${PATH_JSON}/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Ajusta los elementos del DOM con las cadenas de texto
            document.getElementById('text-saludo').innerText = data.greeting;
            document.getElementById('text-developer').innerText = data.developer;
            document.getElementById('text-name').innerText = data.name;
            document.getElementById('text-me').innerText = data.me;
            document.getElementById('text-study').innerText = data.study;
            document.getElementById('text-experience').innerText = data.experience;
            document.getElementById('text-contact').innerText = data.contact;
            document.getElementById('text-education-').innerText = data.study;
            document.getElementById('text-experience-').innerText = data.experience;
            document.getElementById('text-contact-').innerText = data.contact;
            document.getElementById('about-me-paragraph1').innerText = data.aboutMeParagraph1;
            document.getElementById('about-me-paragraph2').innerText = data.aboutMeParagraph2;
            document.getElementById('contact-paragraph1').innerText = data.contactParagraph1;
            document.getElementById('contact-paragraph2').innerText = data.contactParagraph2;
            document.getElementById('contact-paragraph3').innerText = data.contactParagraph3;
        })
        .catch(error => console.error('Error al cargar las cadenas de texto', error));
}

// Define la función para actualizar el año en el copyright
function updateCopyrightYear() {
    const copyrightElement = document.getElementById('current-year');

    // Obtiene el año actual
    const currentYear = new Date().getFullYear();

    // Actualiza el contenido del elemento con el año actual
    copyrightElement.innerText = currentYear;
}

function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}