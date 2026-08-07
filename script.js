// ===== DROPDOWN =====
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const selectedCategory = document.getElementById('selectedCategory');

dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
    dropdownBtn.classList.toggle('active');
});

document.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
    dropdownBtn.classList.remove('active');
});

document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function() {
        selectedCategory.textContent = this.textContent;
        dropdownContent.classList.remove('show');
        dropdownBtn.classList.remove('active');
    });
});

// ===== FUNCIONES PARA EL LIGHTBOX (AGRANDAR FOTOS) =====
function openLightbox(element) {
    const img = element.querySelector('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    if (img) {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden'; // Evita hacer scroll detrás
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = ''; // Vuelve a permitir el scroll
}

// Cerrar el lightbox con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
