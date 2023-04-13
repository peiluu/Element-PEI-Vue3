import queryString from "query-string";
/**
 * @description 输出工具类，es6模块化语法
 */

export const getCode = () => {
  // console.log("调用一次getCode函数");
};
export const setCode = () => {
  // console.log("调用一次setCode函数");
};
/**
 * 对象转键值对
 * @param json
 * @returns {*|number}
 */
export const jsonToQueryString = (json = {}) => {
  return queryString.stringify(json);
};

export const testPromise = () => {};
export const ExtAwait = () => {};

/**
 * 设置浏览器头部标题
 */
export const setTitle = function (title) {
  // title = title ? `${title}` : "NxAdmin";
  // window.document.title = title + "-nxAdmin";
  title = title ? `${title}` : "y自定义组件库";
  window.document.title = title;
};
