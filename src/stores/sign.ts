import { defineStore } from 'pinia'
import { LoginInfo, UserInfo } from '@/types'

interface TTLoginStoreState {
  needReload: boolean
  [prop: string]: any
  loginInfo: LoginInfo | null
  userInfo: UserInfo | null
}

export const useTTLoginStore = defineStore('TTLoginStore', {
  state: () => {
    const ttLoginStoreState: TTLoginStoreState = {
      loginInfo: null,
      userInfo: null,
      needReload: false,
    }

    return ttLoginStoreState
  },
  persist: {
    key: 'TTLoginStore',
  },
  getters: {},
  actions: {
    setLoginInfo(loginInfo: any) {
      this.loginInfo = loginInfo
    },
    setNeedReload(bol: boolean) {
      this.needReload = bol
    },
    async getUserInfoAsync() {
      await 'getUserInfoFunction'
    },
  },
})
