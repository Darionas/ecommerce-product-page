'Use strict';

const body = document.getElementsByTagName('body')[0];
const modal_nav = document.getElementsByClassName('header_navLinks')[0];
const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
const close_icon = document.getElementsByClassName('close_icon')[0];
const header_modal_cart = document.getElementsByClassName('header_modal_cart')[0];
const cart_icon_1 = document.getElementsByClassName('cart_icon_1')[0];
const cart_icon_2 = document.getElementsByClassName('order_container')[0];
const minus_icon = document.getElementsByClassName('minus_icon')[0];
const plus_icon = document.getElementsByClassName('plus_icon')[0];
const modal_cart_box = document.getElementsByClassName('modal_cart_box')[0];
const checkout = document.getElementsByClassName('checkout')[0];
const empty_cart = document.getElementsByClassName('empty_cart')[0];
const bin = document.getElementsByClassName('bin')[0];
const follow = document.getElementsByClassName('follow')[0];
const modal_close_icon = document.getElementsByClassName('modal_close_icon')[0];
const max = window.matchMedia("(min-width: 768px)");
const min = window.matchMedia("(max-width: 767px)");
let modal_imgo_gallery = document.getElementsByClassName('modal_imgo_gallery')[0];
let operand = document.getElementsByClassName('operand')[0];
let product_order = document.getElementsByClassName('product_order')[0];
let product_quantity = document.getElementsByClassName('product_quantity')[0].ariaValueText;
let total = document.getElementsByClassName('total')[0];
let one_piece_price = document.getElementsByClassName('one_piece_price')[0].innerHTML;
let fullSize_image = document.getElementsByClassName('fullSize_image');
let slideIndex = 1;
let all_fullSize_images = '';

/* classList toggle to show/hide element */
/* https://stackoverflow.com/questions/54511902/how-to-use-classlist-toggle-to-show-hide-drop-down-list-content */
/* Toggle hamburger icon */
hamburger_icon.onclick = function() {
    modal_nav.style.display = 'block';
};

close_icon.onclick = function() {
    modal_nav.style.display = 'none';
};

window.onclick = function(event) {
    if(event.target == modal_nav) {
        modal_nav.style.display = 'none';
    }
};

/* Images gallery */
/* FullSize image gallery */
showSlides(slideIndex);

/* Next/previous controls */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Thumbnail image controls */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i, j;
    let slides = document.getElementsByClassName('fullSize_image');
    let thumb = document.getElementsByClassName('thumb');
    let cont = document.getElementsByClassName('cont');

    if(n > slides.length) {slideIndex = 1;}
    if(n < 1) {slideIndex = slides.length;}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < thumb.length; i++) {
        thumb[i].className = thumb[i].className.replace(' active', '');
    }

    for(j = 0; j < cont.length; j++) {
        cont[j].className = cont[j].className.replace(' border_line', '');
    }

    slides[slideIndex-1].style.display = 'block';
    thumb[slideIndex-1].className += ' active';
    cont[slideIndex-1].className += ' border_line';
}


/* minus & plus toggle */
plus_icon.addEventListener('click', addition);
let add = (function () {
    return function () {return product_quantity += 1;};
})();

function addition() {
    document.getElementsByClassName('product_quantity')[0].innerHTML = add();
}


minus_icon.addEventListener('click', subtraction);
let subtract = (function () {
        return function() {return product_quantity -= 1;};
})();

function subtraction() {
    if(product_quantity < 1) {
        return 0;
    } else {
        document.getElementsByClassName('product_quantity')[0].innerHTML = subtract(); 
    }
}

/* Add to cart */
if(cart_icon_2) {
    cart_icon_2.addEventListener('click', function() {
        if(product_quantity != null) {
            product_order.style.display = 'block';
            if(product_quantity > 0) {
                product_order.innerHTML = product_quantity;
            } else {
                product_order.style.display = 'none';
            }
        }     
    });
}

/* Open cart container */
if(cart_icon_1) {
    cart_icon_1.addEventListener('click', function() {
        header_modal_cart.style.display = 'block';
        if(product_quantity == 0) {
            modal_cart_box.style.display = 'none';
            checkout.style.display = 'none';
            product_order.style.display = 'none';
            empty_cart.style.display = 'block';
        } else if(product_order.innerHTML > 0) {
            modal_cart_box.style.display = 'block';
            checkout.style.display = 'block';
            empty_cart.style.display = 'none';
            follow.style.display = 'none';
            operand.innerHTML = product_order.innerHTML;
            total.innerHTML = Number(one_piece_price * operand.innerHTML).toFixed(2);
        } else {
            modal_cart_box.style.display = 'none';
            checkout.style.display = 'none';
            empty_cart.style.display = 'block';
            
        }
    });
}

/* close cart container */
document.addEventListener('mouseup', function(e) {
    if(!header_modal_cart.contains(e.target)) {
        header_modal_cart.style.display = 'none';
    }
});

/* reset cart container */
function reset() {
    header_modal_cart.style.display = 'block';
    empty_cart.style.display = 'block'; 
}

window.onload = function() {
    var reloading = sessionStorage.getItem('reloading');
    if(reloading) {
      sessionStorage.removeItem('reloading');
      reset();
    }
  };

bin.addEventListener('click', function() {
    sessionStorage.setItem('reloading', 'true');
    location.reload();
});

/* start buying */
checkout.addEventListener('click', buy);
function buy() {
    header_modal_cart.style.display = 'block';
    follow.style.display = 'block';
    modal_cart_box.style.display = 'none';
    checkout.style.display = 'none';
    product_order.style.display = 'block';
    empty_cart.style.display = 'none';

}

/* Open modal element */
for(let a = 0; a < fullSize_image.length; a++) {
    all_fullSize_images = fullSize_image[a];
    all_fullSize_images.addEventListener('click', function() { 
        let modal_imgo_gallery = document.getElementsByClassName('modal_imgo_gallery')[0];
        if(max.matches == true) {   
            modal_imgo_gallery.style.display = 'block';
            body.style.backgroundColor = 'hsla(219, 9%, 45%)';
            body.style.backgroundColor = 'hsla(219, 9%, 45%, 1)';
        }
        if(min.matches == true) {
            modal_imgo_gallery.style.display = 'none';
            body.style.backgroundColor = 'hsl(0, 0%, 100%)';
        }
    });
}

/* Images gallery */
/* FullSize image gallery */
modal_showSlides(slideIndex);

/* Next/previous controls */
function modal_plusSlides(n) {
    modal_showSlides(slideIndex += n);
}

/* Thumbnail image controls */
function modal_currentSlide(n) {
    modal_showSlides(slideIndex = n);
}

function modal_showSlides(n) {
    let i, j;
    let slides = document.getElementsByClassName('modal_fullSize_image');
    let thumb = document.getElementsByClassName('modal_thumb');
    let cont = document.getElementsByClassName('modal_cont');

    if(n > slides.length) {slideIndex = 1;}
    if(n < 1) {slideIndex = slides.length;}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    for (i = 0; i < thumb.length; i++) {
        thumb[i].className = thumb[i].className.replace(' active_m', '');
    }

    for(j = 0; j < cont.length; j++) {
        cont[j].className = cont[j].className.replace(' border_line_m', '');
    }

    slides[slideIndex-1].style.display = 'block';
    thumb[slideIndex-1].className += ' active_m';
    cont[slideIndex-1].className += ' border_line_m';
   
}

/* close modal */
modal_close_icon.addEventListener('click', function() {
    modal_imgo_gallery.style.display = 'none';
    body.style.backgroundColor = 'hsl(0, 0%, 100%)';
});



    
