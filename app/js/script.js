$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 12,
        dots: false,
        nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
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
                dots: false,
                loop:true,
                nav:true
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

    (function($){
        jQuery.fn.lightTabs = function(options){

            var createTabs = function(){
                tabs = this;
                i = 0;

                showPage = function(i){
                    $(tabs).children("div").children("div").hide();
                    $(tabs).children("div").children("div").eq(i).show();
                    $(tabs).children("ul").children("li").removeClass("active");
                    $(tabs).children("ul").children("li").eq(i).addClass("active");
                }

                showPage(0);

                $(tabs).children("ul").children("li").each(function(index, element){
                    $(element).attr("data-page", i);
                    i++;
                });

                $(tabs).children("ul").children("li").click(function(){
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);
    $(document).ready(function(){
        $(".tabs").lightTabs();
    });
    $("#menus").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#menuu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.tabs ul li').click(function () {
        $('.tabs ul li').addClass('active')

    })
});