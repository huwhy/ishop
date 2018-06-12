// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex'
import Vant from 'vant'
import '@/assets/vant/index.css'
import VueLazyLoad from 'vue-lazyload'
import ItemGroup from '@/components/ItemGroup'
import ItemBannerGroup from '@/components/ItemBannerGroup'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ItemList from '@/components/Item/ItemList'
import Cell from '@/components/Cell'

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(VueLazyLoad, {
  error: 'http://img.beeshop.vip/mifengyouhuo/mifengyouhuo.png',
  loading: 'http://img.beeshop.vip/mifengyouhuo/mifengyouhuo.png'
})

Vue.component('item-group', ItemGroup)
Vue.component('item-banner-group', ItemBannerGroup)
Vue.component('v-header', Header)
Vue.component('v-footer', Footer)
Vue.component('item-list', ItemList)
Vue.component('cell', Cell)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
