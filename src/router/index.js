import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => { require(['@/pages/Index'], resolve) }
    },
    {
      path: '/index',
      component: resolve => { require(['@/pages/Index'], resolve) }
    },
    {
      path: '/category',
      component: resolve => { require(['@/pages/Category'], resolve) }
    },
    {
      path: '/category-items',
      component: resolve => { require(['@/pages/CategoryItems'], resolve) }
    },
    {
      path: '/item',
      component: resolve => { require(['@/pages/Items'], resolve) }
    },
    {
      path: '/item/:id(\\d+)',
      component: resolve => { require(['@/pages/Item'], resolve) }
    },
    {
      path: '/cart',
      component: resolve => { require(['@/pages/Cart'], resolve) }
    },
    {
      path: '/pay',
      component: resolve => { require(['@/pages/Pay'], resolve) }
    },
    {
      path: '/me',
      component: resolve => { require(['@/pages/Me'], resolve) }
    },
    {
      path: '/me/info',
      component: resolve => { require(['@/pages/MemberInfo'], resolve) }
    }
  ]
})
