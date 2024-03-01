import { request } from "@/utils/request";

// 获取验证码
export async function getCaptcha() {
  return await request({
    url: "/api/auth/captcha",
    method: "get",
    hideLoading: true,
  });
}

// 注册
export function register(data) {
  return request({
    url: "/api/auth/jwt/register",
    method: "post",
    data,
  });
}

// 登录
export function login(data) {
  return request({
    url: "api/auth/jwt/token",
    method: "post",
    data,
  });
}

export function getInfo(token) {
  return request({
    url: "/user/info",
    method: "get",
    params: { token },
  });
}

// 登出
export function logout(token) {
  return request({
    url: "/api/auth/jwt/logout?token=" + token,
    method: "delete",
    // loading: {
    //   type: "loading",
    //   options: {
    //     fullscreen: true,
    //     lock: true,
    //     text: "正在退出...",
    //     spinner: "el-icon-loading",
    //     background: "rgba(0, 0, 0, 0.8)",
    //   },
    // },
  });
}
