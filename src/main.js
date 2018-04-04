// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import url from 'url'
import $ from 'jquery'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import BScroll from 'better-scroll'

Vue.config.productionTip = false
Vue.prototype.url= url
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
