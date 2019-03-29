<template>
  <div class="search">
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
  components: {
    Movies
  },
  beforeRouteEnter: load,
  beforeRouteUpdate: load
}
</script>
