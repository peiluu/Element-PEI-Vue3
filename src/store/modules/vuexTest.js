import { logout } from "@/views/login/api";
import cookies from "@/utils/cookies";
const vuexTest = {
  state: {
    name: "",
    avatar: "",
    roles: [],
    computedNum: 0,
  },

  mutations: {
    vuexTestComputed: (state, computedNum) => {
      state.computedNum += computedNum
    },
    // 存储用户信息
    SET_USERINFO: (state, params) => {
      state.userInfo = {
        ...state.userInfo,
        ...params,
      };
    },
  },

  actions: {
    vuexTestComputed: ({ commit }, { computedNum }) => {
      commit("vuexTestComputed", computedNum);
    },
  },
};

export default vuexTest;
