import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/layout/Layout";

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
    component: () => import("@/views/login/index"),
    hidden: true,
    meta: { title: "登录" },
  },
  {
    path: "/register",
    component: () => import("@/views/login/register"),
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
        component: () => import("@/views/home/index"),
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
        path: "index_20230319",
        component: () => import("@/views/algorithm/index_20230319"),
        meta: { title: "算法实践_20230319", icon: "algorithm" },
      },
      {
        path: "index_20230320",
        component: () => import("@/views/algorithm/index_20230320"),
        meta: { title: "算法实践_20230320", icon: "algorithm" },
      },
      {
        path: "index_20230321",
        component: () => import("@/views/algorithm/index_20230321"),
        meta: { title: "算法实践_20230321", icon: "algorithm" },
      },
      {
        path: "index_20230414",
        component: () => import("@/views/algorithm/index_20230414"),
        meta: { title: "算法实践_20230414", icon: "algorithm" },
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
        component: () => import("@/views/vuexCharacteristic/dataResponsive"),
        meta: { title: "数据响应式" },
      },
      {
        path: "defineproperty",
        component: () => import("@/views/vuexCharacteristic/defineproperty"),
        meta: { title: "数据代理" },
      },
      {
        path: "vuerouter",
        component: () => import("@/views/vuexCharacteristic/vuerouter"),
        meta: { title: "vuerouter" },
      },
      {
        path: "vuex",
        component: () => import("@/views/vuexCharacteristic/vuex"),
        meta: { title: "vuex" },
      },
      {
        path: "vuecomponent",
        component: () => import("@/views/vuexCharacteristic/vuecomponent"),
        meta: { title: "vuecomponent" },
      },
      {
        path: "axiosRequest",
        component: () => import("@/views/vuexCharacteristic/axiosRequest"),
        meta: { title: "axios请求" },
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
        component: () => import("@/views/ES6"),
        meta: { title: "ES6 基础" },
      },
      {
        path: "generator",
        component: () => import("@/views/ES6/generator"),
        meta: { title: "generator" },
      },
      {
        path: "observer",
        component: () => import("@/views/ES6/observer"),
        meta: { title: "observer" },
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
        component: () => import("@/views/designPatterns/publishSubscriptionMode"),
        meta: { title: "发布订阅模式" },
      },
      {
        path: "bridgingMode",
        component: () => import("@/views/designPatterns/bridgingMode"),
        meta: { title: "桥接模式" },
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRouterMap],
});
