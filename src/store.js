import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const apiKey = '8b1ba17a17906dcbf4fb0c05e57bca15';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default new Vuex.Store({
  state: {
    movies: [],
    loaded: false,
    page: 1,
    favorites: [1,2],
  },
  getters: {
    movies(state) {
      return state.movies;
    },
    loaded(state) {
      return state.loaded;
    },
    numberPage(state) {
      return state.page;
    },
    favorites(state) {
      return state.favorites;
    }
  },
  mutations: {
    addFavorites(state, idFavorites) {
      state.favorites = state.favorites.push(idFavorites);
    },
    addMovies(state, movies) {
      state.movies = [ ...state.movies, ...movies ];
    },
    setLoading(state, load) {
      state.loaded = load;
    },
    clearMovies(state) {
        state.movies = [];
    },
    resetPage(state) {
        state.page = 1;
    },
    incPage(state) {
        state.page += 1;
    }
  },
  actions: {
    async loadPopular({ commit, state }) {
      commit('setLoading', true);
      const response = await axios.get(`/movie/popular?api_key=${apiKey}&sort_by=popularity.desc&page=${state.page}`);
      commit('addMovies', response.data.results);
      commit('setLoading', false);
      // console.log(response.data.results[0].id);
    },
    // async loadSearch({ commit, state }, query) {
      async loadSearch({ commit }, query) {
      commit('setLoading', true);
      const response = await axios.get(`/search/movie?api_key=${apiKey}&query=${query}&sort_by=popularity.desc&page=${state.page}`);
      console.log(state.page);
      console.log(response.data.results);
      console.log(query);
      commit('addMovies', response.data.results);
      commit('setLoading', false);
    },

    async loadIdFavorites({ commit, state }) {
      commit('setLoading', true);
      const response = await axios.get(`/movie/popular?api_key=${apiKey}&sort_by=popularity.desc&page=${state.page}`);
      commit('addMovies', response.data.results);
      commit('setLoading', false);
      commit('addFavorites', response.data.results[0].id);
      // console.log(response.data.results[0].id);
    },
    async incPage({ commit }) {
        return commit('incPage');
    },
    async clearMovies({ commit }) {
        commit('resetPage');
        return commit('clearMovies');
    },
  }
})