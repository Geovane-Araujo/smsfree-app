import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const SET_USER = ''
const SET_TOKEN = ''

export default new Vuex.Store({
  state: {
    user: {},
    token: ''
  },
  mutations: {
    [SET_USER] (state, payload) {
      state.user = payload
    },
    [SET_TOKEN] (state, payload) {
      state.token = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
