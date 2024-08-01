/*const listInfo = document.querySelector('.list-info');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn')

let index = 0; 

nextBtn.addEventListener('click', () =>{

    index = (index < 3) ? index + 1 : 3;
    
    listInfo.style.transform = `translateY(${index * -25 }%)`;
});

prevBtn.addEventListener('click', () =>{

    index = (index > 0) ? index - 1 : 0;
    
    listInfo.style.transform = `translateY(${index * - 25 }%)`;
});*/


/*PARTE MENU*/

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
