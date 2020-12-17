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
  routes.push({
    path: item.routePath,
    name: item.componentName,
    component: () => import('@RelaxPlus/docs/' + item.fileName)
  })
})

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior () {
    return { top: 0 }
  },
  routes
})

export default router
