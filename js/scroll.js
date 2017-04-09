$(document).ready(function () {
    // jQuery to collapse the navbar on scroll
    $(window).scroll(navScroll);

    $('.scrolling-btn').click(function () {
        var id = $(this).attr("data-id");
        $('html, body').animate({
            scrollTop: ($(id).offset().top)
        }, 750);
        return false;
    });

    $('.top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    navScroll();
    
    // hide .navbar first
    var navbar = $(".navbar");
    var splashDiv = $(".splash-div");
    var homeDiv = $(".home-div");
    navbar.hide();
    homeDiv.hide();
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            var wh = $(window).height();
            var nh = navbar.height();
            var dist = (wh - nh - splashDiv.height())/2;
            
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > dist) {
                $('.navbar').fadeIn();
                splashDiv.fadeOut();
            } else {
                $('.navbar').fadeOut();
                splashDiv.fadeIn();
            }
            
            var dist2 = ((wh*2) - nh - homeDiv.height())/2;
            if ($(this).scrollTop() > dist2){
                homeDiv.fadeIn();
            } else {
                homeDiv.fadeOut();
            }
        });
    });
});

function navScroll() {
    if ($(".navbar").offset().top > 75) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").removeClass("top-nav-collapse");
    }
}