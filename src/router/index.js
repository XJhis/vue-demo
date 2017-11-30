import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index'
import Detail from '../view/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Index
    },
    {
      path: '/job/:id',
      name: '详请页面',
      component: Detail
    }
  ]
})
