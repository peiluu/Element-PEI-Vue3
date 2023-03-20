import axios from "axios";
import { ElMessage, ElMessageBox, ElLoading } from "element-plus";
import store from "../store";
import cookies from "@/utils/cookies";
import { baseURL } from "@/config";

// 创建axios实例

let loading = null;
const service = axios.create({
  baseURL, // api的base_url
  timeout: 60000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    // 加载接口时隐藏loading
    if (!config.hideLoading) {
      loading = ElLoading.service({
        lock: true,
        // text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
    }

    // 在请求发送之前做一些处理
    if (!/^https:\/\/|http:\/\//.test(config.url)) {
      const token = cookies.get("token");
      if (token && token !== "undefined") {
        // 让每个请求携带token-- ['Authorization']为自定义key
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    if (loading) {
      setTimeout(() => {
        loading.close();
      }, 1000);
    }

    /**
     * statusCode为非200是抛错
     */
    const res = response.data;
    if (res.statusCode !== 200) {
      ElMessage({
        message: res.message,
        type: "error",
        duration: 5 * 1000,
      });

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (
        res.statusCode === 50008 ||
        res.statusCode === 50012 ||
        res.statusCode === 50014
      ) {
        ElMessageBox.confirm(
          "你已被登出，可以取消继续留在该页面，或者重新登录",
          "确定登出",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning",
          }
        ).then(() => {
          store.dispatch("FedLogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      }
      return Promise.reject("error");
    } else {
      return res.data;
    }
  },
  (error) => {
    loading.close();
    console.log("err" + error); // for debug
    let message = error.message;
    // token错误或者token过期，退出返回首页，清除token信息
    if (error?.response?.status === 401) {
      window.location.replace("#/login");
      cookies.remove("token");
      message = "登录息已过期,请重新登录!";
    }
    ElMessage({
      message,
      type: "error",
      duration: 5 * 1000,
    });

    return Promise.reject(error);
  }
);

export default service;
