import { createStore } from "vuex";
import app from "./modules/app";
import user from "./modules/user";
import common from "./modules/common";
import getters from "./getters";
import fullScreen from "./modules/fullScreen";
import permission from "./modules/permission";
import tagsView from "./modules/tagsView";
import errorLog from "./modules/errorLog";
import vuexTest from "./modules/vuexTest";

const store = createStore({
  modules: {
    app,
    user,
    common,
    fullScreen,
    permission,
    tagsView,
    errorLog,
    vuexTest,
  },
  getters,
});

export default store;
