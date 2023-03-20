import { login, logout, getInfo } from "@/views/login/api";
import { getToken, setToken, removeToken } from "@/utils/auth";
import cookies from "@/utils/cookies";

import { setStore, getStore, removeStore } from "@/utils/store";
import { param2Obj } from "@/utils";
const user = {
  state: {
    token: getToken(),
    name: "",
    avatar: "",
    roles: [],
    isLock:
      getStore({
        name: "isLock",
      }) || false,
    lockPasswd:
      getStore({
        name: "lockPasswd",
      }) || "",
    browserHeaderTitle:
      getStore({
        name: "browserHeaderTitle",
      }) || "NxAdmin",
    userInfo: {},
  },

  mutations: {
    // SET_TOKEN: (state, token) => {
    //   state.token = token;
    // },
    // SET_NAME: (state, name) => {
    //   state.name = name;
    // },
    // SET_LOGIN_NAME: (state, loginName) => {
    //   state.loginName = loginName;
    // },
    // SET_ROLE_NAME: (state, roleName) => {
    //   state.roleName = roleName;
    // },
    // SET_AVATAR: (state, avatar) => {
    //   state.avatar = avatar;
    // },
    // SET_ROLES: (state, roles) => {
    //   state.roles = roles;
    // },
    // SET_LOCK_PASSWD: (state, lockPasswd) => {
    //   state.lockPasswd = lockPasswd;
    //   setStore({
    //     name: "lockPasswd",
    //     content: state.lockPasswd,
    //     type: "session",
    //   });
    // },
    // SET_LOCK: (state, action) => {
    //   state.isLock = true;
    //   setStore({
    //     name: "isLock",
    //     content: state.isLock,
    //     type: "session",
    //   });
    // },
    // CLEAR_LOCK: (state, action) => {
    //   state.isLock = false;
    //   state.lockPasswd = "";
    //   removeStore({
    //     name: "lockPasswd",
    //   });
    //   removeStore({
    //     name: "isLock",
    //   });
    // },
    SET_BROWSERHEADERTITLE: (state, action) => {
      state.browserHeaderTitle = action.browserHeaderTitle;
    },
    // 存储用户信息
    SET_USERINFO: (state, params) => {
      state.userInfo = {
        ...state.userInfo,
        ...params
      }
    },
  },

  actions: {
    // // 获取用户信息
    // GetInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token)
    //       .then((response) => {
    //         const data = response;
    //         if (data.roles && data.roles.length > 0) {
    //           // 验证返回的roles是否是一个非空数组
    //           commit("SET_ROLES", data.roles);
    //         } else {
    //           reject("getInfo: roles must be a non-null array !");
    //         }
    //         commit("SET_NAME", data.name);
    //         commit("SET_LOGIN_NAME", data.loginName);
    //         commit("SET_ROLE_NAME", data.roleName);
    //         commit("SET_AVATAR", data.avatar);
    //         resolve(response);
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });
    // },

    // 登出
    LogOut() {
      return new Promise((resolve, reject) => {
        const token = cookies.get("token");
        logout(token)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default user;
