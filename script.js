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
// 2. LIGHTBOX PARA FOTOS
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
// 3. LIGHTBOX PARA VÍDEOS
// ============================================================
function openVideoLightbox(element) {
    const video = element.querySelector('video');
    const title = element.querySelector('.video-info')?.textContent || 'Video';
    const lightbox = document.getElementById('videoLightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const lightboxTitle = document.getElementById('lightboxVideoTitle');
    
    if (video && lightboxVideo) {
        const src = video.querySelector('source')?.src || video.src;
        lightboxVideo.src = src;
        lightboxVideo.load();
        lightboxTitle.textContent = title;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
        lightboxVideo.play().catch(() => {});
    }
}

function closeVideoLightbox() {
    const lightbox = document.getElementById('videoLightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    if (lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
        if (lightboxVideo) {
            lightboxVideo.pause();
            lightboxVideo.src = '';
            lightboxVideo.load();
        }
    }
}

// Cerrar el lightbox de vídeos con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideoLightbox();
    }
});

// ============================================================
// 4. IDIOMAS (TRADUCCIONES COMPLETAS)
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
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

setLanguage('en');

console.log('✅ Script cargado correctamente');
