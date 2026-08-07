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

// Cambiar el texto del botón al seleccionar una categoría
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function() {
        selectedCategory.textContent = this.textContent;
        dropdownContent.classList.remove('show');
        dropdownBtn.classList.remove('active');
    });
});
