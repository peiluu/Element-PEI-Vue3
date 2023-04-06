import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/layout/Layout";

/***
 * @description 页面路由配置
 */
export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "/taxclude/home",
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
    path: "/taxclude",
    component: Layout,
    meta: { title: "首页", icon: "home" },
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index"),
        meta: { title: "首页", icon: "home" },
      },
      // {
      //   path: "/chooseAccountSet",
      //   component: () => import("@/views/home/chooseAccountSet"),
      //   meta: { title: "账套选择", icon: "home" },
      //   hidden: true,
      // },
    ],
  },
   // 首页
   {
    path: "/taxclude",
    component: Layout,
    meta: { title: "首页", icon: "home" },
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index"),
        meta: { title: "首页", icon: "home" },
      },
      // {
      //   path: "/chooseAccountSet",
      //   component: () => import("@/views/home/chooseAccountSet"),
      //   meta: { title: "账套选择", icon: "home" },
      //   hidden: true,
      // },
    ],
  },
  // // 账套管理
  // {
  //   path: "/setManage",
  //   component: Layout,
  //   meta: { title: "账套管理", icon: "dashboard" },
  //   children: [
  //     {
  //       path: "list",

  //       component: () => import("@/views/setManage/index"),
  //       meta: { title: "账套管理", icon: "dashboard" },
  //     },
  //     {
  //       path: "detail",

  //       // 非菜单路由
  //       hidden: true,
  //       component: () => import("@/views/setManage/detail"),
  //       meta: { title: "账套详情", icon: "dashboard" },
  //     },
  //   ],
  // },
  // // 企业管理
  // {
  //   path: "/businessManage",
  //   component: Layout,
  //   meta: { title: "企业管理", icon: "dashboard" },
  //   children: [
  //     {
  //       path: "list",
  //       component: () => import("@/views/businessManage/index"),
  //       meta: { title: "企业管理", icon: "dashboard" },
  //     },
  //     {
  //       path: "detail",
  //       // 非菜单路由
  //       hidden: true,
  //       component: () => import("@/views/businessManage/detail"),
  //       meta: { title: "企业详情", icon: "dashboard" },
  //     },
  //   ],
  // },

  // // 设置管理
  // {
  //   path: "/settingManage",
  //   component: Layout,
  //   meta: { title: "设置管理", icon: "dashboard" },
  //   children: [
  //     {
  //       path: "/basic",
  //       meta: { title: "基础设置", icon: "dashboard" },
  //       // 三级菜单嵌套
  //       children: [
  //         {
  //           path: "subject",
  //           component: () =>
  //             import("@/views/settingManage/basic/subject/index"),
  //           meta: { title: "科目设置", icon: "dashboard" },
  //         },
  //         {
  //           path: "voucherRulesList",
  //           component: () =>
  //             import("@/views/settingManage/basic/voucherRules/index"),
  //           meta: { title: " 凭证规则设定", icon: "dashboard" },
  //         },
  //         {
  //           path: "voucherRulesDetail",
  //           hidden: true,
  //           component: () =>
  //             import("@/views/settingManage/basic/voucherRules/detail"),
  //           meta: { title: " 凭证规则详情", icon: "dashboard" },
  //         },
  //       ],
  //     },
  //     {
  //       path: "/rules",
  //       meta: { title: "规则设置", icon: "dashboard" },
  //       children: [
  //         {
  //           path: "helpCalManage",
  //           component: () =>
  //             import("@/views/settingManage/rules/helpCalManage/index"),
  //           meta: { title: "辅助核算设定", icon: "dashboard" },
  //         },
  //         {
  //           path: "helpCalManageDetail",
  //           hidden: true,
  //           component: () =>
  //             import("@/views/settingManage/rules/helpCalManage/detail"),
  //           meta: { title: " 辅助核算设定管理", icon: "dashboard" },
  //         },
  //       ],
  //     },
  //     {
  //       path: "/system",
  //       meta: { title: "系统设置", icon: "dashboard" },
  //       children: [
  //         {
  //           path: "operationLog",
  //           component: () =>
  //             import("@/views/settingManage/system/operationLog/index"),
  //           meta: { title: "操作日志", icon: "dashboard" },
  //         },
  //       ],
  //     },
  //   ],
  // },

  // // 账簿管理
  // {
  //   path: "/bookManage",
  //   component: Layout,
  //   meta: { title: "账簿管理", icon: "dashboard" },
  //   children: [
  //     {
  //       path: "generalLedger",
  //       component: () => import("@/views/bookManage/generalLedger/index"),
  //       meta: { title: "总账查询", icon: "dashboard" },
  //     },
  //     {
  //       path: "subjectBalanceTable",
  //       component: () => import("@/views/bookManage/subjectBalanceTable/index"),
  //       meta: { title: "科目余额表", icon: "dashboard" },
  //     },
  //     {
  //       path: "subLedgerQuery",
  //       component: () => import("@/views/bookManage/subLedgerQuery/index"),
  //       meta: { title: "明细账查询", icon: "dashboard" },
  //     },
  //   ],
  // },
  // // 结转结账
  // {
  //   path: "/carryingForward",
  //   component: Layout,
  //   meta: { title: "结转结账", icon: "dashboard" },
  //   children: [
  //     {
  //       path: "closing",
  //       component: () => import("@/views/carryingForward/closing/index"),
  //       meta: { title: "期末结账", icon: "dashboard" },
  //     },
  //     {
  //       path: "carryForward",
  //       component: () => import("@/views/carryingForward/carryForward/index"),
  //       meta: { title: "期末结转", icon: "dashboard" },
  //     },
  //   ],
  // },
  // // 报表查询
  // {
  //   path: "/reportQuery",
  //   component: Layout,
  //   meta: { title: "报表查询", icon: "dashboard" },
  //   children: [
  //     {
  //       path: "profitTable",
  //       component: () => import("@/views/reportQuery/profitTable/index"),
  //       meta: { title: "利润表", icon: "dashboard" },
  //     },
  //     {
  //       path: "assetsLiabilitiesTable",
  //       component: () =>
  //         import("@/views/reportQuery/assetsLiabilitiesTable/index"),
  //       meta: { title: "资产负债表", icon: "dashboard" },
  //     },
  //     {
  //       path: "cashFlowTable",
  //       component: () => import("@/views/reportQuery/cashFlowTable/index"),
  //       meta: { title: "现金流量表", icon: "dashboard" },
  //     },
  //   ],
  // },
  // // 原始凭证管理
  // {
  //   path: "/originalVoucherManage",
  //   component: Layout,
  //   meta: { title: "原始凭据管理", icon: "dashboard" },
  //   children: [
  //     {
  //       path: "invoiceList",
  //       component: () => import("@/views/originalVoucherManage/invoice/index"),
  //       meta: { title: "发票管理", icon: "dashboard" },
  //     },
  //     {
  //       path: "invoiceDetail",
  //       hidden: true,
  //       component: () => import("@/views/originalVoucherManage/invoice/detail"),
  //       meta: { title: "发票详情", icon: "dashboard" },
  //     },
  //     {
  //       path: "originalVoucherList",
  //       hidden: true,
  //       component: () =>
  //         import("@/views/originalVoucherManage/originalVoucher/index"),
  //       meta: { title: "原始凭证", icon: "dashboard" },
  //     },
  //     {
  //       path: "originalVoucherDetail",
  //       hidden: true,
  //       component: () =>
  //         import("@/views/originalVoucherManage/originalVoucher/detail"),
  //       meta: { title: "原始凭证详情", icon: "dashboard" },
  //     },
  //     {
  //       path: "originalCredentialList",
  //       component: () =>
  //         import("@/views/originalVoucherManage/originalCredential/index"),
  //       meta: { title: "其他原始凭据", icon: "dashboard" },
  //     },

  //     {
  //       path: "originalCredentialDetail",
  //       hidden: true,
  //       component: () =>
  //         import("@/views/originalVoucherManage/originalCredential/detail"),
  //       meta: { title: "原始凭据详情", icon: "dashboard" },
  //     },
  //     {
  //       path: "associatedVoucher",
  //       hidden: true,
  //       component: () =>
  //         import("@/views/originalVoucherManage/associatedVoucher"),
  //       meta: { title: "关联凭证", icon: "dashboard" },
  //     },
  //   ],
  // },
  // // 记账凭证管理
  // {
  //   path: "/bookKeepingVoucherManage",
  //   component: Layout,
  //   meta: { title: "记账凭证管理", icon: "dashboard" },
  //   children: [
  //     {
  //       path: "entry",
  //       component: () => import("@/views/bookKeepingVoucherManage/entry/index"),
  //       meta: { title: "录入记账凭证", icon: "dashboard" },
  //     },
  //     {
  //       path: "query",
  //       component: () => import("@/views/bookKeepingVoucherManage/query/index"),
  //       meta: { title: "查询记账凭证", icon: "dashboard" },
  //     },
  //     {
  //       path: "summary",
  //       component: () =>
  //         import("@/views/bookKeepingVoucherManage/summary/index"),
  //       meta: { title: "记账凭证汇总", icon: "dashboard" },
  //     },
  //   ],
  // },
];

export default createRouter({
  history: createWebHashHistory(),
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRouterMap],
});
