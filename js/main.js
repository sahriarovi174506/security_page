(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    // Handle Menu on Sreen scrolling
    function MenuOnScrol() {
        const elementToModify = document.querySelector(".site_header");
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            if (scrollTop > lastScrollTop && lastScrollTop > 200) {
                elementToModify.classList.add("sticky");
            } else if (lastScrollTop < 210) {
                elementToModify.classList.remove("menu_up");
                elementToModify.classList.remove("sticky");
            } else {
                elementToModify.classList.remove("menu_up");
            }
            if (scrollTop > lastScrollTop) {
                elementToModify.classList.add("menu_up");
            }
            lastScrollTop = scrollTop;
        });
    }

    $(document).ready(function () {

        // header scroling
        MenuOnScrol()


        // Toggle Menu
        $('.navbar-toggler').click(function (e) {
            $('.navbar-collapse').toggleClass("show");
            setTimeout(function () {
                $('.navbar-collapse').toggleClass('fadein');
            }, 200);
            $(this).toggleClass("active");
            $('header').toggleClass("active");
        });



        // Timeline area
        $('.page_nav').click(function (event) {
            event.preventDefault();
            var clickedId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(clickedId).offset().top
            }, 1000); // Adjust the duration as needed
        });

        // Scroll function to update navigation based on scroll position
        $(window).scroll(function () {
            var scrollPosition = $(this).scrollTop();
            $('.timeline_textbox').each(function () {
                var top = $(this).offset().top - 100;
                var bottom = top + $(this).outerHeight();
                if (scrollPosition >= top && scrollPosition <= bottom) {
                    var id = $(this).attr('id');
                    $('.page_nav').removeClass('active');
                    $('#' + id + '_nav').addClass('active');
                    $('.page_navs').removeClass().addClass('page_navs').addClass(id);
                }
            });
        });

        // Optional: Highlight the active section when the page loads
        var scrollPosition = $(window).scrollTop();
        $('.timeline_textbox').each(function () {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            if (scrollPosition >= top && scrollPosition <= bottom) {
                var id = $(this).attr('id');
                $('.page_nav').removeClass('active');
                $('#' + id + '_nav').addClass('active');
                $('.page_navs').removeClass().addClass('page_navs').addClass(id);
            }
        });

    });

})(jQuery);