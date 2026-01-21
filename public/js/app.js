// =========================================
// =========================================
let modaal = document.querySelector('#videoModal');
let closeModal = document.getElementById('closeModal');
let Watch_Video = document.querySelector('.Watch_Video');
let button = document.querySelector('.button');
let book_a_table = document.querySelector('.book_a_table')
let boton = document.querySelector('.book_a_tableeee')
let boton2 = document.querySelector('.book_a')
let cansel_botton = document.querySelector('.cansel_botton')


book_a_table.style.display = "none"
modaal.style.display = 'none';

[Watch_Video, button].forEach(btn => {
    btn?.addEventListener('click', (e) => {
        e.preventDefault();
        modaal.style.display = 'block';
    })
})
boton.addEventListener('click',()=>{
    book_a_table.style.display = "block"
})
cansel_botton.addEventListener('click',()=>{
    book_a_table.style.display = "none"
})
boton2.addEventListener('click',()=>{
    book_a_table.style.display = "block"
})
cansel_botton.addEventListener('click',()=>{
    book_a_table.style.display = "none"
})


// =============================
closeModal.addEventListener('click', () => modaal.style.display = 'none');

let modalIndex = 0;
const modalTrack = document.getElementById('track');
const modalSlides = document.querySelectorAll('.slide');
const modalPrev = document.getElementById('prevBtn');
const modalNext = document.getElementById('nextBtn');

function moveModal() {
    modalTrack.style.transform = `translateX(-${modalIndex * 100}%)`;
}

modalNext.addEventListener('click', () => {
    modalIndex = modalIndex >= modalSlides.length - 1 ? 0 : modalIndex + 1;
    moveModal();
})

modalPrev.addEventListener('click', () => {
    modalIndex = modalIndex <= 0 ? modalSlides.length - 1 : modalIndex - 1;
    moveModal();
})

setInterval(() => {
    modalIndex = (modalIndex + 1) % modalSlides.length;
    moveModal();
}, 4000)

// =========================================
// EXTERNAL CAROUSEL
// =========================================

let extIndex = 0;
const extCarousel = document.querySelector('.carousel');
const extSlides = document.querySelectorAll('.carousel > div');
const extPrev = document.querySelector('.prev');
const extNext = document.querySelector('.next');

function moveExt() {
    extCarousel.style.transform = `translateX(-${extIndex * 100}%)`;
}

extNext?.addEventListener('click', () => {
    extIndex = extIndex >= extSlides.length - 1 ? 0 : extIndex + 1;
    moveExt();
});

extPrev?.addEventListener('click', () => {
    extIndex = extIndex <= 0 ? extSlides.length - 1 : extIndex - 1;
    moveExt();
});
setInterval(() => {
    extIndex = (extIndex + 1) % extSlides.length;
    moveExt();
}, 5000)

// =========================================
//  CHAF HOVER 
// =========================================
const chaf1 = document.querySelector('.chaf1');
const chaf2 = document.querySelector('.chaf2');
const chaf3 = document.querySelector('.chaf3');

[chaf1, chaf2, chaf3].forEach((chaf, i) => {
    const chafIcons = chaf.querySelector('.icoons');
    
    chaf.addEventListener('mouseover', () => {
        chafIcons.style.right = '0';
        chafIcons.style.display = 'flex'; 
        if (i === 0) {
            chaf.style.right = '50px'
        }
    });
    
    chaf.addEventListener('mouseout', () => {
        chafIcons.style.right = '-100px';
        chafIcons.style.display = 'none';
    })
})
// ==========================================================
// ======================


const sec6Slides = document.querySelectorAll('.sec_6_prt1, .sec_6_prt2, .sec_6_prt3, .sec_6_prt4');
const sec6Container = document.querySelector('.sec_6');
let sec6Index = 0;
let mov = false;

function moveSec6() {
    sec6Container.style.transform = `translateX(-${sec6Index * 10}%)`; 
}

document.querySelector('.sec_6_next')?.addEventListener('click', () => { 
    if (mov) return;
    mov = true;
    
    sec6Index++;
    if (sec6Index >= sec6Slides.length-1) sec6Index = 0;
    moveSec6();
    
    setTimeout(() => mov = false, 500);
});

setInterval(() => {
    if (!mov) {
        sec6Index = (sec6Index + 1) % sec6Slides.length;
        moveSec6();
    }
}, 3500);







