import Cookies from 'js-cookie'

import { resetSomeStoreWhenGoToLogin } from '@/stores'

const TokenKey = 'Authorization'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeStorage() {
  return window.localStorage.clear()
}

/**
 * 退出登录，清除账号信息
 */
export function removeAllAccountInfoAfterLoginOut() {
  // 删除token
  removeToken()
  // 删除 相关 storage
  removeStorage()
  // 删除 相关 store
  resetSomeStoreWhenGoToLogin()
}