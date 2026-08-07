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

// ===== DROPDOWN PRINCIPAL =====
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const selectedCategory = document.getElementById('selectedCategory');

dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
    dropdownBtn.classList.toggle('active');
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
    dropdownBtn.classList.remove('active');
});

// ===== SUBMENÚ GALERÍA =====
const gallerySubmenuBtn = document.getElementById('gallerySubmenuBtn');
const gallerySubmenuContent = document.getElementById('gallerySubmenuContent');
const gallerySubmenu = document.querySelector('.dropdown-submenu');

gallerySubmenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    gallerySubmenu.classList.toggle('open');
});

// ===== CAMBIAR CATEGORÍA DE GALERÍA =====
document.querySelectorAll('.dropdown-submenu-content a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.dataset.category;
        
        // Cambiar texto del botón principal
        selectedCategory.textContent = 'Gallery';
        
        // Ocultar todos los grids
        document.querySelectorAll('.gallery-grid').forEach(grid => {
            grid.classList.remove('active-grid');
        });
        
        // Mostrar el grid correspondiente
        document.getElementById(category).classList.add('active-grid');
        
        // Cambiar el título de la galería
        document.getElementById('galleryTitle').textContent = this.textContent;
        
        // Marcar el elemento activo en el submenú
        document.querySelectorAll('.dropdown-submenu-content a').forEach(a => a.classList.remove('active-category'));
        this.classList.add('active-category');
        
        // Cerrar el dropdown
        dropdownContent.classList.remove('show');
        dropdownBtn.classList.remove('active');
        gallerySubmenu.classList.remove('open');
    });
});

// ===== VÍDEOS =====
document.getElementById('videosLink').addEventListener('click', (e) => {
    e.preventDefault();
    selectedCategory.textContent = 'Videos';
    document.getElementById('galleryTitle').textContent = 'Videos';
    
    // Ocultar todos los grids de galería
    document.querySelectorAll('.gallery-grid').forEach(grid => {
        grid.classList.remove('active-grid');
    });
    
    // Cerrar el dropdown
    dropdownContent.classList.remove('show');
    dropdownBtn.classList.remove('active');
    gallerySubmenu.classList.remove('open');
    
    // Scroll a la sección de videos
    document.getElementById('videos').scrollIntoView({ behavior: 'smooth' });
});

// ===== CARGAR VÍDEOS =====
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
