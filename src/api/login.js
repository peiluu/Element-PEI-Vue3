import request from '@/utils/request'

export function login(loginName, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      loginName,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'post',
    params: { token }
  })
}
