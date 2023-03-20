import request from "@/utils/request";

// 查询辅助核算设定
export function findHelpCal(obj) {
  return request({
    url: "/api/tax/taxsby/findHelpCal",
    method: "post",
    data: obj,
  });
}
// 添加辅助核算设定
export function addHelpCal(obj) {
  return request({
    url: "/api/tax/taxsby/addHelpCal/" + obj.helpCalName,
    method: "post",
    data: obj,
  });
}
// 修改辅助核算设定
export function updateHelpCal(obj) {
  return request({
    url: "/api/tax/taxsby/updateHelpCal",
    method: "post",
    data: obj,
  });
}
// 删除辅助核算设定
export function deleteHelpCal(obj) {
  return request({
    url: "/api/tax/taxsby/deleteHelpCal/" + obj.id,
    method: "post",
    data: obj,
  });
}

// 添加辅助核算管理
export function addHelpCalManage(obj) {
  return request({
    url: "/api/tax/taxsby/addHelpCalManage",
    method: "post",
    data: obj,
  });
}

// 查询辅助核算管理
export function findHelpCalManage(obj) {
  return request({
    url: "/api/tax/taxsby/findHelpCalManage",
    method: "post",
    data: obj,
  });
}

// 修改辅助核算管理
export function updateHelpCalManage(obj) {
  return request({
    url: "/api/tax/taxsby/updateHelpCalManage",
    method: "post",
    data: obj,
  });
}

// 修改辅助核算管理状态
export function updateHelpCalManageStatus(obj) {
  return request({
    url: "/api/tax/taxsby/updateHelpCalManageStatus/" + obj.id,
    method: "post",
    data: obj,
  });
}
// 删除辅助核算管理
export function deleteHelpCalManage(obj) {
  return request({
    url: "/api/tax/taxsby/deleteHelpCalManage/" + obj.id,
    method: "post",
    data: obj,
  });
}
