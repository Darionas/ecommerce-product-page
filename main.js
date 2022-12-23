'Use strict';

const modal_nav = document.getElementsByClassName('header_modal_nav')[0];
const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
const close_icon = document.getElementsByClassName('close_icon')[0];
const modal_cart = document.getElementsByClassName('header_modal_cart')[0];
const cart_icon_1 = document.getElementsByClassName('cart_icon_1')[0];
const cart_icon_2 = document.getElementsByClassName('order_container')[0];
let operand = document.getElementsByClassName('operand')[0];
let product_order = document.getElementsByClassName('product_order')[0];
const minus_icon = document.getElementsByClassName('minus_icon')[0];
const plus_icon = document.getElementsByClassName('plus_icon')[0];
let product_quantity = document.getElementsByClassName('product_quantity')[0].ariaValueText;
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

/* Images gallery */
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


/* Less & more toggle */
plus_icon.addEventListener('click', addition);
let add = (function () {
    return function () {return product_quantity += 1;}
})();

function addition() {
    document.getElementsByClassName('product_quantity')[0].innerHTML = add();  
    console.log(product_quantity); 
}


minus_icon.addEventListener('click', subtraction);
let subtract = (function () {
        return function() {return product_quantity -= 1}
})();

function subtraction() {
    if(product_quantity < 1) {
        return 0;
    } else {
        document.getElementsByClassName('product_quantity')[0].innerHTML = subtract();
        console.log(product_quantity); 
    }
}

/* Add to cart */
cart_icon_2.addEventListener('click', function() {
    if(product_quantity != null) {
        console.log(product_quantity);
        product_order.style.display = 'block';
        if(product_quantity > 0) {
            product_order.innerHTML = product_quantity;
        } else {
            product_order.style.display = 'none';
        }
    };     
})

/* Open cart modal */
if(cart_icon_1) {
    cart_icon_1.addEventListener('click', function() {
        modal_cart.style.display = 'block';
    })
    }