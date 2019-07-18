import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Detail from '@/pages/Detail'
import Question from '@/pages/Question'
import Answer from '@/pages/Answer'

Vue.use(Router)

export default new Router({
  routes: [
    // 题库首页
    {
      path: '/',
      name: 'List',
      component: List
    },
    // 查看列表
    {
      path: '/list',
      name: 'List',
      component: List
    },
    // 查看详情
    {
      path: '/detail/:type/:id',
      name: 'Detail',
      component: Detail
    },
    // 添加题目
    {
      path: '/add/question',
      name: 'Question',
      component: Question
    },
    // 添加答案
    {
      path: '/add/answer/:type/:id',
      name: 'Answer',
      component: Answer
    }
  ]
})
