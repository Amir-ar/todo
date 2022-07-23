import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Personal from '../views/AboutView.vue'
import Work from '../views/WorkView.vue'
import Important from '../views/ImportantView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/important',
    name: 'Important',
    component: Important
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
