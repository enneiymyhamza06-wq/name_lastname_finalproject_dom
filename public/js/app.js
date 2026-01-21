let carosil1 = document.querySelector('.aaa');
let carosil2 = document.querySelector('.bb');
let carosil3 = document.querySelector('.cc');
let carosil4 = document.querySelector('.dd');
let prev = document.querySelector('.prev'); 
let next = document.querySelector('.next');
let carousel = document.querySelector('.carousel'); 
let Watch_Video = document.querySelector('.Watch_Video')
let modaal  = document.querySelector('#videoModal')
let closeModal = document.querySelector('#closeModal')
let button = document.querySelector('.button')
// [[[[[[[[[[[[]]]]]]]]]]]]

modaal.style.display = "none"
Watch_Video.addEventListener('click',(e)=>{
     e.preventDefault()
    modaal.style.display = "block"
})
closeModal.addEventListener('click',()=> {
    modaal.style.display = "none"
})
// xxxxxxxxxxxxxxxxx
button.addEventListener('click',(e)=>{
     e.preventDefault()
    modaal.style.display = "block"
})
closeModal.addEventListener('click',()=> {
    modaal.style.display = "none"
})



// [[[[[[[[[[[[]]]]]]]]]]]]
let index = 0;
let slides = document.querySelectorAll('.carousel > div'); 
let width = slides[0].clientWidth ; 
console.log('Width:', width);

next.addEventListener('click', () => {
    index++;
    if (index === slides.length - 1) index = 0; 
    carousel.style.transform = `translateX(${-index * width}px)`;  
});

prev.addEventListener('click', () => {
    index--;
    if (index < 0) index = slides.length - 1;  
    carousel.style.transform = `translateX(${-index * width}px)`;
});
setInterval(() => {
    index = (index + 1) % slides.length;
    carousel.style.transform = `translateX(${-index * width}px)`;
}, 4000);

// =================================================
// chaf
// =================================================
let chafs = document.querySelectorAll('.le_chafs');  
let chaf1 = document.querySelector('.chaf1'); 
let chaf2 = document.querySelector('.chaf2');
let chaf3 = document.querySelector('.chaf3');

let icoons = document.querySelector('.icoons'); 
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// const dropBtn = document.getElementById("dropBtn");
// const dropMenu = document.querySelector(".dropdown-menu");

// dropBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   dropMenu.classList.toggle("show");
// });

// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".dropdown")) {
//     dropMenu.classList.remove("show");
//   }
// });

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

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

// watch video
// lllllllllllllllllllllllllllllllllllllllll

// const modal = document.getElementById('videoModal');
// const closeBtn = document.getElementById('closeModal');
// const track = document.getElementById('track');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');


// let indexx = 0;


// function openModal() { 
//     modal.classList.add('active');
//  }
// function closeModal() { modal.classList.remove('active'); }
// function moveSlide() { 
//     track.style.transform = `translateX(-${indexx * 100}%)`; 
// }

// closeBtn.onclick = closeModal;
// prevBtn.onclick = () => { indexx = indexx <= 0 ? 2 : indexx - 1; moveSlide(); };
// nextBtn.onclick = () => { indexx = indexx >= 2 ? 0 : indexx + 1; moveSlide(); };


// window.onload = openModal;
