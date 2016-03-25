// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * bxSlider v4.2.5
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function (a) { var b = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function () { return !0 }, onSlideBefore: function () { return !0 }, onSlideAfter: function () { return !0 }, onSlideNext: function () { return !0 }, onSlidePrev: function () { return !0 }, onSliderResize: function () { return !0 } }; a.fn.bxSlider = function (c) { if (0 === this.length) return this; if (this.length > 1) return this.each(function () { a(this).bxSlider(c) }), this; var d = {}, e = this, f = a(window).width(), g = a(window).height(); if (!a(e).data("bxSlider")) { var h = function () { a(e).data("bxSlider") || (d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = { index: d.settings.startSlide }, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1 ? !0 : !1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function () { for (var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], c = 0; c < b.length; c++) if (void 0 !== a.style[b[c]]) return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0; return !1 }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function () { a(this).data("origStyle", a(this).attr("style")) }), j()) }, j = function () { var b = d.children.eq(d.settings.startSlide); e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({ width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto", position: "relative" }), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), d.viewport.parent().css({ maxWidth: n() }), d.settings.pager || d.settings.controls || d.viewport.parent().css({ margin: "0 auto 0px" }), d.children.css({ "float": "horizontal" === d.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), d.children.css("width", o()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({ position: "absolute", zIndex: 0, display: "none" }), d.children.eq(d.settings.startSlide).css({ zIndex: d.settings.slideZIndex, display: "block" })), d.controls.el = a('<div class="bx-controls" />'), d.settings.captions && y(), d.active.last = d.settings.startSlide === q() - 1, d.settings.video && e.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && x(), d.settings.pager && v(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), k(b, l) }, k = function (b, c) { var d = b.find('img:not([src=""]), iframe').length, e = 0; return 0 === d ? void c() : void b.find('img:not([src=""]), iframe').each(function () { a(this).one("load error", function () { ++e === d && c() }).each(function () { this.complete && a(this).load() }) }) }, l = function () { if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) { var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides, c = d.children.slice(0, b).clone(!0).addClass("bx-clone"), f = d.children.slice(-b).clone(!0).addClass("bx-clone"); d.settings.ariaHidden && (c.attr("aria-hidden", !0), f.attr("aria-hidden", !0)), e.append(c).prepend(f) } d.loader.remove(), s(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(m()), e.redrawSlider(), d.settings.onSliderLoad.call(e, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", S), d.settings.auto && d.settings.autoStart && (q() > 1 || d.settings.autoSlideForOnePage) && I(), d.settings.ticker && J(), d.settings.pager && E(d.settings.startSlide), d.settings.controls && H(), d.settings.touchEnabled && !d.settings.ticker && N(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(M) }, m = function () { var b = 0, c = a(); if ("vertical" === d.settings.mode || d.settings.adaptiveHeight) if (d.carousel) { var e = 1 === d.settings.moveSlides ? d.active.index : d.active.index * r(); for (c = d.children.eq(e), i = 1; i <= d.settings.maxSlides - 1; i++) c = e + i >= d.children.length ? c.add(d.children.eq(i - 1)) : c.add(d.children.eq(e + i)) } else c = d.children.eq(d.active.index); else c = d.children; return "vertical" === d.settings.mode ? (c.each(function (c) { b += a(this).outerHeight() }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function () { return a(this).outerHeight(!1) }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b }, n = function () { var a = "100%"; return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a }, o = function () { var a = d.settings.slideWidth, b = d.viewport.width(); if (0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode) a = b; else if (d.settings.maxSlides > 1 && "horizontal" === d.settings.mode) { if (b > d.maxThreshold) return a; b < d.minThreshold ? a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (a = Math.floor((b + d.settings.slideMargin) / Math.ceil((b + d.settings.slideMargin) / (a + d.settings.slideMargin)) - d.settings.slideMargin)) } return a }, p = function () { var a = 1, b = null; return "horizontal" === d.settings.mode && d.settings.slideWidth > 0 ? d.viewport.width() < d.minThreshold ? a = d.settings.minSlides : d.viewport.width() > d.maxThreshold ? a = d.settings.maxSlides : (b = d.children.first().width() + d.settings.slideMargin, a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)) : "vertical" === d.settings.mode && (a = d.settings.minSlides), a }, q = function () { var a = 0, b = 0, c = 0; if (d.settings.moveSlides > 0) if (d.settings.infiniteLoop) a = Math.ceil(d.children.length / r()); else for (; b < d.children.length;)++a, b = c + p(), c += d.settings.moveSlides <= p() ? d.settings.moveSlides : p(); else a = Math.ceil(d.children.length / p()); return a }, r = function () { return d.settings.moveSlides > 0 && d.settings.moveSlides <= p() ? d.settings.moveSlides : p() }, s = function () { var a, b, c; d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (b = d.children.last(), a = b.position(), t(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (c = d.children.length - d.settings.minSlides, a = d.children.eq(c).position(), t(-a.top, "reset", 0)) : (a = d.children.eq(d.active.index * r()).position(), d.active.index === q() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0))) }, t = function (b, c, f, g) { var h, i; d.usingCSS ? (i = "vertical" === d.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", e.css("-" + d.cssPrefix + "-transition-duration", f / 1e3 + "s"), "slide" === c ? (e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F()) }) : F()) : "reset" === c ? e.css(d.animProp, i) : "ticker" === c && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), t(g.resetValue, "reset", 0), K()) }) : (t(g.resetValue, "reset", 0), K()))) : (h = {}, h[d.animProp] = b, "slide" === c ? e.animate(h, f, d.settings.easing, function () { F() }) : "reset" === c ? e.css(d.animProp, b) : "ticker" === c && e.animate(h, f, "linear", function () { t(g.resetValue, "reset", 0), K() })) }, u = function () { for (var b = "", c = "", e = q(), f = 0; e > f; f++) c = "", d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (c = d.settings.buildPager(f), d.pagerEl.addClass("bx-custom-pager")) : (c = f + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + c + "</a></div>"; d.pagerEl.html(b) }, v = function () { d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), u()), d.pagerEl.on("click touchend", "a", D) }, w = function () { d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", z), d.controls.prev.bind("click touchend", A), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl)) }, x = function () { d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", B), d.controls.autoEl.on("click", ".bx-stop", C), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), G(d.settings.autoStart ? "stop" : "start") }, y = function () { d.children.each(function (b) { var c = a(this).find("img:first").attr("title"); void 0 !== c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>") }) }, z = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToNextSlide()) }, A = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToPrevSlide()) }, B = function (a) { e.startAuto(), a.preventDefault() }, C = function (a) { e.stopAuto(), a.preventDefault() }, D = function (b) { var c, f; b.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), c = a(b.currentTarget), void 0 !== c.attr("data-slide-index") && (f = parseInt(c.attr("data-slide-index")), f !== d.active.index && e.goToSlide(f))) }, E = function (b) { var c = d.children.length; return "short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function (c, d) { a(d).find("a").eq(b).addClass("active") })) }, F = function () { if (d.settings.infiniteLoop) { var a = ""; 0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === q() - 1 && d.carousel ? a = d.children.eq((q() - 1) * r()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0)) } d.working = !1, d.settings.onSlideAfter.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) }, G = function (a) { d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active")) }, H = function () { 1 === q() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === q() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled"))) }, I = function () { if (d.settings.autoDelay > 0) { setTimeout(e.startAuto, d.settings.autoDelay) } else e.startAuto(), a(window).focus(function () { e.startAuto() }).blur(function () { e.stopAuto() }); d.settings.autoHover && e.hover(function () { d.interval && (e.stopAuto(!0), d.autoPaused = !0) }, function () { d.autoPaused && (e.startAuto(!0), d.autoPaused = null) }) }, J = function () { var b, c, f, g, h, i, j, k, l = 0; "next" === d.settings.autoDirection ? e.append(d.children.clone().addClass("bx-clone")) : (e.prepend(d.children.clone().addClass("bx-clone")), b = d.children.first().position(), l = "horizontal" === d.settings.mode ? -b.left : -b.top), t(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (g = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function () { c = e.css("-" + d.cssPrefix + "-transform"), f = parseFloat(c.split(",")[g]), t(f, "reset", 0) }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(f))), K(j) })) : d.viewport.hover(function () { e.stop() }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(e.css(i)))), K(j) })), K() }, K = function (a) { var b, c, f, g = a ? a : d.settings.speed, h = { left: 0, top: 0 }, i = { left: 0, top: 0 }; "next" === d.settings.autoDirection ? h = e.find(".bx-clone").first().position() : i = d.children.first().position(), b = "horizontal" === d.settings.mode ? -h.left : -h.top, c = "horizontal" === d.settings.mode ? -i.left : -i.top, f = { resetValue: c }, t(b, "ticker", g, f) }, L = function (b) { var c = a(window), d = { top: c.scrollTop(), left: c.scrollLeft() }, e = b.offset(); return d.right = d.left + c.width(), d.bottom = d.top + c.height(), e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom) }, M = function (a) { var b = document.activeElement.tagName.toLowerCase(), c = "input|textarea", d = new RegExp(b, ["i"]), f = d.exec(c); if (null == f && L(e)) { if (39 === a.keyCode) return z(a), !1; if (37 === a.keyCode) return A(a), !1 } }, N = function () { d.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, d.viewport.bind("touchstart MSPointerDown pointerdown", O), d.viewport.on("click", ".bxslider a", function (a) { d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled")) }) }, O = function (a) { if (d.controls.el.addClass("disabled"), d.working) a.preventDefault(), d.controls.el.removeClass("disabled"); else { d.touch.originalPos = e.position(); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b]; d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", Q), d.viewport.bind("touchend MSPointerUp pointerup", R), d.viewport.bind("MSPointerCancel pointercancel", P) } }, P = function (a) { t(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", P), d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, Q = function (a) { var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], e = Math.abs(c[0].pageX - d.touch.start.x), f = Math.abs(c[0].pageY - d.touch.start.y), g = 0, h = 0; 3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && ("horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), t(g, "reset", 0)) }, R = function (a) { d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.controls.el.removeClass("disabled"); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], f = 0, g = 0; d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && 0 > g) ? t(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (0 > g ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : t(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, S = function (b) { if (d.initialized) if (d.working) window.setTimeout(S, 10); else { var c = a(window).width(), h = a(window).height(); (f !== c || g !== h) && (f = c, g = h, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index)) } }, T = function (a) { var b = p(); d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(a, a + b).attr("aria-hidden", "false")) }, U = function (a) { return 0 > a ? d.settings.infiniteLoop ? q() - 1 : d.active.index : a >= q() ? d.settings.infiniteLoop ? 0 : d.active.index : a }; return e.goToSlide = function (b, c) { var f, g, h, i, j = !0, k = 0, l = { left: 0, top: 0 }, n = null; if (d.oldIndex = d.active.index, d.active.index = U(b), !d.working && d.active.index !== d.oldIndex) { if (d.working = !0, j = d.settings.onSlideBefore.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof j && !j) return d.active.index = d.oldIndex, void (d.working = !1); "next" === c ? d.settings.onSlideNext.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1) : "prev" === c && (d.settings.onSlidePrev.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1)), d.active.last = d.active.index >= q() - 1, (d.settings.pager || d.settings.pagerCustom) && E(d.active.index), d.settings.controls && H(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({ zIndex: 0 }), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function () { a(this).css("zIndex", d.settings.slideZIndex), F() })) : (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (n = d.children.eq(d.children.length - 1), l = n.position(), k = d.viewport.width() - n.outerWidth()) : (f = d.children.length - d.settings.minSlides, l = d.children.eq(f).position()) : d.carousel && d.active.last && "prev" === c ? (g = 1 === d.settings.moveSlides ? d.settings.maxSlides - r() : (q() - 1) * r() - (d.children.length - d.settings.maxSlides), n = e.children(".bx-clone").eq(g), l = n.position()) : "next" === c && 0 === d.active.index ? (l = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : b >= 0 && (i = b * parseInt(r()), l = d.children.eq(i).position()), "undefined" != typeof l ? (h = "horizontal" === d.settings.mode ? -(l.left - k) : -l.top, t(h, "slide", d.settings.speed)) : d.working = !1), d.settings.ariaHidden && T(d.active.index * r()) } }, e.goToNextSlide = function () { if (d.settings.infiniteLoop || !d.active.last) { var a = parseInt(d.active.index) + 1; e.goToSlide(a, "next") } }, e.goToPrevSlide = function () { if (d.settings.infiniteLoop || 0 !== d.active.index) { var a = parseInt(d.active.index) - 1; e.goToSlide(a, "prev") } }, e.startAuto = function (a) { d.interval || (d.interval = setInterval(function () { "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide() }, d.settings.pause), d.settings.autoControls && a !== !0 && G("stop")) }, e.stopAuto = function (a) { d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && G("start")) }, e.getCurrentSlide = function () { return d.active.index }, e.getCurrentSlideElement = function () { return d.children.eq(d.active.index) }, e.getSlideElement = function (a) { return d.children.eq(a) }, e.getSlideCount = function () { return d.children.length }, e.isWorking = function () { return d.working }, e.redrawSlider = function () { d.children.add(e.find(".bx-clone")).outerWidth(o()), d.viewport.css("height", m()), d.settings.ticker || s(), d.active.last && (d.active.index = q() - 1), d.active.index >= q() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (u(), E(d.active.index)), d.settings.ariaHidden && T(d.active.index * r()) }, e.destroySlider = function () { d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function () { void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style") }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", S), d.settings.keyboardEnabled && a(document).unbind("keydown", M), a(this).removeData("bxSlider")) }, e.reloadSlider = function (b) { void 0 !== b && (c = b), e.destroySlider(), h(), a(e).data("bxSlider", this) }, h(), a(e).data("bxSlider", this), this } } }(jQuery);


