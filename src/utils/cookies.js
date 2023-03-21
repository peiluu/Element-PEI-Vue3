import Cookies from "js-cookie";



const cookies = {};
/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function (name = "default", value = "", cookieSetting = {}) {
  // cookie有效时间为1天
  let currentCookieSetting = {
    expires: 1,
  };

  Object.assign(currentCookieSetting, cookieSetting);
  Cookies.set(`taxcloud-${name}`, value, currentCookieSetting);
  // console.log(store)
  // const userInfo = {
  //   ...store.getters.userInfo,
  //   [name]: value
  // }

  // store.commit("SET_USERINFO", userInfo);
};

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function (name = "default") {
  return Cookies.get(`taxcloud-${name}`);
};

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function () {
  return Cookies.get();
};

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function (name = "default") {
  return Cookies.remove(`taxcloud-${name}`);
};

/**
 * @description 删除 所有cookie
 */
cookies.removeAll = function () {
  const allCookies = Cookies.get();
  for (let key in allCookies) {
    console.log(key);
    return Cookies.remove(key);
  }
};

export default cookies;
