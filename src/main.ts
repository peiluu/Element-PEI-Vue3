// 引入外部库
import { createApp } from "vue";
import { createI18n } from 'vue-i18n';

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/index.scss";
import * as ElIcons from "@element-plus/icons-vue";


// 绝对路径引入
// import "~/style/public.scss"; // 权限控制
// import "~/style/public.scss"; // global css
import router from "@/router";
import store from "@/store";

// 引入自定义插件
import plugin from '@/plugin/index';

// 引入自定义组件库
import ElementPeiVue3 from 'element-pei-vue3';
import 'element-pei-vue3/componentsdist/css/index.css';
//
// 相对路径引入
import '@/styles/elementPlus/element-costom.scss';
// import '@/styles/elementPlus/dark-css-vars.scss';

import App from "./App.vue";
import AppTest1 from "./AppTest.vue";
import en from './langurage/en';
import zh from './langurage/zh';
// import QuarterDatePicker from '@/components/QuarterDatePicker';

// src/main.js
const messages = {
  en,
  zh
}
// 。Vue I18 是 Vue.js 的国际化插件，它可以轻松地将一些本地化功能集成到应用程序中。
const i18n = createI18n({
  legacy: false,  // 设置为 false，启用 composition API 模式
  messages,
  locale: 'en'  // 设置默认语言
})

// 创建应用
// 创建多个应用，挂载在不同的节点上
const AppTest = createApp(AppTest1);
// AppTest.mount('#apptest')

const app = createApp(App);

// 添加全局对象上的属性和方法，后续在Vue实例里都能直接通过this访问
// app.config.globalProperties.$cookies = cookies;

// // 全局导入Icon
for (const iconName in ElIcons) {
  app.component(iconName, ElIcons[iconName]);
}
// app.component('QuarterDatePicker', QuarterDatePicker);
app.use(router).use(store).use(plugin, { store }).use(ElementPlus).use(ElementPeiVue3).use(i18n).mount("#app");
// app.use(router).use(store).use(plugin, { store }).use(ElementPlus).mount("#app");
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from 'vite-plugin-qiankun/dist/helper'

let instance = null;
function render(props = {}) {
  if (instance) return;
  const { container } = props;
  instance = createApp(App)
  // // instance.use(createPinia())
  instance.use(router)

  // // “subapp” 与 index.html中的id保持一致
  // // 脚手架搭建的项目index.html中的id名称一般都是"app"，与主应用相同，会造成子应用加载时找不到正确的容器，需要更改为其它名称
  // console.log((container.querySelector("#app")))
  instance.mount('#container')
  // instance.mount(container ? container.querySelector("#app") : "#app");
}

const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {
      console.log('微应用：bootstrap')
    },
    mount(props) {
      console.log('微应用：mount', props)
      render(props)
    },
    unmount(props) {
      console.log('微应用：unmount', props)
      instance = null
    },
    update(props) {
      console.log('微应用：update', props)
    },
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
