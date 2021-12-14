import service from '@/utils/request'

/*
 * 登录
 */

export const login = (data) => {
  return service({
    url: 'sys/login',
    method: 'post',
    data
  })
}

/*
 * 获取用户信息
 */

export const getUserInfo = (data) => {
  return service({
    url: '/sys/profile'
  })
}
