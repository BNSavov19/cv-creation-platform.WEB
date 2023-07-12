import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import Landing from '@/views/Landing.vue'
import Dashboard from '@/views/Dashboard.vue'
import Template1 from '@/components/cv-templates/Template1.vue'
import Template2 from '@/components/cv-templates/Template2.vue'
import Template3 from '@/components/cv-templates/Template3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
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
    {
      path: '/template1',
      name: 'template1',
      component: Template1
    },
    {
      path: '/template2',
      name: 'template2',
      component: Template2
    },
    {
      path: '/template3',
      name: 'template3',
      component: Template3
    },
  ]
})

export default router
