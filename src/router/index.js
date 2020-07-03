import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '@/views/home'
import Login from '@/views/login' // 简写形式
import Nav from '@/views/nav' // 简写形式
import Navl from '@/views/navl' // 简写形式

// import indexsuo from '../views/nav/indexsuo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
    // children: [
    //   {
    //     path: '',
    //     component: shi
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
    // name: 'login'
  },
  {
    path: '/nav',
    component: Nav
  },
  {
    path: '/navl',
    component: Navl
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
