import { defineConfig } from "vite";
import qiankun from "vite-plugin-qiankun";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";

import vue from "@vitejs/plugin-vue";
import path, { join } from "path";
// import { resolve } from 'path'

// function resolve(dir) {
//   return join(__dirname, dir);
// }

import { resolve } from "path";

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};

console.log(path.resolve(__dirname, "./src/"));
export default defineConfig({
  // root: resolve(__dirname, './'),
  base: "/",
  publicDir: "public",
  cacheDir: ".vite",
  resolve: {
    alias: {
      // '@/ ':resolve('src/'),
      // "@/": path.resolve(__dirname, "src/"),

      "~": path.resolve(__dirname, "src/assets/"),
      "~@": path.resolve(__dirname, "src"),
      "@": pathResolve("src"),
    },
    dedupe: ["lodash"],
    conditions: ["es2015", "module", "browser"],
    // 自动配齐文件后缀
    extensions: [
      ".mjs",
      ".js",
      ".mts",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".vue",
      "scss",
      "sass",
    ],
    preserveSymlinks: false,
  },
  css: {
    modules: true,
    // css预处理器
    loaderOptions: {
      sass: {
        prependData: '@use "@/assets/style/element/index.scss" as *;',
      },
    },
    preprocessorOptions: {
      sass: {
        prependData: '@use "@/style/elementPlus/element-costom.scss" as *;',
      },
      scss: {
        // 定义全局的scss变量  // 给导入的路径最后加上 ;
        additionalData: '@use "@/styles/mixin.scss" as *;',
      },
    },
  },
  plugins: [
    // 添加如下代码，“subApp”与主应用中注册的名称一致
    qiankun("vue3App", { useDevMode: true }),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      // d
