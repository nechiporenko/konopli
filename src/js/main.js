// Application Scripts:

// Десктоп меню - покажем/спрячем панель субменю
// Мобильное меню
// Кнопка скролла страницы
// Главный слайдер
// Слайдер товаров
// Слайдер видео
// Фиксим подергивание хидера при открытии бутстраповского модального окна
// Видео в модальном окне
// Слайдер логотипов партнеров
// SEO блок - раскроем по клику на ссылку "читать далее"
// Подключаем Zoom
// Стилизуем загрузчики файлов
// Поиск в каталоге магазина

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html=$('html'),
        $body = $('body');

    $body.append('<div id="overlay" class="overlay"></div>');
    var $overlay = $('#overlay');//оверлей

    //
    // Десктоп меню - покажем/спрячем панель субменю
    //---------------------------------------------------------------------------------------
    var initDesktopSubmenu = (function () {
        var $btn = $('.js-hpanel-toggle'),
            $panel = $('.js-hpanel'),
            method = {};

        method.hidePanel = function () {
            $btn.removeClass('active');
            $panel.removeClass('active');
            $overlay.hide().unbind('click', method.hidePanel);
        }

        method.showPanel = function () {
            initMobileMenu.hidePanel();//если моб.меню открыто - скроем
            $btn.addClass('active');
            $panel.addClass('active');
            $overlay.show().bind('click', method.hidePanel);
        }

        $('.menu').on('click', '.js-hpanel-toggle', function () {
            if ($(this).hasClass('active')) {
                method.hidePanel();
            } else {
                method.showPanel();
            }
        });

        return method;
    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    var initMobileMenu = (function () {
        var $btn = $('.js-mpanel-toggle'),
            $panel = $('.js-mpanel'),
            method = {};

        method.hidePanel = function () {
            $btn.removeClass('active');
            $panel.removeClass('active');
            $overlay.hide().unbind('click', method.hidePanel);
        }

        method.showPanel = function () {
            initDesktopSubmenu.hidePanel();//если открыто десктопное суб-меню - скроем
            $btn.addClass('active');
            $panel.addClass('active');
            $overlay.show().bind('click', method.hidePanel);
        }

        $('.menu').on('click', '.js-mpanel-toggle', function () {
            if ($(this).hasClass('active')) {
                method.hidePanel();
            } else {
                method.showPanel();
            }
        });

        $('.m-menu').on('click', '.m-menu__label', function () {
            method.hidePanel();
        });

        return method;
    })();

    

    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    var initPageScroller = (function () {
        var $scroller = $('<div class="scroll-up-btn"><i class="glyphicon glyphicon-menu-up"></i></div>');
        $body.append($scroller);
        $window.on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $scroller.show();
            } else {
                $scroller.hide();
            }
        });
        $scroller.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }());

    //
    // Главный слайдер
    //---------------------------------------------------------------------------------------
    function initMainSlider() {
        var $slider = $('.js-main-slider').bxSlider({
            auto: true,
            pause: 7000,
            autoHover:true
        });
    }
    if($('.js-main-slider').length){initMainSlider()}
    
    //
    // Слайдер товаров
    //---------------------------------------------------------------------------------------
    function initProductSlider() {
        var $slider = $('.js-product-slider'),
            getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
                var setting,
                    settings1 = {
                        maxSlides: 1,
                    },
                    settings2 = {
                        maxSlides: 2,
                    },
                    settings3 = {
                        maxSlides: 3,
                    },
                    settings4 = {
                        maxSlides: 4,
                    },
                    common = {
                        minSlides: 1,
                        moveSlides: 1,
                        slideWidth: 220,
                        slideMargin: 20,
                        auto: false,
                        pager: false,
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        useCSS: false
                    },
                    winW = $window.width();
                if (winW < 550) {
                    setting = $.extend(settings1, common);
                }
                if (winW >= 550 && winW < 750) {
                    setting = $.extend(settings2, common);
                }
                if (winW >= 750 && winW < 990) {
                    setting = $.extend(settings3, common);
                }
                if (winW >= 990) {
                    setting = $.extend(settings4, common);
                }
                return setting;
            }
        $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

        $window.on('resize', function () {
            setTimeout(recalcSliderSettings, 500);
        });

        function recalcSliderSettings() {
            $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }
    }
    if ($('.js-product-slider').length) { initProductSlider() }

    //
    // Слайдер видео
    //---------------------------------------------------------------------------------------
    function initVideoSlider() {
        var $slider = $('.js-video-slider'),
            getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
                var setting,
                    settings1 = {
                        maxSlides: 1,
                        slideWidth: 260,
                    },
                    settings2 = {
                        maxSlides: 1,
                        slideWidth: 460,
                    },
                    settings3 = {
                        maxSlides: 2,
                        slideWidth: 460,
                    },
                    common = {
                        minSlides: 1,
                        moveSlides: 1,
                        slideMargin: 20,
                        auto: false,
                        pager: false,
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        useCSS:false
                    },
                    winW = $window.width();
                if (winW < 550) {
                    setting = $.extend(settings1, common);
                }
                if (winW >= 550 && winW < 990) {
                    setting = $.extend(settings2, common);
                }
                if (winW >= 990) {
                    setting = $.extend(settings3, common);
                }
                return setting;
            }
        $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

        $window.on('resize', function () {
            setTimeout(recalcSliderSettings, 500);
        });

        function recalcSliderSettings() {
            $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }
    }
    if ($('.js-video-slider').length) { initVideoSlider() }

    //
    // Фиксим подергивание хидера при открытии бутстраповского модального окна
    //---------------------------------------------------------------------------------------
    var fixBootstrapModal = (function () {
        var $header = $('.header__inner');
        $body.on('show.bs.modal', function () {
            if (this.clientHeight <= window.innerHeight) {
                return;
            }
            // Get scrollbar width
            var scrollbarWidth = getScrollBarWidth()
            if (scrollbarWidth) {
                $header.css('margin-right', scrollbarWidth);
            }
        })
    .on('hide.bs.modal', function () {
        $header.css('margin-right', 0);
    });

        function getScrollBarWidth() {
            var inner = document.createElement('p');
            inner.style.width = "100%";
            inner.style.height = "200px";

            var outer = document.createElement('div');
            outer.style.position = "absolute";
            outer.style.top = "0px";
            outer.style.left = "0px";
            outer.style.visibility = "hidden";
            outer.style.width = "200px";
            outer.style.height = "150px";
            outer.style.overflow = "hidden";
            outer.appendChild(inner);

            document.body.appendChild(outer);
            var w1 = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var w2 = inner.offsetWidth;
            if (w1 == w2) w2 = outer.clientWidth;

            document.body.removeChild(outer);

            return (w1 - w2);
        };
    })();

    //
    // Видео в модальном окне
    //---------------------------------------------------------------------------------------
    function openVideoModal() {
        $('.b-item').on('click', '.js-video', function (e) {
            e.preventDefault();
            var link = $(this).attr('href'),
                title = $(this).parent().find('.b-item__title').text();
                id = getYoutubeID(link),
                $video = $('#video');//айди модального окна

            if (id) {
                $video.find('iframe').attr('src', 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0;autoplay=1');
                $video.find('.g-title').text(title);//передали в окно название видео
                $video.modal();//открыли окно
            }

            $video.on('hide.bs.modal', function (e) {//при закрытии окна - прибъем видео
                $video.find('iframe').attr('src', '');
            });

            function getYoutubeID(url) {//парсим youtube-ссылку, возвращаем id видео
                var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
                var match = url.match(regExp),
                    urllink;
                if (match && match[1].length == 11) {
                    urllink = match[1];
                } else {
                    urllink = false;
                }
                return urllink;
            }
        });
    }
    if ($('.js-video').length) { openVideoModal() }

    //
    // Слайдер логотипов партнеров
    //---------------------------------------------------------------------------------------
    function initLogoSlider() {
        var $slider = $('.js-logo-slider'),
            getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
                var setting,
                    settings1 = {
                        maxSlides: 2,
                    },
                    settings2 = {
                        maxSlides: 3,
                    },
                    settings3 = {
                        maxSlides: 4,
                    },
                    settings4 = {
                        maxSlides: 5,
                    },
                    settings5 = {
                        maxSlides: 6,
                    },
                    common = {
                        minSlides: 1,
                        moveSlides: 1,
                        slideWidth: 140,
                        slideMargin: 20,
                        pager: false,
                        controls: false,
                        ticker: true,
                        speed: 60000
                    },
                    winW = $window.width();

                if (winW < 400) {
                    setting = $.extend(settings1, common);
                }
                if (winW >= 400 && winW < 550) {
                    setting = $.extend(settings2, common);
                }
                if (winW >= 550 && winW < 800) {
                    setting = $.extend(settings3, common);
                }
                if (winW >= 800 && winW < 990) {
                    setting = $.extend(settings4, common);
                }
                if (winW >= 990) {
                    setting = $.extend(settings5, common);
                }
                return setting;
            }
        $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

        $window.on('resize', function () {
            setTimeout(recalcSliderSettings, 500);
        });

        function recalcSliderSettings() {
            $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }

    }
    if ($('.js-logo-slider').length) { initLogoSlider() }

    //
    // SEO блок - раскроем по клику на ссылку "читать далее"
    //---------------------------------------------------------------------------------------
    $('.js-seo').one('click', '.js-seo-link', function (e) {
        e.preventDefault();
        $('.js-seo-target').slideDown();
    });
    

    //
    // Подключаем Zoom
    //---------------------------------------------------------------------------------------
    function initZoom() {
        var $zoom = $('.js-zoom'),
            target = $zoom.attr('href');
        $zoom.css({ 'cursor': 'crosshair', 'display': 'inline-block' }).find('img').css('display', 'block');
        $zoom.zoom({
            url: target,
            callback: function () {
                $zoom.on('click', function (e) {
                    e.preventDefault();
                });
            }
        });
    };
    if ($('.js-zoom').length) { initZoom(); }


    //
    // Стилизуем загрузчики файлов
    //---------------------------------------------------------------------------------------
    (function () {
        $('.js-upload-img').filestyle({
            buttonText: 'Файл картинки',
            iconName: 'glyphicon glyphicon-picture',
            buttonBefore: true
        });

        $('.js-upload-text').filestyle({
            buttonText: 'Текстовый файл',
            iconName: 'glyphicon glyphicon-paperclip',
            buttonBefore: false
        });

        $('.icon-span-filestyle').removeClass('icon-span-filestyle').addClass('span-filestyle');//фиксим фонтелло-баг
    })();

    //
    // Поиск в каталоге магазина
    //---------------------------------------------------------------------------------------
    $('.js-search').autoComplete({
        minChars: 2,
        source: function (term, suggest) {
            term = term.toLowerCase();
            var choices = searchComplete; //берем массив значений из html-странички
            var matches = [];
            for (i = 0; i < choices.length; i++)
                if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
            suggest(matches);
        }
    });
});
