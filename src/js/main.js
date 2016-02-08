// Application Scripts:

// Десктоп меню - покажем/спрячем панель субменю
// Мобильное меню
// Кнопка скролла страницы
// Главный слайдер
// Слайдер товаров

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
        var $scroller = $('<div class="scroll-up-btn"><i class="icon-up-open-big"></i></div>');
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
                        hideControlOnEnd: true
                    },
                    winW = $window.width();
                if (winW < 500) {
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
    if($('.js-product-slider').length){initProductSlider()}
    
});
