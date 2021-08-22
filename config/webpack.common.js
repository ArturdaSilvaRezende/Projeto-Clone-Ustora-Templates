const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const PATH = {
  dist: path.resolve(__dirname, "dist"),
};

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: PATH.dist,
  },

  devServer: {
    contentBase: PATH.dist,
    compress: true,
    port: 9001,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "produtos-unicos.html",
      template: "./src/produtos-unicos.html",
    }),
    new HtmlWebpackPlugin({
      filename: "carrinho.html",
      template: "./src/carrinho.html",
    }),
    new HtmlWebpackPlugin({
      filename: "shop.html",
      template: "./src/shop.html",
    }),
    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html",
    }),
    new HtmlWebpackPlugin({
      filename: "categoria.html",
      template: "./src/categoria.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contato.html",
      template: "./src/contato.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
  ],
};
