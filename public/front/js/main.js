    /*----------------------------------------
                        Preloader
    ------------------------------------------*/
     $('.js-preloader').preloadinator({
         minTime: 2000,
         scroll: false

     });

    /*----------------------------------------
                        Tooltip
    ------------------------------------------*/

    $('[data-toggle="tooltip"]').tooltip();
    /* ----------------------------------------
           datepicker
    ------------------------------------------- */
    $("#datepicker-from").datepicker({
        autoclose: true,
        todayHighlight: true
    });
    $("#datepicker-to").datepicker({
        autoclose: true,
        todayHighlight: true
    });

    /*=====================================
            sort by filter
    ======================================*/
    $('.filter-sort-menu li').on('click', function () {
        var getValue = $(this).text();
        $('.sort-filter-btn').text(getValue);
    });
    /*----------------------------------------
          Scroll to top
  ----------------------------------------*/
    function BackToTop() {
        $('.scrolltotop').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.scrolltotop').fadeIn();
            } else {
                $('.scrolltotop').fadeOut();
            }
        });
        $(document).scroll(function () {
            var m = $(this).scrollTop();
            if (m > 400) {
                $('.chat-popup').fadeIn();
            } else {
                $('.chat-popup').fadeOut();
            }
        });
    }
    BackToTop();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".header-top-section").addClass("header-top-none");
        } else {
            $(".header-top-section").removeClass("header-top-none");
        }
    });
    

    /*-------------------------------------------------*/
    /*    scroll between sections
    /*-------------------------------------------------*/

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".list_menu",
        offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#list-menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.list-details-tab li, .hero_list li').on('click', (function () {
        $('li').removeClass("active");
        $(this).addClass("active");
    }));


    /* ----------------------------------------
          Hide Show Header on Scroll
    ------------------------------------------ */
    function HideShowHeader() {

        var didScroll;
        var lastScrollTop = 0;
        var delta = 50;
        var navbarHeight = 75;
        var navbarHideAfter = navbarHeight

        $(window).scroll(function (event) {
            didScroll = true;
        });

        if ($('.scroll-hide').length > 0) {

            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 100);
        }
        return false;

        function hasScrolled() {
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            if (st > lastScrollTop && st > navbarHideAfter) {
                if ($('.scroll-hide').length > 0) {
                    $('header').addClass('hide');
                }
            } else {
                if ($('.scroll-hide').length > 0) {
                    if (st + $(window).height() < $(document).height()) {
                        $('header').removeClass('hide');
                        $('.header.transparent').addClass('scroll');
                    }
                }

                if ($(window).scrollTop() < 300) {
                    $('.header.transparent').removeClass('scroll');
                }
            }

            lastScrollTop = st;
        }
    }
    HideShowHeader();

    /*------------------------------------------
          sticky single listing menu
    -------------------------------------------*/
    $(window).on('load resize', function () {
        var containerWidth = $(".container").width();
        $('.fixed_nav').css('width', containerWidth);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            $('.list_menu').addClass('sticky-header');
        } else {
            $('.list_menu').removeClass('sticky-header');
        }
    });

    /*------------------------------------------
          sticky sidebar
    -------------------------------------------*/

    $('#list-sidebar').stickySidebar({
        topSpacing: 150,
        bottomSpacing: 0
    });
    /* ----------------------------------------
          Counter animation
    ------------------------------------------*/
    $('.counter-text').appear(function () {
        var element = $(this);
        var timeSet = setTimeout(function () {
            if (element.hasClass('counter-text')) {
                element.find('.counter-value').countTo();
            }
        });
    });
    /*-------------------------------------------
            Count Down Timer
    ---------------------------------------------*/
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>mins</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>secs</p></span>'));
        });
    });

    /*--------------------------------------------
                       Video Player
     --------------------------------------------*/
    $(".player").mb_YTPlayer({
        containment: '#video-wrapper',
        mute: true,
        autoplay: true,
        showControls: false,
        quality: 'hd720'
    });


    $(document).ready(function() {
        "use strict";


        /*-------------------------------------
                Magnific Popup js
        --------------------------------------*/
        $('.popup-yt, .property-yt').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            preloader: true,
        });

        $('a.btn-gallery').on('click', function (event) {
            event.preventDefault();

            var gallery = $(this).attr('href');

            $(gallery).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            }).magnificPopup('open');
        });

        /* -------------------------------------
              Footer Accordion
        -------------------------------------- */
        $(".nav-folderized h2").on('click', (function () {
            $(this).parent(".nav").toggleClass("open");
            $('html, body').animate({
                scrollTop: $(this).offset().top - 170
            }, 1500);
        }));

        /* -------------------------------------
                Responsive menu
        -------------------------------------- */
        var siteMenuClone = function () {

            $('.js-clone-nav').each(function () {
                var $this = $(this);
                $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
            });

            setTimeout(function () {

                var counter = 0;
                $('.site-mobile-menu .has-children').each(function () {
                    var $this = $(this);

                    $this.prepend('<span class="arrow-collapse collapsed">');

                    $this.find('.arrow-collapse').attr({
                        'data-toggle': 'collapse',
                        'data-target': '#collapseItem' + counter,
                    });

                    $this.find('> ul').attr({
                        'class': 'collapse',
                        'id': 'collapseItem' + counter,
                    });

                    counter++;

                });

            }, 1000);

            $('body').on('click', '.js-menu-toggle', function (e) {
                var $this = $(this);
                e.preventDefault();

                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                    $this.removeClass('active');
                } else {
                    $('body').addClass('offcanvas-menu');
                    $this.addClass('active');
                }
            })

        };
        siteMenuClone();


        /* -------------------------------------
                 Category menu Activation
        -------------------------------------- */


        $(".dropdown-filter").on('click', function () {

            $(".explore__form-checkbox-list").toggleClass("filter-block");

        });

// about Testimonial slider
        var testimonial_slider = new Swiper('.testimonial-wrapper', {
            slidesPerView: 1,
            loop: true,
            speed: 1000,
            effect: 'fade',
            navigation: {
                nextEl: '.client-next',
                prevEl: '.client-prev',
            }
        });


    });


