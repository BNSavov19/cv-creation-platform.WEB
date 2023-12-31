import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import Landing from '@/views/Landing.vue'
import Dashboard from '@/views/Dashboard.vue'
import ResumeEditor from '@/views/ResumeEditor.vue'
import ChooseTemplate from '@/views/ChooseTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/resumes',
      name: 'resumes',
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
      path: '/resumes/create/templates',
      name: 'chooseTemplate',
      component: ChooseTemplate,
    },
    {
      path: '/resumes/:id/editor',
      name: 'editor',
      component: ResumeEditor
    },
  ]
})

export default router
