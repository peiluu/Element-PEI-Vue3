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

export const testPromise = () => { };
export const ExtAwait = () => { };

/**
 * 设置浏览器头部标题
 */
export const setTitle = function (title) {
  // title = title ? `${title}` : "NxAdmin";
  // window.document.title = title + "-nxAdmin";
  title = title ? `${title}` : "自定义demo";
  window.document.title = title;
};

/**
 * 根据原始常量枚举数据生成 list
 * @param {Object} constObj - 常量结构 { CHANG_LIANG: { label: 'Label', value: 'value' } }
 * @return {Array} constList 返回由 constObj 中每一项组成的数组
 * */
export function buildConstList(constObj) {
  const constList = [];
  for (let key in constObj) {
    constList.push(constObj[key]);
  }
  return constList;
}

/**
 * 根据原始常量枚举数据生成 map，方便通过 value 来快速查询对象
 * @param {Object} constObj - 常量结构 { CHANG_LIANG: { label: 'Label', value: 'value' } }
 * @return {Object} constMap 返回由 constObj 中 value 为 key 的对象
 * */
export function buildConstMap(constObj) {
  const constMap = {};
  for (let key in constObj) {
    constMap[constObj[key].value] = { ...constObj[key] };
  }
  return constMap;
}
