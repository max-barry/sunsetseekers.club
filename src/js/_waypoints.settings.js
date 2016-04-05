// Vendors
var $ = require("jquery");
require("waypoints/lib/noframework.waypoints.min");

// Custom variables
var $intro__header = $(".intro__header")[0],
    $intro = $(".intro");

var init = function() {
    new Waypoint({
        element: $intro__header,
        handler: function(dir) {
            $intro.addClass("--active__emphasis");
            this.destroy();
        },
        offset: 'bottom-in-view'
    });


    new Waypoint({
        element: $intro__header,
        handler: function(dir) {
            $intro.addClass("--active__second__emphasis");
            this.destroy();
        },
        offset: '20%'
    });

};

module.exports = init;