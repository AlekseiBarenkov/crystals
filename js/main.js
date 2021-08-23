$(document).ready(function() {
    $('.header__burger-box').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});

const search = document.querySelector('.header__form');
const body = document.querySelector('body');

search.addEventListener('click', function (event) {
    event.stopPropagation();
    this.classList.add('active');
});

body.addEventListener('click', function () {
    search.classList.remove('active');
});


/* Slider team */

$(document).ready(function(){
    $('.shop__box-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        draggable: false,
        asNavFor: '.shop__row'
    });
    $('.shop__row').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.shop__box-inner',
        infinite: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    
                }
            },

            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    
                }
            },

        ]
    });
});

/* Slider Reviews */

$(document).ready(function(){
    $('.slick-wrapper__slick-box').slick({
        fade: true,
        prevArrow: '<i class="icofont-arrow-left slick-arrow"></i>',
        nextArrow: '<i class="icofont-arrow-right slick-arrow"></i>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
});