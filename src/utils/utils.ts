import queryString from "query-string";
import { numberMap, slListMap } from '@/config/constant'
import moment from 'moment';
import { render } from 'nprogress';
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
  title = title ? `${title}` : "自定义demo0000";
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



const getUUID = function (len, radix) {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuid = [],
    i;
  radix = radix || chars.length;
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
};

const getFontFamily = function () {
  const agent = navigator.userAgent.toLowerCase();
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  if (isMac) {
    return {
      fontFamily: 'PingFangSC-Regular',
    };
  } else {
    return {
      fontFamily: 'Microsoft YaHei',
    };
  }
};

const formatNumber = function (num) {
  return (num + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
};

const notEmpty = (v) => {
  return v && v.length > 0;
};

const isEmpty = (v) => {
  return !notEmpty(v);
};

const formatResponse = function (code, msg, data) {
  return new Promise((resolve) => {
    const res = {
      code,
      msg,
      data,
    };
    resolve(res);
  });
};

/**
 * @description 格式化时间
 */
export function dateFormat(fmt, value) {
  let date = value ? new Date(value) : new Date();
  let ret;
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
      );
    }
  }
  return fmt;
}

/**
 * @desption - 获取最大最小值
 * @returns - [max, min]
 */
// const getMaxMin = (arr, key) => {
//   if (!arr.length > 0) return null;

//   var max = parseFloat(arr[0][key]);
//   var min = parseFloat(arr[0][key]);
//   var interval;
//   for (var i = 1; i < arr.length; i++) {
//     var cur = parseFloat(arr[i][key]);
//     max = cur > max ? cur : max;
//     min = cur < min ? cur : min;
//   }
//   return [max, min];
// };

// const generateCoord = (max, min) => {
//   if ((max || max === 0) && (min || min === 0)) {
//     var interval;
//     max = parseInt(max / 5) == max / 5 ? max : (parseInt(max / 5) + 1) * 5;
//     min = min >= 0 ? parseInt(min / 5) * 5 : parseInt(min / 5 - 1) * 5;
//     interval = (max - min) / 5;
//     max = max > interval * 5 + min ? max : interval * 5 + min;
//     return [max, min, interval];
//   } else {
//     return [100, -100, 20];
//   }
// };

// /**
//  * @desption - 根据传入的key，返回最大值最小值和间隔
//  */
// export const getMaxMinByKey = (arr, key) => {
//   var maxMin = getMaxMin(arr, key);
//   var max, min;
//   if (maxMin) {
//     max = maxMin[0];
//     min = maxMin[1];
//   }
//   return generateCoord(max, min);
// };

// export const getMaxMinByKey2 = (arr, key1, key2) => {
//   var maxMin1 = getMaxMin(arr, key1);
//   var maxMin2 = getMaxMin(arr, key2);
//   var max, min;
//   if (maxMin1) {
//     max = maxMin1[0];
//     min = maxMin1[1];
//     if (maxMin2) {
//       max = max > maxMin2[0] ? max : maxMin2[0];
//       min = min < maxMin2[1] ? min : maxMin2[1];
//     }
//   } else if (maxMin2) {
//     max = maxMin2[0];
//     min = maxMin2[1];
//   }
//   return generateCoord(max, min);
// };

/**
 * @desption - 根据传入的key，返回数组中对象的key的值组成的数组
 */
export const getArrayByKey = (arr, key) => {
  return arr.map((item) => item[key]);
};

/**
 * @desption - 根据传入的税率数据，返回处理后的税率描述
 */
export const getTaxDesc = (row) => {
  return row.sl == null
    ? ''
    : row.lslbs == 2 || (row.taxclasscode || '').substring(0, 1) == '6'
      ? '不征税'
      : row.lslbs == 1
        ? '免税'
        : row.sl * 100 + '%';
};

/**
 * @desption 数字金额转大写，支持负数
 */
