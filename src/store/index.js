import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//
const instance = axios.create({
	baseURL: "https://randomuser.me",
	timeout: 1000,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
    randomUsers: [],
    //
    filters: {
      //
      searchQuery: '',
    }
  },
  mutations: {
    DATA_RANDOM_USERS(state, data) {
      state.randomUsers = data
    }
  },
  actions: {
    //
    actionGetRandomUsers({ commit }) {
      //
      const getRandomUsers = instance.get('/api/?results=100&nat=us');

      //
      getRandomUsers.then((res) => {
        commit('DATA_RANDOM_USERS', res.data.results)

        //
        console.log(res.data.results);
      });
      
    }
  },
  getters: {
    filteredUsers: (state) => {
      //
      let users = state.randomUsers;
      let filteredUsers = [];
      let activeFilters = false;

      //
      if(state.filters.searchQuery.length > 1) {
        //
        activeFilters = true;

        //
        filteredUsers = users.filter(user => {
          //
          let userName = `${user.name.first} ${user.name.last}`.toLowerCase();

          //
          let inputText = state.filters.searchQuery.toLowerCase();

          //
          return userName.includes(inputText);
        });
      }

      //
      if(activeFilters) {
        return filteredUsers;

      } else {
        return users;
      }
    }
  }
});
