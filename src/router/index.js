import Vue from 'vue'
import VueRouter from 'vue-router'
import { logOut, verifyUserToken } from '../utils/common'; 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      verifyUserToken(to, from, next);
    }
  },
  {
    path: '/prizes/:id',
    name: 'PrizeDetail',
    component: () => import(/* webpackChunkName: "prize-detail" */ '../views/PrizeDetail.vue'),
    beforeEnter: (to, from, next) => {
      verifyUserToken(to, from, next);
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      logOut(next);
    }
  },
  {
    path: '/logout',
    redirect: '/login',
    beforeEnter: (to, from, next) => {
      logOut(next);
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "sign-up" */ '../views/Signup.vue'),
    beforeEnter: (to, from, next) => {
      logOut(next);
    }
  },
  {
    path: '/prizes',
    redirect: '/',
    beforeEnter: (to, from, next) => {
      verifyUserToken(to, from, next);
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
