// ============================================================
// 1. DROPDOWN (Menú desplegable)
// ============================================================
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const selectedCategory = document.getElementById('selectedCategory');

if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
        dropdownBtn.classList.toggle('active');
    });
}

document.addEventListener('click', () => {
    if (dropdownContent) {
        dropdownContent.classList.remove('show');
    }
    if (dropdownBtn) {
        dropdownBtn.classList.remove('active');
    }
});

if (dropdownContent) {
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function() {
            if (selectedCategory) {
                selectedCategory.textContent = this.textContent;
            }
            dropdownContent.classList.remove('show');
            if (dropdownBtn) {
                dropdownBtn.classList.remove('active');
            }
        });
    });
}

// ============================================================
// 2. LIGHTBOX (Agrandar fotos al hacer clic)
// ============================================================
function openLightbox(element) {
    const img = element.querySelector('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ============================================================
// 3. IDIOMAS (TRADUCCIONES COMPLETAS)
// ============================================================
const translations = {
    en: {
        // Menú principal
        gallery: 'Gallery',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
        videos: 'Videos',
        // Portada
        hero_quote: 'Every tattoo tells a story',
        // Footer
        footer_rights: 'All rights reserved'
    },
    de: {
        // Menú principal
        gallery: 'Galerie',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
        videos: 'Videos',
        // Portada
        hero_quote: 'Jedes Tattoo erzählt eine Geschichte',
        // Footer
        footer_rights: 'Alle Rechte vorbehalten'
    },
    es: {
        // Menú principal
        gallery: 'Galería',
        blackwork: 'Blackwork',
        color: 'Color',
        fine_line: 'Fine Line',
        cover_ups: 'Cover Ups',
        videos: 'Videos',
        // Portada
        hero_quote: 'Cada tatuaje cuenta una historia',
        // Footer
        footer_rights: 'Todos los derechos reservados'
    }
};

// Idioma actual (por defecto inglés)
let currentLang = 'en';

// Función para cambiar el idioma
function setLanguage(lang) {
    currentLang = lang;
    
    // Recorrer todos los elementos con data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Actualizar botones de idioma (clase 'active')
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Asignar evento a los botones de idioma
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// Establecer idioma por defecto (inglés)
setLanguage('en');

// ============================================================
// 4. LOG (para depuración)
// ============================================================
console.log('✅ Script cargado correctamente');
console.log('📝 Idiomas disponibles:', Object.keys(translations));
console.log('🌐 Idioma actual:', currentLang);
