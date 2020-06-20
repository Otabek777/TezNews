'use strict';

// hide stick menu

let header = document.querySelector('.nav');

$(window).scroll(function() {

    if($(this).scrollTop() > 1) {    
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

let navSub = document.querySelector('.header-sub');

let navItem = document.querySelector('#nav-item').addEventListener('click', function (e) {
    e.preventDefault();
});

$('.article__carousel').slick({
    infinite: true,
});