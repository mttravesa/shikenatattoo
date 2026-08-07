document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------
  // 1. MODAL / AMPLIADOR DE IMÁGENES
  // -------------------------------------------------------------
  
  // Crear elementos del modal dinámicamente si no existen
  const modal = document.createElement("div");
  modal.id = "image-modal";
  modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `;

  const modalImg = document.createElement("img");
  modalImg.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    object-fit: contain;
  `;

  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  // Escuchar clics en las imágenes dentro de la clase .galeria-grid
  const galeriaImagenes = document.querySelectorAll(".galeria-grid img");

  galeriaImagenes.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.style.display = "flex";
    });
  });

  // Cerrar el modal al hacer clic en cualquier parte de la pantalla
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal con la tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
    }
  });

  // -------------------------------------------------------------
  // 2. EFECTO SUAVE AL CARGAR
  // -------------------------------------------------------------
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.4s ease-in-out";
  
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 50);
});
