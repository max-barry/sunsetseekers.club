var $ = require("jquery");

// Randomise video
var init = function() {
    var vidId = Math.floor((Math.random() * 5) + 1);
    $("video").html('<source src="/video/' + vidId + '.mp4" type="video/mp4"></source>' );
};

init();

// Mousemove credit show
var to,
    $a = $("a");

var showCredits = function() {
    clearTimeout(to);
    $a.show();
    
    to = setTimeout(function(){
        $a.hide();
    }, 2000);
};

$("body").mousemove(showCredits);