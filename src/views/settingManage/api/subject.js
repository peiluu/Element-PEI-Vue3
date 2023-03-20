import request from '@/utils/request'

export function page (obj) {
  return request({
    url: '/api/tax/meSubject/findTaxSubject',
    method: 'post',
    data: obj
  })
}

export function addObj (obj) {
  return request({
    url: '/api/tax/meSubject/addTaxSubject',
    method: 'post',
    data: obj
  })
}

export function delObj (obj) {
  return request({
    url: '/api/tax/meSubject/deleteTaxSubject',
    method: 'post',
    data: obj
  })
}

export function editObj (obj) {
  return request({
    url: '/api/tax/meSubject/updateTaxSubject',
    method: 'post',
    data: obj
  })
}

/**
 * @despition 查询科目类别
 */
export function findParentTaxSubject () {
  return request({
    url: '/api/tax/meSubject/findParentTaxSubject',
    method: 'post'
  })
}

/**
 * @despition 查询科目级联信息
 * */
export function findTaxSubjectCascade (obj) {
  return request({
    url: '/api/tax/meSubject/findTaxSubjectCascade/' + obj.id,
    method: 'post'
  })
}

// 修改状态
export function updateTaxSubjectStatus(obj) {
  return request({
    url: "/api/tax/meSubject/updateTaxSubjectStatus/" + obj.id,
    method: "post",
  });
}
