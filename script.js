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

// ===== BOTONES DE GALERÍA =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.gallery-grid').forEach(grid => {
            grid.classList.remove('active-grid');
        });

        const targetId = this.dataset.category;
        document.getElementById(targetId).classList.add('active-grid');
    });
});

// ===== IDIOMAS (EN, DE, ES) =====
const translations = {
    en: {
        nav_galeria: 'Gallery',
        hero_quote: 'Every tattoo tells a story',
        hero_btn: 'View gallery',
        galeria_title: 'Gallery',
        footer_rights: 'All rights reserved'
    },
    de: {
        nav_galeria: 'Galerie',
        hero_quote: 'Jedes Tattoo erzählt eine Geschichte',
        hero_btn: 'Galerie ansehen',
        galeria_title: 'Galerie',
        footer_rights: 'Alle Rechte vorbehalten'
    },
    es: {
        nav_galeria: 'Galería',
        hero_quote: 'Cada tatuaje cuenta una historia',
        hero_btn: 'Ver galería',
        galeria_title: 'Galería',
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
