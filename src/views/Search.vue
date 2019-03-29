<template>
  <div class="search">
    <div>
      <input type="text" v-model="searchQuery" @keypress.enter="search"  class="app__search">
    </div>
    <movies></movies>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from '../components/Movies';
import store from '../store';

const load = (to, from, next) => {
      const { query } = to.query;
      store.dispatch('clearMovies', query);
      store.dispatch('loadSearch', query);
      next();
}

export default {
  data() {
      return {
          searchQuery: '',
      }
  },
  components: {
    Movies
  },
  beforeRouteEnter: load,
  beforeRouteUpdate: load
}
</script>
