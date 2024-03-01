const AutoImport = require("unplugin-auto-import/webpack");

const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const ElementPlus = require("unplugin-element-plus/webpack");z

const path = require("path");
const { defineConfig } = require("@vue/cli-service");

/**
 * @desption 获取文件的绝对路径地址
 * @param dir 文件地址
 */
const resolve = (dir) => {
  // __dirname用来动态获取当前文件模块所属目录的绝对路径
  return path.join(__dirname, dir);
};

/**
 * @desption 配置sass全局变量
 * @param ( 用于颜色、变量、 mixin 等 ) ，可以使用 sass-resources-loader去处理这类非js文件
 */
const globalSass = (config) => {
  const oneOfsMap = config.module.rule("scss").oneOfs.store;
  oneOfsMap.forEach((item) => {
    item
      .use("sass-resources-loader")
      .loader("sass-resources-loader")
      // 相对路径
      .options({ resources: "./src/styles/mixin.scss" })
      .end();
  });
};


module.exports =  defineConfig({
  // resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
  // 关闭自动lint校验
  lintOnSave: false,
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       // 自动导入定制化样式进行文件覆盖
  //       additionalData: `@use "@/styles/elementPlus/element-costom.scss" as *;`,
  //       prependData: `@import "@/styles/elementPlus/element-costom.scss";`, // 引入自定义主题样式
  //     },
  //   },
  // },
  // plugins: [
  //   ElementPlus({
  //     useSource: true,
  //   }),
  // ],
  transpileDependencies: true,
  // configureWebpack: {
  //   plugins: [
  //     AutoImport({
  //       // importStyle配置样式引入方式，自动引入修改主题色设置此属性
  //       resolvers: [ElementPlusResolver({ importStyle: "sass" })],
  //     }),
  //     Components({
  //       // importStyle配置样式引入方式，自动引入修改主题色设置此属性
  //       resolvers: [ElementPlusResolver({ importStyle: "sass" })],
  //     }),
  //     // ElementPlus({
  //     //   useSource: true,
  //     // }),
  //   ],
  // },

  // 打包出口文件
  // outputDir: 'build',
  /* chainWebpack 这个库提供了一个 webpack 原始配置的上层象，使其可以定义具名的 loader规则和具名插件，可以通过其提供的一些方法链式调用*/
  chainWebpack: (config) => {
    globalSass(config);
    config.resolve.extensions.add("ts").add("tsx").add("js").add("jsx");
    //直接修改配置 => 配置别，使用链式调用的方法进行配置
    config.resolve.alias["@asset"] = resolve("src/assets");
  },

  /*
    configureWebpack是调整webpack配置最简单的一种方式，可以新增也可以覆盖cLi中的配置
    可以是一个对象: 被 webpack-merge 合并到webpack 的设置中去。也可以是一个函数，
  */
  // configureWebpack: {
  //   resolve: {
  //     extensions: [".ts", ".tsx", ".js", ".json"],
  //   },
  //   // 配置文件访问别名
  //   // rules: [
  //   //   {
  //   //     test: /\.tsx?$/,
  //   //     loader: "ts-loader",
  //   //     exclude: /node_modules/,
  //   //     options: {
  //   //       appendTsSuffixTo: [/\.vue$/],
  //   //     },
  //   //   },
  //   // ],
  //   // alias: {
  //   //   "@asset": resolve("src/assets"),
  //   // },
  // },

  // configureWebpack: (config) => {
  //   config.resolve.alias["@asset"] = resolve("src/assets");
  // },
  devServer: {
    host: "localhost",
    port: 8090,
    open: true, // vue项目启动时自动打开浏览器
    proxy: {
      "/api": {
        // target: 'http://192.168.28.178:8762', //代理地址，这里设置的地址会代替axios中设置的baseURL。将/api前的域名代理为http://localhost:8081
        target: "http://localhost:8090",
        pathRewrite: { "/api": "/" }, // 重写/api , 这个 /api 已经在 pathRewrite 被替换掉了，接口就变成404
      },
      "/sendUser": {
        target: "http://localhost:8090",
        changeOrigin: true, //是否跨域
      },
    },
  },
});
