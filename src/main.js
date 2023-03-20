// 引入外部库
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons-vue";

// 绝对路径引入
import "@/permission"; // 权限控制
import "@/styles/index.scss"; // global css
import router from "@/router";
import store from "@/store";
import plugins from "@/plugins";

import cookies from "@/utils/cookies";

// 相对路径引入
import App from "./App.vue";

const app = createApp(App);
// 添加全局对象上的属性和方法，后续在Vue实例里都能直接通过this访问
app.config.globalProperties.$cookies = cookies;

// 全局导入Icon
for (const iconName in ElIcons) {
  app.component(iconName, ElIcons[iconName]);
}

app.use(router).use(store).use(plugins).use(ElementPlus).mount("#app");