export function numToCny(money) {
  //汉字的数字
  var cnNums = new Array(
    '零',
    '壹',
    '贰',
    '叁',
    '肆',
    '伍',
    '陆',
    '柒',
    '捌',
    '玖'
  );
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '圆';
  // 如果为负数
  var cnIntMinus = '负';
  // 负号处理后的数字
  var cash;
  //分离金额后用的数组，预定义
  var parts;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';

  // 判断空
  if (money == '') {
    return '';
  }
  // 判断正负
  if (money.charAt(0) === '-') {
    chineseStr += cnIntMinus;
    cash = money.slice(1);
  } else {
    cash = money;
  }
  // 转换为浮点数类型,会自动去掉首尾的0
  cash = parseFloat(cash);
  if (cash == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }

  // 转换为字符串
  cash = cash.toString();
  if (cash.indexOf('.') == -1) {
    integerNum = cash; //金额整数部分
    decimalNum = ''; //金额小数部分
  } else {
    parts = cash.split('.');
    integerNum = parts[0]; //金额整数部分
    decimalNum = parts[1].substr(0, 2); //金额小数部分
  }

  // 转换整数部分
  if (integerNum != '-' && parseInt(integerNum, 10) > 0) {
    var intLen = integerNum.length;
    var zero = 0; //标记零出现次数
    for (let i = 0; i < intLen; i++) {
      var intChar = integerNum.substr(i, 1);
      var intSlen = intLen - i - 1;
      var divided = intSlen / 4;
      var remain = intSlen % 4;

      if (intChar == '0') {
        zero++;
      } else {
        if (zero > 0) {
          chineseStr += cnNums[0];
        }
        zero = 0;
        chineseStr += cnNums[parseInt(intChar)] + cnIntRadice[remain];
      }
      if (remain === 0 && divided > 0) {
        chineseStr += cnIntUnits[divided];
      }
    }
    chineseStr += cnIntLast; //加上'元'字
  }

  if (decimalNum != '') {
    // 小数部分存在时
    var decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      var decChar = decimalNum.substr(i, 1);
      if (decChar != '0') {
        chineseStr += cnNums[parseInt(decChar)] + cnDecUnits[i];
      }
      if (decChar == '0' && parseInt(integerNum, 10) > 0) {
        chineseStr += cnNums[parseInt(decChar)] + cnDecUnits[i];
      }
    }
  } else {
    chineseStr += cnInteger;
  }
  return chineseStr;
}
/**
 * @description 获取当前月份的属期的xx： 格式比如： 2023年7月
//  * @param next 当前属期的后next月，默认值0
 */
export const getCurrentMonthSsq = () => {
  // 1月的属期的是上年度12月
  let now = new Date();
  let currentYear = now.getFullYear();
  let currentMonth = now.getMonth() + 1
  const month = currentMonth == 1 ? 12 : currentMonth;
  const year = currentMonth == 1 ? currentYear - 1 : currentYear;
  return {
    dateValue: `${year}${month < 10 ? '0' + month : month}`,
    dateValueLine: `${year}${month < 10 ? '-0' + month : '-' + month}`,
    dateLabel: `${year}年${month}月`,
  };
};

/**
 * @description 获取当前年份倒数n年的年份列表
 * @param n 倒数的年份, 默认值为5
 */
export const getCurrentYearList = (n) => {
  const yearNumber = n || 5;
  let now = new Date();
  let year = now.getFullYear();
  const list = [];
  for (let i = year; i > year - yearNumber; i--) {
    list.push(i);
  }
  return list;
};

/**
 * @description 获取当前年份倒数n年的年份
 * @param n 倒数的年份, 默认值为5
 */
export const getPreYearList = (nowYear, n) => {

  const yearNumber = n || 5;
  let now = new Date(nowYear);
  let year = now.getFullYear() - 1;
  const list = [];
  let index = 1;
  for (let i = year; i > year - yearNumber; i--) {

    list.push({
      label: `前${numberMap[index].label}年度（${i}年）`,
      propsKey: numberMap[index].propsKey
    });
    index++
  }
  return list;
};

