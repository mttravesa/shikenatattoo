document.addEventListener('DOMContentLoaded', () => {

    // Cambios de categorías en Galería
    const categoryButtons = document.querySelectorAll('.cat-btn');
    const galleryGrids = document.querySelectorAll('.gallery-grid');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            galleryGrids.forEach(grid => grid.classList.remove('active-grid'));
            const targetGrid = document.getElementById(this.dataset.category);
            if (targetGrid) targetGrid.classList.add('active-grid');
        });
    });

    // Inyección de Vídeos con los nombres exactos proporcionados
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
    if (videosGrid) {
        videoList.forEach(videoFile => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `
                <video controls preload="metadata">
                    <source src="videos/${videoFile}" type="video/mp4">
                </video>
                <div class="video-caption">${videoFile}</div>
            `;
            videosGrid.appendChild(card);
        });
    }

    // Traducción dinámica Trilingüe (Inglés por defecto, Alemán y Español)
    const translations = {
        en: {
            nav_home: 'Home',
            nav_gallery: 'Gallery',
            nav_videos: 'Videos',
            hero_quote: 'Every tattoo tells a story',
            artist_title: 'Willy Tordera — Tattoo Artist',
            gallery_title: 'Gallery',
            videos_title: 'Videos',
            footer_rights: 'All rights reserved'
        },
        de: {
            nav_home: 'Startseite',
            nav_gallery: 'Galerie',
            nav_videos: 'Videos',
            hero_quote: 'Jedes Tattoo erzählt eine Geschichte',
            artist_title: 'Willy Tordera — Tätowierer',
            gallery_title: 'Galerie',
            videos_title: 'Videos',
            footer_rights: 'Alle Rechte vorbehalten'
        },
        es: {
            nav_home: 'Inicio',
            nav_gallery: 'Galería',
            nav_videos: 'Videos',
            hero_quote: 'Cada tatuaje cuenta una historia',
            artist_title: 'Willy Tordera — Tatuador',
            gallery_title: 'Galería',
            videos_title: 'Videos',
            footer_rights: 'Todos los derechos reservados'
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Idioma inicial: Inglés
    setLanguage('en');
});
