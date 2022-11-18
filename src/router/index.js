import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/SettingTab.vue')
    },
    {
      path: '/page',
      name: 'page',
      component: () => import('../components/SalesPage.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainProd.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/OutGoing.vue')
    },
    {
      path: '/how_to',
      name: 'howTo',
      component: () => import('../views/HowTo.vue')
    }
  ]
})

export default router
