import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import Landing from '@/views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/auth/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/auth/register',
      name: 'regsiter',
      component: RegisterPage
    },
  ]
})

export default router
