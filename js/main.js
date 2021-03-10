$(document).ready(function(){
    $(".header__slide--responsive").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.main-content__categories--slick').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: $('.cate-prev'),
        nextArrow: $('.cate-next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $(".deal-slick").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.deal-prev'),
        nextArrow: $('.deal-next'),
        responsive: [
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".main-content__partner--slick").slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.partner-prev'),
        nextArrow: $('.partner-next'),
        responsive: [
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".new-latest-slick").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.new-prev'),
        nextArrow: $('.new-next'),
        responsive: [
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".list-product").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.list-product-prev'),
        nextArrow: $('.list-product-next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
