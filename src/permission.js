import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import cookies from "@/utils/cookies";
import { setTitle } from "@/utils/util";

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf("admin") >= 0) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some((role) => permissionRoles.indexOf(role) >= 0);
}
const whiteList = ["/login", "/register"]; // 不重定向白名单

// beforeEach类似于设计模式中的装饰器模式，在router的prototype上添加了前置函数
router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = cookies.get("token");
  if (token) {
    // 设置浏览器头部标题
    const browserHeaderTitle = to?.meta?.title;
    store.commit("SET_BROWSERHEADERTITLE", {
      browserHeaderTitle: browserHeaderTitle,
    });
    // 将企业和账套信息保存在响应式Vuex数据中
    store.commit("SET_USERINFO", {
      qyId: cookies.get("qyId"),
      qymc: cookies.get("qymc"),
      accountSetId: cookies.get("accountSetId"),
      accountSetName: cookies.get("accountSetName"),
    });
    /* has token*/

    // 未退出登录直接进入登录页面，强制回退首页
    if (to.path === "/login") {
      next({ path: "/custom/home" });
      NProgress.done(); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      next();
      if (store.getters.roles.length === 0) {
        store
          .dispatch("GetInfo")
          .then((res) => {
            // 拉取用户信息
            const roles = res.roles; // note: roles must be a array! such as: ['editor','develop']
            const funcMenus = res.funcMenus;
            store.dispatch("GenerateRoutes", { roles, funcMenus }).then(() => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
              next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            });
          })
          .catch((err) => {
            // store.dispatch("FedLogOut").then(() => {
            //   ElMessage.error(err || "Verification failed, please login again");
            //   next({ path: "/" });
            // });
          });
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next(); //
        } else {
          next({ path: "/401", replace: true, query: { noGoBack: true } });
        }
      }
    }
  } else {
    // 设置浏览器头部标题
    const browserHeaderTitle = to?.meta?.title;
    store.commit("SET_BROWSERHEADERTITLE", {
      browserHeaderTitle: browserHeaderTitle,
    });
    // 如果进入白名单页面，不需要鉴权，直接进入页面
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle;
    setTitle(browserHeaderTitle);
  }, 0);
});
