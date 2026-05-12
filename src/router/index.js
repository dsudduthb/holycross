import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import OurParish from '../views/OurParish.vue'
import Staff from '../views/Staff.vue'
import Worship from '../views/Worship.vue'
import Give from '../views/Give.vue'
import Kalendar from '../views/Kalendar.vue'

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
    path: '/leadership',
    name: 'Leadership',
    component: Staff
  },
  {
    path: '/worship',
    name: 'Worship',
    component: Worship
  },  
  {
    path: '/kalendar',
    name: 'Kalendar',
    component: Kalendar
  },
  {
    path: '/give',
    name: 'Give',
    component: Give
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router