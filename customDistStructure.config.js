const path = require("path-browserify");

module.exports = {
  dist: {
    default: {
      path: "dist",
      name: "[name].[ext]",
    },
    images: {
      path: "dist/images",
      name: "[name].[ext]",
    },
  },
};
