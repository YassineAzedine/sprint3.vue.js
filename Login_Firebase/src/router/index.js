import Vue from 'vue'
import VueRouter from 'vue-router'
import sign from '../views/sign.vue'
import login from '../views/login.vue'
import forgot from '../views/forgot.vue'
import home from '../views/home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sign',
    component: sign
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: forgot
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },


  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
