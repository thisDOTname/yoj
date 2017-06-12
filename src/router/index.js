import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/auth/login/Login'
import Register from '@/modules/auth/register/Register'
import Board from '@/modules/dash/board/Board'

import store from '../store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/dash',
      name: 'Board',
      component: Board
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  var isLoggedIn = store.getters['auth/isLoggedIn']
  if (isLoggedIn) {
    if (to.path === '/') {
      next(false)
      next('/dash')
    } else if (to.name === 'Register') {
      store.dispatch('auth/logOutUser')
      next()
    } else {
      next()
    }
  } else {
    if (to.name !== 'Login' && to.name !== 'Logout' && to.name !== 'Register' && to.name !== 'Forgotpassword' && to.name !== 'Resetpassword') {
      next(false)
      next('/login')
    } else {
      next()
    }
  }
})

export default router
