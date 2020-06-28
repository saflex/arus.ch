// Grab data attributes from video-wrapper

var videoID = $(".video-wrapper").data("video-id");
var videoYouTubeLink = $(".video-wrapper").data("video-youtube-link");
var videoStart = $(".video-wrapper").data("video-start");
var videoEnd = $(".video-wrapper").data("video-end");
var videoWidthAdd = $(".video-wrapper").data("video-width-add");
var videoHeightAdd = $(".video-wrapper").data("video-height-add");

// Prepend link to Youtube video if data attr is yes

if (videoYouTubeLink === 'y') {
    $(".video-wrapper").prepend('<a href="https://www.youtube.com/watch?v=' + videoID + '" class="video-expand" target="_blank">View on Youtube</a>');
}

// 2. This code loads the IFrame Player API code asynchronously.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: videoID,
        playerVars: {
            'autoplay': 0,
            'autohide': 1,
            'end': videoEnd,
            'loop': 1,
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
            'controls': 0,
            'disablekb': 1,
            'enablejsapi': 0,
            'iv_load_policy': 3
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.

function onPlayerReady(event) {
    vidRescale();
    event.target.mute();
    event.target.seekTo(videoStart);
}

// 5. The API calls this function when the player's state changes.

function onPlayerStateChange(e) {
    if (e.data === 1) {
        $('#player').addClass('active');
    } else if (e.data === 0) {
        player.seekTo(videoStart);
    }
}

// This function scales the video to window size and uses additional values to push video beyong window size

function vidRescale() {
    console.log('video reloaded');
    var w = $(window).width() + videoWidthAdd,
        h = $(window).height() + videoHeightAdd;
    if (w / h > 16 / 9) {
        player.setSize(w, w / 16 * 9);
        $('.tv .screen').css({ 'left': '0px' });
    } else {
        player.setSize(h / 9 * 16, h);
        $('.tv .screen').css({ 'left': -($('.tv .screen').outerWidth() - w) / 2 });
    }
}

// Reloads the video on load and resize

$(window).on('resize', function() {
    vidRescale();
});




if ($(window).width() > 1210) {
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();


} else {
    // change functionality for larger screens
}




$(document).ready(function() {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.navigation__link[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.navigation__link').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#mainNav .navigation__link').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#mainNav .navigation__link').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}







$(function() {
    $('.scroll1').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#5').offset().top }, 700);
        e.preventDefault();
    });
});



$(function() {
    $('.arrow-top').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('body').offset().top }, 700);
        e.preventDefault();
    });
});



$(function() {
    $('.btn1').on('click', function(e) {
        $('.img1').addClass('activeim');
        $('.f1').addClass('show-duration');
        $('.ww1').addClass('fxmod');
        $('.btn1').addClass('fxvs');
        e.preventDefault();
    });
});


$(function() {
    $('.btn2').on('click', function(e) {
        $('.img2').addClass('activeim2');
        $('.ww2').addClass('fxmod');
        $('.f2').addClass('show-duration');
        $('.btn2').addClass('fxvs2');
        e.preventDefault();
    });
});


$(function() {
    $('.btn3').on('click', function(e) {
        $('.img3').addClass('activeim');
        $('.ww3').addClass('fxmod');
        $('.f3').addClass('show-duration');
        $('.btn3').addClass('fxvs');
        e.preventDefault();
    });
});















$(function() {
    $('.black-bg').on('click', function(e) {
        $('.black-bg').addClass('show-duration2');
        //e.preventDefault();
    });
});



$(function() {
    $('.btn-mob1').on('click', function(e) {
        $('.f1').addClass('show-duration');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        $('.ww1 .txt-info').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-1').removeClass('show-block');
        $('.group-2').removeClass('show-block');
        $('.group-3').removeClass('show-block');
        $('.section5 h2').addClass('no-show-block');
        $('.line-n').addClass('no-show-block');
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
    });
});


