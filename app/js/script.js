$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 0,
        dots: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                dots: true,
                loop:true
            }
        }
    });
    var link =$('.menu-link');
    var link_active = $('.menu-link_active');

    link.click(function () {
        link.toggleClass('menu-link_active');
    });
    $( ".menu-link" ).click(function() {
        $( ".header__menu" ).slideToggle( "slow", function() {
        });
    });
});