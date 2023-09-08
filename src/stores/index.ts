import { useTTLoginStore } from '@/stores/sign'
import { useTTBaseStore } from '@/stores/base'

// 回到登录页，清除sotre
export function resetSomeStoreWhenGoToLogin() {
  useTTLoginStore().$reset()
}

export { useTTLoginStore, useTTBaseStore }
