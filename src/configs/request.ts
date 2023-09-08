import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// import store from '@/store'
import { getToken, removeAllAccountInfoAfterLoginOut } from '@/utils/auth'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 20000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (config.headers) {
      config.headers['Authorization'] = getToken() || ''
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code === -1 || res.code === -101) {
      //to re-login
      ElMessageBox.alert(res.msg, 'Login failure', {
        confirmButtonText: 'Re-login',
        type: 'error',
        center: true,
      }).then(() => {
        removeAllAccountInfoAfterLoginOut()
        // router.replace({name: 'Login'})  //跳转不完全，没有跟新动态组件，需要刷新页面。
        window.location.reload()
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    } else if (res.code !== 0) {
      ElMessage({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000,
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res.data
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    ElMessage({
      message: 'System busy',
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

function request<T>(config: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    service
      .request<T>(config)
      .then((res) => {
        resolve(res as T)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default request
