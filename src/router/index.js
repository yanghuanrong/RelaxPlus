import { createRouter, createWebHashHistory } from 'vue-router'
import {data} from './data.json'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

data.map((item) => {
  const title = item.title.split(' ').reverse().join(' ')
  routes.push({
    path: item.routePath,
    name: item.componentName,
    meta: {
      title
    },
    component: () => import('@RelaxPlus/docs/' + item.fileName)
  })
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  const title = to.meta.title ? `${to.meta.title} - RelaxPlus` : `RelaxPlus`
  document.title = title
})

export default router