$(function() {
    $('.btn-mob2').on('click', function(e) {
        $('.ww1').addClass('no-show-block');
        $('.ww2').removeClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-2').removeClass('no-show-block');
        $('.group-1').removeClass('show-block');
        $('.group-2').removeClass('show-block');
        $('.group-2').addClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.ww2 .txt-info').removeClass('no-show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.btn-mob3').on('click', function(e) {
        $('.ww1').addClass('no-show-block');
        $('.ww3').removeClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-3').removeClass('no-show-block');
        $('.group-3').addClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.ww3 .txt-info').removeClass('no-show-block');
        $('.group-1').removeClass('show-block');
        $('.group-2').removeClass('show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.group-2-btn1').on('click', function(e) {
        $('.ww1').addClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        $('.ww2 .txt-info').addClass('no-show-block');
        $('.group-2').removeClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-3').addClass('no-show-block');
        $('.f2').addClass('show-duration');
        $('.section5 h2').addClass('no-show-block');
        $('.line-n').addClass('no-show-block');
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
    });
});

$(function() {
    $('.group-2-btn2').on('click', function(e) {
        $('.ww2 .txt-info').addClass('no-show-block');
        $('.group-2').removeClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-1').addClass('show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.group-2-btn3').on('click', function(e) {
        $('.ww3 .txt-info').addClass('no-show-block');
        $('.group-3').removeClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-1').addClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-2').removeClass('show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        e.preventDefault();
    });
});

$(function() {
    $('.back1').on('click', function(e) {
        $('.f1').removeClass('show-duration');
        $('.ww1 .txt-info').removeClass('no-show-block');
        $('.ww2 .txt-info').removeClass('no-show-block');
        $('.ww3 .txt-info').removeClass('no-show-block');
        $('.ww2').removeClass('no-show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').removeClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-2').removeClass('no-show-block');
        $('.group-3').removeClass('no-show-block');
        $('.section5 h2').removeClass('no-show-block');
        $('.line-n').removeClass('no-show-block');
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
        e.preventDefault();
    });
});


$(function() {
    $('.back2').on('click', function(e) {
        $('.f2').removeClass('show-duration');
        $('.ww1 .txt-info').removeClass('no-show-block');
        $('.ww2 .txt-info').removeClass('no-show-block');
        $('.ww3 .txt-info').removeClass('no-show-block');
        $('.ww2').removeClass('no-show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').removeClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-2').removeClass('no-show-block');
        $('.group-3').removeClass('no-show-block');
        $('.line-n').removeClass('no-show-block');
        $('.section5 h2').removeClass('no-show-block');
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('.back3').on('click', function(e) {
        $('.f3').removeClass('show-duration');
        $('.ww1 .txt-info').removeClass('no-show-block');
        $('.ww2 .txt-info').removeClass('no-show-block');
        $('.ww3 .txt-info').removeClass('no-show-block');
        $('.ww2').removeClass('no-show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').removeClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-2').removeClass('no-show-block');
        $('.group-3').removeClass('no-show-block');
        $('.section5 h2').removeClass('no-show-block');
        $('.line-n').removeClass('no-show-block');
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
        e.preventDefault();
    });
});


$(function() {
    $('.navigation__link').click(function() {
        $('.button-nav').removeClass('actives');
        $('.mob-menu').removeClass('show');
        $('.logo-sn').removeClass('hides');
        $('.scroll1').removeClass('hides');
        $('.section1 p').removeClass('hides');
        $('.info-header').removeClass('show-info');
    })
});





if ($(window).width() > 1023) {

    $(document).ready(function() {

        //main nav
        $(window).on('scroll load', function() {
            updateMainNav();
        });

        function updateMainNav() {
            if ($(window).scrollTop() >= 51) {
                $('body').addClass('minimize-menus');
            } else {
                $('body').removeClass('minimize-menus');
            }
        }



    });
} else {
    // change functionality for larger screens
}


if ($(window).width() < 1024) {

    $(document).ready(function() {

        //main nav
        $(window).on('scroll load', function() {
            updateMainNav();
        });

        function updateMainNav() {
            if ($(window).scrollTop() >= 51) {
                $('body').addClass('minimize-men');
            } else {
                $('body').removeClass('minimize-men');
            }
        }



    });
} else {
    // change functionality for larger screens
}


$(function() {
    $('.group-3-btn1').on('click', function(e) {
        $('.ww1').addClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        $('.ww3 .txt-info').addClass('no-show-block');
        $('.group-3').removeClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-2').addClass('no-show-block');
        $('.f3').addClass('show-duration');
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);



        $('.section5 h2').addClass('no-show-block');
        $('.line-n').addClass('no-show-block');
        e.preventDefault();



    });
});

$(function() {
    $('.group-3-btn2').on('click', function(e) {
        $('.ww3 .txt-info').addClass('no-show-block');
        $('.group-3').removeClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-1').addClass('show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.group-3-btn3').on('click', function(e) {
        $('.ww2 .txt-info').addClass('no-show-block');
        $('.group-2').removeClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-1').addClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-3').removeClass('show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.scroll2').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#4').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('.button-nav').click(function() {
        $('.button-nav').toggleClass('actives');
        $('.mob-menu').toggleClass('show');
        $('.logo-sn').toggleClass('hides');
        $('.scroll1').toggleClass('hides');
        $('.section1 p').toggleClass('hides');
        $('.info-header').toggleClass('show-info');
    })
});




$(function() {
    $('.bottom-footer2').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('body').offset().top }, 700);
        e.preventDefault();
    });
});



