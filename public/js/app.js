// =========================================
//  MODAL CAROUSEL (#videoModal)
// =========================================
const modaal = document.querySelector('#videoModal');
const closeModal = document.getElementById('closeModal');
const Watch_Video = document.querySelector('.Watch_Video');
const button = document.querySelector('.button');

modaal.style.display = 'none';

[Watch_Video, button].forEach(btn => {
    btn?.addEventListener('click', (e) => {
        e.preventDefault();
        modaal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => modaal.style.display = 'none');

// Modal carousel
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
});

modalPrev.addEventListener('click', () => {
    modalIndex = modalIndex <= 0 ? modalSlides.length - 1 : modalIndex - 1;
    moveModal();
});

// Auto modal
setInterval(() => {
    modalIndex = (modalIndex + 1) % modalSlides.length;
    moveModal();
}, 4000);

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
}, 5000);

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
    });
});
// ==========================================================
// ======================

// Sec_6 Events Carousel (Vanilla JS)
// Infinite carousel JS للـ sec_6 (4 صور)
// const track = document.querySelector('.sec_6_track'); // ضيف class sec_6_track
// const nextBtn = document.querySelector('.next');
// let mov = false;

// nextBtn.addEventListener('click', () => {
//     if (mov) return;
    
//     mov = true;
//     track.style.transform = 'translateX(-25%)'; // 4 صور = 25% كل واحدة
    
//     track.addEventListener('transitionend', () => {
//         track.appendChild(track.firstElementChild); // آخر للأول
//         track.style.transition = 'none';
//         track.style.transform = 'translateX(0)';
//         track.offsetHeight; // reflow
//         track.style.transition = 'transform 0.5s ease';
//         mov = false;
//     }, { once: true });
// });

// // Auto كل 4s
// setInterval(() => {
//     if (!mov) nextBtn.click();
// }, 4000);


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







