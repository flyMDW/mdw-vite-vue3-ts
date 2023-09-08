import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useTTLoginStore } from '@/stores/index'
const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Index',
  },
  {
    path: '/Index',
    name: 'Index',
    component: () => import('@/views/HelloWord.vue'),
  },
  // {
  //   path: '/back',
  //   name: 'back',
  //   component: () => import('@/views/backMain.vue'),
  //   children: [
  //     {
  //       path: 'Schedule',
  //       name: 'Schedule',
  //       meta: {
  //         needToken: true,
  //       },
  //       component: () => import('@/views/homePage.vue'),
  //     },
  //   ],
  // },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: defaultRoutes,
})

router.beforeEach(async (to: any) => {
  // 路由不存在，返回首页
  if (!router.hasRoute(to.name)) {
    return {
      name: 'Index',
    }
  }
  const { loginInfo } = useTTLoginStore()
  if (!loginInfo?.id) {
    // 未登录
    if (!to.meta.needToken) {
      // 不需要登录，可直接访问
      return true
    } else {
      // 需要登录，返回登录
      // await ElMessageBox.alert("You haven't logged in yet. Please log in", 'Tip', {
      //   confirmButtonText: 'comfirm',
      //   type: 'error',
      //   closeOnClickModal: false,
      //   closeOnPressEscape: false,
      //   autofocus: false,
      //   showClose: false,
      // })
      // return {
      //   name: 'Login',
      //   query: { redirect: to.name, query: JSON.stringify(to.query) },
      // }
    }
  } else {
    return true
  }
})

router.afterEach((to: any) => {
  // ...
})
