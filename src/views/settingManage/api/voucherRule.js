import request from "@/utils/request";
export function page(data) {
  return request({
    url: "/api/tax/taxsby/findVoucherRule",
    method: "post",
    data,
  });
}

export function addObj(data) {
  return request({
    url: "/api/tax/taxsby/addVoucherRule",
    method: "post",
    data,
  });
}

export function delObj(data) {
  return request({
    url: "/api/tax/taxsby/deletedVoucherRule",
    method: "post",
    data,
  });
}

export function editObj(obj) {
  return request({
    url: "/api/tax/taxsby/updateVoucherRule",
    method: "post",
    data: obj,
  });
}

// 修改状态
export function updateVoucherRuleStatus(data) {
  return request({
    url: "/api/tax/taxsby/updateVoucherRuleStatus/" + data.id,
    method: "post",
  });
}

/**
 * @despition 查询行业级联信息
 * */
export function findTaxMetierCascade() {
  return request({
    url: "/api/tax/meSubject/findTaxMetierCascade",
    method: "post",
  });
}

/**
 * @despition 查询行业业务场景
 */
export function findMetierScene(obj) {
  return request({
    url: "/api/tax/meSubject/findTaxMetierScene",
    method: "post",
    data: obj,
  });
}

/**
 * @despition 查询科目规则
 */
export function findTaxSubjectRule(obj) {
  return request({
    url: "/api/tax/meSubject/findTaxSubjectRule",
    method: "post",
    data: obj,
  });
}
