import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
class createPiniaFun {
  pinia: any
  constructor() {
    if (!this.pinia) {
      this.pinia = createPinia()
      this.pinia.use(piniaPluginPersistedstate)
    }
  }
}
export default new createPiniaFun().pinia
