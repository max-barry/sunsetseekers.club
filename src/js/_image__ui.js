var $ = require("jquery");

var enterFirstState = function() {
    console.log("first state entered");
};

var init = function() {
    $("body").on("click", ".ugc", enterFirstState);
};

module.exports = init;