// ============================================================
// 1. DROPDOWN
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
// 2. LIGHTBOX
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
// 3. IDIOMAS
// ============================================================
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

// ============================================================
// 4. FUNCIÓN PARA CAMBIAR IDIOMA (ARREGLADA)
// ============================================================
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    
    // Cambiar textos con data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // 🔥 LIMPIAR TODOS LOS BOTONES (eliminar clase 'active' de TODOS)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 🔥 ACTIVAR SOLO EL BOTÓN CORRESPONDIENTE
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// ============================================================
// 5. INICIALIZAR CUANDO LA PÁGINA ESTÉ LISTA
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Página cargada. Inicializando idiomas...');
    
    // Asignar eventos a los botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });
    
    // Establecer idioma por defecto (INGLÉS)
    setLanguage('en');
    
    console.log('🌐 Idioma actual:', currentLang);
});

console.log('✅ Script cargado correctamente');
