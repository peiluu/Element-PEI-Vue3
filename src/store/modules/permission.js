import { constantRouterMap } from "@/router/index.js";
import Layout from "@/layout/Index";

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.indexOf(role) >= 0);
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter((route) => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
      console.log("state.routers", state.routers);
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { roles, funcMenus } = data;
        let accessedRouters = [];
        funcMenus.forEach((e) => {
          const curRouter = {};
          curRouter.path = e.menuUrl;
          curRouter.component = Layout;
          curRouter.name = e.menuName;
          curRouter.meta = { title: e.menuName, icon: e.menuIcon };
          let routerChildren = [];
          e.children.forEach((child) => {
            const routerChild = {};
            routerChild.path = "@/views"
              .concat(e.menuUrl)
              .concat(child.menuUrl);
            routerChild.name = child.menuName;
            routerChild.component = () =>
              /* @vite-ignore */
              import(`@/views${e.menuUrl}${child.menuUrl}`);
            // import.meta.glob(`@/views${e.menuUrl}${child.menuUrl}`)
            routerChild.meta = { title: child.menuName, icon: child.menuIcon };
            console.log("routerChild.component",  routerChild.component);
            routerChildren.push(routerChild);
            console.log(curRouter);
          });
          console.log(curRouter);

          accessedRouters.push(curRouter);
        });
        console.log("accessedRouters", accessedRouters);
        commit("SET_ROUTERS", accessedRouters);
        resolve();
      });
    },
  },
};
// console.log(permission);
export default permission;
