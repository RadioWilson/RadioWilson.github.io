/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    var coverdist, aboutdist;

    function initializeDistances() {
        coverdist = $('#cover').height();
        aboutdist = coverdist + $('#about').height();
    }

    function onScroll(positionTop) {
        let fade = 1 - ((positionTop - coverdist) / ((aboutdist - coverdist) / 2));
        if (fade > 1) {
            $('#profile-picture').fadeTo(0, 1);
            $('#profile-picture').addClass("d-lg-flex");
            $('#profile-picture').removeClass("d-lg-none");    
        } else if (fade > 0) {
            $('#profile-picture').fadeTo(0, fade);
            $('#profile-picture').addClass("d-lg-flex");
            $('#profile-picture').removeClass("d-lg-none");
        } else {
            $('#profile-picture').addClass("d-lg-none");
            $('#profile-picture').removeClass("d-lg-flex");
        }
    }  

    $('.scrolling-btn').click(function () {
        var id = $(this).attr("data-id");
        var dist = $(id).offset().top + 1;
        $('html, body').animate({
            scrollTop: dist
        }, 500);
        return false;
    });

    $('.top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });

    initializeDistances();
    onScroll($(this).scrollTop());


    window.onresize = function (event) {
        initializeDistances();
    };
    
    $(window).scroll(function () {
        onScroll($(this).scrollTop());
    });

});