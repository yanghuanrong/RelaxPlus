import { createRouter, createWebHistory } from 'vue-router'
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
