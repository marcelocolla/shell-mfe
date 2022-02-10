const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    path: __dirname + "/dist",
    uniqueName: "shell-mfe",
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shellMfe",
      filename: "remoteEntry.js",
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom",
        "./react-router-dom": "react-router-dom",
        "./@material-ui/core": "@material-ui/core",
        "./@material-ui/icons": "@material-ui/icons",
      },
    }),
  ],
};
