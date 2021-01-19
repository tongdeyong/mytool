import { createRouter, createWebHashHistory } from 'vue-router'
import About from '@/views/About'
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/about',
    component: About,
    name: '关于我们'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
