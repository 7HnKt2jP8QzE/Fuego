const listInfo = document.querySelector('.list-info');
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
});