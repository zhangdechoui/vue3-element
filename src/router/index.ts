import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/main/home.vue')
    },
    {
      path: '/bumen',
      name: 'bumen',
      component: () => import('@/components/main/bumen.vue')
    },
    {
      path: '/caidan',
      name: 'caidan',
      component: () => import('@/components/main/caidan.vue')
    },
    {
      path: '/juese',
      name: 'juese',
      component: () => import('@/components/main/juese.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/components/main/user.vue')
    },
    {
      path: '/yonghu',
      name: 'yonghu',
      component: () => import('@/components/main/yonghu.vue')
    },
    {
      path: '/user1',
      name: 'user1',
      component: () => import('@/components/main/user1.vue')
    },
    {
      path: '/user2',
      name: 'user2',
      component: () => import('@/components/main/user2.vue')
    },
    {
      path: '/gangwei',
      name: 'gangwei',
      component: () => import('@/components/main/gangwei.vue')
    }
  ]
})

export default router
