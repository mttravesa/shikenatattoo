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

// ===== DROPDOWN =====
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

// ===== GALERÍA (cambiar al hacer clic en el dropdown) =====
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.dataset.category;
        
        // Cambiar texto del botón
        selectedCategory.textContent = this.textContent;
        
        // Ocultar todos los grids
        document.querySelectorAll('.gallery-grid').forEach(grid => {
            grid.classList.remove('active-grid');
        });
        
        // Mostrar el grid correspondiente
        document.getElementById(category).classList.add('active-grid');
        
        // Cambiar el título de la galería
        document.getElementById('galleryTitle').textContent = this.textContent;
        
        // Marcar el elemento activo en el dropdown
        document.querySelectorAll('.dropdown-content a').forEach(a => a.classList.remove('active-category'));
        this.classList.add('active-category');
        
        // Cerrar el dropdown
        dropdownContent.classList.remove('show');
        dropdownBtn.classList.remove('active');
    });
});

// ===== CERRAR MENÚ AL HACER SCROLL =====
document.addEventListener('scroll', () => {
    dropdownContent.classList.remove('show');
    dropdownBtn.classList.remove('active');
});
