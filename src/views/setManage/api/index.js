import request from "@/utils/request";

export function findAccountSet(data) {
  return request({
    url: "/api/tax/taxsby/findAccountSet",
    method: "post",
    data,
  });
}

// 新增账套
export function addObj(data) {
  return request({
    url: "/api/tax/taxsby/addEnterpriseAccountSet",
    method: "post",
    data,
  });
}

export function delObj(data) {
  return request({
    url: "/api/tax/taxsby/deleteAccountSet/" + data.id,
    method: "post",
  });
}

export function editObj(obj) {
  return request({
    url: "/api/tax/taxsby/updateAccountSet",
    method: "post",
    data: obj,
  });
}
// 修改账套状态
export function updateAccountSetStatus(obj) {
  return request({
    url: "/api/tax/taxsby/updateAccountSetStatus/" + obj.id,
    method: "post",
  });
}

