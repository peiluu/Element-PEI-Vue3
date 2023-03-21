/**
 * @description 金额单位列表
 */
export const unitList = [
  { label: "亿" },
  { label: "千" },
  { label: "百" },
  { label: "十" },
  { label: "万" },
  { label: "千" },
  { label: "百" },
  { label: "十" },
  { label: "元" },
  { label: "角" },
  { label: "分" },
];

/**
 * @description 原始凭据类型 - LIST格式
 */
export const noteTypeList = [
  { name: "白条", value: 0 },
  { name: "火车票", value: 1 },
  { name: "飞机票", value: 2 },
  { name: "合同", value: 3 },
  { name: "银行流水单", value: 4 },
  { name: "市内交通票", value: 5 },
];

/**
 * @description 原始凭据类型 - MAP格式
 */

const map = {};
noteTypeList.forEach((item) => {
  map[item.value] = item.name;
});

export const noteTypeMap = map;

