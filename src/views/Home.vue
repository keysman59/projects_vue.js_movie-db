<template>
  <div class="home">
    <movies></movies>
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
  created() {
    this.$store.dispatch('clearMovies');
    this.$store.dispatch('loadPopular');
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
   padding: 10px;
   background-color: skyblue;
}


</style>

