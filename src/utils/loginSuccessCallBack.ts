import { setToken, removeAllAccountInfoAfterLoginOut } from '@/utils/auth'
import { useTTLoginStore } from '@/stores'

export async function loginSuccessCallBack(loginInfo: any) {
  console.log('loginSuccessCallBack', loginInfo)
  await removeAllAccountInfoAfterLoginOut()
  await setToken(loginInfo.sessionKey)
  await useTTLoginStore().setLoginInfo(loginInfo)
  await useTTLoginStore().getBaseDataByLangAsync()
}
