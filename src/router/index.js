import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:type/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
