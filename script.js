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

const galleryData = {
    'blackwork': [
        'ancla.jpg',
        'letrasmidivamifamilia.jpg',
        'mujercalavera.jpg',
        'piernas.jpg',
        'silueta.jpg'
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
        'delfin.jpg',
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

const translations = {
    en: {
        nav_inicio: 'Home',
        nav_galeria: 'Gallery',
        nav_videos: 'Videos',
        nav_tatuador: 'Artist',
        nav_contacto: 'Contact',
        hero_title: 'Shikena Tattoo',
        hero_subtitle: 'Art on skin',
        hero_description: 'Every tattoo tells a story.',
        hero_btn: 'View gallery',
        galeria_title: 'Gallery',
        videos_title: 'Videos',
        about_title: 'The Artist',
        about_name: 'Willy Tordera',
        about_text1: 'With over 10 years of experience, Willy Tordera is an artist passionate about tattooing. Specialized in Blackwork, Color and Fine Line, every piece he creates is unique and personalized.',
        about_text2: 'His style is characterized by precision in details and respect for anatomy, achieving tattoos that integrate perfectly with the body.',
        contact_title: 'Contact',
        contact_address: 'Barcelona, Spain / Zurich, Switzerland',
        contact_whatsapp: '📱 WhatsApp: +34 657 38 20 39',
        footer_rights: 'All rights reserved'
    },
    de: {
        nav_inicio: 'Startseite',
        nav_galeria: 'Galerie',
        nav_videos: 'Videos',
        nav_tatuador: 'Künstler',
        nav_contacto: 'Kontakt',
        hero_title: 'Shikena Tattoo',
        hero_subtitle: 'Kunst auf der Haut',
        hero_description: 'Jedes Tattoo erzählt eine Geschichte.',
        hero_btn: 'Galerie ansehen',
        galeria_title: 'Galerie',
        videos_title: 'Videos',
        about_title: 'Der Tätowierer',
        about_name: 'Willy Tordera',
        about_text1: 'Mit über 10 Jahren Erfahrung ist Willy Tordera ein leidenschaftlicher Tattoo-Künstler. Spezialisiert auf Blackwork, Color und Fine Line, ist jedes seiner Werke einzigartig und persönlich.',
        about_text2: 'Sein Stil zeichnet sich durch Präzision im Detail und Respekt vor der Anatomie aus, wodurch Tattoos entstehen, die sich perfekt in den Körper einfügen.',
        contact_title: 'Kontakt',
        contact_address: 'Barcelona, Spanien / Zurich, Schweiz',
        contact_whatsapp: '📱 WhatsApp: +34 657 38 20 39',
        footer_rights: 'Alle Rechte vorbehalten'
    },
    es: {
        nav_inicio: 'Inicio',
        nav_galeria: 'Galería',
        nav_videos: 'Videos',
        nav_tatuador: 'Tatuador',
        nav_contacto: 'Contacto',
        hero_title: 'Shikena Tattoo',
        hero_subtitle: 'Arte sobre la piel',
        hero_description: 'Cada tatuaje cuenta una historia.',
        hero_btn: 'Ver galería',
        galeria_title: 'Galería',
        videos_title: 'Videos',
        about_title: 'El Tatuador',
        about_name: 'Willy Tordera',
        about_text1: 'Con más de 10 años de experiencia, Willy Tordera es un artista apasionado por el tatuaje. Especializado en Blackwork, Color y Fine Line, cada pieza que crea es única y personalizada.',
        about_text2: 'Su estilo se caracteriza por la precisión en los detalles y el respeto por la anatomía, logrando tatuajes que se integran a la perfección con el cuerpo.',
        contact_title: 'Contacto',
        contact_address: 'Barcelona, España / Zurich, Suiza',
        contact_whatsapp: '📱 WhatsApp: +34 657 38 20 39',
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
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.dataset.keyPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
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
