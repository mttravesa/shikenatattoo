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

// Idioma actual (por defecto inglés)
let currentLang = 'en';

// ============================================================
// 4. FUNCIÓN PARA CAMBIAR IDIOMA (CORREGIDA)
// ============================================================
function setLanguage(lang) {
    currentLang = lang;
    
    // 1. Cambiar todos los textos con data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // 2. Actualizar botones de idioma: SOLO UNO ACTIVO
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active'); // ← ELIMINA TODOS LOS ACTIVE
        if (btn.dataset.lang === lang) {
            btn.classList.add('active'); // ← SOLO PONE ACTIVE AL SELECCIONADO
        }
    });
}

// ============================================================
// 5. ASIGNAR EVENTO A LOS BOTONES DE IDIOMA
// ============================================================
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// ============================================================
// 6. ESTABLECER IDIOMA POR DEFECTO (INGLÉS)
// ============================================================
setLanguage('en');

// ============================================================
// 7. LOG (para depuración)
// ============================================================
console.log('✅ Script cargado correctamente');
console.log('📝 Idiomas disponibles:', Object.keys(translations));
console.log('🌐 Idioma actual:', currentLang);
