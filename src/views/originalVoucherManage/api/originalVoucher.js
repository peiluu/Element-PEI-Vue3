import request from "@/utils/request";

export function page(data) {
  return request({
    url: "/api/tax/taxsby/findOriginalVoucher",
    method: "post",
    data,
  });
}

export function addObj(data) {
  return request({
    url: "/api/tax/taxsby/addOriginalVoucher",
    method: "post",
    data,
  });
}

export function delObj(data) {
  return request({
    url: "/api/tax/taxsby/deleteOriginalVoucher",
    method: "post",
    data,
  });
}

export function editObj(obj) {
  return request({
    url: "/api/tax/taxsby/updateOriginalVoucher",
    method: "post",
    data: obj,
  });
}
/**
 * @despition 查询科目类别
 */
export function findParentTaxSubject() {
  return request({
    url: "/api/tax/meSubject/findParentTaxSubject",
    method: "post",
  });
}
/**
 * @despition 查询科目级联信息
 * */
export function findTaxSubjectCascade(id) {
  return request({
    url: "/api/tax/meSubject/findTaxSubjectCascade/" + id,
    method: "post",
  });
}

/**
 * @desption 获取行业业务场景
 */
export function findTaxMetierScene(obj) {
  return request({
    url: "/api/tax/meSubject/findTaxMetierScene",
    method: "post",
    data: obj,
  });
}

/**
 * @desption 获取原始凭证场景
 */
export function findVoucherRule(data) {
  return request({
    url: "/api/tax/taxsby/findVoucherRule",
    method: "post",
    data,
  });
}
