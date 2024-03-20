# 基于 Vue3 + Typescriptd 实现的综合项目，集成了一个自定义 UI 组件库，一个组件文档库（关联部署在 github 的文档节点），一个代码练习目录

## 一、Vue3 对比 Vue2 的优势

### 性能的提升

1. 打包大小减少 41%
2. 初次渲染快 55%,更新渲染快 133%
3. 内存减少 54%

### 拥抱 TypeScript

1. Vue3 可以更好的支持 TypeScript

### Composition API (组合 API)

1. setup 配置
2. ref 与 reactive
3. watch 与 watchEffect
4. provide 与 inject

## 二、学习概括

1. vuex
2. vue-router
3. 数据响应式原理
4. 双向数据绑定原理
5. Vue 数据代理
6. 前端网络请求各类方法 f
7. Vue 插件使用（全局定义 mixins、directive、filters）
8. express + node 搭建后台服务器

## 三、相关文档地址

1. [npm 自定义组件库地址](https://www.npmjs.com/package/element-pei-vue3)
2. [技术分享文档地址](https://zhuanlan.zhihu.com/p/579606010)
3. [github 项目地址](https://github.com/peiluu/Element-PEI-Vue3)

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
  |--views  // 主包
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
  |--resources// 公共资源
  |--static  // 静态资源
  |--utils //工具类
  |--wxs
  |--app.config.ts // 公共配置文件
  |--app.scss  // 入口样式文件
  | --app.tsx    // 入口文件
  |--index.html //入 口文件
```

## 五、代码 git commit 规范

### type 一般包含以下这些

1. feat: 新特性,新功能等等
2. fix: 修复 bug
3. docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等
4. style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
5. refactor: 代码重构，没有加新功能或者修复 bug
6. perf: 优化相关，比如提升性能、体验
7. test: 测试用例，包括单元测试、集成测试等
8. chore: 改变构建流程、或者增加依赖库、工具等
9. revert: 回滚版本
10. merge: 合并冲突

### scope 表示此次修改作用的范围,这个不同的项目不一样

### subject 这个 commit 的描述

## 六、开发注意事项

### 配置工具
1.  Vue3 项目可以采用 Vue-cli/Webpack 和 Vite 两种配置工具，目前主分支采用 Vue-cli/Webpack 配置,dev-vite 分支已经升级为 vite 配置
2.  Vue-cli 配置
    (1)
3.  Vite 配置
    (1) Vite 中不在需要 node-sass 和 sass-loader 等依赖搭配使用，只需要使用 sass 进行 css 样式管理
    (2) Vite 无法分析出动态 import 的类型, 因为它是以变量的形式,而不是字面量形式写的
    es6 的动态 import 不支持动态参数，可以使用 vite 提供的 glob 功能
