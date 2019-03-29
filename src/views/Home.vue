<template>
  <div class="home">
    <div>
      <input type="text" v-model="searchQuery" @keypress.enter="search"  class="app__search">
    </div>
    <movies></movies>
    <div>
      <button @click="loadMore" class="home__load-more">Load More</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from '../components/Movies';

export default {
  name: 'home',
  components: {
    Movies
  },
  data() {
    return {
      page: 1
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
    // clearMovies() {
      
      // this.$store.dispatch('loadPopular');
    // },
    search() {
      this.$router.push(`/search?query=${this.searchQuery}`);
    },
  }
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

