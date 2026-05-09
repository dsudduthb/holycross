import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import OurParish from '../views/OurParish.vue'
import Staff from '../views/Staff.vue'
import Worship from '../views/Worship.vue'
import Give from '../views/Give.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/our_parish',
    name: 'Our Parish',
    component: OurParish
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff
  },
  {
    path: '/worship',
    name: 'Worship',
    component: Worship
  },
  {
    path: '/give',
    name: 'Give',
    component: Give
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router