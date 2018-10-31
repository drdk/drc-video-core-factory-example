var playerFactory = require("@dr/drc-video-core").PlayerFactory;

/* OnDemand Video Player */
var videoElement = document.getElementById('video-player');

var options = {
    videoElement: videoElement,
    slug: "kyst-til-kyst-iii-limfjorden-oest-6-8",
    // channel: dr1
};

playerFactory.getPlayer(options, function(player) {
    console.log("use the player object");
    player.on("play", function(evt){
        console.log("play was called");
    });
    player.play();
});


