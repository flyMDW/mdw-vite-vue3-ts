import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/routes'
import '@/style.css' // 第一引入css
import '@/configs/default.scss'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

dayjs.locale('zh-cn')
const ETCStore = createPinia()
ETCStore.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router).use(ETCStore)
app.mount('#app')
