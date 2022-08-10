// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../../package.json").dependencies;

module.exports = {
  entry: "./index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote_react",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./HorizontalTimeline": resolve(
          __dirname,
          "../../src/components/HorizontalTimeline",
        ),
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: "18.2.0",
        },
      },
    }),
    new HtmlWebpackPlugin({ template: "index.html.ejs" }),
  ],
};
