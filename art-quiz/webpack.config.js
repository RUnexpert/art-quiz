const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./js/index.js"),
  },
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  },
  devServer: {
    watchFiles: ["js/**/*.js"],
    static: [
      {
        directory: path.join(__dirname),
      },
      {
        directory: path.join(__dirname, "./dist"),
        publicPath: "/dist",
      },
    ],
  },
};
