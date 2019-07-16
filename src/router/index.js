import Vue from 'vue'
import Router from 'vue-router'
import InterviewList from '@/pages/InterviewList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InterviewList',
      component: InterviewList
    }
  ]
})
