// ===== MENÚ HAMBURGUESA =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
    });
});

// ===== IDIOMAS =====
const translations = {
    en: {
        nav_blackwork: 'Blackwork',
        nav_color: 'Color',
        nav_fine: 'Fine Line',
        nav_cover: 'Cover Ups',
        hero_quote: 'Every tattoo tells a story',
        hero_btn: 'View gallery',
        footer_rights: 'All rights reserved'
    },
    de: {
        nav_blackwork: 'Blackwork',
        nav_color: 'Color',
        nav_fine: 'Fine Line',
        nav_cover: 'Cover Ups',
        hero_quote: 'Jedes Tattoo erzählt eine Geschichte',
        hero_btn: 'Galerie ansehen',
        footer_rights: 'Alle Rechte vorbehalten'
    },
    es: {
        nav_blackwork: 'Blackwork',
        nav_color: 'Color',
        nav_fine: 'Fine Line',
        nav_cover: 'Cover Ups',
        hero_quote: 'Cada tatuaje cuenta una historia',
        hero_btn: 'Ver galería',
        footer_rights: 'Todos los derechos reservados'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

setLanguage('en');
