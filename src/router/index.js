import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/Index";

/***
 * @description 页面路由配置
 */
export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "/custom/home",
    hidden: true,
  },
  {
    path: "/login",
    component: () => import("@/views/login/Index.vue"),
    hidden: true,
    meta: { title: "登录" },
  },
  {
    path: "/register",
    component: () => import("@/views/login/register/Index.vue"),
    meta: { title: "注册" },
    hidden: true,
  },
  // 首页
  {
    path: "/custom",
    component: Layout,
    meta: { title: "首页", icon: "home" },
    children: [
      {
        path: "home",
        component: () => import("@/views/home/Index.vue"),
        meta: { title: "首页", icon: "home" },
      },
    ],
  },
  // 首页
  {
    path: "/algorithm",
    component: Layout,
    meta: { title: "算法实践" },
    children: [
      {
        path: "Index_20240128",
        component: () => import("@/views/algorithm/Index_20240228"),
        meta: { title: "算法实践_20240228" },
      },
      {
        path: "Index_20230319",
        component: () => import("@/views/algorithm/Index_20230319"),
        meta: { title: "算法实践_20230319" },
      },
      {
        path: "Index_20230320",
        component: () => import("@/views/algorithm/Index_20230320"),
        meta: { title: "算法实践_20230320" },
      },
      {
        path: "Index_20230321",
        component: () => import("@/views/algorithm/Index_20230321"),
        meta: { title: "算法实践_20230321" },
      },
      {
        path: "Index_20230414",
        component: () => import("@/views/algorithm/Index_20230414"),
        meta: { title: "算法实践_20230414" },
      },
      {
        path: "Index_20230418",
        component: () => import("@/views/algorithm/Index_20230418"),
        meta: { title: "算法实践_20230418" },
      },
      {
        path: "Index_20230420",
        component: () => import("@/views/algorithm/Index_20230420"),
        meta: { title: "算法实践_20230420" },
      },
      {
        path: "Index_20230421",
        component: () => import("@/views/algorithm/Index_20230421"),
        meta: { title: "算法实践_20230421" },
      },
      {
        path: "Index_20230424",
        component: () => import("@/views/algorithm/Index_20230424"),
        meta: { title: "算法实践_20230424" },
      },
      {
        path: "Index_20230609",
        component: () => import("@/views/algorithm/Index_20230609"),
        meta: { title: "算法实践_20230609" },
      },
      {
        path: "Index_20240108",
        component: () => import("@/views/algorithm/Index_20240108"),
        meta: { title: "算法实践_20240108" },
      },
      {
        path: "Index_20240118",
        component: () => import("@/views/algorithm/Index_20240118"),
        meta: { title: "算法实践_20240118" },
      },
    ],
  },
  // vue原理
  {
    path: "/vuexCharacteristic",
    component: Layout,
    meta: { title: "Vue特征" },
    children: [
      {
        path: "dataResponsive",
        component: () =>
          import("@/views/vuexCharacteristic/dataResponsive/Index.vue"),
        meta: { title: "数据响应式" },
      },
      {
        path: "defineproperty",
        component: () =>
          import("@/views/vuexCharacteristic/defineproperty/Index.vue"),
        meta: { title: "数据代理" },
      },
      {
        path: "vuerouter",
        component: () =>
          import("@/views/vuexCharacteristic/vuerouter/Index.vue"),
        meta: { title: "vuerouter" },
      },
      {
        path: "vuex",
        component: () => import("@/views/vuexCharacteristic/vuex/Index.vue"),
        meta: { title: "vuex" },
      },
      {
        path: "vuecomponent",
        component: () =>
          import("@/views/vuexCharacteristic/vuecomponent/Index.vue"),
        meta: { title: "vuecomponent" },
      },
      {
        path: "axiosRequest",
        component: () =>
          import("@/views/vuexCharacteristic/axiosRequest/Index.vue"),
        meta: { title: "axios请求" },
      },
      {
        path: "vue3",
        component: () => import("@/views/vuexCharacteristic/vue3/Index.vue"),
        meta: { title: "Vue3" },
      },
      {
        path: "vueBasic",
        component: () => import("@/views/vuexCharacteristic/vueBasic/Index.vue"),
        meta: { title: "vueBasic" },
      },
      {
        path: "VueModel",
        component: () =>
          import("@/views/vuexCharacteristic/vueModel/Index.vue"),
        meta: { title: "自定义组件model穿透" },
      },
    ],
  },

  // ES6
  {
    path: "/ES6",
    component: Layout,
    meta: { title: "ES6" },
    children: [
      {
        path: "basic",
        component: () => import("@/views/ES6/Index.vue"),
        meta: { title: "ES6 基础" },
      },
      {
        path: "generator",
        component: () => import("@/views/ES6/generator/Index.vue"),
        meta: { title: "generator" },
      },
      {
        path: "observer",
        component: () => import("@/views/ES6/observer/Index.vue"),
        meta: { title: "observer" },
      },
    ],
  },
  // TypeScript
  {
    path: "/typeScript",
    component: Layout,
    meta: { title: "TypeScript" },
    children: [
      {
        path: "basicType",
        component: () => import("@/views/typeScript/basicType"),
        meta: { title: "基础类型" },
      },
      // {
      //   path: "basicType",
      //   component: () => import("@/views/typeScript/basicType/Index.vue"),
      //   meta: { title: "类型断言" },
      // },
    ],
  },
  // Hooks实践
  {
    path: "/hooks",
    component: Layout,
    meta: { title: "Hooks实践" },
    children: [
      {
        path: "hooks",
        component: () => import("@/views/hooks/Index.vue"),
        meta: { title: "Hooks钩子" },
      },
      {
        path: "customeHooks",
        component: () => import("@/views/hooks/customeHooks"),
        meta: { title: "自定义Hooks" },
      },
    ],
  },
  // 设计模式
  {
    path: "/designPatterns",
    component: Layout,
    meta: { title: "设计模式" },
    children: [
      {
        path: "constructorMode",
        component: () => import("@/views/designPatterns/constructorMode"),
        meta: { title: "构造器模式" },
      },
      {
        path: "prototypeMode",
        component: () => import("@/views/designPatterns/prototypeMode"),
        meta: { title: "原型模式" },
      },
      {
        path: "factoryMode",
        component: () => import("@/views/designPatterns/factoryMode"),
        meta: { title: "工厂模式" },
      },
      {
        path: "abstractFactoryMode",
        component: () => import("@/views/designPatterns/abstractFactoryMode"),
        meta: { title: "抽象工厂模式" },
      },
      {
        path: "builderMode",
        component: () => import("@/views/designPatterns/builderMode"),
        meta: { title: "建造者模式" },
      },
      {
        path: "singletonPattern",
        component: () => import("@/views/designPatterns/singletonPattern"),
        meta: { title: "单例模式" },
      },
      {
        path: "decoratorMode",
        component: () => import("@/views/designPatterns/decoratorMode"),
        meta: { title: "装饰器模式" },
      },
      {
        path: "adapterMode",
        component: () => import("@/views/designPatterns/adapterMode"),
        meta: { title: "适配器模式" },
      },
      {
        path: "strategicMode",
        component: () => import("@/views/designPatterns/strategicMode"),
        meta: { title: "策略模式" },
      },
      {
        path: "proxyPattern",
        component: () => import("@/views/designPatterns/proxyPattern"),
        meta: { title: "代理模式" },
      },
      {
        path: "observerMode",
        component: () => import("@/views/designPatterns/observerMode"),
        meta: { title: "观察者模式" },
      },
      {
        path: "publishSubscriptionMode",
        component: () =>
          import("@/views/designPatterns/publishSubscriptionMode"),
        meta: { title: "发布订阅模式" },
      },
      {
        path: "bridgingMode",
        component: () => import("@/views/designPatterns/bridgingMode"),
        meta: { title: "桥接模式" },
      },
      {
        path: "iteratorMode",
        component: () => import("@/views/designPatterns/iteratorMode"),
        meta: { title: "迭代器模式" },
      },

      {
        path: "responsibilityChainMode",
        component: () =>
          import("@/views/designPatterns/responsibilityChainMode"),
        meta: { title: "职责链模式" },
      },
    ],
  },
  // 进阶课程
  {
    path: "/advancedTechniques",
    component: Layout,
    meta: { title: "进阶课程" },
    children: [
      {
        path: "Index_20231030",
        component: () => import("@/views/advancedTechniques/Index_20231030"),
        meta: { title: "Index_20231030" },
      },
      {
        path: "Index_20240109",
        component: () => import("@/views/advancedTechniques/Index_20231030"),
        meta: { title: "Index_20231030" },
      },
      // },
    ],
  },
  {
    path: "/questionDesign",
    component: Layout,
    meta: { title: "前端题库" },
    children: [
      {
        path: "Design_20240111",
        component: () => import("@/views/questionDesign/Design_20240111"),
        meta: { title: "树形节点搜索关键字返回路径" },
      },
      {
        path: "Design_20240118",
        component: () => import("@/views/questionDesign/Design_20240118"),
        meta: { title: "Design_20240118" },
      },
    ],
  },
  {
    path: "/tryComponentLibrary",
    component: Layout,
    meta: { title: "试用组件库" },
    children: [
      {
        path: "quarterDatePicker",
        component: () => import("@/views/tryComponentLibrary/Index.vue"),
        meta: { title: "试用组件库" },
      },
      // },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRouterMap],
});
