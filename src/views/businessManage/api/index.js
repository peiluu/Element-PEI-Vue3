import request from "@/utils/request";
export function page(data) {
  return request({
    url: "/api/tax/taxsby/findEnterprise",
    method: "post",
    data,
  });
}

export function addObj(data) {
  return request({
    url: "/api/tax/taxsby/addEnterprise",
    method: "post",
    data,
  });
}

export function delObj(data) {
  return request({
    url: "/api/tax/taxsby/deleteEnterprise/" + data.id,
    method: "post",
  });
}

export function editObj(obj) {
  return request({
    url: "/api/tax/taxsby/updateEnterprise",
    method: "post",
    data: obj,
  });
}

// 修改企业状态
export function updateEnterpriseStatus(data) {
  return request({
    url: "/api/tax/taxsby/updateEnterpriseStatus/" + data.id,
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
