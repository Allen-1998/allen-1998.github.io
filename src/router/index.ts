import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/pages/404.vue'
import Home from '@/pages/index.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
