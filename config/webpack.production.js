const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const purgeCss = require("purgecss-webpack-plugin");
const glob = require("glob");
const path = require("path");

const PATH = {
  dist: path.resolve(__dirname, "dist"),
};

const config = {
  mode: "production",
  devtool: "source-map",

  output: {
    filename: "main.js",
    path: PATH.dist,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "resolve-url-loader",
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[name].[ext]",
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[name].[ext]",
            //publicPath: "../../",
          },
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      //filename: "assets/css/style.css",
      filename: "style.css",
    }),
    new purgeCss({
      paths: glob.sync(`${PATH.dist}/**/*`, { nodir: true }),
    }),
  ],
};

module.exports = merge.smart(common, config);
