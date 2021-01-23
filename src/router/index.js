import { createRouter, createWebHashHistory } from 'vue-router'
import About from '@/views/About'
import Layout from '@/layout'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

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
Nprogress.configure({ showSpinner: false })
router.beforeEach((to, from) => {
  Nprogress.start()
  console.log(from)
  console.log(to)
  return true
})

router.afterEach(() => {
  Nprogress.done()
})

export default router
