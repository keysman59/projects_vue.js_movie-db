<template>
  <div class="favorites">
    <p>{{ favorites }}</p>
    <movies></movies>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from '../components/Movies';
import store from '../store';
import { mapGetters } from 'vuex';

const load = (to, from, next) => {
      const { query } = to.query;
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
