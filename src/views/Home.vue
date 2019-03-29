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
      this.$store.dispatch('loadPopular');
  }
}
</script>
