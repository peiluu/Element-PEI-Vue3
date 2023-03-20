import request from '@/utils/request'

export function page(data) {
  return request({
    url: '/api/tax/meSubject/findTaxAccountingRule',
    method: 'post',
    data
  })
}

export function addObj(data) {
  return request({
    url: '/api/tax/meSubject/addTaxAccountingRule',
    method: 'post',
    data
  })
}

export function delObj(data) {
  return request({
    url: '/api/tax/meSubject/deleteTaxAccountingRule',
    method: 'post',
    data
  })
}

export function editObj(obj) {
  return request({
    url: '/api/tax/meSubject/updateTaxAccountingRule',
    method: 'post',
    data: obj
  })
}
/**
 * @despition 查询科目类别
 */
export function findParentTaxSubject() {
  return fetch({
    url: '/api/tax/meSubject/findParentTaxSubject',
    method: 'post'
  })
}
/**
 * @despition 查询科目级联信息
 * */
export function findTaxSubjectCascade(id) {
  return fetch({
    url: '/api/tax/meSubject/findTaxSubjectCascade/' + id,
    method: 'post'
  })
}

export function findMetierScene(obj) {
  return fetch({
    url: '/api/tax/meSubject/findTaxMetierScene',
    method: 'post',
    data: obj
  })
}
