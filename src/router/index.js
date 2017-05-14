import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Header from '@/components/header/header'
import Menu from '@/components/menu/menu'
import Welfare from '@/components/welfare/welfare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welfare',
      component: Welfare
    },
    {
      path: '/welfare',
      name: 'Welfare',
      component: Welfare
    }
  ]
})
