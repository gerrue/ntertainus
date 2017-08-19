import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/views/AppHome'
import AppSearch from '@/views/AppSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
  ]
})
