<template>
  <div class="home">
    <movies :movies="movies"></movies>
    <div>
      <button @click="loadMore" class="home__load-more">Load More</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Movies from '../components/Movies';

export default {
  name: 'home',
  components: {
    Movies
  },
  data() {
    return {
      page: 1,
    }
  },
  created() {
    this.$store.dispatch('clearMovies');
    this.$store.dispatch('loadPopular');
  },
  methods: {
    loadMore() {
      this.$store.dispatch('incPage');
      this.$store.dispatch('loadPopular');
    },
  },
  computed: {
      ...mapGetters(['movies']),
  },
}
</script>

<style>

.home__load-more {
   padding: 0;
   border: none;
   font: inherit;
   color: inherit;
   background-color: transparent;
   cursor: pointer;
   @include button-reset;
   padding: 10px;
   background-color: skyblue;
}


</style>

