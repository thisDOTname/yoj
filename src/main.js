// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/index'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(Vuetify)

Vue.config.productionTip = false

console.log(' ::: STORE :--> ', store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
