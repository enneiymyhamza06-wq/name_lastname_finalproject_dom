// let carosil1 = document.querySelector('.aaa');
// let carosil2 = document.querySelector('.bb');
// let carosil3 = document.querySelector('.cc');
// let carosil4 = document.querySelector('.dd');
// let prev = document.querySelector('.prev'); 
// let next = document.querySelector('.next');
// let carousel = document.querySelector('.carousel'); 

// let index = 0;
// let slides = document.querySelectorAll('.carousel > div'); 
// let width = slides[0].clientWidth + 20; 
// console.log('Width:', width);

// next.addEventListener('click', () => {
//     index++;
//     if (index === slides.length - 1) index = 0; 
//     carousel.style.transform = `translateX(${-index * width}px)`;  
// });

// prev.addEventListener('click', () => {
//     index--;
//     if (index < 0) index = slides.length - 1;  
//     carousel.style.transform = `translateX(${-index * width}px)`;
// });
// setInterval(() => {
//     index = (index + 1) % slides.length;
//     carousel.style.transform = `translateX(${-index * width}px)`;
// }, 4000);

// =================================================
// chaf
// =================================================
let chafs = document.querySelectorAll('.le_chafs');  
let chaf1 = document.querySelector('.chaf1'); 
let chaf2 = document.querySelector('.chaf2');
let chaf3 = document.querySelector('.chaf3');  
let icoons = document.querySelector('.icoons'); 

chaf1.addEventListener('mouseover', () => {
    icoons.style.right = "0";
    icoons.style.display = "block"
    chaf1.style.right = "50px"
})

chaf2.addEventListener('mouseover', () => {
    icoons.style.right = "0";
    icoons.style.display = "block"
})

chaf3.addEventListener('mouseover', () => {
    icoons.style.right = "0";
    icoons.style.display = "block"
})

[chaf1, chaf2, chaf3].forEach(chaf => {
    chaf.addEventListener('mouseout', () => {
        icoons.style.right = "-100px";  
        icoons.style.display = "none"
    })
})
