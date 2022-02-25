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
    favorites: [],
  },
  mutations: {
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
    },
    pushFavorites(state, movie) {
      state.favorites.push(movie);
  },    
  },
  actions: {
    async loadPopular({ commit, state }) {
      commit('setLoading', true);
      const response = await axios.get(`/movie/popular?api_key=${apiKey}&sort_by=popularity.desc&page=${state.page}`);
      commit('addMovies', response.data.results);
      commit('setLoading', false);
    },
    async loadSearch({ commit, state }, query) {
      commit('setLoading', true);
      const response = await axios.get(`/search/movie?api_key=${apiKey}&query=${query}&sort_by=popularity.desc&page=${state.page}`);
      commit('addMovies', response.data.results);
      commit('setLoading', false);
    },
    addFavorites({ commit, state }, index) {
      
      const movie = state.movies[index];
      const el = state.favorites.find(item => item.id == state.movies[index].id)
      console.log(el)
      if (!el) {
        commit('pushFavorites', movie);
      }
    },
    async incPage({ commit }) {
        return commit('incPage');
    },
    async clearMovies({ commit }) {
        commit('resetPage');
        return commit('clearMovies');
    },
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
})