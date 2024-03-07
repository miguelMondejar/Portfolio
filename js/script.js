const DAY_STYLES = 'css/styles-day.css';
const DARK_STYLES = 'css/styles-night.css';
const PATH_JSON = 'assets/json'

// Función para cambiar entre modos de día y noche
function toggleMode() {
    const toggleButton = document.getElementById('toggleModeButton');

    // Cambia la hoja de estilo y ajusta el texto del botón
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        toggleButton.innerText = '🌙';
        document.getElementById('stylesheet').href = DAY_STYLES;
    } else {
        document.body.classList.add('dark-mode');
        toggleButton.innerText = '☀️';
        document.getElementById('stylesheet').href = DARK_STYLES;
    }
}

// Función para cambiar entre lenguajes (ES y EN)
function toggleLang() {
    loadLanguageStrings('es');

    const toggleButton = document.getElementById('toggleLangButton');
    // Cambia el idioma y ajusta el texto del botón
    if (toggleButton.innerText == 'EN') {
        loadLanguageStrings('en');
        toggleButton.innerText = 'ES';
    } else {
        loadLanguageStrings('es');
        toggleButton.innerText = 'EN';
    }   
}

function loadLanguageStrings(lang) {
    // Lógica para cargar las cadenas de texto según el idioma seleccionado
    fetch(`${PATH_JSON}/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Aquí ajusta tus elementos del DOM con las cadenas de texto
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
    // Obtén el elemento del año actual
    const copyrightElement = document.getElementById('copyright');

    // Obtiene el año actual
    const currentYear = new Date().getFullYear();

    // Actualiza el contenido del elemento con el año actual
    copyrightElement.innerText = `Miguel Mondéjar González © ${currentYear}`;
}

// Llama a la función para inicializar el año cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    updateCopyrightYear();
});