var $ = require("jquery"),
    screenfull = require("screenfull");

var $body = $("body");

var f11Fullscreen = function(e) {
    if (e.keyCode === 122) {
        $(window).off("keyup");
        e.preventDefault();
        goFullscreen();
    }
};

var goFullscreen = function(e) {
    screenfull.request();
};

var unlockClub = function() {
    setTimeout(function(){$body.addClass("--unlock");}, 150);
};

module.exports = function() {

    // DEBUG: TODO Remove
    $("img").on("click", function(){ $(this).toggleClass("feat"); });

    if (window.innerHeight != screen.height) {
        $("[data-fullscreen]").on("click", goFullscreen);
        $(window)
            .on("keyup", f11Fullscreen)
            .on(screenfull.raw.fullscreenchange, unlockClub);
    } else {
        unlockClub();
    }
};
