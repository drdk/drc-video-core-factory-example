var playerFactory = require("@dr/drc-video-core").PlayerFactory;

/* OnDemand Video Player */
var videoElement = document.getElementById('video-player');

var videoElement2 = document.getElementById('video-player-2');

var options = {
    videoElement: videoElement,
    slug: "kyst-til-kyst-iii-limfjorden-oest-6-8",
    // channel: dr1
};
var options2 = {
    videoElement: videoElement2,
    slug: "gintberg-pa-kanten-beredskabsstyrelsen-6-7",
    // channel: dr1
};

playerFactory.getPlayer(options, function(player) {
    console.log("use the player object");
});


playerFactory.getPlayer(options2, function(player) {
    console.log("use the player object");
});



