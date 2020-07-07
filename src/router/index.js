import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '@/views/home'
import Login from '@/views/login' // 简写形式
import Nav from '@/views/nav' // 简写形式
import Navl from '@/views/navl' // 简写形式
import Qu from '@/views/qu' // 简写形式
import Suo from '@/views/suo' // 简写形式
import User from '@/views/user' // 简写形式

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
  },
  {
    path: '/qu',
    component: Qu
  },
  {
    path: '/suo',
    component: Suo
  },
  {
    path: '/user',
    component: User
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
