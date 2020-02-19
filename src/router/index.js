import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('auth-token')) next('/')
      else next()
    }
  },
  {
    path: '/editar',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "editar profile" */ '../views/Edit'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('auth-token')) next('/')
      else next()
    }
  },
  {
    path: '/cadastrar',
    name: 'Register',
    component: () => import(/* webpackChunkName: "cadastrar profile" */ '../views/Register')
  },
  {
    path: '/places',
    name: 'Places',
    component: () => import(/* webpackChunkName: "places" */ '../views/Places'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('auth-token')) next('/')
      else next()
    }
  }
]

const router = new VueRouter({
  routes
})

export default router