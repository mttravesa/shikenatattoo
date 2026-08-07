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
        // Quitar 'active' de todos los botones
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Ocultar todos los grids
        document.querySelectorAll('.gallery-grid').forEach(grid => {
            grid.classList.remove('active-grid');
        });

        // Mostrar el grid correspondiente
        const targetId = this.dataset.category;
        document.getElementById(targetId).classList.add('active-grid');
    });
});

// ===== VIDEOS =====
const videoList = [
    'VID-20260630-WA0030.mp4',
    'VID-20260714-WA0028.mp4',
    'VID-20260714-WA0030.mp4',
    'VID-20260728-WA0045.mp4',
    'VID-20260729-WA0059.mp4',
    'VID-20260729-WA0060.mp4',
    'VID-20260729-WA0071.mp4',
    'VID-20260729-WA0072.mp4',
    'VID-20260729-WA0073.mp4',
    'VID-20260729-WA0074.mp4'
];

const videosGrid = document.getElementById('videosGrid');

videoList.forEach(video => {
    const div = document.createElement('div');
    div.className = 'video-item';
    div.innerHTML = `
        <video controls preload="metadata">
            <source src="videos/${video}" type="video/mp4">
            Tu navegador no soporta videos.
        </video>
        <div class="video-info">${video}</div>
    `;
    videosGrid.appendChild(div);
});

// ===== IDIOMAS =====
const translations = {
    en: {
        nav_inicio: 'Home',
        nav_galeria: 'Gallery',
        nav_videos: 'Videos',
        hero_quote: 'Every tattoo tells a story',
        galeria_title: 'Gallery',
        videos_title: 'Videos',
        footer_rights: 'All rights reserved'
    },
    de: {
        nav_inicio: 'Startseite',
        nav_galeria: 'Galerie',
        nav_videos: 'Videos',
        hero_quote: 'Jedes Tattoo erzählt eine Geschichte',
        galeria_title: 'Galerie',
        videos_title: 'Videos',
        footer_rights: 'Alle Rechte vorbehalten'
    },
    es: {
        nav_inicio: 'Inicio',
        nav_galeria: 'Galería',
        nav_videos: 'Videos',
        hero_quote: 'Cada tatuaje cuenta una historia',
        galeria_title: 'Galería',
        videos_title: 'Videos',
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
