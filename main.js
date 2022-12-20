'Use strict';

const modal_nav = document.getElementsByClassName('header_modal_nav')[0];
const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
const close_icon = document.getElementsByClassName('close_icon')[0];
let slideIndex = 1;


/* Toggle hamburger icon */
hamburger_icon.onclick = function() {
    modal_nav.style.display = 'block';
}

close_icon.onclick = function() {
    modal_nav.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == modal_nav) {
        modal_nav.style.display = 'none';
    }
}

/* FullSize image gallery */
showSlides(slideIndex);

/* Next/previous controls */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Thumbnail image controls */


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('fullSize_image');
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}