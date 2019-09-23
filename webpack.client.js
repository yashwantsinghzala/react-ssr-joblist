const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/client.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { target: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
