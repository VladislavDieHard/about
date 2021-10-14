import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Apis from "../views/Apis";
import Projects from "../views/Projects";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/apis',
    name: 'apis',
    component: Apis
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
