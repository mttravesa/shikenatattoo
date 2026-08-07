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

// ===== DROPDOWN =====
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const selectedCategory = document.getElementById('selectedCategory');

dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
    dropdownBtn.classList.toggle('active');
});

document.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
    dropdownBtn.classList.remove('active');
});

// ===== CAMBIAR CATEGORÍA =====
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.dataset.category;
        const categoryName = this.textContent;
        
        selectedCategory.textContent = categoryName;
        document.getElementById('galleryTitle').textContent = categoryName;
        
        document.querySelectorAll('.gallery-grid').forEach(grid => {
            grid.classList.remove('active-grid');
        });
        document.getElementById(category).classList.add('active-grid');
        
        document.querySelectorAll('.dropdown-content a').forEach(a => a.classList.remove('active-category'));
        this.classList.add('active-category');
        
        dropdownContent.classList.remove('show');
        dropdownBtn.classList.remove('active');
    });
});

// ===== IDIOMAS =====
const translations = {
    en: {
        gallery: 'Gallery',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
        hero_quote: 'Every tattoo tells a story',
        hero_btn: 'View gallery',
        footer_rights: 'All rights reserved'
    },
    de: {
        gallery: 'Galerie',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
        hero_quote: 'Jedes Tattoo erzählt eine Geschichte',
        hero_btn: 'Galerie ansehen',
        footer_rights: 'Alle Rechte vorbehalten'
    },
    es: {
        gallery: 'Galería',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
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

// Idioma por defecto: INGLÉS
setLanguage('en');
