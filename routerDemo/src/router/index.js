import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dashbord from '@/view/dashbord/index'
import demo1 from '@/view/demo1'
import demo2 from '@/view/demo2'
import problem from '@/view/problem'
import jqueryTest from '@/view/jqueryTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashbord',
      component: dashbord
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/problem',
      name: 'problem',
      component: problem
    },
    {
      path: '/jquery',
      name: 'jqueryTest',
      component: jqueryTest
    }
  ]
})