/**
 * @description 下载文件
 */
export const downloadFile = (content, fileName) => {
  const blob = new Blob([content]);
  if ('download' in document.createElement('a')) {
    // 非IE下载
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
   //  navigator?.msSaveBlob(blob, fileName);
  }
};


/**
 * @description 根据输入的月份判断是哪一个季节
 */
export const whitchQuarter = (month) => {
  let quarter = '';
  month = Number(month);
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = '1';
      break;
    case 4:
    case 5:
    case 6:
      quarter = '2';
      break;
    case 7:
    case 8:
    case 9:
      quarter = '3';
      break;
    case 10:
    case 11:
    case 12:
      quarter = '4';
      break;
    default:
    // console.error('The entered time is incorrect');
  }
  return quarter;
};

// 季度时间判定
export const InitialTime = (val) => {
  let num = '';
  val = Number(val);
  switch (val) {
    case 1:
      num = '03';
      break;
    case 2:
      num = '06';
      break;
    case 3:
      num = '09';
      break;
    case 4:
      num = '12';
      break;
    default:
    // console.error('时间格式有误！');
  }
  return num;
};

/**
 * @description 按照年月转化为季度和月度
 * @param propsMonth 需要转化为的月份
 */
export const getCurrentDate = (propsMonth) => {
  if (!propsMonth) {
    return {}
  }
  // const defaultDate = new Date(moment(propsMonth))
  // const month = defaultDate.getMonth() + 1;
  // const year = defaultDate.getFullYear();
  // return {
  //   formatQuarterValue: `${year}年${whitchQuarter(month)}季度`,
  //   formatMonthValue: `${year}-${month < 10 ? '0' + month : month}`,
  //   monthValue: `${year}${month < 10 ? '0' + month : month}`,
  //   quarterValue: `${year}${InitialTime(whitchQuarter(month))}`,
  // };
};
/**
 * @description 获取当前的属期
 */
export const getCurrentSsq = () => {
  const defaultDate = new Date();
  const currentMonth = defaultDate.getMonth() + 1
  const currentYear = defaultDate.getFullYear();
  // 按月申报 1月的属期的是上年度12月
  const month = currentMonth == 1 ? 12 : currentMonth
  const year = currentMonth == 1 ? currentYear - 1 : currentYear;
  // 按季度申报 1、2、3月的属期的是上年度第四季度(10月起)
  const quarterMonth = currentMonth < 4 ? 10 : currentMonth - 3
  const quarterYear = currentMonth < 4 ? currentYear - 1 : currentYear;
  return {
    // 按月申报
    monthValue: `${year}${month < 10 ? '0' + month : month}`,
    formatMonthValue: `${year}-${month < 10 ? '0' + month : month}`,
    // 按季申报
    quarterValue: `${quarterYear}${InitialTime(whitchQuarter(quarterMonth))}`,
    formatQuarterValue: `${quarterYear}年${whitchQuarter(quarterMonth)}季度`,
    // 单季度 （第一季度）
    singleQuarter: `第${numberMap[whitchQuarter(month)].label}季度`,
  };
};

/**
 * @description 获取属期数组
 */
export const getssqArr = (ssq, tbzq) => {
  // 按月
  const formatSsq = moment(ssq).format('YYYY-MM');
  if (tbzq == '月') {
    return [formatSsq, formatSsq]
  } else {
    // 按季度，起始月份往前推2月
    const ssqStart = moment(ssq).subtract(2, "months").format("YYYY-MM");
    return [ssqStart, formatSsq]
    // 按季度
  }
};

/**
 * @description 获取税率代码对应的计算税率
 * @param slCode 税率代码 1 => 10% => 0.1
 */
// export const geComputedSl = (slCode) => {
//   return parseFloat(slListMap[slCode].replace('%', '') / 100)
// };

export {
  getUUID,
  getFontFamily,
  formatNumber,
  notEmpty,
  isEmpty,
  formatResponse,
};
