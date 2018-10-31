var webpack = require("webpack");

module.exports = {
  entry: {
    "drc-video-core": "./src/drc-video-core.js"
  },
  output: {
    path: "./dist/",
    filename: "js/player.dist.js",
    publicPath: "/dist/"
  },
  module: {
    loaders: []
  }
};