ymaps.ready(init);


function init() {
    var location = ymaps.geolocation;
    var inputSearch = new ymaps.control.SearchControl({
            options: {

                // Пусть элемент управления будет
                // в виде поисковой строки.
                size: 'large',
                // Включим возможность искать
                // не только топонимы, но и организации.
                provider: 'yandex#search'

            }
        }),



        // Добавим поисковую строку на карту. 
        myMap = new ymaps.Map('map', {
            zoom: 10,
            center: [55.76, 27.64],
            controls: [inputSearch, 'zoomControl']
        });



    // Получение местоположения и автоматическое отображение его на карте.
    location.get({
            mapStateAutoApply: true
        })
        .then(
            function(result) {
                // Получение местоположения пользователя.
                var userAddress = result.geoObjects.get(0).properties.get('text');
                var userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
                // Пропишем полученный адрес в балуне.
                result.geoObjects.get(0).properties.set({
                    balloonContentBody: 'Адрес: ' + userAddress +
                        '<br/>Координаты:' + userCoodinates
                });
                myMap.geoObjects.add(result.geoObjects)
            },
            function(err) {
                console.log('Ошибка: ' + err)
            }
        );



    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },

        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',

        }),


        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

        }, {
            // Опции.
            // Необходимо указать данный тип проекта.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/assets/img/maps.svg',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -2]
        });


    myPlacemark2 = new ymaps.Placemark([55.76, 37.78], {
        // Свойства.

    }, {
        // Опции.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/assets/img/maps.svg',
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-27, -2]
    });




    myPlacemark3 = new ymaps.Placemark([55.9198471, 37.7654985], {
        // Свойства.

    }, {
        // Опции.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/assets/img/maps.svg',
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-27, -2]
    });




    myMap.behaviors.disable('scrollZoom');



    if ($(window).width() < 768) {

        myMap.behaviors.disable('drag');


    } else {
        // change functionality for larger screens
    }

    // myMap.geoObjects.add(myPlacemark)
    //     .add(myPlacemark2).add(myPlacemark3)
}






ymaps.ready(init2);

function init2() {
    var myMap2 = new ymaps.Map("map2", {
            center: [47.200458, 8.786512],
            zoom: 12,
            controls: ['zoomControl']
        }),


        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [47.200458, 8.786512]
            },

        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',

        }),


        myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип проекта.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/assets/img/maps.svg',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -2]
        });

    myMap2.behaviors.disable('scrollZoom');

    if ($(window).width() < 768) {

        myMap2.behaviors.disable('drag');


    } else {
        // change functionality for larger screens
    }


    myMap2.geoObjects.add(myPlacemark2)
}

ymaps.ready(init3);

function init3() {
    // Создаем выпадающую панель с поисковыми подсказками и прикрепляем ее к HTML-элементу по его id.
    var suggestView1 = new ymaps.SuggestView('suggest1');

}