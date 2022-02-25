<template>
  <div class="favorites">
    <movies :movies="favorites"></movies>
  </div>
</template>

<script>

import Movies from '../components/Movies';
import store from '../store';
import { mapGetters } from 'vuex';

const load = (to, from, next) => {
      const { query } = to.query;
      store.dispatch('clearMovies', query);
      store.dispatch('loadSearch', query);
      next();
}

export default {
  computed: {
      ...mapGetters(['favorites']),
  },
  components: {
    Movies
  },
  beforeRouteEnter: load,
  beforeRouteUpdate: load
}
</script>
