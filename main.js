'Use strict';
/* navigation */
const modal_nav = document.getElementsByClassName('header_modal_nav')[0];
const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
const close_icon = document.getElementsByClassName('close_icon')[0];


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

