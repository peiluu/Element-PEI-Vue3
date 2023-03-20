import request from "@/utils/request";


/**
 * @desption 获取科目列表
 */
export function page(data) {
  return request({
    url: "/api/tax/taxsby/findLedger",
    method: "post",
    data,
  });
}

/**
 * @desption 获取科目列表
 */
export function findTaxSubject(data) {
  return request({
    url: "/api/tax/meSubject/findTaxSubject",
    method: "post",
    data,
  });
}
