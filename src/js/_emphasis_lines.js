var $ = require("jquery");

var $target = $("em"),
    $emphasisLine = $(".emphasis_line"),
    $toLeftrange = $emphasisLine.filter(".emphasis_line__lower, .emphasis_line__frame").add(".frame");

var init = function() {
    // Initialise position of emphasis lines
    var winWidth = $(window).width(),
        offsetX = $target[0].getBoundingClientRect().left,
        offsetXEnd = offsetX + $target.width(),
        // Xvw = Math.round((offsetX / winWidth) * 100),
        // XEndvw = Math.round((offsetXEnd / winWidth) * 100);
        Xvw = (offsetX / winWidth) * 100,
        XEndvw = (offsetXEnd / winWidth) * 100;

    // console.log($target.offset());
    // console.log($target[0].getBoundingClientRect());

    $emphasisLine.filter(".emphasis_line__upper").css("left", Xvw + "vw");
    $toLeftrange.css("left", XEndvw + "vw");

};

module.exports = function(){ $(window).on("load", init); };