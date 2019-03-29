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
    page: 4,
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
    }
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setLoading(state, load) {
      state.loaded = load;
    },
    setNumberPage(state, page) {
      page++;
      state.page = page;
    }
  },
  actions: {
    async loadPopular({ commit }) {
      commit('setLoading', true);
      const response = await axios.get(`/movie/popular?api_key=${apiKey}&sort_by=popularity.desc&page=${this.page}`);
      // const response = await axios.get(`/movie/popular?api_key=${apiKey}&sort_by=popularity.desc&page=3`);      
      commit('setMovies', response.data.results);
      commit('setLoading', false);

    },
    async loadSearch({ commit }, query) {
      commit('setLoading', true);
      const response = await axios.get(`/search/movie?api_key=${apiKey}&query=${query}&sort_by=popularity.desc&page=1`);
      commit('setMovies', response.data.results);
      commit('setLoading', false);

    },
    loadMore({ commit }) {
      commit('setNumberPage');
      const response = await axios.get(`/movie/popular?api_key=${apiKey}&sort_by=popularity.desc&page=${this.page}`);
    }
  }
})
