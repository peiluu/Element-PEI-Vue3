/**
 * 动态插入css
 */
export const loadStyle = (url) => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
};
/**
 * 设置浏览器头部标题
 */
export const setTitle = function (title) {
  // title = title ? `${title}` : "NxAdmin";
  // window.document.title = title + "-nxAdmin";
  title = title ? `${title}` : "云税务师记账平台";
  window.document.title = title;
};

/**
 * @desption - 根据传入的key，返回数组中对象的key的值组成的数组
 */
export const getArrayByKey = (arr, key) => {
  return arr.map((item) => item[key]);
};

/**
 * @desption - 获取最大最小值
 * @returns - [max, min]
 */
const getMaxMin = (arr, key) => {
  if (!arr.length > 0) return null;

  var max = parseFloat(arr[0][key]);
  var min = parseFloat(arr[0][key]);
  var interval;
  for (var i = 1; i < arr.length; i++) {
    var cur = parseFloat(arr[i][key]);
    max = cur > max ? cur : max;
    min = cur < min ? cur : min;
  }
  return [max, min];
};

const generateCoord = (max, min) => {
  if ((max || max === 0) && (min || min === 0)) {
    var interval;
    max = parseInt(max / 5) == max / 5 ? max : (parseInt(max / 5) + 1) * 5;
    min = min >= 0 ? parseInt(min / 5) * 5 : parseInt(min / 5 - 1) * 5;
    interval = (max - min) / 5;
    max = max > interval * 5 + min ? max : interval * 5 + min;
    return [max, min, interval];
  } else {
    return [100, -100, 20];
  }
};

/**
 * @desption - 根据传入的key，返回最大值最小值和间隔
 */
export const getMaxMinByKey = (arr, key) => {
  var maxMin = getMaxMin(arr, key);
  var max, min;
  if (maxMin) {
    max = maxMin[0];
    min = maxMin[1];
  }
  return generateCoord(max, min);
};

export const getMaxMinByKey2 = (arr, key1, key2) => {
  var maxMin1 = getMaxMin(arr, key1);
  var maxMin2 = getMaxMin(arr, key2);
  var max, min;
  if (maxMin1) {
    max = maxMin1[0];
    min = maxMin1[1];
    if (maxMin2) {
      max = max > maxMin2[0] ? max : maxMin2[0];
      min = min < maxMin2[1] ? min : maxMin2[1];
    }
  } else if (maxMin2) {
    max = maxMin2[0];
    min = maxMin2[1];
  }
  return generateCoord(max, min);
};
/**
 * @description 获取季度列表
 * @param number 倒推的年数，默认值为2
 */
export const getQuarterlyList = (number) => {
  const date = new Date();
  var year = date.getFullYear();
  const list = [];
  // 倒推之后的第一年
  const firstYear = year - (number || 2);
  const listMap = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
  };
  const push = (i, j) => {
    list.push({
      label: `${i}年第${j}季度`,
      value: `${i}-${j}`,
      time: `${i}${listMap[j]}季度`,
    });
  };
  // 获取季度数
  const quarter = Math.floor((date.getMonth() + 3) / 3);
  for (let i = firstYear; i <= year; i++) {
    for (let j = 1; j <= 4; j++) {
      // 如果是起始年份，只有当前季度往后的季度
      if (i === firstYear && j >= quarter) {
        push(i, j);
      }
      // 如果是起始年份，只有当前季度往前的季度
      else if (i === year && quarter >= j) {
        push(i, j);
      }
      // 如果是中间的年份，有完整的季度
      else if (i !== year && i !== firstYear) {
        push(i, j);
      }
    }
  }
  return list;
};

/**
 * @description 限制输入数字的位数
 */
export function limitNumTool(value, figure) {
  let str =
    (value)
      // 转成字符串
      .replace(/[^\d^\.]+/g, "")
      // 把不是数字，不是小数点的过滤掉
      .replace(/^0+(\d)/, "$1")
      // 第一位0开头，0后面为数字，则过滤掉，取后面的数字
      .replace(/^\./, ".") // 如果输入的第一位为小数点，则替换成 0.实现自动补全
      .match(/^\d*(\.?\d{0,2})/g)[0] || "";
  // 最终匹配得到结果 以数字开头，只有一个小数点，而且小数点
  if (str.indexOf(".") > -1) {
    // 小数后两位
    str = str.slice(0, Number(figure) + 3);
  } else {
    str = str.slice(0, figure);
  }

  return str;
}
