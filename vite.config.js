

const AutoImport = require("unplugin-auto-import/webpack");

const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const ElementPlus = require("unplugin-element-plus/webpack");

const path = require("path");
const { defineConfig } = require("@vue/cli-service");

export default defineConfig({
  plugins: [
    Components({
      //1. 配置elementPlus采用洒洒水样式配色系统
      resolvers: [ElementPlusResolver({importStyle:"sass"})],
    }),
  ],
  css:{
    preprocessorOptions:{
      scss:{
        // 2.自动导入定制化样式文件进行样式覆盖
        additionalData:`
          @use "@/styles/element/index.scss" as *;
        `
      }
    }
  }
})
