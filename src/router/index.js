import Vue from 'vue'
import Router from 'vue-router'
import Login from  '@/pages/Login'
import Welcome from '@/pages/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: {
        keepAlive: true
      }
    }
  ]
})
