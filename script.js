// script.js
let currentPage = 0;

function nextPage() {
    const pages = document.querySelectorAll('.page');
    // Si hay más de una página
    if (pages.length > 1) {
        pages[currentPage].style.left = '-100%'; // Mueve la página actual hacia la izquierda
        currentPage = (currentPage + 1) % pages.length; // Actualiza la página actual
        pages[currentPage].style.left = '0'; // Trae la nueva página
    }
}

// Inicializa la página actual en la carga
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    if (pages.length > 0) {
        pages[currentPage].style.left = '0'; // Asegura que la primera página esté visible
    }
});
