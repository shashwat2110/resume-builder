import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedData: []
  },
  mutations: {
    listFinalised(state, selectedData) {
      state.selectedData = selectedData
    }
  },
  getters: {
    selectedData: state => state.selectedData
  }
})