import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const instance = axios.create({
	baseURL: "https://randomuser.me",
	timeout: 1000,
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomUser: []
  },
  mutations: {
    DATA_RANDOM_USERS(state, data) {
      state.randomUsers = data
    }
  },
  actions: {
    actionGetRandomUsers({ commit }) {
      const getRandomUsers = instance.get('/api/?results=100&nat=us')
      getRandomUsers.then((res) => {
        commit('DATA_RANDOM_USERS', res.data.results)
      })
    }
  },
  modules: {
  }
})
