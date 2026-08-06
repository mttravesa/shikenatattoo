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

// ===== GALERÍA (con los nombres CORRECTOS de tus archivos) =====
const galleryData = {
    'blackwork': [
        'ancla.jpg',
        'letrasmividamifamilia.jpg',
        'mujercalavera.jpg',
        'silueta.jpg',
        'IMG-20260731-WA0020.jpg'
    ],
    'color': [
        'deathwoman.jpg',
        'india.jpg',
        'indiazul.jpg',
        'stich.jpg'
    ],
    'fine-line': [
        'cruz.jpg',
        'lazo.jpg',
        'leon.jpg',
        'plumaestilografica.jpg'
    ],
    'cover-ups': [
        'piernacover.jpg',
        'IMG-20260806-WA0051.jpg'
    ]
};

const galleryGrid = document.getElementById('galleryGrid');

function renderGallery(category) {
    const images = galleryData[category] || [];
    galleryGrid.innerHTML = images.map(img => `
        <div class="gallery-item">
            <img src="images/${category}/${img}" alt="${img.replace('.jpg', '').replace('.png', '')}" loading="lazy">
            <div class="overlay">
                <p>${img.replace('.jpg', '').replace('.png', '').replace(/-/g, ' ')}</p>
            </div>
        </div>
    `).join('');
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.category);
    });
});

renderGallery('blackwork');

// ===== VIDEOS =====
const videoList = [
    'VID-2026O630-WA0030.mp4',
    'VID-2026O714-WA0028.mp4',
    'VID-2026O714-WA0030.mp4',
    'VID-2026O728-WA0045.mp4',
    'VID-2026O729-WA0059.mp4',
    'VID-2026O729-WA0060.mp4',
    'VID-2026O729-WA0071.mp4',
    'VID-2026O729-WA0072.mp4',
    'VID-2026O729-WA0073.mp4',
    'VID-2026O729-WA0074.mp4'
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
        nav_galeria: 'Gallery',
        nav_videos: 'Videos',
        hero_quote: 'Every tattoo<br>tells a story.',
        hero_btn: 'View gallery',
        galeria_title: 'Gallery',
        videos_title: 'Videos',
        footer_rights: 'All rights reserved'
    },
    de: {
        nav_galeria: 'Galerie',
        nav_videos: 'Videos',
        hero_quote: 'Jedes Tattoo<br>erzählt eine Geschichte.',
        hero_btn: 'Galerie ansehen',
        galeria_title: 'Galerie',
        videos_title: 'Videos',
        footer_rights: 'Alle Rechte vorbehalten'
    },
    es: {
        nav_galeria: 'Galería',
        nav_videos: 'Videos',
        hero_quote: 'Cada tatuaje<br>cuenta una historia.',
        hero_btn: 'Ver galería',
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
            el.innerHTML = translations[lang][key];
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
