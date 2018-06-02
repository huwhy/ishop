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
    }
  ]
})
