$(function() {
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/arrow-next.svg"></button>',
        autoplay: true,
        fade: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }]
    })
})

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var btn = document.querySelector('.book-btn');
var bookSection = document.querySelector('#book');

btn.addEventListener('click', () => {
    scrollTo(bookSection);
})

new WOW().init();