# 基于Vue3 + Typescriptd实现的综合项目，集成了一个自定义UI组件库，一个组件文档库（关联部署在github的文档节点），一个代码练习目录

## 一、Vue3对比Vue2的优势
  ### 性能的提升
  1. 打包大小减少41%
  2. 初次渲染快55%,更新渲染快133%
  3. 内存减少54%

  ### 拥抱TypeScript
  1. Vue3可以更好的支持TypeScript

  ### Composition API (组合API)
  1. setup配置
  2. ref与reactive
  3. watch与watchEffect
  4. provide与inject

## 二、学习概括
1. vuex
2. vue-router
3. 数据响应式原理
4. 双向数据绑定原理
5. Vue 数据代理
6. 前端网络请求各类方法f
7. Vue插件使用（全局定义mixins、directive、filters）
8. express + node 搭建后台服务器

## 三、相关文档地址
  1. [npm自定义组件库地址](https://www.npmjs.com/package/element-pei-vue3)
  2. [技术分享文档地址](https://zhuanlan.zhihu.com/p/579606010)
  3. [github项目地址](https://github.com/peiluu/Element-PEI-Vue3)

## 四、项目结构、
```
|--components  // 组件库代码
|--dist    //编译输出
|--node_modules     //npm包
|--src    //项目代码
  |--components    //项目公共组件
  |--config       //公共配置
  |--const     // 抽取常量
  |--hook         // 公共hooks
  |--pages  // 主包
    |--auth    //授权
    |--bindcard //绑卡
    |--card        //卡券
    |--dynamic//
    |--finddoctor  // 找医生
    |--home //首页
    |--inpatient //住院
    |--medicalrecord  //病历复印
    |--microsite  //微网站
    |--mycard  //电子健康卡
    |--pay    //支付
    |--queue //排队候诊
    |--recharge //就诊卡充值
    |--register    //挂号
    |--report //我的报告
    |--takeno //取号
    |--todo        //待办事项
    |--treat     //门诊缴费
    |--waiting    //支付等待
    |--webview
  |--pkg1  // 分包pkg1
    |--financialpayment  // 财务缴费
    |--numberquery // 号源助手
    |--surgery // 手术全流程
    |--survey // 问卷调查
    |--usercenter// 个人中心
    |--visualization // 可视化
  |--pkg2 // 分包pkg2
    |--financialpayment  // 财务缴费
    |--numberquery       // 号源助手
    |--surgery // 手术全流程
    |--survey // 问卷调查
    |--usercenter  // 个人中心
    |--visualization  // 可视化
  |--resources// 公共资源
  |--static  // 静态资源
  |--utils //工具类
  |--wxs
  |--app.config.ts // 公共配置文件
  |--app.scss  // 入口样式文件
  | --app.tsx    // 入口文件
  |--index.html //入 口文件
```