/*
	Zoom 1.7.14
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function ($) { var defaults = { url: false, callback: false, target: false, duration: 120, on: "mouseover", touch: true, onZoomIn: false, onZoomOut: false, magnify: 1 }; $.zoom = function (target, source, img, magnify) { var targetHeight, targetWidth, sourceHeight, sourceWidth, xRatio, yRatio, offset, $target = $(target), position = $target.css("position"), $source = $(source); $target.css("position", /(absolute|fixed)/.test(position) ? position : "relative"); $target.css("overflow", "hidden"); img.style.width = img.style.height = ""; $(img).addClass("zoomImg").css({ position: "absolute", top: 0, left: 0, opacity: 0, width: img.width * magnify, height: img.height * magnify, border: "none", maxWidth: "none", maxHeight: "none" }).appendTo(target); return { init: function () { targetWidth = $target.outerWidth(); targetHeight = $target.outerHeight(); if (source === $target[0]) { sourceWidth = targetWidth; sourceHeight = targetHeight } else { sourceWidth = $source.outerWidth(); sourceHeight = $source.outerHeight() } xRatio = (img.width - targetWidth) / sourceWidth; yRatio = (img.height - targetHeight) / sourceHeight; offset = $source.offset() }, move: function (e) { var left = e.pageX - offset.left, top = e.pageY - offset.top; top = Math.max(Math.min(top, sourceHeight), 0); left = Math.max(Math.min(left, sourceWidth), 0); img.style.left = left * -xRatio + "px"; img.style.top = top * -yRatio + "px" } } }; $.fn.zoom = function (options) { return this.each(function () { var settings = $.extend({}, defaults, options || {}), target = settings.target || this, source = this, $source = $(source), $target = $(target), img = document.createElement("img"), $img = $(img), mousemove = "mousemove.zoom", clicked = false, touched = false, $urlElement; if (!settings.url) { $urlElement = $source.find("img"); if ($urlElement[0]) { settings.url = $urlElement.data("src") || $urlElement.attr("src") } if (!settings.url) { return } } (function () { var position = $target.css("position"); var overflow = $target.css("overflow"); $source.one("zoom.destroy", function () { $source.off(".zoom"); $target.css("position", position); $target.css("overflow", overflow); $img.remove() }) })(); img.onload = function () { var zoom = $.zoom(target, source, img, settings.magnify); function start(e) { zoom.init(); zoom.move(e); $img.stop().fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false) } function stop() { $img.stop().fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false) } if (settings.on === "grab") { $source.on("mousedown.zoom", function (e) { if (e.which === 1) { $(document).one("mouseup.zoom", function () { stop(); $(document).off(mousemove, zoom.move) }); start(e); $(document).on(mousemove, zoom.move); e.preventDefault() } }) } else if (settings.on === "click") { $source.on("click.zoom", function (e) { if (clicked) { return } else { clicked = true; start(e); $(document).on(mousemove, zoom.move); $(document).one("click.zoom", function () { stop(); clicked = false; $(document).off(mousemove, zoom.move) }); return false } }) } else if (settings.on === "toggle") { $source.on("click.zoom", function (e) { if (clicked) { stop() } else { start(e) } clicked = !clicked }) } else if (settings.on === "mouseover") { zoom.init(); $source.on("mouseenter.zoom", start).on("mouseleave.zoom", stop).on(mousemove, zoom.move) } if (settings.touch) { $source.on("touchstart.zoom", function (e) { e.preventDefault(); if (touched) { touched = false; stop() } else { touched = true; start(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]) } }).on("touchmove.zoom", function (e) { e.preventDefault(); zoom.move(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]) }) } if ($.isFunction(settings.callback)) { settings.callback.call(img) } }; img.src = settings.url }) }; $.fn.zoom.defaults = defaults })(window.jQuery);


/*Bootstrap Filestyle https://github.com/markusslima/bootstrap-filestyle*/
(function ($) { var nextId = 0; var Filestyle = function (element, options) { this.options = options; this.$elementFilestyle = []; this.$element = $(element) }; Filestyle.prototype = { clear: function () { this.$element.val(""); this.$elementFilestyle.find(":text").val(""); this.$elementFilestyle.find(".badge").remove() }, destroy: function () { this.$element.removeAttr("style").removeData("filestyle"); this.$elementFilestyle.remove() }, disabled: function (value) { if (value === true) { if (!this.options.disabled) { this.$element.attr("disabled", "true"); this.$elementFilestyle.find("label").attr("disabled", "true"); this.options.disabled = true } } else { if (value === false) { if (this.options.disabled) { this.$element.removeAttr("disabled"); this.$elementFilestyle.find("label").removeAttr("disabled"); this.options.disabled = false } } else { return this.options.disabled } } }, buttonBefore: function (value) { if (value === true) { if (!this.options.buttonBefore) { this.options.buttonBefore = true; if (this.options.input) { this.$elementFilestyle.remove(); this.constructor(); this.pushNameFiles() } } } else { if (value === false) { if (this.options.buttonBefore) { this.options.buttonBefore = false; if (this.options.input) { this.$elementFilestyle.remove(); this.constructor(); this.pushNameFiles() } } } else { return this.options.buttonBefore } } }, icon: function (value) { if (value === true) { if (!this.options.icon) { this.options.icon = true; this.$elementFilestyle.find("label").prepend(this.htmlIcon()) } } else { if (value === false) { if (this.options.icon) { this.options.icon = false; this.$elementFilestyle.find(".icon-span-filestyle").remove() } } else { return this.options.icon } } }, input: function (value) { if (value === true) { if (!this.options.input) { this.options.input = true; if (this.options.buttonBefore) { this.$elementFilestyle.append(this.htmlInput()) } else { this.$elementFilestyle.prepend(this.htmlInput()) } this.$elementFilestyle.find(".badge").remove(); this.pushNameFiles(); this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn") } } else { if (value === false) { if (this.options.input) { this.options.input = false; this.$elementFilestyle.find(":text").remove(); var files = this.pushNameFiles(); if (files.length > 0 && this.options.badge) { this.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>") } this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn") } } else { return this.options.input } } }, size: function (value) { if (value !== undefined) { var btn = this.$elementFilestyle.find("label"), input = this.$elementFilestyle.find("input"); btn.removeClass("btn-lg btn-sm"); input.removeClass("input-lg input-sm"); if (value != "nr") { btn.addClass("btn-" + value); input.addClass("input-" + value) } } else { return this.options.size } }, placeholder: function (value) { if (value !== undefined) { this.options.placeholder = value; this.$elementFilestyle.find("input").attr("placeholder", value) } else { return this.options.placeholder } }, buttonText: function (value) { if (value !== undefined) { this.options.buttonText = value; this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText) } else { return this.options.buttonText } }, buttonName: function (value) { if (value !== undefined) { this.options.buttonName = value; this.$elementFilestyle.find("label").attr({ "class": "btn " + this.options.buttonName }) } else { return this.options.buttonName } }, iconName: function (value) { if (value !== undefined) { this.$elementFilestyle.find(".icon-span-filestyle").attr({ "class": "icon-span-filestyle " + this.options.iconName }) } else { return this.options.iconName } }, htmlIcon: function () { if (this.options.icon) { return '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ' } else { return "" } }, htmlInput: function () { if (this.options.input) { return '<input type="text" class="form-control ' + (this.options.size == "nr" ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ' } else { return "" } }, pushNameFiles: function () { var content = "", files = []; if (this.$element[0].files === undefined) { files[0] = { name: this.$element[0] && this.$element[0].value } } else { files = this.$element[0].files } for (var i = 0; i < files.length; i++) { content += files[i].name.split("\\").pop() + ", " } if (content !== "") { this.$elementFilestyle.find(":text").val(content.replace(/\, $/g, "")) } else { this.$elementFilestyle.find(":text").val("") } return files }, constructor: function () { var _self = this, html = "", id = _self.$element.attr("id"), files = [], btn = "", $label; if (id === "" || !id) { id = "filestyle-" + nextId; _self.$element.attr({ id: id }); nextId++ } btn = '<span class="group-span-filestyle ' + (_self.options.input ? "input-group-btn" : "") + '"><label for="' + id + '" class="btn ' + _self.options.buttonName + " " + (_self.options.size == "nr" ? "" : "btn-" + _self.options.size) + '" ' + (_self.options.disabled ? 'disabled="true"' : "") + ">" + _self.htmlIcon() + '<span class="buttonText">' + _self.options.buttonText + "</span></label></span>"; html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn; _self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + html + "</div>"); _self.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (e) { if (e.keyCode === 13 || e.charCode === 32) { _self.$elementFilestyle.find("label").click(); return false } }); _self.$element.css({ position: "absolute", clip: "rect(0px 0px 0px 0px)" }).attr("tabindex", "-1").after(_self.$elementFilestyle); if (_self.options.disabled) { _self.$element.attr("disabled", "true") } _self.$element.change(function () { var files = _self.pushNameFiles(); if (_self.options.input == false && _self.options.badge) { if (_self.$elementFilestyle.find(".badge").length == 0) { _self.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>") } else { if (files.length == 0) { _self.$elementFilestyle.find(".badge").remove() } else { _self.$elementFilestyle.find(".badge").html(files.length) } } } else { _self.$elementFilestyle.find(".badge").remove() } }); if (window.navigator.userAgent.search(/firefox/i) > -1) { _self.$elementFilestyle.find("label").click(function () { _self.$element.click(); return false }) } } }; var old = $.fn.filestyle; $.fn.filestyle = function (option, value) { var get = "", element = this.each(function () { if ($(this).attr("type") === "file") { var $this = $(this), data = $this.data("filestyle"), options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === "object" && option); if (!data) { $this.data("filestyle", (data = new Filestyle(this, options))); data.constructor() } if (typeof option === "string") { get = data[option](value) } } }); if (typeof get !== undefined) { return get } else { return element } }; $.fn.filestyle.defaults = { buttonText: "Choose file", iconName: "glyphicon glyphicon-folder-open", buttonName: "btn-default", size: "nr", input: true, badge: true, icon: true, buttonBefore: false, disabled: false, placeholder: "" }; $.fn.filestyle.noConflict = function () { $.fn.filestyle = old; return this }; $(function () { $(".filestyle").each(function () { var $this = $(this), options = { input: $this.attr("data-input") === "false" ? false : true, icon: $this.attr("data-icon") === "false" ? false : true, buttonBefore: $this.attr("data-buttonBefore") === "true" ? true : false, disabled: $this.attr("data-disabled") === "true" ? true : false, size: $this.attr("data-size"), buttonText: $this.attr("data-buttonText"), buttonName: $this.attr("data-buttonName"), iconName: $this.attr("data-iconName"), badge: $this.attr("data-badge") === "false" ? false : true, placeholder: $this.attr("data-placeholder") }; $this.filestyle(options) }) }) })(window.jQuery);


// jQuery autoComplete v1.0.7
// https://github.com/Pixabay/jQuery-autoComplete
!function (e) { e.fn.autoComplete = function (t) { var o = e.extend({}, e.fn.autoComplete.defaults, t); return "string" == typeof t ? (this.each(function () { var o = e(this); "destroy" == t && (e(window).off("resize.autocomplete", o.updateSC), o.off("blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete"), o.data("autocomplete") ? o.attr("autocomplete", o.data("autocomplete")) : o.removeAttr("autocomplete"), e(o.data("sc")).remove(), o.removeData("sc").removeData("autocomplete")) }), this) : this.each(function () { function t(e) { var t = s.val(); if (s.cache[t] = e, e.length && t.length >= o.minChars) { for (var a = "", c = 0; c < e.length; c++) a += o.renderItem(e[c], t); s.sc.html(a), s.updateSC(0) } else s.sc.hide() } var s = e(this); s.sc = e('<div class="autocomplete-suggestions ' + o.menuClass + '"></div>'), s.data("sc", s.sc).data("autocomplete", s.attr("autocomplete")), s.attr("autocomplete", "off"), s.cache = {}, s.last_val = "", s.updateSC = function (t, o) { if (s.sc.css({ top: s.offset().top + s.outerHeight(), left: s.offset().left, width: s.outerWidth() }), !t && (s.sc.show(), s.sc.maxHeight || (s.sc.maxHeight = parseInt(s.sc.css("max-height"))), s.sc.suggestionHeight || (s.sc.suggestionHeight = e(".autocomplete-suggestion", s.sc).first().outerHeight()), s.sc.suggestionHeight)) if (o) { var a = s.sc.scrollTop(), c = o.offset().top - s.sc.offset().top; c + s.sc.suggestionHeight - s.sc.maxHeight > 0 ? s.sc.scrollTop(c + s.sc.suggestionHeight + a - s.sc.maxHeight) : 0 > c && s.sc.scrollTop(c + a) } else s.sc.scrollTop(0) }, e(window).on("resize.autocomplete", s.updateSC), s.sc.appendTo("body"), s.sc.on("mouseleave", ".autocomplete-suggestion", function () { e(".autocomplete-suggestion.selected").removeClass("selected") }), s.sc.on("mouseenter", ".autocomplete-suggestion", function () { e(".autocomplete-suggestion.selected").removeClass("selected"), e(this).addClass("selected") }), s.sc.on("mousedown", ".autocomplete-suggestion", function (t) { var a = e(this), c = a.data("val"); return (c || a.hasClass("autocomplete-suggestion")) && (s.val(c), o.onSelect(t, c, a), s.sc.hide()), !1 }), s.on("blur.autocomplete", function () { try { over_sb = e(".autocomplete-suggestions:hover").length } catch (t) { over_sb = 0 } over_sb ? s.is(":focus") || setTimeout(function () { s.focus() }, 20) : (s.last_val = s.val(), s.sc.hide(), setTimeout(function () { s.sc.hide() }, 350)) }), o.minChars || s.on("focus.autocomplete", function () { s.last_val = "\n", s.trigger("keyup.autocomplete") }), s.on("keydown.autocomplete", function (t) { if ((40 == t.which || 38 == t.which) && s.sc.html()) { var a, c = e(".autocomplete-suggestion.selected", s.sc); return c.length ? (a = 40 == t.which ? c.next(".autocomplete-suggestion") : c.prev(".autocomplete-suggestion"), a.length ? (c.removeClass("selected"), s.val(a.addClass("selected").data("val"))) : (c.removeClass("selected"), s.val(s.last_val), a = 0)) : (a = 40 == t.which ? e(".autocomplete-suggestion", s.sc).first() : e(".autocomplete-suggestion", s.sc).last(), s.val(a.addClass("selected").data("val"))), s.updateSC(0, a), !1 } if (27 == t.which) s.val(s.last_val).sc.hide(); else if (13 == t.which || 9 == t.which) { var c = e(".autocomplete-suggestion.selected", s.sc); c.length && s.sc.is(":visible") && (o.onSelect(t, c.data("val"), c), setTimeout(function () { s.sc.hide() }, 20)) } }), s.on("keyup.autocomplete", function (a) { if (!~e.inArray(a.which, [13, 27, 35, 36, 37, 38, 39, 40])) { var c = s.val(); if (c.length >= o.minChars) { if (c != s.last_val) { if (s.last_val = c, clearTimeout(s.timer), o.cache) { if (c in s.cache) return void t(s.cache[c]); for (var l = 1; l < c.length - o.minChars; l++) { var i = c.slice(0, c.length - l); if (i in s.cache && !s.cache[i].length) return void t([]) } } s.timer = setTimeout(function () { o.source(c, t) }, o.delay) } } else s.last_val = c, s.sc.hide() } }) }) }, e.fn.autoComplete.defaults = { source: 0, minChars: 3, delay: 150, cache: 1, menuClass: "", renderItem: function (e, t) { t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); var o = new RegExp("(" + t.split(" ").join("|") + ")", "gi"); return '<div class="autocomplete-suggestion" data-val="' + e + '">' + e.replace(o, "<b>$1</b>") + "</div>" }, onSelect: function (e, t, o) { } } }(jQuery);

/*! Selectric ϟ v1.9.5 (2016-02-26) - git.io/tjl9sQ - Copyright (c) 2016 Leonardo Santos - Dual licensed: MIT/GPL */
!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, o) { return void 0 === o && (o = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(o), o } : e(jQuery) }(function (e) { "use strict"; var t = "selectric", o = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel", i = ".sl", s = { onChange: function (t) { e(t).change() }, maxHeight: 300, keySearchTimeout: 500, arrowButtonMarkup: '<b class="button">&#x25be;</b>', disableOnMobile: !0, openOnHover: !1, hoverIntentTimeout: 500, expandToItemText: !1, responsive: !1, preventWindowScroll: !0, inheritOriginalWidth: !1, allowWrap: !0, customClass: { prefix: t, camelCase: !1, overwrite: !0 }, optionsItemBuilder: "{text}", labelBuilder: "{text}" }, n = { add: function (e, t, o) { this[e] || (this[e] = {}), this[e][t] = o }, remove: function (e, t) { delete this[e][t] } }, l = { replaceDiacritics: function (e) { for (var t = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), o = t.length; o--;) e = e.toLowerCase().replace(RegExp("[" + t[o] + "]", "g"), "aeiouncy".charAt(o)); return e }, format: function (e) { var t = arguments; return ("" + e).replace(/{(\d+|(\w+))}/g, function (e, o, i) { return i && t[1] ? t[1][i] : t[o] }) }, nextEnabledItem: function (e, t) { for (; e[t = (t + 1) % e.length].disabled;); return t }, previousEnabledItem: function (e, t) { for (; e[t = (t > 0 ? t : e.length) - 1].disabled;); return t }, toDash: function (e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }, triggerCallback: function (o, i) { var s = i.element, a = i.options["on" + o]; e.isFunction(a) && a.call(s, s, i), n[o] && e.each(n[o], function () { this.call(s, s, i) }), e(s).trigger(t + "-" + l.toDash(o), i) } }, a = e(document), r = e(window), c = function (n, c) { function d(t) { if (A.options = e.extend(!0, {}, s, A.options, t), A.classes = {}, A.element = n, l.triggerCallback("BeforeInit", A), A.options.disableOnMobile && R) return void (A.disableOnMobile = !0); C(!0); var i = A.options.customClass, a = o.split(" "), r = $.width(); e.each(a, function (e, t) { var o = i.prefix + "-" + t; A.classes[t.toLowerCase()] = i.camelCase ? o : l.toDash(o) }), x = e("<input/>", { "class": A.classes.input, readonly: R }), k = e("<div/>", { "class": A.classes.items, tabindex: -1 }), T = e("<div/>", { "class": A.classes.scroll }), y = e("<div/>", { "class": i.prefix, html: A.options.arrowButtonMarkup }), D = e('<p class="label"/>'), I = $.wrap("<div>").parent().append(y.prepend(D), k, x), q = { open: m, close: g, destroy: C, refresh: u, init: d }, $.on(q).wrap('<div class="' + A.classes.hideselect + '">'), e.extend(A, q), E = A.options.labelBuilder, A.options.inheritOriginalWidth && r > 0 && I.width(r), p() } function p() { A.items = []; var t = $.children(), o = "<ul>", s = $.find("option"), n = s.index(s.filter(":selected")), a = 0; B = S = ~n ? n : 0, (M = t.length) && (t.each(function () { function t() { var t = e(this), i = t.html(), s = t.prop("disabled"), n = A.options.optionsItemBuilder; A.items[a] = { element: t, value: t.val(), text: i, slug: l.replaceDiacritics(i), disabled: s }, o += l.format('<li data-index="{1}" class="{2}">{3}</li>', a, e.trim([a == B ? "selected" : "", a == M - 1 ? "last" : "", s ? "disabled" : ""].join(" ")), e.isFunction(n) ? n(A.items[a], t, a) : l.format(n, A.items[a])), a++ } var i = e(this); if (i.is("optgroup")) { var s = i.prop("disabled"), n = i.children(); o += l.format('<ul class="{1}"><li class="{2}">{3}</li>', e.trim([A.classes.group, s ? "disabled" : "", i.prop("class")].join(" ")), A.classes.grouplabel, i.prop("label")), s && n.prop("disabled", !0), n.each(t), o += "</ul>" } else t.call(i) }), k.append(T.html(o + "</ul>")), D.html(e.isFunction(E) ? E(A.items[B]) : l.format(E, A.items[B]))), y.add($).add(I).add(x).off(i), I.prop("class", [A.classes.wrapper, A.options.customClass.overwrite ? $.prop("class").replace(/\S+/g, A.options.customClass.prefix + "-$&") : $.prop("class"), A.options.responsive ? A.classes.responsive : ""].join(" ")), $.prop("disabled") ? (I.addClass(A.classes.disabled), x.prop("disabled", !0)) : (L = !0, I.removeClass(A.classes.disabled).on("mouseenter" + i + " mouseleave" + i, function (t) { e(this).toggleClass(A.classes.hover), A.options.openOnHover && (clearTimeout(A.closeTimer), "mouseleave" == t.type ? A.closeTimer = setTimeout(g, A.options.hoverIntentTimeout) : m()) }), y.on("click" + i, function (e) { F ? g() : m(e) }), x.prop({ tabindex: Y, disabled: !1 }).on("keypress" + i, f).on("keydown" + i, function (e) { f(e), clearTimeout(A.resetStr), A.resetStr = setTimeout(function () { x.val("") }, A.options.keySearchTimeout); var t = e.keyCode || e.which; if (t > 36 && 41 > t) { if (!A.options.allowWrap && (39 > t && 0 == S || t > 38 && S + 1 == A.items.length)) return; b(l[(39 > t ? "previous" : "next") + "EnabledItem"](A.items, S)) } }).on("focusin" + i, function (e) { x.one("blur", function () { x.blur() }), F || m(e) }).on("oninput" in x[0] ? "input" : "keyup", function () { x.val().length && e.each(A.items, function (e, t) { return RegExp("^" + x.val(), "i").test(t.slug) && !t.disabled ? (b(e), !1) : void 0 }) }), $.prop("tabindex", !1), O = e("li", k.removeAttr("style")).on({ mousedown: function (e) { e.preventDefault(), e.stopPropagation() }, click: function () { return b(e(this).data("index"), !0), !1 } }).filter("[data-index]")), l.triggerCallback("Init", A) } function u() { l.triggerCallback("Refresh", A), p() } function f(e) { var t = e.keyCode || e.which; 13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), b(S, !0)) } function h() { var e = k.closest(":visible").children(":hidden").addClass(A.classes.tempshow), t = A.options.maxHeight, o = k.outerWidth(), i = y.outerWidth() - (o - k.width()); !A.options.expandToItemText || i > o ? j = i : (k.css("overflow", "scroll"), I.width(9e4), j = k.width(), k.css("overflow", ""), I.width("")), k.width(j).height() > t && k.height(t), e.removeClass(A.classes.tempshow) } function m(o) { l.triggerCallback("BeforeOpen", A), o && (o.preventDefault(), o.stopPropagation()), L && (h(), e("." + A.classes.hideselect, "." + A.classes.open).children()[t]("close"), F = !0, H = k.outerHeight(), W = k.height(), I.addClass(A.classes.open), x.val("").is(":focus") || x.focus(), a.on("click" + i, g).on("scroll" + i, v), v(), A.options.preventWindowScroll && a.on("mousewheel" + i + " DOMMouseScroll" + i, "." + A.classes.scroll, function (t) { var o = t.originalEvent, i = e(this).scrollTop(), s = 0; "detail" in o && (s = -1 * o.detail), "wheelDelta" in o && (s = o.wheelDelta), "wheelDeltaY" in o && (s = o.wheelDeltaY), "deltaY" in o && (s = -1 * o.deltaY), (i == this.scrollHeight - W && 0 > s || 0 == i && s > 0) && t.preventDefault() }), w(S), l.triggerCallback("Open", A)) } function v() { I.toggleClass(A.classes.above, I.offset().top + I.outerHeight() + H > r.scrollTop() + r.height()) } function g() { if (l.triggerCallback("BeforeClose", A), B != S) { l.triggerCallback("BeforeChange", A); var t = A.items[S].text; $.prop("selectedIndex", B = S).data("value", t), D.html(e.isFunction(E) ? E(A.items[S]) : l.format(E, A.items[S])), l.triggerCallback("Change", A) } a.off(i), I.removeClass(A.classes.open), F = !1, l.triggerCallback("Close", A) } function b(e, t) { void 0 != e && (A.items[e].disabled || (O.removeClass("selected").eq(S = e).addClass("selected"), w(e), t && g())) } function w(e) { var t = O.eq(e).outerHeight(), o = O[e].offsetTop, i = T.scrollTop(), s = o + 2 * t; T.scrollTop(s > i + H ? s - H : i > o - t ? o - t : i) } function C(e) { L && (k.add(y).add(x).remove(), !e && $.removeData(t).removeData("value"), $.prop("tabindex", Y).off(i).off(q).unwrap().unwrap(), L = !1) } var x, k, T, y, D, I, O, S, B, H, W, j, M, q, E, A = this, $ = e(n), F = !1, L = !1, R = /android|ip(hone|od|ad)/i.test(navigator.userAgent), Y = $.prop("tabindex"); d(c) }; e.fn[t] = function (o) { return this.each(function () { var i = e.data(this, t); i && !i.disableOnMobile ? "" + o === o && i[o] ? i[o]() : i.init(o) : e.data(this, t, new c(this, o)) }) }, e.fn[t].hooks = n });

/*
 *  Bootstrap TouchSpin - v3.1.1
 *  A mobile and touch friendly input spinner component for Bootstrap 3.
 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function (a) { "use strict"; function b(a, b) { return a + ".touchspin_" + b } function c(c, d) { return a.map(c, function (a) { return b(a, d) }) } var d = 0; a.fn.TouchSpin = function (b) { if ("destroy" === b) return void this.each(function () { var b = a(this), d = b.data(); a(document).off(c(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], d.spinnerid).join(" ")) }); var e = { min: 0, max: 100, initval: "", replacementval: "", step: 1, decimals: 0, stepinterval: 100, forcestepdivisibility: "round", stepintervaldelay: 500, verticalbuttons: !1, verticalupclass: "glyphicon glyphicon-chevron-up", verticaldownclass: "glyphicon glyphicon-chevron-down", prefix: "", postfix: "", prefix_extraclass: "", postfix_extraclass: "", booster: !0, boostat: 10, maxboostedstep: !1, mousewheel: !0, buttondown_class: "btn btn-default", buttonup_class: "btn btn-default", buttondown_txt: "-", buttonup_txt: "+" }, f = { min: "min", max: "max", initval: "init-val", replacementval: "replacement-val", step: "step", decimals: "decimals", stepinterval: "step-interval", verticalbuttons: "vertical-buttons", verticalupclass: "vertical-up-class", verticaldownclass: "vertical-down-class", forcestepdivisibility: "force-step-divisibility", stepintervaldelay: "step-interval-delay", prefix: "prefix", postfix: "postfix", prefix_extraclass: "prefix-extra-class", postfix_extraclass: "postfix-extra-class", booster: "booster", boostat: "boostat", maxboostedstep: "max-boosted-step", mousewheel: "mouse-wheel", buttondown_class: "button-down-class", buttonup_class: "button-up-class", buttondown_txt: "button-down-txt", buttonup_txt: "button-up-txt" }; return this.each(function () { function g() { if (!J.data("alreadyinitialized")) { if (J.data("alreadyinitialized", !0), d += 1, J.data("spinnerid", d), !J.is("input")) return void console.log("Must be an input."); j(), h(), u(), m(), p(), q(), r(), s(), D.input.css("display", "block") } } function h() { "" !== B.initval && "" === J.val() && J.val(B.initval) } function i(a) { l(a), u(); var b = D.input.val(); "" !== b && (b = Number(D.input.val()), D.input.val(b.toFixed(B.decimals))) } function j() { B = a.extend({}, e, K, k(), b) } function k() { var b = {}; return a.each(f, function (a, c) { var d = "bts-" + c; J.is("[data-" + d + "]") && (b[a] = J.data(d)) }), b } function l(b) { B = a.extend({}, B, b) } function m() { var a = J.val(), b = J.parent(); "" !== a && (a = Number(a).toFixed(B.decimals)), J.data("initvalue", a).val(a), J.addClass("form-control"), b.hasClass("input-group") ? n(b) : o() } function n(b) { b.addClass("bootstrap-touchspin"); var c, d, e = J.prev(), f = J.next(), g = '<span class="input-group-addon bootstrap-touchspin-prefix">' + B.prefix + "</span>", h = '<span class="input-group-addon bootstrap-touchspin-postfix">' + B.postfix + "</span>"; e.hasClass("input-group-btn") ? (c = '<button class="' + B.buttondown_class + ' bootstrap-touchspin-down" type="button">' + B.buttondown_txt + "</button>", e.append(c)) : (c = '<span class="input-group-btn"><button class="' + B.buttondown_class + ' bootstrap-touchspin-down" type="button">' + B.buttondown_txt + "</button></span>", a(c).insertBefore(J)), f.hasClass("input-group-btn") ? (d = '<button class="' + B.buttonup_class + ' bootstrap-touchspin-up" type="button">' + B.buttonup_txt + "</button>", f.prepend(d)) : (d = '<span class="input-group-btn"><button class="' + B.buttonup_class + ' bootstrap-touchspin-up" type="button">' + B.buttonup_txt + "</button></span>", a(d).insertAfter(J)), a(g).insertBefore(J), a(h).insertAfter(J), C = b } function o() { var b; b = B.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + B.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + B.postfix + '</span><span class="input-group-btn-vertical"><button class="' + B.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + B.verticalupclass + '"></i></button><button class="' + B.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + B.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + B.buttondown_class + ' bootstrap-touchspin-down" type="button">' + B.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + B.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + B.postfix + '</span><span class="input-group-btn"><button class="' + B.buttonup_class + ' bootstrap-touchspin-up" type="button">' + B.buttonup_txt + "</button></span></div>", C = a(b).insertBefore(J), a(".bootstrap-touchspin-prefix", C).after(J), J.hasClass("input-sm") ? C.addClass("input-group-sm") : J.hasClass("input-lg") && C.addClass("input-group-lg") } function p() { D = { down: a(".bootstrap-touchspin-down", C), up: a(".bootstrap-touchspin-up", C), input: a("input", C), prefix: a(".bootstrap-touchspin-prefix", C).addClass(B.prefix_extraclass), postfix: a(".bootstrap-touchspin-postfix", C).addClass(B.postfix_extraclass) } } function q() { "" === B.prefix && D.prefix.hide(), "" === B.postfix && D.postfix.hide() } function r() { J.on("keydown", function (a) { var b = a.keyCode || a.which; 38 === b ? ("up" !== M && (w(), z()), a.preventDefault()) : 40 === b && ("down" !== M && (x(), y()), a.preventDefault()) }), J.on("keyup", function (a) { var b = a.keyCode || a.which; 38 === b ? A() : 40 === b && A() }), J.on("blur", function () { u() }), D.down.on("keydown", function (a) { var b = a.keyCode || a.which; (32 === b || 13 === b) && ("down" !== M && (x(), y()), a.preventDefault()) }), D.down.on("keyup", function (a) { var b = a.keyCode || a.which; (32 === b || 13 === b) && A() }), D.up.on("keydown", function (a) { var b = a.keyCode || a.which; (32 === b || 13 === b) && ("up" !== M && (w(), z()), a.preventDefault()) }), D.up.on("keyup", function (a) { var b = a.keyCode || a.which; (32 === b || 13 === b) && A() }), D.down.on("mousedown.touchspin", function (a) { D.down.off("touchstart.touchspin"), J.is(":disabled") || (x(), y(), a.preventDefault(), a.stopPropagation()) }), D.down.on("touchstart.touchspin", function (a) { D.down.off("mousedown.touchspin"), J.is(":disabled") || (x(), y(), a.preventDefault(), a.stopPropagation()) }), D.up.on("mousedown.touchspin", function (a) { D.up.off("touchstart.touchspin"), J.is(":disabled") || (w(), z(), a.preventDefault(), a.stopPropagation()) }), D.up.on("touchstart.touchspin", function (a) { D.up.off("mousedown.touchspin"), J.is(":disabled") || (w(), z(), a.preventDefault(), a.stopPropagation()) }), D.up.on("mouseout touchleave touchend touchcancel", function (a) { M && (a.stopPropagation(), A()) }), D.down.on("mouseout touchleave touchend touchcancel", function (a) { M && (a.stopPropagation(), A()) }), D.down.on("mousemove touchmove", function (a) { M && (a.stopPropagation(), a.preventDefault()) }), D.up.on("mousemove touchmove", function (a) { M && (a.stopPropagation(), a.preventDefault()) }), a(document).on(c(["mouseup", "touchend", "touchcancel"], d).join(" "), function (a) { M && (a.preventDefault(), A()) }), a(document).on(c(["mousemove", "touchmove", "scroll", "scrollstart"], d).join(" "), function (a) { M && (a.preventDefault(), A()) }), J.on("mousewheel DOMMouseScroll", function (a) { if (B.mousewheel && J.is(":focus")) { var b = a.originalEvent.wheelDelta || -a.originalEvent.deltaY || -a.originalEvent.detail; a.stopPropagation(), a.preventDefault(), 0 > b ? x() : w() } }) } function s() { J.on("touchspin.uponce", function () { A(), w() }), J.on("touchspin.downonce", function () { A(), x() }), J.on("touchspin.startupspin", function () { z() }), J.on("touchspin.startdownspin", function () { y() }), J.on("touchspin.stopspin", function () { A() }), J.on("touchspin.updatesettings", function (a, b) { i(b) }) } function t(a) { switch (B.forcestepdivisibility) { case "round": return (Math.round(a / B.step) * B.step).toFixed(B.decimals); case "floor": return (Math.floor(a / B.step) * B.step).toFixed(B.decimals); case "ceil": return (Math.ceil(a / B.step) * B.step).toFixed(B.decimals); default: return a } } function u() { var a, b, c; return a = J.val(), "" === a ? void ("" !== B.replacementval && (J.val(B.replacementval), J.trigger("change"))) : void (B.decimals > 0 && "." === a || (b = parseFloat(a), isNaN(b) && (b = "" !== B.replacementval ? B.replacementval : 0), c = b, b.toString() !== a && (c = b), b < B.min && (c = B.min), b > B.max && (c = B.max), c = t(c), Number(a).toString() !== c.toString() && (J.val(c), J.trigger("change")))) } function v() { if (B.booster) { var a = Math.pow(2, Math.floor(L / B.boostat)) * B.step; return B.maxboostedstep && a > B.maxboostedstep && (a = B.maxboostedstep, E = Math.round(E / a) * a), Math.max(B.step, a) } return B.step } function w() { u(), E = parseFloat(D.input.val()), isNaN(E) && (E = 0); var a = E, b = v(); E += b, E > B.max && (E = B.max, J.trigger("touchspin.on.max"), A()), D.input.val(Number(E).toFixed(B.decimals)), a !== E && J.trigger("change") } function x() { u(), E = parseFloat(D.input.val()), isNaN(E) && (E = 0); var a = E, b = v(); E -= b, E < B.min && (E = B.min, J.trigger("touchspin.on.min"), A()), D.input.val(E.toFixed(B.decimals)), a !== E && J.trigger("change") } function y() { A(), L = 0, M = "down", J.trigger("touchspin.on.startspin"), J.trigger("touchspin.on.startdownspin"), H = setTimeout(function () { F = setInterval(function () { L++, x() }, B.stepinterval) }, B.stepintervaldelay) } function z() { A(), L = 0, M = "up", J.trigger("touchspin.on.startspin"), J.trigger("touchspin.on.startupspin"), I = setTimeout(function () { G = setInterval(function () { L++, w() }, B.stepinterval) }, B.stepintervaldelay) } function A() { switch (clearTimeout(H), clearTimeout(I), clearInterval(F), clearInterval(G), M) { case "up": J.trigger("touchspin.on.stopupspin"), J.trigger("touchspin.on.stopspin"); break; case "down": J.trigger("touchspin.on.stopdownspin"), J.trigger("touchspin.on.stopspin") } L = 0, M = !1 } var B, C, D, E, F, G, H, I, J = a(this), K = J.data(), L = 0, M = !1; g() }) } }(jQuery);

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
// Стилизация Select
// Стилизация поля кол-ва товаров

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

    //
    // Стилизация Select
    //---------------------------------------------------------------------------------------
    function stylingSelect() {
        var $select = $('.js-select');
        $select.each(function () {
            $(this).selectric({
                disableOnMobile: false,
                //openOnHover: true,
                responsive: true
            });
        });
    }
    if ($('.js-select').length) { stylingSelect(); }


    //
    // Стилизация поля кол-ва товаров
    //---------------------------------------------------------------------------------------
    function initTouchSpin() {
        $('.js-stepper').TouchSpin({
            min: 1,
            max: 9999,
            step: 1,
        });

        $('.bootstrap-touchspin-down').html('<i class="icon-minus"><i>');
        $('.bootstrap-touchspin-up').html('<i class="icon-plus"><i>');
    }
    if ($('.js-stepper').length) { initTouchSpin();}
});
