const path = require("path");
const glob = require("glob");

// const VueLoaderPlugin = require('vue-loader/lib/plugin'); // Vue2
// Vue3
const { VueLoaderPlugin } = require("vue-loader");
// 提取css成单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 压缩css
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const list = {
  // card: './components/lib/card/index.js'
};
// 循环打包
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);

  files.forEach((item) => {
    const component = item.split(/[/.]/)[2];
    list[component] = `./${item}`;
  });
}

makeList("components", list);

// webpack 配置
module.exports = {
  entry: list,
  output: {
    filename: "[name].umd.js",
    // path: 'dist',
    path: path.resolve(__dirname, "componentsdist"),
    library: "vui",
    libraryTarget: "umd",
  },

  mode: "production",
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // path: path.resolve(__dirname, 'componentsdist'),
      // filename: 'css/index.css',
      filename: "css/[name].css",
    }),
    new OptimizeCssAssetsPlugin(),
  ],
  module: {
    // 对于什么样的文件使用什么样的loader
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          // {
          // 	// 压缩css
          // 	loader: 'postcss-loader',
          // 	options: {
          // 		ident: 'postcss',
          // 		plugins: () => [
          // 			// postcss的插件
          // 			// require("postcss-preset-env")(),
          // 		],
          // 	},
          // },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },
};
