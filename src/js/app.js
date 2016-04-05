var $ = require("jquery");

var init = function() {
    var vidId = Math.floor((Math.random() * 5) + 1);
    $("video").html('<source src="/video/' + vidId + '.mp4" type="video/mp4"></source>' );

    // $("body").addClass("--unlock");
};

init();