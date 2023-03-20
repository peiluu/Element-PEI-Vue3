import request from "@/utils/request";

/**
 * @desption 查询记账凭证
 */
export function page(data) {
  return request({
    url: "/api/tax/taxsby/findAccountVoucher",
    method: "post",
    data,
  });
}
/**
 * @desption 录入记账凭证
 */
export function addObj(data) {
  return request({
    url: "/api/tax/taxsby/addAccountVoucher",
    method: "post",
    data,
  });
}

/**
 * @desption 关联凭证
 */
export function relationVoucher(data) {
  return request({
    url: "/api/tax/taxsby/relationVoucher",
    method: "post",
    data,
  });
}
/**
 * @desption 删除记账凭证
 */
export function delObj(data) {
  return request({
    url: "/api/tax/taxsby/deleteAccountVoucher",
    method: "post",
    data,
  });
}
/**
 * @desption 修改记账凭证
 */
export function editObj(data) {
  return request({
    url: "/api/tax/taxsby/updateAccountVoucher",
    method: "post",
    data,
  });
}

/**
 * @desption 查询记账凭证详情
 */
export function findAccountVoucherDetail(data) {
  return request({
    url: "/api/tax/taxsby/findAccountVoucherDetail",
    method: "post",
    data,
  });
}

/**
 * @desption 查询记账凭证汇总信息
 */
export function AccountVoucherPool(data) {
  return request({
    url: "/api/tax/taxsby/AccountVoucherPool",
    method: "post",
    data,
  });
}

/**
 * @desption 获取行业业务场景
 */
export function findTaxMetierScene(data) {
  return request({
    url: "/api/tax/meSubject/findTaxMetierScene",
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
