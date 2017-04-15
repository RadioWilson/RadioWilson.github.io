/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $('.scrolling-btn').click(function () {
        var id = $(this).attr("data-id");
        $('html, body').animate({
            scrollTop: ($(id).offset().top)
        }, 750);
        return false;
    });
});