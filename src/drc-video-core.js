var player = require("@dr/drc-video-core").PlayerFactory;

/* OnDemand Video Player */
var videoElement = document.getElementById('video-player');

var options = {
    videoElement: videoElement,
    slug: "kyst-til-kyst-iii-limfjorden-oest-6-8",
    // channel: dr1
};

var playerInstance = player.getPlayer(options);


