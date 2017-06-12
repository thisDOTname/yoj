import Vuex from 'vuex'
import Vue from 'vue'
import authModule from './modules/auth'

// const localStorage = window.localStorage

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authModule
  },
  strict: true // Disable direct writes to the store, remove for production
})

export default store
