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

document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function() {
        selectedCategory.textContent = this.textContent;
        dropdownContent.classList.remove('show');
        dropdownBtn.classList.remove('active');
    });
});

// ===== LIGHTBOX =====
function openLightbox(element) {
    const img = element.querySelector('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    if (img) {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ===== IDIOMAS =====
const translations = {
    en: {
        gallery: 'Gallery',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
        videos: 'Videos',
        hero_quote: 'Every tattoo tells a story',
        footer_rights: 'All rights reserved'
    },
    de: {
        gallery: 'Galerie',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
        videos: 'Videos',
        hero_quote: 'Jedes Tattoo erzählt eine Geschichte',
        footer_rights: 'Alle Rechte vorbehalten'
    },
    es: {
        gallery: 'Galería',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
        videos: 'Videos',
        hero_quote: 'Cada tatuaje cuenta una historia',
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
