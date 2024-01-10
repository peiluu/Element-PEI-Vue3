/**
 * @description 根据输入的月份判断是哪一个季节
 */
export const whitchQuarter = (month) => {
  let quarter = "";
  month = Number(month);
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = "1";
      break;
    case 4:
    case 5:
    case 6:
      quarter = "2";
      break;
    case 7:
    case 8:
    case 9:
      quarter = "3";
      break;
    case 10:
    case 11:
    case 12:
      quarter = "4";
      break;
    default:
    // console.error('The entered time is incorrect');
  }
  return quarter;
};

// 季度时间判定
export const InitialTime = (val) => {
  let num = "";
  val = Number(val);
  switch (val) {
    case 1:
      num = "03";
      break;
    case 2:
      num = "06";
      break;
    case 3:
      num = "09";
      break;
    case 4:
      num = "12";
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
    return {};
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
  const currentMonth = defaultDate.getMonth() + 1;
  const currentYear = defaultDate.getFullYear();
  // 按月申报 1月的属期的是上年度12月
  const month = currentMonth == 1 ? 12 : currentMonth;
  const year = currentMonth == 1 ? currentYear - 1 : currentYear;
  // 按季度申报 1、2、3月的属期的是上年度第四季度(10月起)
  const quarterMonth = currentMonth < 4 ? 10 : currentMonth - 3;
  const quarterYear = currentMonth < 4 ? currentYear - 1 : currentYear;
  return {
    // 按月申报
    monthValue: `${year}${month < 10 ? "0" + month : month}`,
    formatMonthValue: `${year}-${month < 10 ? "0" + month : month}`,
    // 按季申报
    quarterValue: `${quarterYear}${InitialTime(whitchQuarter(quarterMonth))}`,
    formatQuarterValue: `${quarterYear}年${whitchQuarter(quarterMonth)}季度`,
  };
};
