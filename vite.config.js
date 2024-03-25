import { defineConfig } from "vite";

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';

import vue from "@vitejs/plugin-vue";
import path, { join } from "path";
// import { resolve } from 'path'

// function resolve(dir) {
//   return join(__dirname, dir);
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
        prependData: '@use "@/assets/style/element/index.scss" as *;'
      }
    },
    preprocessorOptions: {

      sass: {
        prependData: '@use "@/style/elementPlus/element-costom.scss" as *;'
      },
      scss: {
        // 定义全局的scss变量  // 给导入的路径最后加上 ;
        additionalData: '@use "@/styles/mixin.scss" as *;'

      },
    },
  },
  plugins: [
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      // dts: path.resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        ElementPlusResolver({
          importStyle: "scss",
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    vue(),
  ],
  server: {
    host: "localhost",
    port: 8000,
    mode: "development",
    strictPort: true,
    open: true,
    https: false,
    proxy: {},
    cors: true,
    sourcemapIgnoreList(sourcePath, sourcemapPath) {
      return sourcePath.includes("node_modules");
    },
    fs: {
      strict: true,
      allow: [".."],
      deny: [".env", ".env.*", "*.{crt,pem}"],
    },
  },
  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks: {
          vue: ["vue"],
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
