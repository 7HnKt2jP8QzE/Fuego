let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const newTransformValue = -slideIndex * 100 + '%';
    document.querySelector('.slides').style.transform = `translateX(${newTransformValue})`;
}

function moverSlide(direction) {
    mostrarSlide(slideIndex + direction);
}

// Mostrar el primer slide al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarSlide(slideIndex);
});
