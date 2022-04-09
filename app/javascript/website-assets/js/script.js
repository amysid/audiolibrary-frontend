﻿$(function () {
    $("#carousel-multiple").on("slide.bs.carousel", function (e) {
        var itemsPerSlide = parseInt($(this).attr('data-maximum-items-per-slide')),
        totalItems = $(".carousel-item", this).length,
        reserve = 1, //do not change
        $itemsContainer = $(".carousel-inner", this),
        it = itemsPerSlide + reserve - (totalItems - e.to);

        if (it > 0) {
            for (var i = 0; i < it; i++) {
                if (window.CP.shouldStopExecution(0)) break;
                $(".carousel-item", this).
                eq(e.direction == "left" ? i : 0)
                // append slides to the end/beginning
                .appendTo($itemsContainer);
            } window.CP.exitedLoop(0);
        }
    });
});

$(function () {
    $("#carousel-multiple-recently").on("slide.bs.carousel", function (e) {
        var itemsPerSlide = parseInt($(this).attr('data-maximum-items-per-slide')),
        totalItems = $(".carousel-item", this).length,
        reserve = 1, //do not change
        $itemsContainer = $(".carousel-inner", this),
        it = itemsPerSlide + reserve - (totalItems - e.to);

        if (it > 0) {
            for (var i = 0; i < it; i++) {
                if (window.CP.shouldStopExecution(0)) break;
                $(".carousel-item", this).
                eq(e.direction == "left" ? i : 0)
                // append slides to the end/beginning
                .appendTo($itemsContainer);
            } window.CP.exitedLoop(0);
        }
    });
});
//# sourceURL=pen.js