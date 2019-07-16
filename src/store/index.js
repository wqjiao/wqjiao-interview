import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    searchInfor: {},
    needEng: false,
    baseInfor: {},
    packages: []
  },
  mutations: {
    setAppState (state, data) {
      state[data.attr] = data.result
    }
  },
  actions: {
  }
})

export default store
